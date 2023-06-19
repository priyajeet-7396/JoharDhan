import React from 'react';
import { MdWatchLater } from 'react-icons/md';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import './Date.css'; // Importing the CSS file

const Date = () => {
  return (
    <div className="green-bordered-container">
      <div className="info-section">
        <div className="icon-text">
          <MdWatchLater size={24} />
          <span>10:30 AM to 04:30 PM </span>
        </div>
        <h2 className="component-heading">Programme - Day-1</h2>
        <div className="icon-text">
          <BsFillCalendarCheckFill size={24} />
          <span>Friday,14th July 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Date;
