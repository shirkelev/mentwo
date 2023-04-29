import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import ChooseRolePage from './pages/ChooseRolePage';
import QuestionnairePage from './pages/QuestionnairePage';
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
import SignInPage from './pages/SignUpPage';
import DataBase from './data/DataBase';
import ChooseMentorPage from './pages/ChooseMentorPage';
import MenteeStatusPage from './pages/MenteeStatusPage';

function addSemi(string){
    return('/' + string)
}

function App() {
  const data = new DataBase()
  console.log(data)
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path= {Constants.CHOOSE_ROLE_PAGE}
                action={({ params }) => {}}
                element = {<ChooseRolePage />}
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
            <Route path={Constants.REG_FORM}
                action={({ params }) => {}}
                element = {<QuestionnairePage />}
                exact
                />;
            <Route path={Constants.HOME_PAGE}
                action={({ params }) => {}}
                element = {<HomePage user={data.findByName('Nits')}/>}
                exact
                />;
            <Route path="/Choose-Mentor-page"
              action={({ params }) => {}}
              element = {<ChooseMentorPage />}
              exact
              />;
            <Route path="/MenteeStatusPage"
              action={({ params }) => {}}
              element = {<MenteeStatusPage picturePath={'./data/images/nitzan.jpeg'} />}
              exact
              />;
            <Route path={Constants.PROCESS_COMPLETION_FORM}
                action={({ params }) => {}}
                element = {<ProcessCompletionPage user={data.findByName('Nits')}/>}
                exact
                />;
        </Routes>
    </ BrowserRouter>
    </>
  );
}

export default App;
