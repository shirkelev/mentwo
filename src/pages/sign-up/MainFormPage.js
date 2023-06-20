import React, {useState, useContext, useEffect} from 'react';
import * as Constantans from '../../Constants';
import { SignUpContext } from '../../context/SignUpContexts';
import FormPage from './FormPage';


const MainFormPage = () => {
  const {step, setStep, completed, 
      setCompleted, form, setForm, userInfo, setUserInfo} = useContext(SignUpContext);
  
  function checkMainForm(form = null){
    return true;
  }

  function handleChange(id, event){
    let newForm = form;
    newForm[id] = event;
    setForm(newForm);
  }

  

  return (

    <>
    {console.log('MainFormPage', userInfo)}
    <FormPage filedsArray = {Constantans.DEFAULT_QUESTIONS} 
    title='Basic Info'
    nextTo= {''}
    prevTo= {'../'} 
    condition={true}
    imgButton={true}
    userInfo={userInfo} />
    </>
  )
  };

export default MainFormPage;
