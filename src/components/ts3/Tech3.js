import React from 'react';
import { FiClock } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import './Tech3.css';
 
import pp from '../../assets/pp/pp.jpg'; 


const Tech3 = () => {
  return (
    <div className="box-container-Inaugral">
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="additional-time-text-Inaugral"> Financial Service for Small holder Farmers and FPOs </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"></div>
            <div className="additional-text-Inaugral"> Optimizing the potential of rural farm depends on building institutional capacities of producer collectives and on strengthening long term business relations, promoters and financers that can provide sustained markets for rural products. Strengthening value chain, assuring investment and consistency in performance are important factors in changing the face of farming and rural livelihoods. 

</div>
 <div className="additional-text-Inaugral">For sustainability of smallholder farms and FPOs financial linkage and institutional arrangements is very important. This can link expertise and resources for viable alliances between various stakeholders (Government, Corporate, FPOs & Financial Institutions) in creating the desired scale for a meaning full impact. 
</div>
 <div className="additional-text-Inaugral">In this session, successful financial models will be discussed, with a focus on role of FinTec, need product customisation, and strategic lessons learned. The session will also discuss larger policy issues concerning, insitutionalisation, its implementation and up-scaling
</div>

          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span>03:30 PM – 03:40 PM</span>
          </div>
          <div className="additional-time-text-Inaugral"> Welcome & Introductory Remarks by Session Chair  </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Representative </div>
            <div className="additional-text-Inaugral"> Samunnati  </div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span> 03:40 PM - 04:20 PM </span>
          </div>
          <div className="additional-time-text-Inaugral"> Role of FinTech, Type of financial products, need of product customisation, lesson learnt and up scaling </div>
          
        </div>
        <div className="name-text-Inaugral">Panellists: (10 min each)</div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral">Shri Subrata Mandal</div>
            <div className="additional-text-Inaugral">Chief General Manager
Jharkhand, NABARD
</div>
          </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Regional Head/Agri Head  </div>
            <div className="additional-text-Inaugral"> SCB or Private Bank
Jharkhand/India 
 </div>
          </div>
        </div> 
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Dr Joseph Marianus Kujur SJ </div>
            <div className="additional-text-Inaugral"> Director Rural Management 
XISS Ranchi

</div>
          </div>
        </div>
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Ranjan Srivastava </div>
            <div className="additional-text-Inaugral"> State Program Manager
JSLPS

 </div>
          </div>
        </div>  
        <div className="box-content-Inaugral">
          <div className="avatar-Inaugral">
          <Avatar src={pp} alt="Avatar"  style={{ width: '70px', height: '70px' }} /> 
          </div>
          <div className="text-container-Inaugral">
            <div className="name-text-Inaugral"> Business Head </div>
            <div className="additional-text-Inaugral"> AgriFintech
(Basix, Annaya Finance-FWWB, Arya Dhan)
</div>
          </div>
        </div>
      </div>
      <div className="box-Inaugral">
        <div className="box-header-Inaugral">
          <div className="time-icon-Inaugral">
            <FiClock />
            <span> 04:20 PM  – 04:24 PM </span>
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
            <span> 04:25 PM - 04:30 PM </span>
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

export default Tech3;
