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
//todo: ask shir to change context
import { HamburgerMenuContext } from '../context/HamburgerMenuContexts';


function handleClick(path) {
    window.location.href = path;
    // window.history.pushState(null, "", path);
    // window.location.reload();
}
const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
  });


export default function BottomAppBar({user}) {
    //todo: ask shir
    const {showMenu, setShowMenu} = React.useContext(HamburgerMenuContext);
    if (!user || user.type === 'mentor') { // todo: change when we have global var of user!
        return (
            <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <StyledToolbar>
                <IconButton color="inherit" aria-label="Interviewees Suggestions"  onClick={() => handleClick('./')}>
                    <GroupIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Approved Interviewees"  onClick = {() => handleClick('./' + Constants.MENTOR_IN_PROCESS_PAGE)} >
                    <HowToRegIcon/ >
                </IconButton>
                <IconButton color="inherit" aria-label="Finished Interviews"  onClick = {() => handleClick('./' + Constants.MENTOR_FINISHED_PAGE)} >
                    <Check/ >
                </IconButton>
                <IconButton color="inherit" aria-label="Mock Interviews Tips"  onClick = {() => handleClick("./" + Constants.RECOMMENDATINS_PAGE)} >
                    <NextWeekIcon/ >
                </IconButton>
                </StyledToolbar>
            </AppBar>
            </React.Fragment>
  );
}
else {
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <StyledToolbar>
            <IconButton color="inherit" aria-label="Current Status"  path={
                  user.currentMentor != null
                    ? Constants.MATCH_SUCCESS_PAGE
                    : Constants.MENTEE_STATUS
                }>
                <AutorenewIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Mock Interviews Tips"  onClick = {() => handleClick("./" + Constants.RECOMMENDATINS_PAGE)} >
                <NextWeekIcon/ >
            </IconButton>
            </StyledToolbar>
        </AppBar>
        </React.Fragment>
); }
    
};