import React, {useState, useContext} from 'react';
import Typography from '@mui/material/Typography';
import * as Constantans from '../../Constants';
import { SignUpContext } from '../../context/SignUpContexts';
import FormPage from './FormPage';



function questionType(role){
  if(role === 'mentor'){
    return(
      Constantans.MENTOR_QUESTIONS
    )
  }
  else if (role === 'mentee'){
    return(
      Constantans.MENTEE_QUESTIONS
    )
  }
  else {
    return(
      []
    )
  }
}


const RoleFormPAge = ({onSave}) => {

  const {role, saveSuccess, form} = useContext(SignUpContext);
  
  const filedsArray = questionType(role);
  return (
    <>
    {filedsArray.length > 0 ? <FormPage filedsArray = {filedsArray} 
    title = {`Your ${role ? role.toUpperCase() : 'None'} Details!`}
    nextTo= {''}
    prevTo= {''}  /> : <div sx={{flexGrow:1}}>
      <Typography variant = "h3">You have to choose role first!</Typography>
      </div>}
    </>
  )
  };
 
export default RoleFormPAge;
