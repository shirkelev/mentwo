import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/SignInPage';
import ChooseRolePage from './pages/ChooseRolePage';
import RoleFormPAge from './pages/RoleFormPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import ProcessCompletionPage from './pages/ProcessCompletionPage';
import * as Constants from './Constants';

import {
  BrowserRouter
  ,Link
  ,Routes
  ,Route
  // ,createRoutesFromElements
  // ,createBrowserRouter
} from 'react-router-dom'
import DataBase from './data/DataBase';
import ChooseMentorPage from './pages/ChooseMentorPage';
import MenteeStatusPage from './pages/MenteeStatusPage';
import { useContext, useState } from 'react';
//import { UserRole } from './context/UserRole';
import SignUpFlow from './pages/SignUpFlow';



function addSemi(string){
    return('/' + string)
}

function App() {
  const data = new DataBase()
//   const [role, setRole] = useState('Diif');
    return (
    <>
    {/* <h1> { role } </h1>
    <button onClick={() => setRole(200)}> setRole </button> */}
    <BrowserRouter>
        <Routes>
            <Route path={Constants.SIGN_UP + '/*'}
                action={({ params }) => {}}
                element = {<SignUpFlow />}
                exact
                />;
            <Route path={Constants.LANDING_PAGE}
                action={({ params }) => {}}
                element = {<LandingPage />}
                exact
                />;
            <Route path={Constants.SIGN_IN}
                action={({ params }) => {}}
                element = {<SignUpPage />}
                exact
                />;
            <Route path={Constants.HOME_PAGE}
                action={({ params }) => {}}
                element = {<HomePage user={data.findByName('Nits')}/>}
                exact
                />;
            <Route path={Constants.CHOOSE_MENTOR}
              action={({ params }) => {}}
              element = {<ChooseMentorPage />}
              exact
              />;
            <Route path={Constants.MENTEE_STATUS}
              action={({ params }) => {}}
              element = {<MenteeStatusPage picturePath={'./data/images/nitzan.jpeg'} status={0} />}
              exact
              />;
            <Route path={Constants.PROCESS_COMPLETION_FORM}
                action={({ params }) => {}}
                element = {<ProcessCompletionPage user={data.findByName('Nits')}/>}
                exact
                />;
        </Routes>
        
    </ BrowserRouter>
    {/* </UserRole.Provider> */}
    
    </>
  );
}

export default App;
