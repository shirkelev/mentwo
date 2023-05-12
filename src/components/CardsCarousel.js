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
import { UserModalContext } from '../context/UserModalContext';
import UserCardModal from './UserCardModal';


export default function CardsCarousel ({list, buttonText1, buttonText2, isMatched}) {

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [openUserModal, setOpenUserModal] = useState(false);

  const maxSteps = list.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleOpenModal = () => {
    let val = !openUserModal;
    setOpenUserModal(val);
  }


  return (
    <>
    {list.length > 0 ? <UserModalContext.Provider value={{openUserModal, setOpenUserModal}}>
      <Box sx={{display: "flex", flexDirection:'column', alignItems:"center", maxWidth:'100%'}}>
        <PersonCard mentee={list[activeStep]} picturePath={list[activeStep].img} name={list[activeStep].name} 
        details={list[activeStep].description} phone={list[activeStep].phone} email={list[activeStep].email}
        buttonText1 = {buttonText1} buttonText2 = {buttonText2} isMatched = {isMatched} sx={{}}/>
        <Box sx={{width:'100%' }}>
          { maxSteps - 1 ? <MobileStepper
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
        /> : null}
        </Box>
        <UserCardModal user={''}/>

      </Box>
    </UserModalContext.Provider>: null}
    
    </>
  );
  }

