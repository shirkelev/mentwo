import CircularProgressBar from '../../components/small-components/CircularProgressBar'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const SignUpLoading = ({text}) => {

    const RootContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        paddingBottom: theme.spacing(5),
      }));

    return (
        <>
        <RootContainer>
            <CircularProgressBar />
            <Typography variant="h5" component="h2" gutterBottom>
                {text}
            </Typography>
        </RootContainer>
        </>
    )};
export default SignUpLoading;