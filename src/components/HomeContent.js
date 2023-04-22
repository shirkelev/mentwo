import React from 'react';
import Line from './small-components/Line';
import styled from '@emotion/styled';
import { alignProperty } from '@mui/material/styles/cssUtils';

const LinesWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    gap: '10px',
    width: '100vw',
    heigth: '100vh',
    margin: '10px',
    minHeight:'70%'
  }));

const HomeContent = () => {
  const handleInfoClick = () => {
    alert('Info button clicked');
  }
  return (
    <>
    <LinesWrapper>
      <Line avatarSrc="https://via.placeholder.com/100" avatarAlt="avatar" avatarSize={40} infoOnClick={handleInfoClick} />
      <Line avatarSrc="" avatarAlt="avatar" avatarSize={40} infoOnClick={handleInfoClick} status={'active'} />
      <Line avatarSrc="https://via.placeholder.com/100" avatarAlt="avatar" avatarSize={40} infoOnClick={handleInfoClick} />
      
    </LinesWrapper>
    </>
  );
}

export default HomeContent;
