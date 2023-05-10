import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/SignInPage';
import ChooseRolePage from './pages/ChooseRolePage';
import RoleFormPAge from './pages/RoleFormPage';
import MentorPendingsAndRunningPage from './pages/MentorPendingsAndRunningPage';
import LandingPage from './pages/LandingPage';
import ProcessCompletionPage from './pages/ProcessCompletionPage';
import * as Constants from './Constants';
import MentorFinishedPage from './pages/MentorFinishedPage';
import { UserContext } from './context/UserContext';

import {
  BrowserRouter
  ,Link
  ,Routes
  ,Route
  // ,createRoutesFromElements
  // ,createBrowserRouter
} from 'react-router-dom'
import DataBase from './data/DataBase';
import MenteeStatusPage from './pages/MenteeStatusPage';
import { useContext, useState } from 'react';
//import { UserRole } from './context/UserRole';
import SignUpFlow from './pages/SignUpFlow';

import {createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#b1a5e3',
        },
        secondary: {
            main: '#5797de',
        },
        info: {
            main: '#ffecb3',
        },
        },
})


function addSemi(string){
    return('/' + string)
}
const data = new DataBase()

function App({user = data.findByName('Yuval')}) {
    
    const [userType, setUserType] = useState(user.type);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);

    return (
    <ThemeProvider theme = {theme}>
    <>
    {/* <h1> { role } </h1>
    <button onClick={() => setRole(200)}> setRole </button> */}
    <BrowserRouter>
        <UserContext.Provider value={{userType, setUserType, email, setEmail, name, setName}}>
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
                <Route path={Constants.MENTOR_PENDINGS_AND_RUNNING_PAGE}
                    action={({ params }) => {}}
                    element = {<MentorPendingsAndRunningPage user={user}/>}
                    exact
                    />;
                <Route path={Constants.MENTEE_STATUS}
                action={({ params }) => {}}
                element = {<MenteeStatusPage picturePath={'./data/images/nitzan.jpeg'} status={0} />}
                exact
                />;
                <Route path={Constants.PROCESS_COMPLETION_FORM}
                    action={({ params }) => {}}
                    element = {<ProcessCompletionPage user={user}/>}
                    exact
                    />;
                <Route path={Constants.MENTOR_FINISHED_PAGE}
                    action={({ params }) => {}}
                    element = {<MentorFinishedPage user={user}/>}
                    exact
                    />;
            </Routes>
        </UserContext.Provider>
        
    </ BrowserRouter>
    {/* </UserRole.Provider> */}
    
    </>
    </ThemeProvider>
  );
}

export default App;
