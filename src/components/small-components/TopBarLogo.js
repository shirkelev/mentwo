import * as React from 'react';
import logo from '../../data/images/new_logo.png' 

const TopBarLogo = ({ title, onClick, color='primary' }) => {
  return (
    <div style={{ marginTop: '8px', marginRight: '60px' }}>
       <img src={logo} alt="My Image" style={{ width: '150x', height: '50px' }} />
    </div>
  );
};
export default TopBarLogo;

