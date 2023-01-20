import { Link } from "react-router-dom";

import "./card.scss";

function Card({ img, title, date, id, summary }) {
  const year = date.substring(0, 4),
    unformattedMonth = date.substring(5, 7),
    day = date.substring(8, 10);
  let month = "";

  switch (unformattedMonth) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default:
      break;
  }
  return (
    <div className="card">
      <img src={img} alt="" className="card__images" />
      <div className="card__text">
        <p className="card__text--date">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.66675H3.99998C2.52722 2.66675 1.33331 3.86066 1.33331 5.33341V12.0001C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12.0001V5.33341C14.6666 3.86066 13.4727 2.66675 12 2.66675Z"
              stroke="#363636"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.33331 1.33337V4.00004"
              stroke="#363636"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6666 1.33337V4.00004"
              stroke="#363636"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.33331 6.66675H14.6666"
              stroke="#363636"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {day}th {month}, {year}
        </p>
        <h3 className="card__text--h3">{title}</h3>
        <p className="card__text--p">{summary}</p>
        <button className="card__text--btn">
          <Link to={`news/${id}`}>Read more</Link>
          <svg
            className="svg__right"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z"
              fill="#363636"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
