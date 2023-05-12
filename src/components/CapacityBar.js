import CapacityBattery from "./small-components/CapacityBattery";
import { Typography } from '@mui/material';

const CapacityBar = ({capacity, mentees_num}) => {
    return (
        <Typography component="div" variant="body1" align="center">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <CapacityBattery full_fruction = {mentees_num / capacity}/>
        <span>{mentees_num}/{capacity} Mentees</span>
        </div>
        </Typography>
    )
  };
  
  export default CapacityBar;