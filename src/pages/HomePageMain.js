import React, {useContext} from "react";

import MentorFinishedPage from "./MentorFinishedPage";
import MenteeStatusPage from "./MenteeStatusPage";
import MentorPendingsAndRunningPage from "./MentorPendingsAndRunningPage";
import ProcessCompletionPage from "./ProcessCompletionPage";
import AboutPage from "./AboutPage";
import Recommendations from "./Recommendations";
import NavigationBar from "../components/NavigationBar";
import {
   
    Routes,
    Route
} from "react-router-dom";  
import * as CONSTANTS from '../Constants';
import { HamburgerMenuContext } from "../context/HamburgerMenuContexts";
import { styled } from '@mui/material/styles';
import { UserContext } from "../context/UserContext";


// import MentoringProcess from "../components/MentoringProcess";
// export const MATCH_ = 'match';

const NavCont = styled('nav')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    zIndex: 1
  }));

export default function HomePageMain() {
    const [showMenu, setShowMenu] = React.useState(false);
    const {user, setUser, dataBase} = useContext(UserContext);
    return (
        <>
        <HamburgerMenuContext.Provider value={{showMenu, setShowMenu}}>
            <NavCont>
                <NavigationBar user = {user}/>
            </ NavCont>
            <Routes>
                <Route path="/" element={user.type === 'mentor' ? <MentorPendingsAndRunningPage user={user} /> : <MenteeStatusPage user={user} />} exact/>
                <Route path={CONSTANTS.MENTOR_FINISHED_PAGE} element={<MentorFinishedPage user={user} />} />
                <Route path={CONSTANTS.PROCESS_COMPLETION_FORM} element={<ProcessCompletionPage user={user} />} />
                <Route path={CONSTANTS.ABOUT_PAGE} element={<AboutPage user={user} />} />
                <Route path={CONSTANTS.RECOMMENDATINS_PAGE} element={<Recommendations user={user} />} />

                {/* <Route path={MATCH_} element={<MentoringProcess mentee={dataBase.data[2]} />} /> */}
            </Routes>
        </HamburgerMenuContext.Provider>
        </>
    )
}