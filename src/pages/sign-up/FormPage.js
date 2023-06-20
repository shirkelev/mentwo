import React, {useState, useContext} from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextBox from '../../components/small-components/TextBox';
import { SignUpContext } from '../../context/SignUpContexts';
import BigContentBox from '../../components/small-components/BigContentBox';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SaveIcon from '@mui/icons-material/Save';



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
  gap: theme.spacing(3),
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
  const {filedsArray, title, imgButton, onSave} = props;
  const {form, setForm, userInfo, setUserInfo} = useContext(SignUpContext);
  const [basicInfo, setBasicInfo] = useState({
    name: userInfo.name ? userInfo.name : '',
    lastName: userInfo.lastName ? userInfo.lastName : '',
    phone: userInfo.phone ? userInfo.phone : '',
    img: userInfo.img ? userInfo.img : '',
  });

  const onClickSave = () => {
    setUserInfo({...basicInfo});
    onSave();
  }

  function handleChange(id, event){
    let newForm = basicInfo;
    newForm[id] = event;
    setBasicInfo(newForm);
  }

  function WrapQuestions(props){
    const {title, name, placeHolder, onChange, type='short',qid} = props;
    let curPlaceHolder = placeHolder;
    let isDisabled = false;
   
    if(userInfo[qid]){
      curPlaceHolder = userInfo[qid];
      isDisabled = true;
    }
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
          <ImgButtonContainer>
            <Button variant="contained" color="primary"  endIcon={<SaveIcon />} siz
              onClick={onClickSave}>
                Save
            </Button>
          </ImgButtonContainer>
        </Typography>
        
    </FormContainer>
  </RootContainer>
  
</>
  );
};

export default FormPage;
