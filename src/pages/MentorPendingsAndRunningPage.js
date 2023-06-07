import React from 'react';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import * as Constants from '../Constants';
import { Typography } from '@mui/material';

export default function MentorPendingsAndRunningPage ({user}) {
  
  return (
    <>
    
     <div style={{ width: '100vw', height: '100vh' }}>

      {/*
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Hello {user.userName}!</Typography>
        <div style={{}}>
          <CapacityBar capacity={user.capacity} mentees_num={user.approvedMentees.length} />
        </div>
      </div> */}

      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.PENDINGS} list={user.pendingMentees} user={user}/>
        {/*<HomeContent headline = {Constants.PROCESS} list={user.approvedMentees}user={user}/>
         <HomeContent headline = {Constants.FINISHED} list={user.finishedMentees} />
        <HomeContent headline = {Constants.DECLINED} list={user.declinedMentees} /> */}
      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f2ec' }}>
        <TipBox tipMessege = {"I recommend holding an online meeting once a week between the interviewer and the interviewee, in which the current status will be aligned and requests, comments or questions can be flooded"}/>
      </div>
    </div>
    </>
  );
};
