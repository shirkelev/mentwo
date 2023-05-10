import React, {useState, useContext} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '../components/small-components/Button';
import TextBox from '../components/small-components/TextBox';
import * as Constantans from '../Constants';
import { SignUpContext } from '../context/SignUpContexts';
import ConditionalButton from '../components/small-components/ConditionalButton';




const RootContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '100%',
  paddingBottom: theme.spacing(5),
}));

const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ButtonWrapper = styled(ConditionalButton)(({ theme }) => ({
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

function WrapQuestions(props){
  const {title, name, placeHolder} = props;
  return(
    <QuestionContainer>
            <Question>{name}</Question>
            <TextBox title={title} 
            placeholder={placeHolder} />
    </QuestionContainer>
  )
};

const FormPage = (props) => {
  // const {role, setRole} = useContext(UserRole);
  const {filedsArray, title, nextTo, onSave, condition} = props;
  return (
    <>
    <RootContainer >
      <FormContainer>
          <Title> {title} </Title>
          {filedsArray.map(x => 
          <WrapQuestions
          title= {x.title}
          name= {x.name}
          placeHolder={x.placeHolder}
          />
          )}
      <ButtonSection>
          <ButtonWrapper variant="contained" color="primary" title='Save' to={nextTo} 
            conditon={condition} onClick={() => onSave()}/>
      </ButtonSection>

    </FormContainer>
  </RootContainer>
  
</>
  );
};

export default FormPage;
