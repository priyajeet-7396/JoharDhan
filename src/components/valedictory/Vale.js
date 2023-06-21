import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Vale.css';
import avatarImage from '../../assets/pp/sunil_pp.jfif'; 


const Vale = () => {
  return (
    <div className="box-container-Inaugral">
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={avatarImage} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Mr. Sunil Kumar  </div>
            <div className="additional-text-Inaugral"> Managing Director Synergy Technofin Pvt. Ltd.
  </div>
          </div>
        </div>
      </div>
   
     
      {/* Repeat the above structure three more times for the other boxes */}
    </div>
  );
};

export default Vale;
