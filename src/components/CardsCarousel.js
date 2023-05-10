import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { Stack } from '@mui/material';
import PersonCard from './small-components/PersonCard';
import { useState } from 'react';


export default function CardsCarousel ({list, buttonText1, buttonText2, isMatched}) {

  
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = list.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    
    <Box sx={{display: "flex", flexDirection:'column', alignItems:"center", maxWidth:'100%'}}>
      <PersonCard picturePath={list[activeStep].img} name={list[activeStep].name} 
      details={list[activeStep].description} 
      buttonText1 = {buttonText1} buttonText2 = {buttonText2} isMatched = {isMatched} sx={{}}/>
      
      <Box sx={{width:'100%' }}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
      />
      </Box>
    </Box>
    </>
  );
  }

