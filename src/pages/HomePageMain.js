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
import ButtomBar from "../components/ButtomBar";
import ProfilePage from "../components/ProfilePage";

const NavCont = styled('nav')(({ theme }) => ({
    position: 'sticky',
    top: 0,
    zIndex: 1
  }));

export default function HomePageMain() {
    const [showMenu, setShowMenu] = React.useState(false);
    const [bottomNavValue, setBottomNavValue] = React.useState(0);
    // const {user, setUser, dataBase} = useContext(UserContext);
    const {user, setUser, userData, setUserData, loading, setLoading, setEnterHome} = UserAuth();

    // const fetchData = async () => {
    //     if(!dataFetched) {
    //     try{
    //         console.log("Fetching Extra User Data ", user.uid, " ...", userData);
    //         console.log("first update cur user data");
    //         const newUser = await DB.getUser(user.uid);
    //         const userExtraData = await DB.getRoleData(user.uid, newUser.data().type);
    //         console.log("New User Data", userExtraData.data());
    //         // setUserData({...newUser.data(), ...userExtraData.data()});
    //         // setFeedData({...newUser.data(), ...userExtraData.data()});
    //         // setDataFetched(true);
    //         // setLocalLoading(false);

    //     } catch (error) {
    //         console.log(error);
    //         setLocalLoading(false);
    //         setDataFetched(true);
    //     };
    // }
    //     if(!dataFetched && feedData) {
    //         console.log("Setting User Data", feedData);
    //         setDataFetched(true);
    //         setUserData(feedData);
            
    //     }
    

    useEffect(() => {
        console.log("User is logged in and signed up, fetching data");
        setEnterHome(true);
        
    }, []);


    return (
        <div style={{ backgroundColor: '#F8FFFF' }}>
            {console.log("User Data", userData)}
            <HamburgerMenuContext.Provider value={{showMenu, setShowMenu}}>
                <NavCont>
                    <NavigationBar user = {userData ? userData : null}/>
                </ NavCont>
                {
                loading ? 
                    ( <div> Loading... </div> )
                    :
                    (
                    <Routes>
                        <Route path="/" element={
                            userData.type === 'mentor' ? <MentorPendingsAndRunningPage user={userData} /> : 
                            !userData.isMatched ? <MenteeMatchingPage user={userData} /> : <MatchSuccess mentee={userData} /> } exact/>
                            {/* // : <MentorApproval mentee={userData} /> } exact/> */}
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
                        <Route path={CONSTANTS.PROFILE_PAGE} element={<ProfilePage user={userData} />} />
                    </Routes>
                    )
                }
                 <ButtomBar user={userData}></ButtomBar>
            </HamburgerMenuContext.Provider>
           

        </div>
    )
}