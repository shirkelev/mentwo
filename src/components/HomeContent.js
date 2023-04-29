import React from 'react';
import Line from './Line';
import styled from '@emotion/styled';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Divider from '@mui/material/Divider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DoneIcon from '@mui/icons-material/Done';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import OptionalMentor from '../components/OptionalMentor';
import { Stack } from '@mui/material';

const LinesWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: '100',
    gap: '10px',
    width: '100%',
    // heigth: '100vh',
    margin: '10px',
    // minHeight:'70%'
  }));

const HomeContent = ({headline, list}) => {
  const handleInfoClick = () => {
    alert('Info button clicked');
  }

  let headlineIcon;
  if (headline === "Pending Requests") {
    headlineIcon = <PersonAddIcon/>;
  }
  if (headline === "In Process") {
    headlineIcon = <SupervisorAccountIcon/>;
  }
  if (headline === "Finished") {
    headlineIcon = <DoneIcon/>;
  }
  if (headline === "Declined") {
    headlineIcon = <PersonAddDisabledIcon/>;
  }

  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        {headlineIcon}
      </div>
      <h3>{headline}</h3>
    </div>
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
    {list.map(mentee => {
        return (
          <>
          <OptionalMentor picturePath={mentee.img} mentorName={mentee.name} 
          details={"A third year computer science student, work at Mobileye"} />
          </>
        )
      })}
    </Stack>
    
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

export default HomeContent;
