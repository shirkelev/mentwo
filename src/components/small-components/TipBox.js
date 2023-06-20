import {Card, Typography} from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const TipBox = ({tipMessege: tipMessage}) => {
    return (
        <Card variant="outlined" style={{ maxWidth: 250, textAlign: 'center', margin: '16px', padding: '16px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', p: 4, borderRadius: '10px' }}>
        <Typography variant="h6" style={{ fontSize: 15, fontWeight: 'bold', marginBottom: '8px' }}>
            Tip of the day:
        </Typography>
        <Typography variant="body1" style={{ fontSize: 14 }}>{tipMessage}</Typography>
        <TipsAndUpdatesIcon style={{ marginTop: '5px', color: '#91D8E4' }} />
        </Card>
    );
  };

  export default TipBox;
