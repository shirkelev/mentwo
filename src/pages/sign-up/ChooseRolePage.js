import React, {useContext, useState} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RoundButton from '../../components/small-components/RoundButton';
import * as Constants from '../../Constants';
import { SignUpContext } from '../../context/SignUpContexts';
import { Link } from 'react-router-dom';

import MenteeImg from '../../data/images/mentee.png';
import MentorImg from '../../data/images/mentor.png';

// import UserRole from '../context/UserRole';

const RootContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  // height: '100',
  padding: '10%',
}));

const Title = styled('h1')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const MentorButton = styled(RoundButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '70%',
  maxHeight: '10%',
  justifyContent: 'center',
}));

const MenteeButton = styled(RoundButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '70%',
  maxHeight: '10%',
  justifyContent: 'center',
}));


// export const RoleContext = React.createContext();


const ChooseRolePage = () => {
  const {role, setRole, step, setStep, completed, setCompleted} = useContext(SignUpContext);
  function handleClick(role){
    setRole(role);
    setStep(step + 1);
    let newCompleted = completed;
    newCompleted[step] = true;
    setCompleted(newCompleted);
  }
  return (
    
      <RootContainer maxWidth="sm">
        <Typography align='center'>
          <Title>Interviewer or Interviewee?</Title>
          <ButtonsContainer>
              <MentorButton 
                color="primary" 
                onClick={() =>  {
                  handleClick(Constants.INTERVIEWERS_DB_NAME);
                  }}
                to={''}
                text='Interviewer'
                img={MentorImg}
                />
              <div style={{width: '20px'}}></div>
              <MenteeButton 
                color="secondary" 
                onClick={() =>  {
                  handleClick(Constants.INTERVIEWEES_DB_NAME);
                  }}
                to={''} text='Interviewee' 
                img={MenteeImg}/>
          </ButtonsContainer>
        </Typography>
      </RootContainer>
   
    
  );
};


export default ChooseRolePage;
