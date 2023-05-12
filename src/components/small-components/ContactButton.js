import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import {UserContentDetailsContext} from '../../context/UserContentDetailsContext';

const ContactButton = ({ name, phone, email={email} }) => {
  const { showDetails, setShowDetails } = React.useContext(UserContentDetailsContext);

  const handleClick = () => {
    const val = !showDetails;
    setShowDetails(val);
  };

  return (
    <>
        <IconButton onClick={handleClick}>
          <PhoneIcon />
        </IconButton>
    </>
  );
};

export default ContactButton;