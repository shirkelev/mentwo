import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import StepButton from '@mui/material/StepButton';
import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { SignUpContext } from '../context/SignUpContexts';



//Adding Tryout Comment


function MyStep(props){
    const {label, completed, to} = props;
    return(
        <Step key={label} completed={completed}>
            <Link to={null}>
                <StepButton color="inherit" onClick={null}>
                    {label}
                </StepButton>
            </Link>
        </Step>
    )
};



 function StepsCounter(props) {
    const steps = props.steps;
    const {step, setStep, completed} = React.useContext(SignUpContext);
    const handleStep = (step) => () => {
        setStep(step);
      };
    return(
        <>
        
        <Box sx={{ width: '100%'}}>
            <Stepper nonLinear activeStep={step}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <Link to={''}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                        </Link>
                    </Step>
                ))}
                    
            </Stepper>
        </Box>
        </>
        )};
    // return (
            
    //        )
    //     };

export default StepsCounter;
