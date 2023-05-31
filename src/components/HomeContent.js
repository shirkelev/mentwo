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
let buttonText0;
let buttonText1;
let buttonText2;
let isMatched;

if(headline === Constants.PENDINGS) {
  headlineIcon = <PersonAddIcon/>;
  }
else if(headline === Constants.PROCESS) {
  headlineIcon = <SupervisorAccountIcon/>;
}
else if (headline === Constants.FINISHED) {
  headlineIcon = <DoneIcon/>;
}

return (
  <>
  
  <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Typography variant="h4">Hello {user.userName}!</Typography>
    <div style={{}}>
      <CapacityBar capacity={user.capacity} mentees_num={user.approvedMentees.length} />
    </div>
  </div>
  <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ marginRight: '10px' }}>
      {/* <Badge color="secondary" badgeContent="10">
        {headlineIcon}
      </Badge> */}
      {headlineIcon}
    </div>
    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{headline}</Typography>
    
  </div>
  <CardsCarousel list = {list} variant={headline} isMatched = {isMatched} />
  <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />
  </div>
  
  </>
);
}