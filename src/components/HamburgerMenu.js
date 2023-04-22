import React from 'react';
import HamburgerMenuItem from './small-components/HamburgerMenuItem';

const HamburgerMenu = ({ isOpen, handleClose }) => {
  return (
    <div className={isOpen ? 'open' : 'closed'}>
        <div className="hamburger-menu">    
            <div className="hamburger-header">
                <div className="logo">
                    Your Logo Here
                </div>
                <div className="close-icon" onClick={handleClose}>
                    X
                </div>
            </div>
            <div className="hamburger-body">
                <HamburgerMenuItem text="Item 1" />
                <HamburgerMenuItem text="Item 2" />
                <HamburgerMenuItem text="Item 3" />
                <HamburgerMenuItem text="Item 4" />
                <HamburgerMenuItem text="Item 5" />
            </div>
        </div>
    </div>
  );
};

export default HamburgerMenu;
