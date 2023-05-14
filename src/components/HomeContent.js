import React from 'react';
import Divider from '@mui/material/Divider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DoneIcon from '@mui/icons-material/Done';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import CardsCarousel from './CardsCarousel';
import { Badge, Typography } from '@mui/material';
import * as Constants from '../Constants';

const MAIN_CTA = {
  variant: 'outlined',
  color: 'primary',
};

const SECONDARY_CTA = {
  variant: 'text',
  color: 'primary',
}

export default function HomeContent ({headline, list}) {
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
  buttonText0 = {
    text: 'About',
    variant: 'text',
    color: SECONDARY_CTA.color
  }
  buttonText1 = {
    text: Constants.PENDINGS_BUTTON1,
    variant: MAIN_CTA.variant,
    color: MAIN_CTA.color
  }
  buttonText2 = {
    text: Constants.PENDINGS_BUTTON2,
    variant: 'text',
    color: SECONDARY_CTA.color
  }
}
else if(headline === Constants.PROCESS) {
  headlineIcon = <SupervisorAccountIcon/>;
  buttonText0 = {
    text: 'Contact',
    variant: MAIN_CTA.variant,
    color: '',
  }
  buttonText2 = {
    text: Constants.PROCESS_BUTTON,
    variant: SECONDARY_CTA.variant,
    color: SECONDARY_CTA.color 
  }
  buttonText1 = {
    text: '',
    variant: MAIN_CTA.variant,
    color: MAIN_CTA.color
  };
  isMatched = true;
}
else if (headline === Constants.FINISHED) {
  headlineIcon = <DoneIcon/>;
  buttonText0 = {
    variant: 'text',
    color: '',
    text: 'Contact',
  }
  buttonText2 = {
    text: Constants.FINISH_BUTTON1,
    variant: MAIN_CTA.variant,
    color: MAIN_CTA.color
  }
  buttonText1 = {
    text: '',
    variant: '',
    color: ''
  };
  // buttonText2 = Constants.FINISH_BUTTON2;
  isMatched = true;
}
if (headline === Constants.DECLINED) {
  headlineIcon = <PersonAddDisabledIcon/>;
  buttonText0 = {
    text: 'About',
    variant: 'text',
    color: '',
  };
  buttonText1 = {
    text: Constants.PROCESS_BUTTON,
    variant: MAIN_CTA.variant,
    color: MAIN_CTA.color
  };
  buttonText1 = {
    text: Constants.DECLINED_BUTTON,
    variant: MAIN_CTA.variant,
    color: MAIN_CTA.color
  };
}

return (
  <>
  <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ marginRight: '10px' }}>
      {/* <Badge color="secondary" badgeContent="10">
        {headlineIcon}
      </Badge> */}
      {headlineIcon}
    </div>
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{headline}</Typography>
    
  </div>
  <CardsCarousel list = {list}  buttonText0 = {buttonText0} buttonText1 = {buttonText1} buttonText2 = {buttonText2} isMatched = {isMatched} />
  <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />
  </div>
  
  </>
);
}