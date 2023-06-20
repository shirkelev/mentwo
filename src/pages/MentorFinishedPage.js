import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import HamburgerMenu from '../components/HamburgerMenu';
import * as Constants from '../Constants';

export default function MentorFinishedPage ({user}) {
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.FINISHED} list={user.finishedMenteesData ? user.finishedMenteesData : []} user={user}/>
      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TipBox tipMessege={"I recommend that at the end of the interview the interviewee will ask for feedback."}/>
      </div>
    </div>
  );
};