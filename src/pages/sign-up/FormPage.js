import React, {useState, useContext} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextBox from '../../components/small-components/TextBox';
import { SignUpContext } from '../../context/SignUpContexts';
import BigContentBox from '../../components/small-components/BigContentBox';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


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
  gap: theme.spacing(2),
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

const ImgButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: theme.spacing(4),
}));

const Question = styled('h3')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));



const FormPage = (props) => {
  const {filedsArray, title, imgButton} = props;
  const {form, setForm, userInfo, setUserInfo} = useContext(SignUpContext);

  function handleChange(id, event){
    let newForm = form;
    newForm[id] = event;
    setForm(newForm);
  }

  function WrapQuestions(props){
    const {title, name, placeHolder, onChange, type='short',qid} = props;
    let curPlaceHolder = placeHolder;
    if(userInfo[qid]){
      curPlaceHolder = userInfo[qid];
    }
    console.log('WrapQuestions', curPlaceHolder)
    let quest;
    switch(type){
        case 'short': quest = <TextBox 
                      title={title} 
                      placeholder={curPlaceHolder} 
                      onChange={onChange}
                      />
        break;
        case 'long': quest = <BigContentBox placeholder={curPlaceHolder} />
        break;
        default: quest = <TextBox 
        title={title} 
        placeholder={curPlaceHolder} 
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

  return (
    <>
    {console.log('FormPage', userInfo['name'])}
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
            placeHolder={userInfo[x.qid]? userInfo[x.qid] : x.placeHolder} 
            type={x.type}
            onChange={(event) => handleChange(x.id, event.target.value)}
            qid={x.qid}
            />
            )}
            {
            imgButton ?
            (
            <ImgButtonContainer>
              <Button variant="outlined" endIcon={<AddAPhotoIcon />} siz>
                Add Image
              </Button>
            </ImgButtonContainer>
            ) : null
          }
        </Typography>
        
    </FormContainer>
  </RootContainer>
  
</>
  );
};

export default FormPage;
