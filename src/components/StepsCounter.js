import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import StepButton from '@mui/material/StepButton';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Step1', 'Step2', 'Step3'];
const completed = [false, false, false];

 function StepsCounter(props) {
    // const completed = props.completed;
    const steps1 = props.steps;
    const [activeStep, setActiveStep] = React.useState();
    const [skipped, setSkipped] = React.useState();
    
    return (
            <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps1.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit">
                    {label}
                    </StepButton>
                </Step>
                ))}
            </Stepper>
            </Box>
            )};

export default StepsCounter
