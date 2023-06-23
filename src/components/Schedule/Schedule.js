import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Details from '../Details/Details';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: '2px solid green', // Change border color to green
  margin: '15px 80px', // Add margin to the whole component
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
    // Responsive styles for mobile
    '@media (max-width: 600px)': {
      margin: '15px 10px', // Adjust margin for mobile devices
    },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '& .MuiTypography-root': {
    fontSize: '1.5rem', // Increase the font size
    fontWeight: 'bold', // Optional: add bold font weight
    color: 'green', // Set the text color to green
  },
    // Responsive styles for mobile
    '@media (max-width: 600px)': {
      '& .MuiTypography-root': {
        fontSize: '1.5rem', // Adjust font size for mobile devices
      },
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(5),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
    // Responsive styles for mobile
    '@media (max-width: 600px)': {
      padding: theme.spacing(2), // Adjust padding for mobile devices
      borderTop: 'none', // Remove top border for mobile devices
    },

}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="paneld-content" id="paneld-header">
          <Typography variant="h6">Agenda</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Details/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
