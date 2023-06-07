import React, {useState, useContext} from 'react';
import RoleFormPAge from './sign-up/RoleFormPage';
import ChooseRolePage from './sign-up/ChooseRolePage';
import { SignUpContext } from '../context/SignUpContexts';
import * as Constants from '../Constants';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Button from '../components/small-components/Button';
import MainFormPage from './sign-up/MainFormPage';
import StepsCounter from '../components/StepsCounter'
import Box from '@mui/material/Box';
import Mentor from '../data/Mentor';
import Mentee from '../data/Mentee';
import { UserContext } from '../context/UserContext';
import { useNavigate, redirect} from 'react-router-dom';
import * as Constantans from '../Constants';
import { red } from '@mui/material/colors';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(5),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f2ec',
    gap: theme.spacing(10),
    
  }));
 //TODO: Make everything exactly in the middle of the page
const ContentContainer = styled(Container)(({ theme }) => ({
    
    flexGrow: 1,
    overflow: 'scroll',
    height: '80vh',
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
const ProgressContainer = styled('nav')(({ theme }) => ({
    position: 'fixed',
    top: '0px', /* Adjust the top position to your desired padding */
    left: '0',
    width: '100vw',
    zIndex: 0,
    flexGrow: 1,
    innerPadding: theme.spacing(3),
    margin: theme.spacing(2),
    height: '10vh',
    display: 'flex',
    overflow: '', 
    marginBottom: theme.spacing(5),  
    }));


const SignUpFlow = ({props}) => {

    const navigate = useNavigate();

    const {setUser, dataBase} = useContext(UserContext);

    const steps = Constants.SIGN_UP_STEPS;

    const [role, setRole] = useState('Default');

    const [step, setStep] = useState(0);

    const [completed, setCompleted] = useState(createCompleted(steps));

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        description: '',
        img: '',
        userName: '',
    });


    function createNewUser(form, role){
  
        if(role==='mentor'){
          return (
            new Mentor(form.userName
              ,form.firstName
              ,form.lastName
              ,form.password
              ,require('../data/images/shir.jpeg')
              ,form.email
              ,form.capacity
              ,form.description
              ,form.profession)
          )}
          if(role=== 'mentee'){
            return (new Mentee(form.userName
              ,form.firstName
              ,form.lastName
              , form.password
              ,require('../data/images/omer.jpeg')
              ,form.email
              ,form.capacity
              ,form.description
              ,form.profession)
            )
          }
          else{
            return (-1);
          } 
          }


    function saveSuccess(){
        return(
            true
        );
    }

    function handleClickSave(){
        
        if(saveSuccess()){
          const newUser = createNewUser(form, role);
          if(newUser === -1){ 
            alert('You have to choose role first!');
            return false;
          }
          else{
            setUser(newUser);
            dataBase.addUser(newUser);
            setUser(newUser);
            // return navigate(-2)
            window.history.pushState(null, "", "/home");
            window.location.reload();
            
          }
        }
        else{
          return false;
        }
      }

    function handleNext(){
        if(step < 2){
            if(saveSuccess(form)){
                setStep(step + 1);
                let newCompleted = completed;
                newCompleted[step] = true;
                setCompleted(newCompleted);
                
            }
            
        }
        else{
            return handleClickSave()
            // navigate(Constantans.HOME_PAGE, {replace: true});
        }
    }

    function handlePrev(){
        setStep(step - 1);
    }

    const to = ['./', Constants.CHOOSE_ROLE_PAGE, Constants.REG_FORM];
    
    const StepContent = () => {
        switch (step) {
            case 0:
                return <MainFormPage />;
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
                <SignUpContext.Provider value={{role, setRole, step, setStep, completed, setCompleted, form, setForm, saveSuccess}}>
                    <StepsCounter steps={steps} completed={completed} to={to} activeStep={step} />
                    <ContentContainer>
                        <StepContent />
                    </ContentContainer>
                    <ButtonSection>
                        {step === 1 ? <ButtonWrapper onClick={handlePrev} variant="contained" color="primary"  title='Prev' to={null} /> : null}
                        <ButtonWrapper onClick={handleNext} variant="contained" color="primary" title={ step === 2 ? 'Submit' : 'Next'} to={null} />
                    </ButtonSection>
                </ SignUpContext.Provider>
            </RootContainer>
            )};
export default SignUpFlow;