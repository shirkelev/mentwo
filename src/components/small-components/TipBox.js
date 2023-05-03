import {Card, Typography} from '@mui/material';

const TipBox = ({tipMessege}) => {
    return (
        <Card variant="outlined" style={{ maxWidth: 250, textAlign: 'center' }}>
            <Typography variant="body2" style={{ fontSize: 12, fontWeight: 'bold' }}>
            Tip of the day from a satisfied user:
            </Typography>
            <Typography variant="body2" style={{ fontSize: 12 }}>{tipMessege} </Typography>
        </Card>
    );
  };

  export default TipBox;
