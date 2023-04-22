import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import RoundButton from '../components/small-components/RoundButton';

const RootContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}));

const Title = styled('h1')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const MentorButton = styled(RoundButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const MenteeButton = styled(RoundButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const ChooseRolePage = () => {
  return (
    <RootContainer maxWidth="sm">
      <Title>Are you a mentor or mentee?</Title>
      <ButtonsContainer>
        <MentorButton color="primary" href="quest-page">Mentor</MentorButton>
        <MenteeButton color="secondary" href="quest-page">Mentee</MenteeButton>
      </ButtonsContainer>
    </RootContainer>
  );
};

export default ChooseRolePage;
