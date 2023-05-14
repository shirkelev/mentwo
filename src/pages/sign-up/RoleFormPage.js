import React, {useState, useContext} from 'react';
import Typography from '@mui/material/Typography';
import * as Constantans from '../../Constants';
import { SignUpContext } from '../../context/SignUpContexts';
import FormPage from './FormPage';
import Mentor from '../../data/Mentor';
import Mentee from '../../data/Mentee';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router';


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

function createNewUser(form, role){
  
  if(role==='mentor'){
    return (
      new Mentor(form.userName
        ,form.firstName
        ,form.lastName
        ,form.password
        ,require('../../data/images/shir.jpeg')
        ,form.email
        ,form.capacity
        ,form.description
        ,form.profession)
    )}
    if(role=== 'mentee'){
      return (new Mentee(form.userName
        ,form.firstName
        ,form.lastName
        , form.password
        ,require('../../data/images/omer.jpeg')
        ,form.email
        ,form.capacity
        ,form.description
        ,form.profession)
      )
    }
    else{
      alert('You have to choose role first!')
    } 
    }


const RoleFormPAge = ({onSave}) => {
  const navigate = useNavigate()
  const {role, saveSuccess, form} = useContext(SignUpContext);
  const {setUser, dataBase} = useContext(UserContext);
  
  function handleClickSave(form = null){
    if(saveSuccess(form)){
      const newUser = createNewUser(form, role);
      alert(newUser.firstName + ' ' + newUser.lastName )
      setUser(newUser);
      navigate('../' + Constantans.HOME_PAGE);
    }
    else{
      return false;
    }
  }
  const filedsArray = questionType(role);
  return (
    <>
    {filedsArray.length > 0 ? <FormPage filedsArray = {filedsArray} 
    title = {`Tell Us About Your Preferences as a ${role ? role.toUpperCase() : 'None'}!`}
    // nextTo= {'../' + Constantans.HOME_PAGE}
    nextTo= {''}
    prevTo= {''} 
    onSave = {() => handleClickSave(form)} /> : <div sx={{flexGrow:1}}>
      <Typography variant = "h3">You have to choose role first!</Typography>
      </div>}
    </>
  )
  };
 
export default RoleFormPAge;
