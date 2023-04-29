import React from 'react';
import OptionalMentor from '../components/OptionalMentor';
import { Stack } from '@mui/material';
import MenteeProcessTimeline from '../components/MenteeProcessTimeline'
import NavigationBar from '../components/NavigationBar';

const ChooseMentorPage = ({user}) => {
    return(
        <div style={{ width:'100%', height:'100%'}}>
        <NavigationBar/>
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
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
        </Stack>
        </div>
      
    );   
};

export default ChooseMentorPage;
