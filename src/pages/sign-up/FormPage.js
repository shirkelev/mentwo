import React, {useState, useContext} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '../../components/small-components/Button';
import TextBox from '../../components/small-components/TextBox';
import { SignUpContext } from '../../context/SignUpContexts';
import ConditionalButton from '../../components/small-components/ConditionalButton';
import BigContentBox from '../../components/small-components/BigContentBox';

const RootContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
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


const Title = styled('h1')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  alignItems: 'center',
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
  const {title, name, placeHolder, onChange, type='short'} = props;
  let quest;
  switch(type){
      case 'short': quest = <TextBox 
                    title={title} 
                    placeholder={placeHolder} 
                    onChange={onChange}
                    />
      break;
      case 'long': quest = <BigContentBox placeholder={placeHolder} />
      break;
      default: quest = <TextBox 
      title={title} 
      placeholder={placeHolder} 
      onChange={onChange}
      /> 
  }
  return(
    <QuestionContainer>
            <Question>{name}</Question>
            {quest}
    </QuestionContainer>
  )
};

const FormPage = (props) => {
  const {filedsArray, title} = props;
  const {form, setForm} = useContext(SignUpContext);

  function handleChange(id, event){
    let newForm = form;
    newForm[id] = event;
    setForm(newForm);
  }

  return (
    <>
    <RootContainer >
      <FormContainer>
        <Typography >
            <Typography align='center'>
              <Title> {title} </Title>
            </Typography>
            {filedsArray.map(x =>
            <WrapQuestions
            title= {x.title}
            name= {x.name}
            placeHolder={x.placeHolder} 
            type={x.type}
            onChange={(event) => handleChange(x.id, event.target.value)}
            />
            )}
        </Typography>

    </FormContainer>
  </RootContainer>
  
</>
  );
};

export default FormPage;
