import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import ChooseRolePage from './pages/ChooseRolePage';
import QuestionnairePage from './pages/QuestionnairePage';
import HomePage from './pages/HomePage';
import ProcessCompletionPage from './pages/ProcessCompletionPage';
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

function App() {
  const data = new DataBase()
  console.log(data)
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/choose-role"
                action={({ params }) => {}}
                element = {<ChooseRolePage />}
                exact
                />;
            <Route path="/sign-in"
                action={({ params }) => {}}
                element = {<SignInPage />}
                exact
                />;
            <Route path="/quest-page"
                action={({ params }) => {}}
                element = {<QuestionnairePage />}
                exact
                />;
            <Route path="/home-page"
                action={({ params }) => {}}
                element = {<HomePage user={data.findByName('Nits')}/>}
                exact
                />;
            <Route path="/process-completion"
                action={({ params }) => {}}
                element = {<ProcessCompletionPage user={data.findByName('Yuval')}/>}
                exact
                />;
        </Routes>
    </ BrowserRouter>
    </>
  );
}

export default App;
