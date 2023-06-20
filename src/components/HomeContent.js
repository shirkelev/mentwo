import React from 'react';
import Divider from '@mui/material/Divider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DoneIcon from '@mui/icons-material/Done';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import CardsCarousel from './CardsCarousel';
import { Badge, Typography } from '@mui/material';
import * as Constants from '../Constants';
import CapacityBar from './CapacityBar';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GroupsIcon from '@mui/icons-material/Groups';
import AvailableToggle from './AvailableToggle';


const MAIN_CTA = {
  variant: 'outlined',
  color: 'primary',
};

const SECONDARY_CTA = {
  variant: 'text',
  color: 'primary',
}

export default function HomeContent ({headline, list, user}) {
const handleInfoClick = () => {
  alert('Info button clicked');
}

let headlineIcon;
let isMatched;

if(headline === Constants.PENDINGS) {
  headlineIcon = <PersonAddIcon/>;
  }
else if(headline === Constants.PROCESS) {
  headlineIcon = <GroupsIcon/>;
}
else if (headline === Constants.FINISHED) {
  headlineIcon = <HowToRegIcon/>;
}

return (
  <>
  
  <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Typography variant="h5" color='primary' fontWeight="bold">Hello {user.name}!</Typography>
    <div style={{marginTop:'10px'}}>
      <AvailableToggle></AvailableToggle>
    </div>
  </div>
  <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ marginRight: '15px', marginTop: "9px",  marginBottom: '10px' }}>
      {headlineIcon}
    </div>
    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>{headline}</Typography>
    
  </div>
  <CardsCarousel list = {list ? list : []} variant={headline} isMatched = {isMatched} user = {user} />
  <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />
  </div>
  
  </>
);
}