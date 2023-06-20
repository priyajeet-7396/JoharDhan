import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaRegClock } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import './Details2.css'
import Recap from '../Recap/Recap';
import Tech4 from '../Ts4/Tech4';
import Tech5 from '../ts5/Tech5';
import Vale from '../valedictory/Vale';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  margin: '10px', // Add margin between accordion boxes
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'orange' }} />} 
    {...props}
  />
))(({ theme }) => ({
    backgroundColor: '#138808', 
  color: 'white', // Change text color to white
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
 
  color: 'green', // Change text color to white
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
    
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
  
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaRegClock  className='time-icon'/> 
            <Typography>10:30 AM - 10:45 AM Recap of Day-1 </Typography>
          </div>
</AccordionSummary>

        <AccordionDetails>
          <Recap/>
        </AccordionDetails>
      </Accordion>
      <div className='tea'>
      <div className='box-tea'>
        <GiCoffeeCup className='icon-tea' />
        <p className='text-tea'>11:45 AM – 11:00 AM	 Tea / Coffee </p>
      </div>
    </div>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaRegClock className='time-icon' /> 
          <Typography> 11:00 AM- 12:00 PM Technical Session-IV </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Tech4/>
          </Typography>
        </AccordionDetails>
      </Accordion>
     

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaRegClock className='time-icon' /> 
          <Typography>12:00 PM – 01:00 PM Technical Session-V</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Tech5/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaRegClock  className='time-icon' /> 
          <Typography>01:00 PM - 01:30 PM  Valedictory session</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
         <Vale/>
        </AccordionDetails>
      </Accordion>
      <div className='lunch'>
      <div className='box-lunch'>
        <GiForkKnifeSpoon className='icon-lunch' />
        <p className='text-lunch'> 01:30 PM – 02:30 PM Networking Lunch </p>
      </div>
    </div>

     

    </div>
  );
}