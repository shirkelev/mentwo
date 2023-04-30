import React, {useState, useContext} from 'react';
import * as Constantans from '../Constants';
import { SignUpContext } from '../context/SignUpContexts';
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
  const {role} = useContext(SignUpContext);

  function checkRoleForm(form = null){
    return true;
  }
  
  function handleClickSave(form = null){
    if(checkRoleForm(form)){
      return true;
    }
    else{
      return false;
    }
  }
  return (
    <>
    <FormPage filedsArray = {questionType(role)} 
    title = {`Tell Us About Your Preferences as a ${role ? role.toUpperCase() : 'None'}!`}
    nextTo= {'/' + Constantans.MENTOR_PENDINGS_AND_RUNNING_PAGE}
    prevTo= {'../'} 
    onSave = {() => null} />
    </>
  )
  };

export default RoleFormPAge;
