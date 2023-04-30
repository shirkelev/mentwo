import React from 'react';
import Divider from '@mui/material/Divider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DoneIcon from '@mui/icons-material/Done';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import CardsCarousel from './CardsCarousel';

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
  if (headline === "Pending Requests") {
    headlineIcon = <PersonAddIcon/>;
    buttonText1 = "approve";
    buttonText2 = "decline"
  }
  if (headline === "In Process") {
    headlineIcon = <SupervisorAccountIcon/>;
    buttonText1 = "finish process";
  }
  if (headline === "Finished") {
    headlineIcon = <DoneIcon/>;
    buttonText1 = "leave feedback";
    buttonText2 = "share"
  }
  if (headline === "Declined") {
    headlineIcon = <PersonAddDisabledIcon/>;
    buttonText1 = "undecline";
  }

  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        {headlineIcon}
      </div>
      <h3>{headline}</h3>
    </div>
    <CardsCarousel list = {list} buttonText1 = {buttonText1} buttonText2 = {buttonText2} />
    
    {/* <LinesWrapper>
      {list.map(x => {
        return (
          <>
          <Line img={x.img} avatarAlt={x.userName} 
          avatarSize={40} infoOnClick={handleInfoClick}
          status={x.status} />
          </>
        )
      })}
    </LinesWrapper> */}
    <Divider />
    </>
  );
}