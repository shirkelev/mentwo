import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GroupIcon from '@mui/icons-material/Group';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import * as Constants from '../Constants';
import Check from '@mui/icons-material/Check';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useNavigate } from 'react-router-dom';
import { HamburgerMenuContext } from '../context/HamburgerMenuContexts';
import { Box } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';





export default function BottomAppBar({user}) {
    const navigate = useNavigate();
    
    function handleClick(path) {
        navigate(path);
    }
    const StyledToolbar = styled(Toolbar)({
        justifyContent: 'space-between',
        margin: '2px',
      });
    

    const {showMenu, setShowMenu} = React.useContext(HamburgerMenuContext);
    if (!user || user.type === 'mentor') { // todo: change when we have global var of user!
        return (
            <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <StyledToolbar>
                <IconButton color="inherit" aria-label="Interviewees Suggestions"  onClick={() => handleClick('./')}>
                    <PersonAddIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Approved Interviewees"  onClick = {() => handleClick('./' + Constants.MENTOR_IN_PROCESS_PAGE)} >
                    <GroupsIcon/ >
                </IconButton>
                <IconButton color="inherit" aria-label="Finished Interviews"  onClick = {() => handleClick('./' + Constants.MENTOR_FINISHED_PAGE)} >
                    <HowToRegIcon/ >
                </IconButton>
                <IconButton color="inherit" aria-label="Mock Interviews Tips"  onClick = {() => handleClick("./" + Constants.RECOMMENDATINS_PAGE)} >
                    <ReviewsIcon/ >
                </IconButton>
                </StyledToolbar>
            </AppBar>
            { console.log(user.type)}
            </React.Fragment>
  );
}
else {
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <StyledToolbar>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <IconButton color="inherit" aria-label="Current Status" 
                onClick = {() => user.currentMentor != null
                    ? handleClick("./" + Constants.MATCH_SUCCESS_PAGE) 
                    :  handleClick("./" + Constants.MENTEE_STATUS) }>
                <AutorenewIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Finished Interviews"  onClick = {() => handleClick('./' + Constants.MENTEE_FINISHED_PAGE)} 
            >
                    <HowToRegIcon/ >
            </IconButton>
            <IconButton color="inherit" aria-label="Mock Interviews Tips"  onClick = {() => handleClick("./" + Constants.RECOMMENDATINS_PAGE)} >
                <ReviewsIcon/ >
            </IconButton>
            </Box>
            </StyledToolbar>
        </AppBar>
        </React.Fragment>
); }
    
};