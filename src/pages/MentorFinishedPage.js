import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import HamburgerMenu from '../components/HamburgerMenu';
import * as Constants from '../Constants';
import { useState } from 'react';
import IconWithMessage from '../components/small-components/IconwithMessage';

export default function MentorFinishedPage ({user}) {
  let finishedList = [];
  switch(user.type){
    case 'mentor':
      finishedList = user.finishedMenteesData ? user.finishedMenteesData : [];
      break;
    case 'mentee':
      finishedList = user.finishedMentorsData ? user.finishedMentorsData : [];
      break;
    default:
      finishedList = [];
  }
  const [message, setmessage] = useState(finishedList.length === 0 || !finishedList.length ?  "You don't have any completed interviews yet" : '');

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {Constants.FINISHED} list={finishedList ? finishedList : []} user={user}/>
        <IconWithMessage message={message} isVisible={finishedList.length === 0 }/>

      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TipBox tipMessege={"I recommend that at the end of the interview the interviewee will ask for feedback."}/>
      </div>
      <div style={{ height: '50px'}} ></div>
    </div>
  );
};