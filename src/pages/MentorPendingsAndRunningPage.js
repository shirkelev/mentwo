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
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.PENDINGS} list={user.pendingMenteesData ? user.pendingMenteesData : []} user={user}/>

      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <TipBox tipMessege = {"I recommend holding an online meeting once a week between the interviewer and the interviewee, in which the current status will be aligned and requests, comments or questions can be flooded"}/>
      </div>
    </div>
    </>
  );
};
