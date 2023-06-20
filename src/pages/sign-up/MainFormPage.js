import React, {useState, useContext, useEffect} from 'react';
import * as Constantans from '../../Constants';
import { SignUpContext } from '../../context/SignUpContexts';
import FormPage from './FormPage';
import { Button } from '@mui/material';


const MainFormPage = () => {
  const {step, setStep, completed, 
      setCompleted, form, setForm, userInfo, setUserInfo} = useContext(SignUpContext);
    
  const [basicInfo, setBasicInfo] = useState({
    name: userInfo.name ? userInfo.name : '',
    lastName: userInfo.lastName ? userInfo.lastName : '',
    phone: userInfo.phone ? userInfo.phone : '',
    img: userInfo.img ? userInfo.img : '',
  });
  
  function checkMainForm(form = null){
    return true;
  }

  function handleChange(id, event){
    let newForm = basicInfo;
    newForm[id] = event;
    setBasicInfo(newForm);
  }

  function onSave(){
    setUserInfo({...basicInfo});
    setStep(step + 1);
  }

  

  return (

    <>
    <FormPage filedsArray = {Constantans.DEFAULT_QUESTIONS} 
      title='Basic Info'
      nextTo= {''}
      prevTo= {'../'} 
      condition={true}
      imgButton={true}
      userInfo={userInfo} 
      onSave={onSave}/>
    
    </>
  )
  };

export default MainFormPage;
