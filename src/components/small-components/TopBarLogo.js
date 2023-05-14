import * as React from 'react';
import logo from '../../data/images/logo.jpg' 

const TopBarLogo = ({ title, onClick, color='primary' }) => {
  return (
    <div style={{ marginTop: '8px', marginRight: '60px' }}>
       <img src={logo} alt="My Image" style={{ width: '200px', height: '80px' }} />
    </div>
  );
};
export default TopBarLogo;

