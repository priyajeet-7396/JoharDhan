import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
    <div className="Objective">
      <h2 className='obj-title'> SYNERGY TECHNOFIN PVT. LTD.</h2>
      <div className='obj'>
      <p className='obj-para'>
      Synergy Technofin Pvt. Ltd. is an agribusiness advisory and consulting firm working in
multifaceted domains of agriculture and allied sectors i.e. facilitating the implementation of
livelihood and technical projects, supporting investors and Agri start-ups, advising agri-input
enterprises for exploring new opportunities for growth and disseminating learning and
knowledge about the sector
      </p>
      <ul>
        <li>Agricultural Value chain analysis</li>
        <li>  Agri-input marketing & channel development</li>
        <li>  Climate Change Adaptation and Mitigation Production System</li>

      </ul>
    </div>
    </div>
    </div>
  );
};

export default About;
