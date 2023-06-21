import Fab from '@mui/material/Fab';
import * as Constants from '../../Constants';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ComputerIcon from '@mui/icons-material/Computer';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';

const NoShadowFab = styled(Fab)`
  box-shadow: none !important;
  height: 26px;
  pointer-events: none;
`;

const TagsCategory = ({ category, num=null, onClick=()=>{}}) => {
    
    let color;
    let Logo;
    switch (category) {
        case Constants.TECHSKILLS:
            color = 'techSkillHeadlineColor';
            Logo = () => {
                return(
                    <ComputerIcon sx={{ mr: 1 }} />
                )
              };
            break;
        case Constants.SOFTSKILLS:
            color = 'softSkillHeadlineColor';
            Logo = () => {
                return(
                    <AutoAwesomeOutlinedIcon sx={{ mr: 1 }} />
                )
              };
            break;
        case Constants.FIELDS:
            color = 'fieldHeadlineColor';
            Logo = () => {
                return(
                    <WorkOutlineIcon sx={{ mr: 1 }} />
                )
              };
            break;
        case Constants.AGENDAS:
            color = 'agendaHeadlineColor';
            Logo = () => {
                return(
                    <Diversity1Icon sx={{ mr: 1 }} />
                )
              };
            break;
        default:
            color = 'primary';
            Logo = () => {<> </>};
    }

    const handleClick = () => {
        onClick();
    }
    if (num === 0) {
        return null
    }
    else {
        return (
            
            <NoShadowFab variant="extended" size="small" color={color} onClick={handleClick}>
            <Logo />
            <span style={{ fontWeight: 'bold' }}>{num}</span>&nbsp;&nbsp;{category}
            </NoShadowFab>
        );
    }
};

export default TagsCategory;
