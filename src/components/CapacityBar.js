import CapacityBattery from "./small-components/CapacityBattery";

const CapacityBar = ({capacity, mentees_num}) => {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <CapacityBattery full_fruction = {mentees_num / capacity}/>
            <span>{mentees_num}/{capacity} Mentees</span>
    </div>
    )
  };
  
  export default CapacityBar;