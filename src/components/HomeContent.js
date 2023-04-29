import React from 'react';
import Line from './Line';
import styled from '@emotion/styled';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Divider from '@mui/material/Divider';

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

const HomeContent = ({list}) => {
  const handleInfoClick = () => {
    alert('Info button clicked');
  }
  return (
    <>
    <LinesWrapper>
      {list.map(x => {
        return (
          <>
          <Line img={x.img} avatarAlt={x.userName} 
          avatarSize={40} infoOnClick={handleInfoClick}
          status={x.status} />
          </>
        )
      })}
    </LinesWrapper>
    <Divider />
    </>
  );
}

export default HomeContent;
