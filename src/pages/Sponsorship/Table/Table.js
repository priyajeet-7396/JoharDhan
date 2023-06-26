import React from 'react';
import './Table.css'; // Import the CSS file for styling

const Table = () => {
  const tableData = [
    ['Description ', 'Golden Sponsorship- (INR 10/- Lakh only)', 'Silver Sponsorship-(INR 7/- Lakh only)', ' Workshop Sponsorship (INR 2/- Lakh only)'],
    ['Official status', 'Main Sponsor', 'Sponsor ', 'Sponsor of the workshop'],
    ['Names and logos ', 'On all promotional material', 'On all promotional material', 'On all promotional material'],
    ['Special acknowledgment', 'During inaugural and concluding functions', 'During inaugural and  concluding functions', 'During workshop '],
    ['Event Souvenir', 'Color page advertisement', ' Color page advertisement ', 'Color page advertisement'],
    ['Complementary stall', 'Yes', 'Yes', 'Yes'],
    ['Speaker slot (max) ', '2', '1', '1'],
    ['Complimentary delegate', '3', '2', '1'],
    ['Corporate film', '5 min ', '3 min ', 'NA'],
  ];

  return (
    <div>
    <div className="table-container">
      <table className="table">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="bullet-points">
        <p className="green-text"> Stall charges for Entrepreneur, private companies & startups INR 50,000/- for FPOs, NGOs,
Women entrepreneur, SHG etc. INR 30,000/-</p>
    </div>
      </div>
  );
};

export default Table;
