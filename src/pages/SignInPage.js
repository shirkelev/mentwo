import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import Google from '@mui/icons-material/Google';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextBox from '../components/small-components/TextBox';
import SimpleButton from '../components/small-components/Button';
import { Link } from 'react-router-dom'
import * as Constants from '../Constants';
import logoW from '../data/images/logo-removebg-preview.png'
import { height } from '@mui/system';
import { GoogleLogin } from 'react-google-login';

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
    // gap: theme.spacing(3),
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
  marginTop: theme.spacing(2),
}));

const SocialButtonWrapper = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const SignUpLink = styled('a')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const responseGoogle = (response) => {
    console.log(response);
    console.log("WELCOME ##");
    if (response.profileObj) {
        const { email, familyName, givenName, googleId, imageUrl, name } = response.profileObj;
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        // ...use these details to authenticate or register the user in your database.
    } else if (response.error === 'popup_closed_by_user') {
        console.log('Google Sign-In popup was closed before sign-in could complete.');
    } else {
        console.error('Google Sign-In failed:', response.error);
    }
}

const SignInPage = () => {

  return (
    <div>
        <RootContainer>
        <img alt='logo' src={logoW} style={{height:'90px', width:'200px', marginBottom: '30px'}} />
        <Typography variant="h5" style={{fontWeight: 'bold'}}>Sign In</Typography>
            <FormContainer >
                <TextContainer>
                    <TextBox title="Username" placeholder="Enter your username" />
                    <TextBox title="Password" placeholder="Enter your password" />
                    <ButtonWrapper variant="contained" color="primary" title='Sign In' />
                </ TextContainer>
                <SocialButtonsContainer>
                    <SocialButtonWrapper color="primary">
                        <Google />
                    </SocialButtonWrapper>
                    <SocialButtonWrapper color="primary">
                        <FacebookIcon />
                    </SocialButtonWrapper>
                    <SocialButtonWrapper color="primary">
                        <LinkedIn />
                    </SocialButtonWrapper>
                </SocialButtonsContainer>
                <Link to={'../' + Constants.SIGN_UP}>
                <Typography>
                    <SignUpLink >Sign Up!</SignUpLink>
                </Typography>
                </Link>
            </ FormContainer>
        </RootContainer>
    </div>
  );
};

export default SignInPage;
