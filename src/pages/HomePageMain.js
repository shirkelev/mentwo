import React, {useContext, useEffect} from "react";

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
import { UserAuth } from "../context/AuthContext";
import { DB } from "../data/firebase";

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
    const [localLoading, setLocalLoading] = React.useState(true);
    const [dataFetched, setDataFetched] = React.useState(false);
    const [feedData, setFeedData] = React.useState(null);
    // const {user, setUser, dataBase} = useContext(UserContext);
    const {user, setUser, userData, setUserData, loading, setLoading} = UserAuth();

    const fetchData = async () => {
        if(!dataFetched) {
            try{
                console.log("Fetching Extra User Data ", user.uid, " ...", userData);
                const userExtraData = await DB.getRoleData(user.uid);
                console.log("New User Data", userExtraData.data());
                // setUserData({...userData, ...userExtraData.data()});
                setFeedData({...userData, ...userExtraData.data()});
                setLocalLoading(false);

            } catch (error) {
                console.log(error);
                setLoading(false);
            };
        }
        if(!dataFetched && feedData) {
            console.log("Setting User Data", feedData);
            setUserData(feedData);
            setDataFetched(true);
        }
    }

    useEffect(() => {
        console.log("Trying to fetch data")
        fetchData();
    }, []);


    return (
        <div style={{ backgroundColor: '#FEFCFF' }}>
            {console.log("User Data", userData, feedData, localLoading, feedData, dataFetched)}
            <HamburgerMenuContext.Provider value={{showMenu, setShowMenu}}>
                <NavCont>
                    <NavigationBar user = {userData ? userData : null}/>
                </ NavCont>
                {
                localLoading ? 
                    ( <div> Loading... </div> )
                    :
                    (
                    <Routes>
                        <Route path="/" element={userData.type === 'mentor' ? <MentorPendingsAndRunningPage user={userData} /> : <MenteeMatchingPage user={userData} />} exact/>
                        <Route path={CONSTANTS.MENTOR_FINISHED_PAGE} element={<MentorFinishedPage user={userData} />} />
                        <Route path={CONSTANTS.MENTOR_IN_PROCESS_PAGE} element={<MentorInProcessPage user={userData} />} />
                        <Route path={CONSTANTS.PROCESS_COMPLETION_FORM} element={<ProcessCompletionPage user={userData} />} />
                        <Route path={CONSTANTS.ABOUT_PAGE} element={<AboutPage user={userData} />} />
                        <Route path={CONSTANTS.RECOMMENDATINS_PAGE} element={<Recommendations user={userData} />} />
                        <Route path={CONSTANTS.CHOOSE_MENTOR_PAGE} element={<ChooseMentor mentee={userData} />} />
                        <Route path={CONSTANTS.MENTEE_STATUS} element={<MenteeMatchingPage mentee={userData} />} />
                        <Route path={CONSTANTS.WAIT_MENTOR_APPROVAL_PAGE} element={<MentorApproval mentee={userData} />} />
                        <Route path={CONSTANTS.MATCH_SUCCESS_PAGE} element={<MatchSuccess mentee={userData} />} />
                        <Route path={CONSTANTS.NEW_FORM_PAGE} element={<NewFormPage user={userData} />} />
                    </Routes>
                    )
                }
            </HamburgerMenuContext.Provider>
        </div>
    )
}