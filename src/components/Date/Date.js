import React from 'react';
import { MdWatchLater } from 'react-icons/md';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import './Date.css'; // Importing the CSS file

const Date = ({ time, heading , day}) => {
  return (
    <div className="green-bordered-container">
      <div className="info-section">
        <div className="icon-text">
          <MdWatchLater size={24} />
          <span>{time} </span>
        </div>
        <h2 className="component-heading">{heading}</h2>
        <div className="icon-text">
          <BsFillCalendarCheckFill size={24} />
          <span> {day} </span>
        </div>
      </div>
    </div>
  );
};

export default Date;




// const Date = ({ time, heading, dateIcon, date }) => {
//   return (
//     <div className="green-bordered-container">
//       <div className="info-section">
//         <div className="icon-text">
//         <MdWatchLater size={24} />
//           <span>{time}</span>
//         </div>
//         <h2 className="component-heading">{heading}</h2>
//         <div className="icon-text">
//         <BsFillCalendarCheckFill size={24} />
//           <span>{date}</span>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Date;
