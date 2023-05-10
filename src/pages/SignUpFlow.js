import React, {useState} from 'react';
import RoleFormPAge from './sign-up/RoleFormPage';
import ChooseRolePage from './sign-up/ChooseRolePage';
import { SignUpContext } from '../context/SignUpContexts';
import * as Constants from '../Constants';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '../components/small-components/Button';
import {
    Routes
    ,Route
    // ,createRoutesFromElements
    // ,createBrowserRouter
    } from 'react-router-dom'
import MainFormPage from './sign-up/MainFormPage';
import StepsCounter from '../components/StepsCounter'
import Box from '@mui/material/Box';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(5),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));
 //TODO: Make everything exactly in the middle of the page
const ContentContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    innerPadding: theme.spacing(5),
  }));

const ButtonWrapper = styled(Button)(({ theme }) => ({
    margin: theme.spacing(2),
  }));
  
  const ButtonSection = styled('div')(({theme}) => ({
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      maxWidth:'100%', 
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
  
  }));

  function createCompleted(steps){
    let completed = [];
    for (let i = 0; i < steps.length; i++) {
        completed[i] = false;
    }
    return completed
}

const SignUpFlow = ({props}) => {

    
    const steps = Constants.SIGN_UP_STEPS;

    const [role, setRole] = useState('Default');

    const [step, setStep] = useState(0);

    const [completed, setCompleted] = useState(createCompleted(steps));


    function saveSuccess(){
        return(
            false
        );
    }


    const to = ['./', Constants.CHOOSE_ROLE_PAGE, Constants.REG_FORM];
    
    const StepContent = () => {
        switch (step) {
            case 0:
                return <MainFormPage  />;
            case 1:
                return <ChooseRolePage />;
            case 2:
                return <RoleFormPAge />;
            default:
                return <MainFormPage  />;
            }
    }
        return (
            <RootContainer>
                <SignUpContext.Provider value={{role, setRole, step, setStep, completed, setCompleted}}>
                    <StepsCounter steps={steps} completed={completed} to={to} activeStep={step}/>
                    <ContentContainer>
                        <StepContent />
                    </ContentContainer>
                    <ButtonSection>
                        <ButtonWrapper variant="contained" color="primary"  title='Prev' to={null} />
                        <ButtonWrapper variant="contained" color="primary" title='Next' to={null} />
                    </ButtonSection>
                </ SignUpContext.Provider>
            </RootContainer>
            )};
export default SignUpFlow;