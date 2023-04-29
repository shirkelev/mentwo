import CapacityBattery from "./small-components/CapacityBattery";

const CapacityBar = ({capacity, mentees_num}) => {
    return (
    <div>
        <CapacityBattery full_fruction = {mentees_num / capacity}/>
        <span>Current occupancy: {mentees_num} mentees out of {capacity}.</span>
    </div>
    )
  };
  
  export default CapacityBar;