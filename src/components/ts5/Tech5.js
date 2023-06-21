import React from 'react';
import { FiClock } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import './Tech5.css';
 
import pp from '../../assets/pp/pp.jpg'; 


const Tech5 = () => {
  return (
    <div className="box-container-Inaugral">
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="additional-time-text-Inaugral"> Agricultural Marketing and Processing Opportunity in Jharkhand </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"></div>
            <div className="additional-text-Inaugral"> Jharkhand offers significant opportunities for agricultural marketing and processing due to its abundant natural resources, favorable agro-climatic conditions, and government initiatives to promote agriculture and rural development. Jharkhand has a wide range of agricultural produce, including cereals, pulses, oilseeds, fruits, and vegetables. Setting up crop processing units such as rice mills, flour mills, oil extraction units, and fruit/vegetable processing units can add value to the produce and cater to both domestic and export markets. Developing nurseries, cold storage facilities, and processing units for flowers, fruits, and vegetables can tap into the growing demand.

</div>
 <div className="additional-text-Inaugral"> To leverage these opportunities effectively, it is essential to collaborate with the state government, agricultural research institutions, and industry associations. 
</div>
 <div className="additional-text-Inaugral"> This session will highlight the opportunities and discuss some successful models that have been of mutual interest to farmers and processors. The scope of replicating innovative practices would be discussed to generate a comprehensive understanding of possibilities value addition and marketing of agricultural produce.
</div>

          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>12:00 PM – 12:10 PM </span>
          </div>
          <div className="additional-time-text-Inaugral"> Welcome & Introductory Remarks by Session Chair  </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative </div>
            <div className="additional-text-Inaugral"> (Agricultural Marketing Board-Jharkhand) </div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span> 12:10 PM – 12:40 PM </span>
          </div>
          <div className="additional-time-text-Inaugral"> 
Government and private sector partner to strengthen agricultural marketing in Jharkhand. </div>
          
        </div>
        <div className="name-text-Inaugral">Panellists: (10 min each)</div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative  </div>
            <div className="additional-text-Inaugral"> (Processing-Mother Dairy) 
</div>
          </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative  </div>
            <div className="additional-text-Inaugral"> (NAFED)
 </div>
          </div>
        </div> 
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative  </div>
            <div className="additional-text-Inaugral"> (Rice Mill association)

</div>
          </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative  </div>
            <div className="additional-text-Inaugral"> (Commodity trading organisation- Reliance/Origo/LDC/ ITC/NCDEX) </div>
          </div>
        </div>  
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span> 12:40 PM – 12:55 PM </span>
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
            <span> 12:55 PM – 01:00 PM </span>
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

export default Tech5;
