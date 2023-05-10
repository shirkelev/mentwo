import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { HamburgerMenuContext } from '../../context/HamburgerMenuContexts';

const HamburgerMenuButton = ({ user }) => {
  const {showMenu, setShowMenu} = useContext(HamburgerMenuContext);

  const handleClick = () => {
    const val = !showMenu;
    setShowMenu(val);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      
    </>
  );
};

export default HamburgerMenuButton;