import React from 'react';
import './box-title.css';

const TitleBox = ({ title }) => {
    return (
        <div className="title-box-container">
          <div className="title-box">
            <h2>{title}</h2>
          </div>
        </div>
      );
    };

export default TitleBox;
