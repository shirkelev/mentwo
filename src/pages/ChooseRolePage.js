import React, {useContext} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import RoundButton from '../components/small-components/RoundButton';
import * as Constantans from '../Constants';

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

const UserRole = React.createContext({
  userType: '',
  setUserType: () => {}
}
);

const ChooseRolePage = () => {
  const { setUserType } = useContext(UserRole);
  return (
    <RootContainer maxWidth="sm">
      <Title>Are you a mentor or mentee?</Title>
      <ButtonsContainer>
        <MentorButton color="primary" href={Constantans.REG_FORM}
        onClick={() =>  setUserType('mentor')}
        >Mentor</MentorButton>
        <MenteeButton color="secondary" 
        href={Constantans.REG_FORM}
        onClick={() =>  setUserType('mentor')} >Mentee</MenteeButton>
      </ButtonsContainer>
    </RootContainer>
  );
};

export default ChooseRolePage;
