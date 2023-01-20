import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const data = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const result = await data.json();
      if (result) {
        setData(result);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch {
      console.log("ERROR");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
