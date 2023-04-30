import {Card, Typography} from '@mui/material';

const TipBox = () => {
    return (
        <Card variant="outlined" style={{ maxWidth: 250, textAlign: 'center' }}>
            <Typography variant="body2" style={{ fontSize: 12, fontWeight: 'bold' }}>
            Tip of the day from a satisfied customer:
            </Typography>
            <Typography variant="body2" style={{ fontSize: 12 }}>
            I highly recommend that the mentor and mentee will have a weekly Zoom meeting to review the mentee's current progress status.
            </Typography>
        </Card>
    );
  };

  export default TipBox;
