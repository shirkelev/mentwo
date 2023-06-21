import React from 'react';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import * as Constants from '../Constants';
import { Typography } from '@mui/material';

export default function MentorPendingsAndRunningPage ({user}) {
  let pendingsList = user.pendingMenteesData ? user.pendingMenteesData : [];
  const sliceLength = pendingsList.length > 3 ? 3 : pendingsList.length;
  pendingsList = pendingsList.slice(0, sliceLength)
  console.log("pendingsList", pendingsList,sliceLength);
  return (
    <>
     <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.PENDINGS} list={pendingsList} user={user}/>

      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <TipBox tipMessege = {"I recommend that at the end of the interview the interviewee will ask for feedback."}/>
      </div>
    </div>
    </>
  );
};
