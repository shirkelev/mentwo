import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Button from '../../components/small-components/Button';
import Tag from '../../components/small-components/Tag';
import TagsCategory from '../../components/small-components/TagsCategory';
import { useNavigate } from 'react-router-dom';
import BigContentBox from '../../components/small-components/BigContentBox';
import * as Constants from '../../Constants';
import Box from '@mui/material/Box';

function TagsContainer({ tagsNames, category, onTagClick, isPressedFunc}) {
    return (
        <Box display="flex" flexWrap="wrap" gap={2} sx={{justifyContent: 'center', 
        alignItems: 'center'}}>
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
}

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
   width: '100%',
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

const NewFormPage = ({role, name}) => {

    const [fields, setFields] = useState([]);
    const [techSkills, setTechSkills] = useState([]);
    const [softSkills, setSoftSkills] = useState([]);
    const [agendas, setAgendas] = useState([]);

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
        navigate(Constants.HOME_PAGE);
    };

    const [doneDialogOpen, setDoneDialogOpen] = React.useState(false);

    const doneTapped = () => {
        setDoneDialogOpen(true);
    };

    function TagsSection({category, statement, tagsNames, isPressedFunc, onTagClick}) {
        return (
            <QuestionContainer>
                <TagsCategory category= {category}/>
                <Statement>{statement}</Statement>
                <TagsContainer tagsNames={tagsNames} category={category} onTagClick={onTagClick} isPressedFunc={isPressed}/>
            </QuestionContainer>
        );
    }

    const mentorTags = [
        {category: Constants.FIELDS, statement: 'In which professional fields would you like to interview?', tagsNames: Constants.FIELDS_LIST},
        {category: Constants.TECHSKILLS, statement:'What technical skills would you like to interview about?', tagsNames: Constants.TECHSKILLS_LIST},
        {category: Constants.SOFTSKILLS, statement:'What soft skills do you want to focus on as an interviewer?', tagsNames: Constants.SOFTSKILLS_LIST},
        {category: Constants.AGENDAS, statement:'What agendas would you like to interview about?', tagsNames: Constants.AGENDAS_LIST}
    ];

    const menteeTags = [
        {category: Constants.FIELDS, statement: 'In which professional fields would you like to be interviewed?', tagsNames: Constants.FIELDS_LIST},
        {category: Constants.TECHSKILLS, statement:'What technical skills would you like to be interviewed about?', tagsNames: Constants.TECHSKILLS_LIST},
        {category: Constants.SOFTSKILLS, statement:'What soft skills do you want to focus on as an interviewee?', tagsNames: Constants.SOFTSKILLS_LIST},
        {category: Constants.AGENDAS, statement:'What agendas would you like to be interviewed about?', tagsNames: Constants.AGENDAS_LIST}
    ];


    if(role === 'mentor') {
        
        return (
            <>
            <RootContainer maxWidth="md">

                <Title>Hey {name},</Title>
                <SubTitle>Tell1 us about yourself so we can find you the right interviewee</SubTitle>
                {
                    mentorTags.map((tag) => (
                            <TagsSection category={tag.category} statement={tag.statement} 
                            tagsNames={tag.tagsNames} isPressedFunc={isPressed} onTagClick={onTagClick}/>   
                    ))           
                }

                <QuestionContainer>
                    <Category>About Yourself</Category>
                    <Statement> Information you would like to share about yourself with the interviewees? </Statement>
                    <BigContentBox placeholder="For example, workplace, specialties, areas of interest, etc" />
                </QuestionContainer>

                <ButtonSection>
                    <ButtonWrapper variant="outlined" color="primary" onClick={backTapped} title='Back' />
                    <ButtonWrapper variant="contained" color="primary" onClick={doneTapped} title='Done!' />
                </ButtonSection> 

        </RootContainer>
        </>
        );
    } else {
        return (
            <>
            <RootContainer maxWidth="md">

                <Title>Hey {name},</Title>
                <SubTitle>Tell us about yourself so we can find you the right interviewer</SubTitle>
                {
                    menteeTags.map((tag) => (
                            <TagsSection category={tag.category} statement={tag.statement} 
                            tagsNames={tag.tagsNames} isPressedFunc={isPressed} onTagClick={onTagClick}/>    
                    ))           
                }

                <QuestionContainer>
                    <Category>About Yourself</Category>
                    <Statement> Information you would like to share about yourself with the interviewers? </Statement>
                    <BigContentBox placeholder="For example, workplace, specialties, areas of interest, etc" />
                </QuestionContainer>
                
                <ButtonSection>
                    <ButtonWrapper variant="outlined" color="primary" onClick={backTapped} title='Back' />
                    <ButtonWrapper variant="contained" color="primary" onClick={doneTapped} title='Done!' />
                </ButtonSection>

        </RootContainer>
        </>
        );
    }  
};

export default NewFormPage;