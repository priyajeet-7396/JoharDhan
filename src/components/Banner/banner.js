import React from 'react';
import bannerImage from '../../assets/Banner/Banner.jpg';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '85vh', /* Adjust the height as needed */
    marginTop: '120px', /* Add the margin top value */
  
  };

  return (
    <div className="banner" style={bannerStyle}>
    </div>
  );
};

export default Banner;
