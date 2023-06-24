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
import Box from '@mui/material/Box';

import MentorApproval from "../components/MentorApproval";
import ChooseMentor from "../components/ChooseMentor";
import MatchSuccess from "../components/MatchSuccess";
import NewFormPage from "./sign-up/NewFormPage";
import ButtomBar from "../components/ButtomBar";
import ProfilePage from "../components/ProfilePage";
import SignUpLoading from "./sign-up/SignUpLoading";


const NavCont = styled('nav')(({ theme }) => ({
    // position: 'ab',
    top: 0,
    zIndex: 1
  }));

export default function HomePageMain() {
    const {user, setUser, userData, setUserData, loading, setLoading, setEnterHome, fullDataFetched} = UserAuth();
    const [showMenu, setShowMenu] = React.useState(false);
    const [bottomNavValue, setBottomNavValue] = React.useState(0);
    const [feedData, setFeedData] = React.useState(userData);
    const [localLoading, setLocalLoading] = React.useState(false);
    

    useEffect(() => {
        setLocalLoading(true);
        console.log("User is logged in and signed up, fetching data");
        setEnterHome(true);
        if(fullDataFetched){
            console.log("After Fetching Extra User Data ", userData);
            setFeedData(userData);
            setLocalLoading(false);
        }
        
    }, []);

    const PageContainer = styled(Box)({
        position: 'sticky',  // Positioned relative to its normal position
        marginTop: '60px',  // Assuming your navbar height is 64px
        marginBottom: '40px',  // Assuming your bottom bar height is 56px
        
        
      });
    
    const intervieweeHomePage = () => {
        if(userData.type === 'mentee'){
            return !userData.isMatched ? <MenteeMatchingPage user={feedData} /> : <MatchSuccess mentee={feedData} />
        }
        else{
            return <MentorPendingsAndRunningPage user={feedData} />
        }
    }

    return (
        <UserContext.Provider value={{feedData, setFeedData}}>
            <div style={{ backgroundColor: '#F8FFFF' }}>
                {console.log("User Data", userData, feedData, fullDataFetched)}
                <HamburgerMenuContext.Provider value={{showMenu, setShowMenu}}>
                    
                    <NavigationBar user = {userData ? userData : null}/>
                    

                    <PageContainer>
                    {
                    loading | localLoading ? 
                        ( <SignUpLoading text={"Loading..."}></SignUpLoading> )
                        :
                        (
                        <Routes>
                            <Route path="/" element={
                                feedData.type === 'mentor' ? <MentorPendingsAndRunningPage user={feedData} /> : 
                                !feedData.isMatched ? <MenteeMatchingPage user={feedData} /> : <MatchSuccess mentee={feedData} /> } exact/>
                                {/* // : <MentorApproval mentee={userData} /> } exact/> */}
                            <Route path={CONSTANTS.MENTOR_FINISHED_PAGE} element={<MentorFinishedPage user={feedData} />} />
                            <Route path={CONSTANTS.MENTOR_IN_PROCESS_PAGE} element={<MentorInProcessPage user={feedData} />} />
                            <Route path={CONSTANTS.PROCESS_COMPLETION_FORM} element={<ProcessCompletionPage user={feedData} />} />
                            <Route path={CONSTANTS.ABOUT_PAGE} element={<AboutPage user={feedData} />} />
                            <Route path={CONSTANTS.RECOMMENDATINS_PAGE} element={<Recommendations user={feedData} />} />
                            <Route path={CONSTANTS.CHOOSE_MENTOR_PAGE} element={<ChooseMentor mentee={feedData} />} />
                            <Route path={CONSTANTS.MENTEE_STATUS} element={<MenteeMatchingPage mentee={feedData} />} />
                            <Route path={CONSTANTS.WAIT_MENTOR_APPROVAL_PAGE} element={<MentorApproval mentee={feedData} />} />
                            <Route path={CONSTANTS.MATCH_SUCCESS_PAGE} element={<MatchSuccess mentee={feedData} />} />
                            <Route path={CONSTANTS.NEW_FORM_PAGE} element={<NewFormPage user={feedData} />} />
                            <Route path={CONSTANTS.PROFILE_PAGE} element={<ProfilePage user={feedData} />} />
                        </Routes>
                        )
                    }
                    </PageContainer>
                    <ButtomBar user={feedData}></ButtomBar>
                </HamburgerMenuContext.Provider>
            </div>
        </UserContext.Provider>
    )
}