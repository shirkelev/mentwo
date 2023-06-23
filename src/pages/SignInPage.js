import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import Google from '@mui/icons-material/Google';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { IconButton, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextBox from '../components/small-components/TextBox';
import SimpleButton from '../components/small-components/Button';
import { Link } from 'react-router-dom'
import * as Constants from '../Constants';
import logoW from '../data/images/new_logo.png'
import { UserAuth } from '../context/AuthContext';
import { useEffect, navigate } from 'react';
import SignUpLoading from './sign-up/SignUpLoading';

const RootContainer = styled(Container)(
    ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: '#FEFCFF',
  height: '100vh',
}));

const FormContainer = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginInline: theme.spacing(5),
    marginBlock: theme.spacing(3),
    gap: theme.spacing(3),
    // paddingInline: theme.spacing(3),
    
    
}));

const ButtonWrapper = styled(SimpleButton)(({ theme }) => {
    return ({
        margin: theme.spacing(2),
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(3),
    });
});

const TextContainer = styled('text')(({ theme }) => {
    return ({
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        // width: '100',
    });
});


const SocialButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const SocialButtonWrapper = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const SignUpLink = styled('a')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));


const SignInPage = () => {

    const {googleSignIn, emailSignIn, user, emailSignUp, error, loading} = UserAuth();
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [localLoading, setLocalLoading] = React.useState(loading);
    

    

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function handleChangePassword(e){
        setPassword(e.target.value);
    }

    async function handleClickSignIn(){
        setLocalLoading(true);
        const response = await emailSignIn(email, password);
        console.log("This is the response: ", response);
        setLocalLoading(false);
    }

    async function handleSignUpWithEmail(){
        setLocalLoading(true);
        console.log("Sign up with email");
        await emailSignUp(email, password);
        setLocalLoading(false);
        console.log('Local loading: ', localLoading, "Loading: ", loading);
    }

    const handleGoogleSignIn = async () => {
        try {
            setLocalLoading(true);
            await googleSignIn();
        } catch (error) {
          console.log(error);
        } finally {
            setLocalLoading(false);
        }
      };
    
    // useEffect(() => {
    //     if (user != null) {
    //     //   navigate('/account');
    //     console.log("User is not null", user);
    //     }
    //   }, [user]);

    // useEffect(() => {
    //     setLocalLoading(loading);
    // }, [loading]);

    return (
        
        <div>
            <RootContainer>
            
            { (localLoading  || loading) ? 
                
                (
                <div>
                    {console.log("Loading on sign in page", localLoading, loading)}
                    <SignUpLoading />
                </div> 
                )
            :
            <>
            <img alt='logo' src={logoW} style={{height:'90px', width:'200px', marginBottom: '30px'}} />
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Sign In</Typography>
                <FormContainer >
                    <TextContainer>
                        <Typography variant="h6" style={{color: 'red', textAlign: 'center'}}>{error}</Typography>
                        <TextBox title="Email" placeholder="Enter your email" onBlur={handleChangeEmail}/>
                        <TextBox title="Password" placeholder="Enter your password" onBlur={handleChangePassword} isPassword={true}/>
                        <Stack direction="row" spacing={2}>
                            <ButtonWrapper variant="contained" color="primary" title='Sign In' onClick={handleClickSignIn}/>
                            <ButtonWrapper variant="outlined" color="secondary" title='Sign Up' onClick={handleSignUpWithEmail}/>
                        </Stack>
                    </ TextContainer>
                    <div sx={{paddingTop: '20px'}}>
                        <Typography>
                            <SignUpLink >Sign In/Up using the followings</SignUpLink>
                        </Typography>
                    </div>
                    <SocialButtonsContainer>
                        <SocialButtonWrapper color="primary">
                            <Google onClick={handleGoogleSignIn}/>
                        </SocialButtonWrapper>
                        <SocialButtonWrapper color="primary">
                            <FacebookIcon />
                        </SocialButtonWrapper>
                        <SocialButtonWrapper color="primary">
                            <LinkedIn />
                        </SocialButtonWrapper>
                    </SocialButtonsContainer>
                    
                    {/* old sign up link */}
                    {/* <Link to={'../' + Constants.SIGN_UP}>
                        <Typography>
                            <SignUpLink >Sign Up!</SignUpLink>
                        </Typography>
                    </Link> */}
                </ FormContainer>        
            </>
            }
            </RootContainer>
        </div>
    );
};

export default SignInPage;
