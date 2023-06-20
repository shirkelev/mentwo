import { useState } from 'react';
import { Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const AvailableToggle = ({isPressed=true, onClick=()=>{}}) => {
    const [pressed, setPressed] = useState(isPressed); 

    const handleClick = () => {
        setPressed(!pressed);
        onClick();
    };
    
    const label = ( <Typography variant="subtitle2" component="div">
    {pressed ? 'Available' : 'Unavailable'}
  </Typography>);
    return (
        <FormControlLabel control={<Switch defaultChecked={pressed} onChange={handleClick} />} label={label} labelPlacement='bottom' />
    );
};

export default AvailableToggle;
