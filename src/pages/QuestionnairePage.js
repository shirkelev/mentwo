import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '../components/small-components/Button'
import TextBox from '../components/small-components/TextBox'


const RootContainer = styled(Container)(({ theme }) => ({
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
  width: '100%',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const ButtonSection = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',

}));

const Title = styled('h1')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const QuestionContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const Question = styled('h3')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const QuestionnairePage = () => {
  return (
    <>
    <RootContainer maxWidth="md">
        
        <FormContainer>
            <Title>Tell us about yourself</Title>

        <QuestionContainer>
            <Question>What is your name?</Question>
            <TextBox title="Name" placeholder="Enter your name" />
        </QuestionContainer>

        <QuestionContainer>
            <Question>What is your email?</Question>
            <TextBox title="Email" placeholder="Enter your email" />
        </QuestionContainer>

        <QuestionContainer>
            <Question>What is your phone number?</Question>
            <TextBox title="Phone number" placeholder="Enter your phone number" />
        </QuestionContainer>

        <QuestionContainer>
            <Question>What is your occupation?</Question>
            <TextBox title="Occupation" placeholder="Enter your occupation" />
        </QuestionContainer>

        <QuestionContainer>
            <Question>What is your area of expertise?</Question>
            <TextBox title="Area of expertise" placeholder="Enter your area of expertise" />
        </QuestionContainer>

        <QuestionContainer>
            <Question>What is your experience level?</Question>
            <TextBox title="Experience level" placeholder="Enter your experience level" />
        </QuestionContainer>

        <QuestionContainer>
            <Question>What are your goals?</Question>
            <TextBox title="Goals" placeholder="Enter your goals" />
        </QuestionContainer>
        <ButtonSection>
            <ButtonWrapper variant="contained" color="primary" href='choose-role' title='Prev' />
            <ButtonWrapper variant="contained" color="primary" href='home-page' title='Next' />
        </ButtonSection>

    </FormContainer>
</RootContainer>
</>
  );
};

export default QuestionnairePage;
