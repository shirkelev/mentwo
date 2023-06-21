import React from 'react';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import * as Constants from '../Constants';
import { Typography } from '@mui/material';
import { useState } from 'react';
import IconWithMessage from '../components/small-components/IconwithMessage';

export default function MentorPendingsAndRunningPage ({user}) {
  let pendingsList = user.pendingMenteesData && user.available ? user.pendingMenteesData : [];
  const sliceLength = pendingsList.length > 3 ? 3 : pendingsList.length;
  pendingsList = pendingsList.slice(0, sliceLength)
  console.log("pendingsList", pendingsList,sliceLength);

  const [message, setmessage] = useState(user.pendingMenteesData?.length !== 0 && user.available ? '' : "You don't have any pending interviews at the moment");
  return (
    <>
     <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.PENDINGS} list={pendingsList} user={user}/>
        <IconWithMessage message={message} isVisible={user.pendingMenteesData?.length === 0 || !user.available}/>

      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <TipBox tipMessege = {"I recommend that at the end of the interview the interviewee will ask for feedback."}/>
      </div>
    </div>
    </>
  );
};
