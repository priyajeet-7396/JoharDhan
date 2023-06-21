import React from 'react';
import { FiClock } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import './Tech4.css';
 
import pp from '../../assets/pp/pp.jpg'; 


const Tech4 = () => {
  return (
    <div className="box-container-Inaugral">
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="additional-time-text-Inaugral"> Emerging alternate Sales Channel for Agri-input </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"></div>
            <div className="additional-text-Inaugral"> Emerging alternate sales channel for agricultural inputs is e-commerce platforms, and FPOs. Agri-input e-commerce platforms provide a digital marketplace where farmers can directly purchase agricultural inputs such as seeds, fertilizers, pesticides, and equipment. As reported by Tata-Cornell Institute for Agriculture and Nutrition there are close to 33711 FPOs are registered in India. FPOs are poised to be very important partner for agri-input industries to penetrate deep up to the farm gate. 

</div>
 <div className="additional-text-Inaugral"> Overall, e-commerce and FPOs provide platforms for farmers a convenient, efficient, and cost-effective alternative sales channel. 
</div>
 <div className="additional-text-Inaugral">This session will highlight the opportunities and discuss some successful models that have been of mutual interest to farmers and agri-input companies. The scope of replicating innovative practices would be discussed to generate a comprehensive understanding of possibilities for main streaming the alternate channel for sales and distribution of agri-input.
</div>

          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>11:00 AM  – 11:10 AM </span>
          </div>
          <div className="additional-time-text-Inaugral"> Welcome & Introductory Remarks by Session Chair  </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative </div>
            <div className="additional-text-Inaugral"> (CEO JOHAR)  </div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span> 11:10 AM – 11:50 AM </span>
          </div>
          <div className="additional-time-text-Inaugral"> Innovative agri-input channels benefit farming communities and service providers through expanded opportunities. </div>
          
        </div>
        <div className="name-text-Inaugral">Panellists: (10 min each)</div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative   </div>
            <div className="additional-text-Inaugral"> DeHaat
 </div>
          </div>
        </div> 
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative  </div>
            <div className="additional-text-Inaugral"> (Agri-input company)

</div>
          </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative  </div>
            <div className="additional-text-Inaugral"> (FPO-1)

 </div>
          </div>
        </div>  
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative  </div>
            <div className="additional-text-Inaugral"> (FPO-2)
</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>11:50  AM – 11:55 AM </span>
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
            <span> 11:55 AM – 12:00 PM </span>
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

export default Tech4;
