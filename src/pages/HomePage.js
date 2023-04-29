import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';

const HomePage = ({user}) => {
if (user.type === 'mentor') {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <NavigationBar />
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ display: 'inline-block' }}>Hello {user.userName}!</h1>
        <div style={{}}>
          <CapacityBar capacity={user.capacity} mentees_num={user.approvedMentees.length} />
        </div>
      </div>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {"Pending Requests"} list={user.pendingMentees} />
        <HomeContent headline = {"In Process"} list={user.approvedMentees} />
        <HomeContent headline = {"Finished"} list={user.finishedMentees} />
        <HomeContent headline = {"Declined"} list={user.declinedMentees} />
      </div>
    </div>
  );
}
  else{
    return (
      <div style={{ width:'100vw', height:'100vh'}}>
        <NavigationBar />
        <h1> Hello {user.userName} ! </h1>
        <HomeContent list={
          (user.currentMentor !== null) ? [user.currentMentor] : []}/>
      </div>
    );
  }
};

export default HomePage;
