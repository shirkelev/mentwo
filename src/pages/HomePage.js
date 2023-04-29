import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';

const HomePage = ({user}) => {
  if(user.type === 'mentor'){
    return (
      <div style={{ width:'100%', height:'100%' }}>
        <NavigationBar />
        <div style={{ padding: "10px", width: '98%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ display: 'inline-block' }}>Hello {user.userName}!</h1>
          <div style={{}}>
            <CapacityBar capacity={user.capacity} mentees_num={user.approvedMentees.length} />
          </div>
        </div>
        <div style={{ padding: "10px", width: '98%' }}>
          <h3>Pending Requests:</h3>
          <HomeContent list={user.pendingMentees} />
          <h3>Active :</h3>
          <HomeContent list={user.approvedMentees} />
          <h3>Finished :</h3>
          <HomeContent list={user.finishedMentees} />
          <h3>Declined :</h3>
          <HomeContent list={user.declinedMentees} />
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
