import React, {useState, useContext} from 'react';
import * as Constantans from '../Constants';
import { UserRole } from '../context/UserRole';
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

const RoleFormPAge = () => {
  const {role, setRole} = useContext(UserRole);
  return (
    <>
    <FormPage filedsArray = {questionType(role)} 
    title = {`Tell Us About Your Preferences as a ${role ? role.toUpperCase() : 'None'}!`}
    nextTo= {'/' + Constantans.HOME_PAGE}
    prevTo= {'../'} />
    </>
  )
  };

export default RoleFormPAge;
