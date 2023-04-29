import React, {useState, useContext} from 'react';
import * as Constantans from '../Constants';
import { UserRole } from '../context/UserRole';
import FormPage from './FormPage';


const MainFormPage = () => {
  return (
    <>
    <FormPage filedsArray = {Constantans.DEFAULT_QUESTIONS} 
    title='Tell Us About Yourself!'
    nextTo= {'./' + Constantans.CHOOSE_ROLE_PAGE}
    prevTo= {'../'} />
    </>
  )
  };

export default MainFormPage;
