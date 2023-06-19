import React from 'react';
import './KeyActivity.css';

const KeyActivity = ({ title, paragraph, items }) => {
  return (
    <div className="green-box-container">
      <div className="green-box">
        <h2 className="title">{title}</h2>
        <p className="paragraph">{paragraph}</p>
        <ul className='list'>
          {items.map((item, index) => (
            <li key={index}>
              <span className="icon">{item.icon}</span> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeyActivity;
