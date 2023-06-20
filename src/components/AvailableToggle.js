import { useState } from 'react';
import * as Constants from '../../Constants';
import { Typography } from '@mui/material';

const AvailableToggle = ({isPressed=true, onClick=()=>{}}) => {
    const [pressed, setPressed] = useState(isPressed);

    const handleClick = () => {
        setPressed(!pressed);
        onClick();
    }

    return (
        <></>
    );
};

export default AvailableToggle;
