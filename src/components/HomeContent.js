import React from 'react';
import Divider from '@mui/material/Divider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DoneIcon from '@mui/icons-material/Done';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import CardsCarousel from './CardsCarousel';
import { Badge, Typography } from '@mui/material';
import * as Constants from '../Constants';

// const LinesWrapper = styled('div')(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     // flexGrow: '100',
//     gap: '10px',
//     width: '100%',
//     // heigth: '100vh',
//     margin: '10px',
//     // minHeight:'70%'
//   }));

  export default function HomeContent ({headline, list}) {
  const handleInfoClick = () => {
    alert('Info button clicked');
  }

  let headlineIcon;
  let buttonText1;
  let buttonText2;
  let isMatched;

  if (headline === Constants.PENDINGS) {
    headlineIcon = <PersonAddIcon/>;
    buttonText1 = Constants.PENDINGS_BUTTON1;
    buttonText2 = Constants.PENDINGS_BUTTON2;
  }
  if (headline === Constants.PROCESS) {
    headlineIcon = <SupervisorAccountIcon/>;
    buttonText1 = Constants.PROCESS_BUTTON;
    isMatched = true;
  }
  if (headline === Constants.FINISHED) {
    headlineIcon = <DoneIcon/>;
    buttonText1 = Constants.FINISH_BUTTON1;
    buttonText2 = Constants.FINISH_BUTTON2;
    isMatched = true;
  }
  if (headline === Constants.DECLINED) {
    headlineIcon = <PersonAddDisabledIcon/>;
    buttonText1 = Constants.DECLINED_BUTTON;
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
    <CardsCarousel list = {list} buttonText1 = {buttonText1} buttonText2 = {buttonText2} isMatched = {isMatched} />
    <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />
    </div>
    
    </>
  );
}