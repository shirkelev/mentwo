import Fab from '@mui/material/Fab';
import { useState } from 'react';
import * as Constants from '../../Constants';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const NoShadowFab = styled(Fab)`
  box-shadow: none !important;
  height: 26px;
`;

const Tag = ({ category, text, isPressed=false, onClick=()=>{}}) => {
    const [pressed, setPressed] = useState(isPressed);

    const updateColor = (pressed) => {
        let initialColor;
        switch (category) {
            case Constants.TECHSKILLS:
                initialColor = pressed ? 'techSkillPressedColor' : 'techSkillColor';
                break;
            case Constants.SOFTSKILLS:
                initialColor = pressed ? 'softSkillPressedColor' : 'softSkillColor'; 
                break;
            case Constants.FIELDS:
                initialColor = pressed ? 'fieldPressedColor' : 'fieldColor';
                break;
            case Constants.AGENDAS:
                initialColor = pressed ? 'agendaPressedColor' : 'agendaColor';
                break;
            default:
                initialColor = 'primary';
        }
        return initialColor;
    }

    const [color, setColor] = useState(updateColor(pressed));

    const handleClick = () => {
        setPressed(!pressed);
        setColor(updateColor(pressed));
        onClick();
    }

    return (
        <NoShadowFab variant="extended" size="small" color={color} onClick={handleClick}>
            <Typography variant="body2" style={{ fontSize: '13px' }}>
                {text}
            </Typography>
        </NoShadowFab>
    );
};

export default Tag;
