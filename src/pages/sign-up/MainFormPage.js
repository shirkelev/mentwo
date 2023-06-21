import React, {useState, useContext, useEffect} from 'react';
import * as Constantans from '../../Constants';
import { SignUpContext } from '../../context/SignUpContexts';
import FormPage from './FormPage';
import { Button } from '@mui/material';
import { DB } from '../../data/firebase';


const MainFormPage = ({onSave}) => {
  const {step, setStep, completed, 
      setCompleted, form, setForm, userInfo, setUserInfo} = useContext(SignUpContext);
    
  const [basicInfo, setBasicInfo] = useState({
    name: userInfo.name ? userInfo.name : '',
    lastName: userInfo.lastName ? userInfo.lastName : '',
    phone: userInfo.phone ? userInfo.phone : '',
    img: userInfo.img ? userInfo.img : '',
  });
  
  function checkMainForm(form){
    return form.name !== '' & form.lastName !== '' & form.phone !== '';
  }

  function handleChange(id, event){
    let newForm = basicInfo;
    newForm[id] = event;
    setBasicInfo(newForm);
  }

  async function onClickSave(newInfo){
    if(checkMainForm(newInfo)){
      setUserInfo(newInfo);
      await onSave(newInfo);
      let newCompleted = completed;
      newCompleted[step] = true;
      setCompleted(newCompleted);
      setStep(step + 1);
    }
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
      onSave={onClickSave}/>
    
    </>
  )
  };

export default MainFormPage;
