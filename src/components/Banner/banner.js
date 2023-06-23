// import React from 'react';
// import './banner.css';
// import bannerImage from '../../assets/Banner/Banner.jpg';
// import bannerImageMobile from '../../assets/Banner/Banner_m.png';

// const Banner = () => {
//   return (
//     <div className="banner"></div>
//   );
// };

// export default Banner;


import React, { useState, useEffect } from 'react';
import desktopImage from '../../assets/Banner/Banner.jpg';
import mobileImage from '../../assets/Banner/Banner_M.png';
import './banner.css';

const Banner = () => {
  const [imageUrl, setImageUrl] = useState(window.innerWidth >= 768 ? desktopImage : mobileImage);

  useEffect(() => {
    const handleResize = () => {
      setImageUrl(window.innerWidth >= 768 ? desktopImage : mobileImage);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" />
    </div>
  );
};

export default Banner;
