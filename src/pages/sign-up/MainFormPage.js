import React, {useState, useContext} from 'react';
import * as Constantans from '../../Constants';
import { SignUpContext } from '../../context/SignUpContexts';
import FormPage from './FormPage';


const MainFormPage = () => {
  const {step, setStep, completed, setCompleted, form, setForm} = useContext(SignUpContext);

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
    <FormPage filedsArray = {Constantans.DEFAULT_QUESTIONS} 
    title='Tell Us About Yourself!'
    nextTo= {''}
    prevTo= {'../'} 
    condition={true} />
    </>
  )
  };

export default MainFormPage;
