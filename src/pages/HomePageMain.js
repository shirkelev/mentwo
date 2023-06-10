import React, {useContext} from "react";

import MentorFinishedPage from "./MentorFinishedPage";
import MenteeMatchingPage from "./MenteeMatchingPage";
import MentorPendingsAndRunningPage from "./MentorPendingsAndRunningPage";
import ProcessCompletionPage from "./ProcessCompletionPage";
import AboutPage from "./AboutPage";
import Recommendations from "./Recommendations";
import NavigationBar from "../components/NavigationBar";
import MentorInProcessPage from "./MentorInProcessPage";
import {
   
    Routes,
    Route
} from "react-router-dom";  
import * as CONSTANTS from '../Constants';
import { HamburgerMenuContext } from "../context/HamburgerMenuContexts";
import { styled } from '@mui/material/styles';
import { UserContext } from "../context/UserContext";

import MentorApproval from "../components/MentorApproval";
import ChooseMentor from "../components/ChooseMentor";
import MatchSuccess from "../components/MatchSuccess";
import NewFormPage from "./sign-up/NewFormPage";

const NavCont = styled('nav')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    zIndex: 1
  }));

export default function HomePageMain() {
    const [showMenu, setShowMenu] = React.useState(false);
    const {user, setUser, dataBase} = useContext(UserContext);
    return (
        <div style={{ backgroundColor: '#FEFCFF' }}>
            <HamburgerMenuContext.Provider value={{showMenu, setShowMenu}}>
                <NavCont>
                    <NavigationBar user = {user}/>
                </ NavCont>
                <Routes>
                    <Route path="/" element={user.type === 'mentor' ? <MentorPendingsAndRunningPage user={user} /> : <MenteeMatchingPage user={user} />} exact/>
                    <Route path={CONSTANTS.MENTOR_FINISHED_PAGE} element={<MentorFinishedPage user={user} />} />
                    <Route path={CONSTANTS.MENTOR_IN_PROCESS_PAGE} element={<MentorInProcessPage user={user} />} />
                    <Route path={CONSTANTS.PROCESS_COMPLETION_FORM} element={<ProcessCompletionPage user={user} />} />
                    <Route path={CONSTANTS.ABOUT_PAGE} element={<AboutPage user={user} />} />
                    <Route path={CONSTANTS.RECOMMENDATINS_PAGE} element={<Recommendations user={user} />} />
                    <Route path={CONSTANTS.CHOOSE_MENTOR_PAGE} element={<ChooseMentor mentee={dataBase.data[2]} />} />
                    <Route path={CONSTANTS.MENTEE_STATUS} element={<MenteeMatchingPage mentee={dataBase.data[2]} />} />
                    <Route path={CONSTANTS.WAIT_MENTOR_APPROVAL_PAGE} element={<MentorApproval mentee={dataBase.data[2]} />} />
                    <Route path={CONSTANTS.MATCH_SUCCESS_PAGE} element={<MatchSuccess mentee={dataBase.data[2]} />} />
                    <Route path={CONSTANTS.NEW_FORM_PAGE} element={<NewFormPage user={user} />} />
                </Routes>
            </HamburgerMenuContext.Provider>
        </div>
    )
}