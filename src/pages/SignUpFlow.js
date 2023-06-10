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
import SignUpLoading from './sign-up/SignUpLoading';
import NewFormPage from './sign-up/NewFormPage';
import { UserAuth } from '../context/AuthContext';
import { DB } from '../data/firebase';


const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(5),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#FEFCFF',
    gap: theme.spacing(10),
    
  }));
 //TODO: Make everything exactly in the middle of the page
const ContentContainer = styled(Container)(({ theme }) => ({
    
    flexGrow: 1,
    overflow: 'scroll',
    height: '80vh',
    margin: theme.spacing(2),
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
      padding: theme.spacing(2),
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

    const {user, userData, loading, setLoading} = UserAuth();

    const navigate = useNavigate();

    const {setUser, dataBase} = useContext(UserContext);

    const steps = Constants.SIGN_UP_STEPS;

    const [role, setRole] = useState('Default');

    const [step, setStep] = useState(0);

    const [completed, setCompleted] = useState(createCompleted(steps));

    const [localLoading, setLocalLoading] = useState(false);

    const [form, setForm] = useState({
        fields: [],
        techSkills: [],
        softSkills: [],
        agendas: [],
        description: '',
    });

    function createNewUser(form, role){
  
        if(role===Constantans.INTERVIEWERS_DB_NAME){
          return (
            new Mentor(
                user.name
                ,form.firstName
                ,form.lastName
                ,form.password
                // ,require('../data/images/shir.jpeg')
                ,form.email
                ,form.capacity
                ,form.description
                ,form.profession)
          )}
          if(role=== Constantans.INTERVIEWEES_DB_NAME){
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
            role !== 'Default' 
        );
    }

    const handleClickSave = async () => {
        
        if(saveSuccess()){
            setLocalLoading(true);

            let userAdditionData = {
                fieldsList: form.fields,
                techSkillsList: form.techSkills,
                softSkillsList: form.softSkills,
                agendas: form.agendas,
                description: form.description
                };
            try{
                if(role === Constantans.INTERVIEWERS_DB_NAME){
                    userAdditionData = {
                        ...userAdditionData,
                        available: true,
                        finishedMentees: [],
                        pendingMentees: [],
                        declinedMentees: [],
                        approvedMentess: [],
                        profession: null,
                    } 
                    await DB.addInterviewer(user.uid, userAdditionData)
                    await DB.updateUserProp(user.uid, true, form.description, 'mentor')
                    
                } else if(role === Constantans.INTERVIEWEES_DB_NAME){
                    userAdditionData = {
                        ...userAdditionData,
                        currentMwntor: null,
                        isMatched: false,
                        profession: '',
                    }
                    await DB.addInterviewee(user.uid, userAdditionData)
                    await DB.updateUserProp(user.uid, true, form.description, 'mentee')
                    console.log('added interviewee')
                }
                
                setLocalLoading(false);
                navigate('../' + Constantans.HOME_PAGE + user.uid);
            } catch(error){
                console.log(error);
            }
        
            } else { 
                alert('You have to choose role first!');
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

        //Genetate content only after data has gotten from the server
        if(!loading && !localLoading){
            switch (step) {
                case 0:
                    // return <MainFormPage />;
                    return <ChooseRolePage />;
                case 1:
                    return <NewFormPage role={role} onClickSubmit={handleClickSave}/>;
                // case 2:
                    // return <RoleFormPAge />;
                default:
                    return <ChooseRolePage />;
                }
            }else{
                return <SignUpLoading text="Loading you data..."/>;
            }
        
    }
        
        return (
            
            <RootContainer>
                {/* {console.log(userData, user)} */}
                {console.log(form, role)}
                <SignUpContext.Provider value={{role, setRole, step, setStep, completed, setCompleted, form, setForm, saveSuccess}}>
                    <StepsCounter steps={steps} completed={completed} to={to} activeStep={step} />
                    <ContentContainer>
                        <StepContent />
                    </ContentContainer>
                    {/* <ButtonSection>
                        {step === 1 ? 
                        <>
                        <ButtonWrapper onClick={handlePrev} variant="outlined" color="secondary"  title='Back' to={null} /> 
                        <ButtonWrapper onClick={handleNext} variant="contained" color="primary" title={ step === 1 ? 'Done!' : 'Next'} to={null} />
                        </> : null}
                    </ButtonSection> */}
                </ SignUpContext.Provider>
            </RootContainer>
            )};
export default SignUpFlow;