import './App.css';
import SignUpPage from './pages/SignInPage';
import LandingPage from './pages/LandingPage';
import ProcessCompletionPage from './pages/ProcessCompletionPage';
import * as Constants from './Constants';
import { UserContext } from './context/UserContext';
import NewFormPage from './pages/sign-up/NewFormPage';
import { DB } from './data/firebase';
import {
  BrowserRouter
  ,Link
  ,Routes
  ,Route
  ,Navigate,
  useNavigate
} from 'react-router-dom'
import DataBase from './data/DataBase';
import { UserAuth } from './context/AuthContext';

import { useContext, useState, useEffect, Children} from 'react';
//import { UserRole } from './context/UserRole';
import SignUpFlow from './pages/SignUpFlow';

import {createTheme, ThemeProvider} from '@mui/material';
import HomePageMain from './pages/HomePageMain';

const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#00B0FF',
      },
      secondary: {
        main: '#00B0FF',
      },
      info: {
        main: '#80D8FF',
      },
      appBackground: {
        main: '#FEFCFF',
      },

      fieldColor: 
      {
        main: '#d6f1fe', // $rmd-blue-70~
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
        main: '#d4f4f8', // $rmd-cyan-70~
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
        main: '#d4edec', // $rmd-teal-70~
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
        main: '#e0f1e1', // $rmd-green-70~
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

const data = new DataBase()

function App() {
  const MnM = [data.findByName('Yuval'), data.findByName('Nits')]
  const {user, setUser, userData, setUserData, logOut, fetchExtraData} = UserAuth();
  console.log(user?.uid ?  user.uid : null, 'Here')
  // const [users, setUsers] = useState([]);
  const [cur, setCur] = useState(0);
  // const [dataBase, setDataBase] = useState(DB);

  
  const ProtectedSignUp = ({children}) => {
    if(!user){
      return <Navigate to={'../' + Constants.SIGN_IN} />;
    } else if(user && userData && userData.signedUp) {
      return <Navigate to={'../' + Constants.HOME_PAGE + user.uid} />;
    } else {
      return children;
    }}

  const ProtectedSignIn = ({children}) => {
    if(user){
      return <Navigate to='/' />
    } else {
      return children;
    }}
  
  const ProtectedLanding = ({children}) => {
    if(user && userData && userData.isSignUp ? true : false){
      return <Navigate to={Constants.HOME_PAGE + user.uid} />;
    } else if(user) {
      return <Navigate to={Constants.SIGN_UP} />;
    } else {
      return children;
    }}
  
  const ProtectedHomePage = ({children}) => {
    if(!(user && userData)){
      return <Navigate to='/' />;
    } else {
      return children;
    }}
  
  function handelUserChange(){
      setCur(cur+1)
      setUser(MnM[(cur + 1) % 2 ]);
  }

  function handelSignOut(){
    logOut();
    return <Navigate to='../' />;
  }

  return(  
    <>
    <ThemeProvider theme = {theme}>
    <BrowserRouter>
        <button onClick={handelUserChange}> change flow </button>
        <button onClick={handelSignOut}> LgOut </button>     
        <UserContext.Provider value={{}}>
            <Routes>
              <Route path={Constants.LANDING_PAGE}
                      action={({ params }) => {}}
                      element = {
                      <ProtectedLanding>
                        <LandingPage />
                      </ProtectedLanding>
                    }
                      exact
                      />;
              <Route path={Constants.SIGN_UP}
                  action={({ params }) => {}}
                  element = {
                  <ProtectedSignUp>
                    <SignUpFlow />
                  </ProtectedSignUp>                      
                }
                  exact
                  />;
              
              <Route path={Constants.SIGN_IN}
                  action={({ params }) => {}}
                  element = {
                  <ProtectedSignIn>
                    <SignUpPage />
                  </ProtectedSignIn>
                }
                  exact
                  />;
              
              <Route path={Constants.HOME_PAGE + (user ? user.uid : '') + '/*'}
                  action={({ params }) => {}}
                  element = {
                    <ProtectedHomePage>
                      <HomePageMain user={user}/>
                    </ProtectedHomePage>
                }
                  exact />;
              
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
      </ThemeProvider>
    </>
  );
}

export default App;
