import React from 'react';
import MyAvatar from './small-components/MyAvatar';
import InfoButton from './small-components/InfoButton';
import Divider from '@mui/material/Divider';
import StatusSign from './small-components/StatusSign';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';


const LineWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    flex: '1',
    gap: '100px',
    minHeight:'100%'
  }));

const Line = (props) => {
  const { avatarSrc, avatarAlt, avatarSize, infoOnClick, status } = props;
  return (
    <>
    <LineWrapper>
        <MyAvatar src={avatarSrc} alt={avatarAlt} size={avatarSize} />
        <StatusSign status={status}/>
        <InfoButton onClick={infoOnClick} />
    </LineWrapper>
    <Divider />
    </>
  );
}

export default Line;
