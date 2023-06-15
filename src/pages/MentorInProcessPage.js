import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import HamburgerMenu from '../components/HamburgerMenu';
import * as Constants from '../Constants';

export default function MentorInProcessPage ({user}) {
  
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.PROCESS} 
        list={user.approvedMentessData ? user.approvedMentessData: []} user={user}/>
      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TipBox tipMessege={"After the process is over, I recommend that the  interviewer ask the interviewee for a short feedback on his mentoring so that he can improve in his next mentoring processes."}/>
      </div>
    </div>
  );
};