import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Avatar } from '@material-ui/core';
import './Tech2.css';
 
import pp from '../../assets/pp/pp.jpg'; 


const Tech2 = () => {
  return (
    <div className="box-container-Inaugral">
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="additional-time-text-Inaugral">Climate Resilient Agriculture and Role of Technology </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"></div>
            <div className="additional-text-Inaugral">Climate change poses significant challenges to agricultural sustainability, in Jharkhand. To address the challenges posed by climate change and enhance the agricultural sustainability, technological interventions and several adaptive measures will be the key. Farm mechanization plays a crucial role in increasing agricultural productivity, reducing labor requirements, and improving overall efficiency in the agricultural sector
It's important for policymakers, agricultural extension services, research institutions, and farmers to work collaboratively to develop and implement climate-resilient strategies that can safeguard farming and ensure the sustainability of agriculture in Jharkhand in the face of climate change.

</div>
 <div className="additional-text-Inaugral">This session will share the opportunities, scope and role of technology and collaborative efforts on natural resource management in accelerating growth in agriculture. Partnership models for using technology as a mainstreaming measure will be presented and discussed. 
</div>

          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>02:00  PM – 02:10 PM</span>
          </div>
          <div className="additional-time-text-Inaugral">Welcome & Introductory Remarks  Session Chair  </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative </div>
            <div className="additional-text-Inaugral"> (Sustainability etc.) </div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span> 02:10 PM- 02:50 PM </span>
          </div>
          <div className="additional-time-text-Inaugral"> Scope of technology adoption in agriculture, data driven solution for small holder farming system </div>
          
        </div>
        <div className="name-text-Inaugral">Panellists: (10 min each)</div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Representative</div>
            <div className="additional-text-Inaugral">(SkyMet/WRMS)</div>
          </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Representative </div>
            <div className="additional-text-Inaugral"> (Varaha ClimateAg) </div>
          </div>
        </div> <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Representative </div>
            <div className="additional-text-Inaugral">(Farm Machinery)</div>
          </div>
        </div> <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">SSM Jharkhand</div>
            <div className="additional-text-Inaugral">(CropIn)</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>02:50 PM – 02:55 PM</span>
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
            <span> 02:55 PM – 03:00 PM </span>
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

export default Tech2;
