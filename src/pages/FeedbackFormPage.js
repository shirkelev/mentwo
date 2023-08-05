import React, {useState, useContext, useRef} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextBox from '../../components/small-components/TextBox';
import BigContentBox from '../../components/small-components/BigContentBox';




const RootContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  maxWidth: '100%',
  paddingBottom: theme.spacing(3),
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
  marginBottom: theme.spacing(2.2),
}));

const Question = styled('h3')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const ButtonContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(4),
  }));


const FeedbackFormPage = () => {
  
    
  const [feedBackForm, setFeedBackForm] = useState({
    toImprove: [],
    toKeep: [],
    toImproveText: '',
    toKeepText: '',
  });

  const filedsArray = []

  function WrapQuestions(props){
    const {title, name, placeHolder, onChange, type='short',qid} = props;

    let curPlaceHolder = placeHolder;
    let isDisabled = false;
    let quest;

    switch(type){
        case 'short': quest = 
        <TextBox 
            title={curPlaceHolder} 
            placeholder={curPlaceHolder} 
            onBlur={onChange}
            isDisabled={isDisabled}
            />
        break;
        case 'long': quest = <BigContentBox placeholder={curPlaceHolder} />
        break;
        default: quest = <TextBox 
                title={curPlaceHolder} 
                placeholder={curPlaceHolder} 
                onBlur={onChange}
                isDisabled={isDisabled}
                /> 
    }
    return(
      <QuestionContainer>
              <Question>{name}</Question>
              {quest}
      </QuestionContainer>
    )
  };

  const handleChange = (qid, value) => {
    setFeedBackForm({...feedBackForm, [qid]: value})
  }

  const onClickSave = () => {
    console.log('onClickSave', feedBackForm)
    }

  return (
    <>
    {/* {console.log('FormPage', file)} */}
    <RootContainer >
      <FormContainer>
            <Typography >
                <Typography align='center'>
                    <Title> --other user-- Feedback </Title>
                </Typography>
                    {
                    filedsArray.map(x =>
                    <WrapQuestions
                    title= {x.title}
                    name= {x.name}
                    placeHolder={feedBackForm[x.qid]? feedBackForm[x.qid] : x.placeHolder} 
                    type={x.type}
                    onChange={(e) => handleChange(x.qid, e.target.value)}
                    qid={x.qid}
                    />
                    )}
            </Typography>
            <ButtonContainer>
            
                <Button variant="contained" color="primary" onClick={onClickSave}>
                    Save
                </Button>
            </ ButtonContainer>
        </FormContainer>
    </RootContainer>
    </>
  );
};

export default FeedbackFormPage;
