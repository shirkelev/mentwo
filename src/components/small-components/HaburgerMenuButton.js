import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { HamburgerMenuContext } from '../../context/HamburgerMenuContexts';
import Avatar from '@mui/material/Avatar';

const HamburgerMenuButton = ({ user }) => {
  const {showMenu, setShowMenu} = useContext(HamburgerMenuContext);

  const handleClick = () => {
    const val = !showMenu;
    setShowMenu(val);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar alt="Remy Sharp" src={user.img}  sx={{ width: 50, height: 50, border: 1}} borderStyle="line" size="large"/>
      </IconButton>
      
    </>
  );
};

export default HamburgerMenuButton;