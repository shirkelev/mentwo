import React, {useContext, useState} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import RoundButton from '../components/small-components/RoundButton';
import * as Constantans from '../Constants';
import {UserRole } from '../context/UserRole';
import { Link } from 'react-router-dom';
// import UserRole from '../context/UserRole';

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



// export const RoleContext = React.createContext();


const ChooseRolePage = () => {
  const {role, setRole} = useContext(UserRole);
  // const [locRole, setLocRole] = useState('');
  

  return (
    
      <RootContainer maxWidth="sm">
        <Title>Are you a mentor or mentee?</Title>
        <ButtonsContainer>
            <MentorButton 
              color="primary" 
              // href={Constantans.REG_FORM}
              onClick={() =>  {
              setRole('mentor');
                 }}
              to={'../' + Constantans.REG_FORM}>
                Mentor</MentorButton>
            <MenteeButton 
              color="secondary" 
              onClick={() =>  {
              setRole('mentee');}}
              to={'../' + Constantans.REG_FORM}>
                Mentee</MenteeButton>
        </ButtonsContainer>
      </RootContainer>
   
    
  );
};


export default ChooseRolePage;
