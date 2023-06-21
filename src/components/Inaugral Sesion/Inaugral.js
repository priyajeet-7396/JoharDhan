import React from 'react';
import { FiClock } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import './Inaugral.css';
import avatarImage from '../../assets/pp/sunil_pp.jfif'; 
import Lamp from '../../assets/pp/lamp.jpg'; 
import MinisterAgriculture from '../../assets/pp/ministerAgriclutlure_pp.jpg'; 
import secretery_pp from '../../assets/pp/secretery_pp.jpg'; 

const BoxComponent = () => {
  return (
    <div className="box-container-Inaugral">
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>11:00 AM - 11:15 AM</span>
          </div>
          <div className="additional-time-text-Inaugral">Lamp Lighting</div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={Lamp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"></div>
            <div className="additional-text-Inaugral">
During the inaugural function, the lamp will be ceremoniously lit by our esteemed guests, symbolizing their shared commitment to igniting the path of progress.</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>11:15AM  - 11:20 AM</span>
          </div>
          <div className="additional-time-text-Inaugral">Welcome & Introductory Remarks </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={avatarImage} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Mr. Sunil Kumar </div>
            <div className="additional-text-Inaugral">Managing Director Synergy Technofin Pvt. Ltd.</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>11:20 AM -11:30 AM </span>
          </div>
          <div className="additional-time-text-Inaugral"> Address by the Chief Guest </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={MinisterAgriculture} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Minister of Agriculture,</div>
            <div className="additional-text-Inaugral">Animal Husbandry and Cooperative of Jharkhand</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>11:30 AM -11:45 AM</span>
          </div>
          <div className="additional-time-text-Inaugral">Key Note Address </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={secretery_pp} alt="Avatar" style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Secretory - Agriculture   </div>
            <div className="additional-text-Inaugral">Ministry of Agriculture  
Government of Jharkhand
</div>
          </div>
        </div>
      </div>
      {/* Repeat the above structure three more times for the other boxes */}
    </div>
  );
};

export default BoxComponent;
