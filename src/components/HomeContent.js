import React from 'react';
import Line from './Line';
import styled from '@emotion/styled';
import { alignProperty } from '@mui/material/styles/cssUtils';

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
          <Line avatarSrc={'../data/images/' + x.img} avatarAlt={x.userName} 
          avatarSize={40} infoOnClick={handleInfoClick}
          status={x.status} />
          </>
        )
      })}
    </LinesWrapper>
    </>
  );
}

export default HomeContent;
