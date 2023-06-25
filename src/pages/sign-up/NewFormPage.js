import React, { useState, useEffect, useContext, useRef } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Button from '../../components/small-components/Button';
import { Button as MuiButton } from '@mui/material';
import Tag from '../../components/small-components/Tag';
import TagsCategory from '../../components/small-components/TagsCategory';
import { useNavigate } from 'react-router-dom';
import BigContentBox from '../../components/small-components/BigContentBox';
import * as Constants from '../../Constants';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { SignUpContext } from '../../context/SignUpContexts';
import { Typography } from '@mui/material';
import IconWithMessage from '../../components/small-components/IconwithMessage';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {DB} from '../../data/firebase';

function TagsContainer({ tagsNames, category, onTagClick, isPressedFunc}) {
    return (
        <Box display="flex" flexWrap="wrap" gap={1}>
            {tagsNames.map((tag, index) => (
                <>
                <Tag
                    key={index}
                    text={tag}
                    category={category}
                    onClick={() => onTagClick(tag, category)} 
                    isPressed={isPressedFunc(tag,category)}
                    />
                </>
            ))}
        </Box>
    );
};

const RootContainer = styled(Container)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'left',
   paddingTop: theme.spacing(6),
   paddingBottom: theme.spacing(6),
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
   marginBottom: theme.spacing(2),
}));

const ButtonSection = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   
   alignItems: 'center',
   justifyContent: 'center',
   gap: '20px',
   margin: theme.spacing(2),
}));

const Title = styled('h1')(({ theme }) => ({
    fontSize: 24,
   marginBottom: theme.spacing(-0.5),
   marginTop: theme.spacing(-1.5),
   fontFamily: theme.typography.fontFamily,
}));

const SubTitle = styled('h3')(({ theme }) => ({
    marginBottom: theme.spacing(4),
    fontSize: 17,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
 }));

const Category = styled('h1')(({ theme }) => ({
    fontSize: 15,
   marginBottom: theme.spacing(0),
   marginTop: theme.spacing(-2),
   fontFamily: theme.typography.fontFamily,
}));

const QuestionContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
    marginTop: theme.spacing(2),
   marginBottom: theme.spacing(2),
}));

const Statement = styled('h3')(({ theme }) => ({
    marginTop: theme.spacing(1),
   marginBottom: theme.spacing(2),
   fontSize: 14,
   fontStyle: 'italic',
   fontWeight: 'normal',
   fontFamily: theme.typography.fontFamily,
}));

const CvButtonContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    // width: '100%',
    marginTop: theme.spacing(4),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: theme.spacing(2),
    

  }));

const NewFormPage = ({name, onClickSubmit}) => {

    const {form, setForm, step, setStep, role, userInfo, error, setError} = useContext(SignUpContext);
    const [fields, setFields] = useState(form.fields ? form.fields : []);
    const [techSkills, setTechSkills] = useState(form.techSkills ? form.techSkills : []);
    const [softSkills, setSoftSkills] = useState(form.softSkills ? form.softSkills : []);
    const [agendas, setAgendas] = useState(form.agendas ? form.agendas : []);
    const [description, setDescription] = useState(form.description ? form.description : '');
    const [cv, setCv] = useState(null);
    const [cvError, setCvError] = useState(null);
    const cvInput = useRef();
    
    function onTagClick(tag, category){
        let list;
        let setFunc;
        switch(category){
            case Constants.FIELDS:
                list = fields;
                setFunc = setFields;
                break;
            case Constants.TECHSKILLS:
                list = techSkills;
                setFunc = setTechSkills;
                break;
            case Constants.SOFTSKILLS:
                list = softSkills;
                setFunc = setSoftSkills;
                break;
            case Constants.AGENDAS:
                list = agendas;
                setFunc = setAgendas;
                break;
            default:
                list =[];
                setFunc = () => {};
                break;
        }
        if(list.includes(tag)){
            setFunc(list.filter((item) => item !== tag));
        } else {
            setFunc([...list, tag]);
        }
    }

    function isPressed(tag, category){
        let list;
        switch(category){
            case Constants.FIELDS:
                list = fields;
                break;
            case Constants.TECHSKILLS:
                list = techSkills;
                break;
            case Constants.SOFTSKILLS:
                list = softSkills;
                break;
            case Constants.AGENDAS:
                list = agendas;
                break;
            default:
                list =[];
                break;
        }
        return list.includes(tag);
    }
      
    const navigate = useNavigate();

    const backTapped = () => {
        setForm({fields: fields, techSkills: techSkills, softSkills: softSkills, agendas: agendas, description: description});
        setStep(step - 1);
    };    

    const doneTapped = async () => {
        // await setForm();
        if(fields.length === 0) {
            const curForm = {fields: fields, techSkills: techSkills, softSkills: softSkills, agendas: agendas, description: description, cv: cv};
            setError("You must fill at least one professional field")
            setForm(curForm)
            console.log("You must fill at least one professional field")
        } else {
        const curForm = {fields: fields, techSkills: techSkills, softSkills: softSkills, agendas: agendas, description: description, cv: cv};
        console.log('Form in NewForm', curForm)
        console.log('Form in NewForm', form)
        console.log('Fields in NewForm', fields, techSkills, softSkills, agendas, description)
        console.log("Starting write new Records in data set");
        await onClickSubmit(curForm, role);
        }
        
    };

    const chengedDescription = (event) => {
        setDescription(event.target.value);
    };

    function TagsSection({category, statement, tagsNames, isPressedFunc, onTagClick}) {
        return (
            <QuestionContainer>
                <TagsCategory category= {category}/>
                <Statement>{statement}</Statement>
                <TagsContainer tagsNames={tagsNames} category={category} onTagClick={onTagClick} isPressedFunc={isPressedFunc}/>
            </QuestionContainer>
        );
    }

    const mentorTags = [
        {category: Constants.FIELDS, statement: 'For which professional fields would you like to interview?', tagsNames: Constants.FIELDS_LIST},
        {category: Constants.TECHSKILLS, statement:'What technical skills would you like to interview about?', tagsNames: Constants.TECHSKILLS_LIST},
        {category: Constants.SOFTSKILLS, statement:'What soft skills do you want to focus on as an interviewer?', tagsNames: Constants.SOFTSKILLS_LIST},
        {category: Constants.AGENDAS, statement:'Which populations would you like to promote and integrate into the industry?', tagsNames: Constants.AGENDAS_LIST}
    ];

    const menteeTags = [
        {category: Constants.FIELDS, statement: 'For which professional fields would you like to be interviewed?', tagsNames: Constants.FIELDS_LIST},
        {category: Constants.TECHSKILLS, statement:'What technical skills would you like to be interviewed about?', tagsNames: Constants.TECHSKILLS_LIST},
        {category: Constants.SOFTSKILLS, statement:'What soft skills do you want to focus on as an interviewee?', tagsNames: Constants.SOFTSKILLS_LIST},
        {category: Constants.AGENDAS, statement:'Share your personal characteristics so you can stand out from other interviewees', tagsNames: Constants.AGENDAS_LIST}
    ];
    
    // useEffect(() => {
    //     // This will log the form data whenever it changes
    //     console.log('Form in NewForm', form)
    // }, [form]);

    const UploadIcon = () => {
        if(!cv){
          return <DriveFolderUploadIcon />
        }
        return <CheckCircleIcon />
      }
    
    const handleUploadClick = (event) => {
         // get selected file
         const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            // you can add more types if needed
            ];
        const selectedFile = event.target.files[0];
        const isValid = allowedTypes.includes(selectedFile.type) || selectedFile.type.startsWith('image/');
        console.log(selectedFile.type)
        if(isValid){
            setCv(selectedFile);
            setCvError(null);
            console.log(selectedFile);
        } else {
            setCvError('Please select an readable format or img');
            setCv(null);
            return 
        }
    }

    const handleFileOpen = () => {
        cvInput.current.click();
    };


    if(role === Constants.INTERVIEWERS_DB_NAME) {
        
        return (
            <>
            <RootContainer maxWidth="md">

                <Title>Hey {userInfo.name},</Title>
                
                <SubTitle>Tell us about yourself so we can find you the right interviewees</SubTitle>
                {
                    mentorTags.map((tag) => (
                            <TagsSection category={tag.category} statement={tag.statement} 
                            tagsNames={tag.tagsNames} isPressedFunc={isPressed} onTagClick={onTagClick}/>   
                    ))           
                }

                <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />

                <QuestionContainer>
                    <Category>About Yourself</Category>
                    <Statement> Information you would like to share about yourself with the interviewees? </Statement>
                    <BigContentBox placeholder="For example, workplace, specialties, areas of interest, etc" onBlur={chengedDescription}/>
                </QuestionContainer>

                <Typography variant="h6" style={{color: 'red', textAlign: 'center'}}>{error}</Typography>

                <IconWithMessage message="test"/>

                <ButtonSection>
                    <ButtonWrapper variant="outlined" color="primary" onClick={backTapped} title='Back' />
                    <ButtonWrapper variant="contained" color="primary" onClick={doneTapped} title='Done!' />
                </ButtonSection> 

        </RootContainer>
        </>
        );
    } else if (role === Constants.INTERVIEWEES_DB_NAME) {
        return (
            <>
            <RootContainer maxWidth="md">

                <Title>Hey {userInfo.name},</Title>
                
                <SubTitle>Tell us about yourself so we can find you the right interviewer</SubTitle>
                {
                    menteeTags.map((tag) => (
                            <TagsSection category={tag.category} statement={tag.statement} 
                            tagsNames={tag.tagsNames} isPressedFunc={isPressed} onTagClick={onTagClick}/>    
                    ))           
                }

                <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />

                <QuestionContainer>
                    <Category>About Yourself</Category>
                    <Statement> Information you would like to share about yourself with the interviewers? </Statement>
                    <BigContentBox placeholder="For example, workplace, specialties, areas of interest, etc" onBlur={chengedDescription}/>
                </QuestionContainer>
                
                <CvButtonContainer>
                    <Typography align='center' sx={{width: '100%'}} color="red">{cvError}</Typography>
                    <MuiButton variant="outlined" color="success" endIcon={<UploadIcon />} siz
                            onClick={handleFileOpen}>
                        Upload CV
                    </MuiButton>
                    <input
                        type="file"
                        hidden
                        ref={cvInput} 
                        onChange={(event) => {handleUploadClick(event)}}
                        />
                </CvButtonContainer>
                

                <Typography variant="h6" style={{color: 'red', textAlign: 'center'}}>{error}</Typography>

                <IconWithMessage message="test"/>

                <ButtonSection>
                    <ButtonWrapper variant="outlined" color="primary" onClick={backTapped} title='Back' />
                    <ButtonWrapper variant="contained" color="primary" onClick={doneTapped} title='Done!' />
                </ButtonSection>
                
                
        </RootContainer>
        </>
        );
    }  
    else {
        return (
            <>
            <h1>Choose Role First!</h1>
            </>
        )
    }
};

export default NewFormPage;