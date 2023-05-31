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

 /*
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
    fonts: {
        primary: {
            main: 'Roberto',
        }
        
    }
})
*/

// O.G: According to chatGPT in the Material-UI library, the standard theme object does not include a fonts property.
// Instead, the typography object within the theme contains properties such as fontFamily, fontSize, etc. 
// So, if your theme follows the standard Material-UI structure So it should be like this:
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
      techSkillColor:
      {
        main: '#B2EBF2', // $rmd-cyan-100
      },
      techSkillPressedColor:
      {
        main: '#4DD0E1', // $rmd-cyan-300
      },
      softSkillColor:
      {
        main: '#BBDEFB', // $rmd-blue-100
      },
      softSkillPressedColor:
      {
        main: '#64B5F6', // $rmd-blue-300
      },
      fieldColor: 
      {
        main: '#B2DFDB', // $rmd-teal-100
      },
      fieldPressedColor: 
      {
        main: '#4DB6AC', // $rmd-teal-300
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
            </Routes>
        </UserContext.Provider>
        
    </ BrowserRouter>
    {/* </UserRole.Provider> */}
    
    </>
    </ThemeProvider>
  );
}

export default App;
