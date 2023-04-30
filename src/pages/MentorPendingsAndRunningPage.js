import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import HamburgerMenu from '../components/HamburgerMenu';

export default function MentorPendingsAndRunningPage ({user}) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <NavigationBar />
      {/* <HamburgerMenu user = {user} /> */}
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ display: 'inline-block' }}>Hello {user.userName}!</h1>
        <div style={{}}>
          <CapacityBar capacity={user.capacity} mentees_num={user.approvedMentees.length} />
        </div>
      </div>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {"Pending Requests"} list={user.pendingMentees} />
        <HomeContent headline = {"In Process"} list={user.approvedMentees} />
        {/* <HomeContent headline = {"Finished"} list={user.finishedMentees} />
        <HomeContent headline = {"Declined"} list={user.declinedMentees} /> */}
      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TipBox/>
      </div>
    </div>
  );
};
