import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import Battery20Icon from '@mui/icons-material/Battery20';
import Battery30Icon from '@mui/icons-material/Battery30';
import Battery50Icon from '@mui/icons-material/Battery50';
import Battery60Icon from '@mui/icons-material/Battery60';
import Battery80Icon from '@mui/icons-material/Battery80';
import Battery90Icon from '@mui/icons-material/Battery90';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

const CapacityBattery = ({full_fruction}) => {
    if (full_fruction == 0) {
      return <Battery0BarIcon/>;
    }
    if (full_fruction <= 0.2) {
      return <Battery20Icon/>;
    }
    if (full_fruction <= 0.4) {
      return <Battery30Icon/>;
    }
    if (full_fruction <= 0.5) {
      return <Battery50Icon/>;
    }
    if (full_fruction <= 0.6) {
      return <Battery60Icon/>;
    }
    if (full_fruction <= 0.8) {
      return <Battery80Icon/>;
    }
    if (full_fruction < 1) {
      return <Battery90Icon/>;
    }
    else {
      return <BatteryFullIcon/>;
    }
  };
  
  export default CapacityBattery;