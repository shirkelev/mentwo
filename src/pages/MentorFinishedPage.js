import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import CapacityBar from '../components/CapacityBar';
import TipBox from '../components/small-components/TipBox';
import HamburgerMenu from '../components/HamburgerMenu';

export default function MentorFinishedPage ({user}) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <NavigationBar />
      {/* <HamburgerMenu user = {user} /> */}
      <div style={{ padding: '10px'}}>
        <HomeContent headline = {"Finished"} list={user.finishedMentees} />
      </div>
      <div style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TipBox/>
      </div>
    </div>
  );
};