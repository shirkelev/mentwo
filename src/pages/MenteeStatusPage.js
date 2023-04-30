import React from 'react';
import NavigationBar from '../components/NavigationBar';
import {Stack} from '@mui/material';
import StageStepper from '../components/StageStepper';
import Matching from '../components/Matching';
import ChooseMentor from '../components/ChooseMentor';
import MentoringProcess from '../components/MentoringProcess';
import MentorApproval from '../components/MentorApproval';

const MenteeStatusPage = ({status}) => {
    return(
        <Stack  direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={{ width: '100%'}}
        >
            <NavigationBar style={{ width: '100%'}} />
            <StageStepper activeStage={status} style={{width:'100%'}} />  

            {status === 0 && (
                <Matching></Matching>    
            )}
            {status === 1 && (
                <ChooseMentor></ChooseMentor>
            )}  
            {status === 2 && (
                <MentorApproval/>
            )}
            {status === 3 && (
                <MentoringProcess/>               
            )}  
        </Stack>
        );
  
};
export default MenteeStatusPage;
