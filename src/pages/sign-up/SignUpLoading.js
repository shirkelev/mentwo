import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/material';
import CircularProgressBar from '../../components/small-components/CircularProgressBar';


const SignUpLoading = ({text}) => {

    const containerStyles = {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
       <div style={containerStyles}>
       <Stack direction="column" justifyContent="center" alignItems="center" spacing={3} maxWidth="80%" marginBottom={20}>
       <CircularProgressBar></CircularProgressBar>
       <Typography variant="h5" component="h2" gutterBottom>
          {text}
        </Typography>
       </Stack>
     </div>
    )};
export default SignUpLoading;