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
import * as Constants from '../../Constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const maxLength = 70;



function trimDetail(details){
    return details.slice(0, maxLength) + (details.length > maxLength ? "..." : "");
}
export default function PersonCard({user, buttonText0, buttonText1, buttonText2, isMatched}) {
  const navigate = useNavigate();
  const {openUserModal, setOpenUserModal, setModalType} = React.useContext(UserModalContext);
  // const {showDetails, setShowDetails} = React.useContext(UserContentDetailsContext);
  
  const handleClickViewMore = () => {
    setOpenUserModal(!openUserModal);
    buttonText0.text === 'About' ? setModalType('about') : setModalType('contact');
  }
  const hadleClickChooseMentor = () => {
    user.changeStatus(2);
  }
  function handleClickSecondButton(text) {
    if ( text === 'finish') {
      return(
        function inner(){
          navigate('./' + Constants.PROCESS_COMPLETION_FORM);
        }
      )
    }
    else if(text === 'feedback'){
      return (
        function inner(){
        navigate('../' + Constants.PROCESS_COMPLETION_FORM);
        }
      )
      }
      
    else if(text === 'decline'){
      return(
        function inner(){
          navigate('../' );
        }
      )
    }
    else{
      return (
        function inner(){
        navigate('../' + Constants.WAIT_MENTOR_APPROVAL_PAGE);
        }
      )
      }
      
    }

  

  
  return (
    // <UserContentDetailsContext.Provider value={{showDetails, setShowDetails}}>
      <Card sx={{ boxShadow:2, margin:1, padding:1, width:280}}>
        <Stack 
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <Avatar  sx={{ width: 100, height: 100, border: 1, margin:1}} src={user.img}  borderStyle='line'/>
        </Stack>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}> {user.name}</Typography>
          <Typography variant="body2" color="text.secondary">{trimDetail(user.description)}</Typography>
        </CardContent>

        <CardActions sx={{justifyContent:'center', paddingBottom:2}}>

        
        {
        isMatched ? ( <Button size="small" onClick={handleClickViewMore} variant={buttonText0.variant} style={{ fontWeight: 'bold' }}>{buttonText0.text}</Button> ) 
        : ( <Button size="small" onClick={handleClickViewMore}  variant={buttonText0.variant} style={{ fontWeight: 'bold' }}>{buttonText0.text} </Button> )
        }

        {
        isMatched && buttonText1 ? ( 
        <Link to={"./" + Constants.PROCESS_COMPLETION_FORM}>
          <Button size="small" style={{ fontWeight: 'bold' }}> {buttonText1.text} </Button> 
          </Link>) :
         (
         <Button size="small" style={{ fontWeight: 'bold' }} variant={buttonText1.variant} color={buttonText1.color}>{buttonText1.text}</Button>)}

        {typeof buttonText2 === "undefined" ? null : 
        ( user.type === 'mentee' ?
         (
         <Button size="small" style={{ fontWeight: 'bold' }} onClick={handleClickSecondButton(buttonText2.text)} 
         variant={buttonText2.variant} color = {buttonText2.color}
         >{buttonText2.text}</Button> 
         )
         : (
         <Button size="small"varian={buttonText2.variant} color = {buttonText2.color} onClick={handleClickSecondButton(buttonText2.text)}
         style={{ fontWeight: 'bold' }}>{buttonText2.text}</Button> )) }

        </CardActions>

        {/* <UserContentDetails name={name} phone={phone} email={email} /> */}

      </Card>
    // </UserContentDetailsContext.Provider>
  );
}