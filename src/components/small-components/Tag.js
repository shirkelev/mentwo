import Fab from '@mui/material/Fab';
import { useState } from 'react';
import * as Constants from '../../Constants';

const Tag = ({ category, text, isPressed=false, onClick=()=>{}}) => {
    const [pressed, setPressed] = useState(isPressed);

    const updateColor = (pressed) => {
        let initialColor;
        switch (category) {
            case Constants.TECHSKILL:
                initialColor = pressed ? 'techSkillPressedColor' : 'techSkillColor';
                break;
            case Constants.SOFTSKILL:
                initialColor = pressed ? 'softSkillPressedColor' : 'softSkillColor'; 
                break;
            case Constants.FIELD:
                initialColor = pressed ? 'fieldPressedColor' : 'fieldColor';
                break;
            case Constants.AGENDA:
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
        <Fab variant="extended" size="small" color={color} onClick={handleClick}>
            {text}
        </Fab>
    );
};

export default Tag;
