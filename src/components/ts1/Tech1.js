import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Avatar } from '@material-ui/core';
import './Tech1.css';
import avatarImage from '../../assets/pp/sunil_pp.jfif'; 
import pp from '../../assets/pp/pp.jpg'; 
import MinisterAgriculture from '../../assets/pp/ministerAgriclutlure_pp.jpg'; 
import secretery_pp from '../../assets/pp/secretery_pp.jpg'; 

const Tech1 = () => {
  return (
    <div className="box-container-Inaugral">
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="additional-time-text-Inaugral">Agriculture production in Jharkhand- Challenges and opportunity</div>
        </div>
        <div className="box-content-Inaugral">
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"></div>
            <div className="additional-text-Inaugral">Jharkhand, has a predominantly rural economy with agriculture being one of the key sectors. The state is blessed with fertile soil, abundant water resources, and a diverse agro-climatic condition. However, there are several challenges and opportunities in agriculture in Jharkhand.
</div>
 <div className="additional-text-Inaugral">The major challenges are small and fragmented land holdings, irrigation infrastructure, lack of modern farming techniques, There is a need to promote mechanization, use of high-yielding crop varieties, improved irrigation techniques, and better farm management practices.
</div>
 <div className="additional-text-Inaugral">Addressing the challenges in agriculture and leveraging the available opportunities can lead to sustainable agricultural development in Jharkhand. The silver linings for sustainable development of agriculture in Jharkhand lays in promotion of organic farming, horticulture and high-value crops, dairy and livestock, agro-processing and value addition, skill development and technology adoption.
</div>
 <div className="additional-text-Inaugral">
In this session, successful financial models will be discussed, with a focus on role of agri-inputs (seeds, fertilizer crop protection) and strategic lessons learned. The session will also discuss larger policy issues concerning, agricultural development in Jharkhand
</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>12:00 PM – 12:10 PM</span>
          </div>
          <div className="additional-time-text-Inaugral"> Welcome & Introductory Remarks by Session Chair </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Director Agriculture </div>
            <div className="additional-text-Inaugral"> Govt. of Jharkhand </div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span> 12:10 PM – 12:50 PM  </span>
          </div>
          <div className="additional-time-text-Inaugral">  Successful models : Role of agri-inputs and models for sustainable development of agriculture in Jharkhand </div>
          
        </div>
        <div className="name-text-Inaugral">Panellists: (10 min each)</div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Dr. Onkar Nath Singh</div>
            <div className="additional-text-Inaugral">VC – BAU Ranchi</div>
          </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Representative </div>
            <div className="additional-text-Inaugral"> (Crop protection) </div>
          </div>
        </div> <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Representative </div>
            <div className="additional-text-Inaugral">(Seed Company)</div>
          </div>
        </div> <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">SSM Jharkhand</div>
            <div className="additional-text-Inaugral">(IFFCO/Fertilizer Company)</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>12:50 PM  – 12:55 PM</span>
          </div>
          <div className="additional-time-text-Inaugral">Question / Answer   </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="text-container-Inaugral">
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>12:55 PM – 13:00 PM</span>
          </div>
          <div className="additional-time-text-Inaugral"> Concluding Remarks    </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Session Chair </div>
          </div>
        </div>
      </div>
      {/* Repeat the above structure three more times for the other boxes */}
    </div>
  );
};

export default Tech1;
