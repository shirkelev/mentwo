import React, {useState, useContext} from 'react';
import * as Constantans from '../Constants';
import { SignUpContext } from '../context/SignUpContexts';
import FormPage from './FormPage';


const MainFormPage = () => {
  const {step, setStep, completed, setCompleted} = useContext(SignUpContext);

  function checkMainForm(form = null){
    return true;
  }
  
  function handleClickSave(form = null){
    if(checkMainForm(form)){
      setStep(step + 1);
      let newCompleted = completed;
      newCompleted[step] = true;
      setCompleted(newCompleted);
    }
    else{
      return false;
    }
  }
  return (

    <>
    <FormPage filedsArray = {Constantans.DEFAULT_QUESTIONS} 
    title='Tell Us About Yourself!'
    nextTo= {'./' + Constantans.CHOOSE_ROLE_PAGE}
    prevTo= {'../'} 
    onSave={() => {handleClickSave()}}
    condition={true}/>
    
    </>
  )
  };

export default MainFormPage;
