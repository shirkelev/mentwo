import React from 'react';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import * as Constants from '../Constants';


export default function MentorPendingsAndRunningPage ({user}) {
  
  return (
    <>
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ display: 'inline-block' }}>Hello {user.userName}!</h1>
        <div style={{}}>
          <CapacityBar capacity={user.capacity} mentees_num={user.approvedMentees.length} />
        </div>
      </div>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.PENDINGS} list={user.pendingMentees} />
        <HomeContent headline = {Constants.PROCESS} list={user.approvedMentees} />
        {/* <HomeContent headline = {Constants.FINISHED} list={user.finishedMentees} />
        <HomeContent headline = {Constants.DECLINED} list={user.declinedMentees} /> */}
      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TipBox/>
      </div>
    </div>
    </>
  );
};
