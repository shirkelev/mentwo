import React from 'react';
import OptionalMentor from '../components/OptionalMentor';
import { Stack } from '@mui/material';
import MenteeProcessTimeline from '../components/MenteeProcessTimeline'

const ChooseMentorPage = ({user}) => {
    return(
        <div>
        <MenteeProcessTimeline></MenteeProcessTimeline>
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}>
            
            <OptionalMentor 
            mentorName={"Nitsan"}
            details={"A third year computer science student, work at Mobilye"}
            picturePath={"src\data\images\nitzan.jpeg"}></OptionalMentor>
            <OptionalMentor 
            mentorName={"Yaniv"}
            details={"A third year computer science student, work at Mobilye"}
            picturePath={"src\data\images\nitzan.jpeg"}></OptionalMentor>
            <OptionalMentor 
            mentorName={"Yehonatan"}
            details={"A third year computer science student, work at Mobilye"}
            picturePath={"src\data\images\nitzan.jpeg"}></OptionalMentor>
        </Stack>
        </div>
      
    );   
};

export default ChooseMentorPage;
