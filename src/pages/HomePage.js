import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';

const HomePage = () => {
  return (
    <div style={{ width:'100vw', height:'100vh'}}>
      <NavigationBar />
      <HomeContent />
    </div>
  );
};

export default HomePage;
