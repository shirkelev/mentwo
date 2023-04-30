import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import Google from '@mui/icons-material/Google';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import TextBox from '../components/small-components/TextBox';
import SimpleButton from '../components/small-components/Button';
import { 
    Link
    } from 'react-router-dom'
import * as Constants from '../Constants';

const RootContainer = styled(Container)(
    ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
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

const SignInPage = () => {
  return (
    <>
    <RootContainer>
        <h1>Sign In</h1>
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
                <SignUpLink >Sign Up!</SignUpLink>
            </Link>
        </ FormContainer>
    </RootContainer>
    </>
  );
};

export default SignInPage;