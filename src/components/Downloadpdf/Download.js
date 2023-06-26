import React from 'react';
import pdfFile from './JOHAR-DHAN.pdf';
import './Download.css'; // Import the CSS file for styling

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.target = '_blank';
    link.download = 'JOHAR-DHAN.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-container">
      <h2>Download Brochure</h2>
      <button className="download-button" onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
};

export default DownloadButton;
