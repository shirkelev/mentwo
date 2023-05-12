import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { UserModalContext } from '../../context/UserModalContext';
import { useTheme } from '@emotion/react';
import UserContentDetails from './UserContectDetails';
import {UserContentDetailsContext} from '../../context/UserContentDetailsContext';
const maxLength = 25;


function trimDetail(details){
    return details.slice(0, maxLength) + (details.length > maxLength ? "..." : "");
}
export default function PersonCard({name, details, picturePath, phone, email, buttonText1, buttonText2, isMatched}) {
  
  const {openUserModal, setOpenUserModal} = React.useContext(UserModalContext);
  // const {showDetails, setShowDetails} = React.useContext(UserContentDetailsContext);
  
  const handleClickViewMore = () => {
    setOpenUserModal(!openUserModal);
  }
  return (
    // <UserContentDetailsContext.Provider value={{showDetails, setShowDetails}}>
      <Card sx={{ boxShadow:2, margin:1, padding:1, maxWidth:300}}>
        <Stack 
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <Avatar  sx={{ width: 100, height: 100, border: 1, margin:1}} src={picturePath}  borderStyle='line'/>
        </Stack>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"> {name}</Typography>
          <Typography variant="body2" color="text.secondary">{trimDetail(details)}</Typography>
        </CardContent>

        <CardActions>
        {/* {isMatched ? ( <><PhoneIcon onClick = {UserContentDetails.handleOpenDetails}/>&nbsp;&nbsp;&nbsp;</> ) : ( <Button size="small" onClick={handleClickViewMore}>About {name}</Button> )} */}
        {isMatched ? ( <><PhoneIcon/>&nbsp;&nbsp;&nbsp;</> ) : ( <Button size="small" onClick={handleClickViewMore}>About {name}</Button> )}
          <Button size="small">{buttonText1}</Button>
          {buttonText2 !== "" ? ( <Button size="small" >{buttonText2}</Button> ) : null}
        </CardActions>

        {/* <UserContentDetails name={name} phone={phone} email={email} /> */}

      </Card>
    // </UserContentDetailsContext.Provider>
  );
}