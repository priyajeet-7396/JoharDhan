import React from 'react';
import { FiClock } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import './Recap.css';
import avatarImage from '../../assets/pp/alok_pp.jpeg'; 


const Recap = () => {
  return (
    <div className="box-container-Inaugral">
     
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>10:30 AM - 10:45 AM</span>
          </div>
          <div className="additional-time-text-Inaugral"> Recap of Day-1  </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={avatarImage} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> A. K. Srivastava </div>
            <div className="additional-text-Inaugral">Director 
Synergy Technofin Pvt. Ltd.
</div>
          </div>
        </div>
      </div>
      
    
      {/* Repeat the above structure three more times for the other boxes */}
    </div>
  );
};

export default Recap;
