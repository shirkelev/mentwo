import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import StepButton from '@mui/material/StepButton';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



//Adding Tryout Comment
function createCompleted(steps){
    let completed = [];
    for (let i = 0; i < steps.length; i++) {
        completed[i] = false;
    }
    return completed
}
 function StepsCounter(props) {
    const steps = props.steps;
    const completed = createCompleted(steps);
    const [activeStep, setActiveStep] = React.useState();
    const [skipped, setSkipped] = React.useState();
    
    return (
            <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
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
