import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HamburgerMenu from '../HamburgerMenu';

const HamburgerMenuButton = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      {showMenu && <HamburgerMenu user={user} />}
    </>
  );
};

export default HamburgerMenuButton;