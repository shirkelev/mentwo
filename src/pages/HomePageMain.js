import React, {useContext} from "react";

import MentorFinishedPage from "./MentorFinishedPage";
import MenteeStatusPage from "./MenteeStatusPage";
import MentorPendingsAndRunningPage from "./MentorPendingsAndRunningPage";
import ProcessCompletionPage from "./ProcessCompletionPage";
import NavigationBar from "../components/NavigationBar";
import {
   
    Routes,
    Route
} from "react-router-dom";  
import * as CONSTANTS from '../Constants';
import { HamburgerMenuContext } from "../context/HamburgerMenuContexts";
import { styled } from '@mui/material/styles';
import { UserContext } from "../context/UserContext";



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
                <NavigationBar />
            </ NavCont>
            <Routes>
                <Route path="/" element={user.type === 'mentor' ? <MentorPendingsAndRunningPage user={user} /> : <MenteeStatusPage user={user} />} exact/>
                <Route path={CONSTANTS.MENTOR_FINISHED_PAGE} element={<MentorFinishedPage user={user} />} />
                <Route path={CONSTANTS.PROCESS_COMPLETION_FORM} element={<ProcessCompletionPage user={user} />} />
            </Routes>
        </HamburgerMenuContext.Provider>
        </>
    )
}