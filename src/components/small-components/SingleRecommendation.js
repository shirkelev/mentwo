import { Typography } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

export default function SingleRecommendation({text}) {
    return (
        <div style={{ display: 'flex', verticalAlign: 'top', paddingBottom: 12}}>
            <StarsIcon color = "primary" />
            <Typography style={{ marginLeft: '10px' }}>{text}</Typography>
        </div>
      );
};