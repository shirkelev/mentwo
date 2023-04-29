import React, {useState} from 'react';
import RoleFormPAge from './RoleFormPage';
import ChooseRolePage from './ChooseRolePage';
import { UserRole } from '../context/UserRole';
import * as Constants from '../Constants';
import {
    Routes
    ,Route
    // ,createRoutesFromElements
    // ,createBrowserRouter
    } from 'react-router-dom'
import MainFormPage from './MainFormPage';




const SignUpFlow = ({props}) => {
    const [role, setRole] = useState(null);
    return (
        <>
        <UserRole.Provider value={{role, setRole}}>
            <Routes>
                <Route 
                    // path= {Constants.CHOOSE_ROLE_PAGE}
                    path='/'
                    action={({ props }) => {}}
                    element = {
                        <MainFormPage />
                    }
                    />;
                <Route 
                    path= {Constants.CHOOSE_ROLE_PAGE}
                    action={({ props }) => {}}
                    element = {
                        <ChooseRolePage />
                    }
                    />;
                <Route path= {Constants.REG_FORM}
                    action={({ props }) => {}}
                    element = {<RoleFormPAge />}
                    />;
            </Routes>
        </ UserRole.Provider>
        </>
  )};
export default SignUpFlow;