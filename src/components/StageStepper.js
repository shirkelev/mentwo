import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Matching',
  'Choose Mentor',
  'Mentor Approval',
  'Mentoring Proccess',
];

export default function StageStepper({activeStage}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStage} alternativeLabel sx={{fontSize:'2px'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{fontSize:'0.8rem'}}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}