import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/SignInPage';
import ChooseRolePage from './pages/sign-up/ChooseRolePage';
import RoleFormPAge from './pages/sign-up/RoleFormPage';
import MentorPendingsAndRunningPage from './pages/MentorPendingsAndRunningPage';
import LandingPage from './pages/LandingPage';
import ProcessCompletionPage from './pages/ProcessCompletionPage';
import * as Constants from './Constants';
import MentorFinishedPage from './pages/MentorFinishedPage';
import { UserContext } from './context/UserContext';
import NewFormPage from './pages/sign-up/NewFormPage';

import {
  BrowserRouter
  ,Link
  ,Routes
  ,Route
  // ,createRoutesFromElements
  // ,createBrowserRouter
} from 'react-router-dom'
import DataBase from './data/DataBase';

import { useContext, useState } from 'react';
//import { UserRole } from './context/UserRole';
import SignUpFlow from './pages/SignUpFlow';

import {createTheme, ThemeProvider} from '@mui/material';
import HomePageMain from './pages/HomePageMain';

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
      appBackground: {
        main: '#f8f2ec',
      },

      fieldColor: 
      {
        main: '#BBDEFB', // $rmd-blue-100
      },
      fieldPressedColor: 
      {
        main: '#64B5F6', // $rmd-blue-300
      },
      fieldHeadlineColor:
      {
        main: '#00B0FF' // $rmd-light-blue-a-400
      },
      techSkillColor:
      {
        main: '#B2EBF2', // $rmd-cyan-100
      },
      techSkillPressedColor:
      {
        main: '#4DD0E1', // $rmd-cyan-300
      },
      techSkillHeadlineColor:
      {
        main: '#00E5FF', // $rmd-cyan-a-400
      },
      softSkillColor:
      {
        main: '#B2DFDB', // $rmd-teal-100
      },
      softSkillPressedColor:
      {
        main: '#4DB6AC', // $rmd-teal-300
      },
      softSkillHeadlineColor:
      {
        main: '#1DE9B6', // $rmd-teal-a-400
      },
      agendaColor:
      {
        main: '#C8E6C9', // $rmd-green-100
      },
      agendaPressedColor:
      {
        main: '#81C784', // $rmd-green-300
      },
      agendaHeadlineColor:
      {
        main: '#00E676', // $rmd-green-a-400
      }

    },
    typography: {
      fontFamily: 'Gruppo, sans-serif', // Set the primary font
    },
  });

function addSemi(string){
    return('/' + string)
}
const data = new DataBase()

function App() {
    const MnM = [data.findByName('Yuval'), data.findByName('Nits')]
    const [user, setUser] = useState(data.findByName('Yuval'));
    const [cur, setCur] = useState(0);
    const [userType, setUserType] = useState(user.type);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [dataBase, setDataBase] = useState(data);
    
    function handelUserChange(){
        setCur(cur+1)
        setUser(MnM[(cur + 1) % 2 ]);
    }
    return (
    
    <ThemeProvider theme = {theme}>
    <>
    
    {/* <button onClick={() => setRole(200)}> setRole </button>  */}
    <BrowserRouter>
        <button onClick={handelUserChange}> {user.type} flow </button>    
        <UserContext.Provider value={{userType, setUserType, email, setEmail, name, setName, user, setUser, dataBase}}>
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
                <Route path={Constants.HOME_PAGE + '/*'}
                    action={({ params }) => {}}
                    element = {<HomePageMain user={user}/>}
                    exact
                    />;
                
                <Route path={Constants.PROCESS_COMPLETION_FORM}
                    action={({ params }) => {}}
                    element = {<ProcessCompletionPage user={user}/>}
                    exact
                    />;
                <Route path={Constants.NEW_FORM_PAGE}
                    action={({ params }) => {}}
                    element = {<NewFormPage user={user}/>}
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
