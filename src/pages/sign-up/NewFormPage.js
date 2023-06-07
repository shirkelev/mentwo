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
import Divider from '@mui/material/Divider';

const TagsContainer = ({ tagsNames, category, onTagClick }) => {
    return (
        <Box display="flex" flexWrap="wrap" gap={1}>
            {tagsNames.map((tag, index) => (
                <Tag
                    key={index}
                    text={tag}
                    category={category}
                    onClick={() => onTagClick(index)} />
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

const NewFormPage = ({user}) => {
      
    const navigate = useNavigate();

    const backTapped = () => {
        navigate(Constants.HOME_PAGE);
    };

    const [doneDialogOpen, setDoneDialogOpen] = React.useState(false);

    const doneTapped = () => {
        setDoneDialogOpen(true);
    };

    if(user.type === 'mentor') {
        return (
            <>
            <div style={{ backgroundColor: '#FEFCFF' }}>
            <RootContainer maxWidth="md">

            <Title>Hi {user.name},</Title>
            <SubTitle>Tell us about yourself so we can find you the right interviewee</SubTitle>

                <QuestionContainer>
                <Category>Your choices:</Category>
                </QuestionContainer>

                <QuestionContainer>
                    <TagsCategory category= {Constants.FIELDS}/>
                    <Statement> In which professional fields would you like to interview? </Statement>
                    <TagsContainer tagsNames={Constants.FIELDS_LIST} category={Constants.FIELD} />
                </QuestionContainer>

                <QuestionContainer>
                    <TagsCategory category= {Constants.TECHSKILLS}/>
                    <Statement> What technical skills would you like to interview about?</Statement>
                    <TagsContainer tagsNames={Constants.TECHSKILLS_LIST} category={Constants.TECHSKILL} />
                </QuestionContainer>

                <QuestionContainer>
                    <TagsCategory category= {Constants.SOFTSKILLS}/>
                    <Statement> What soft skills do you want to focus on as an interviewer?</Statement>
                    <TagsContainer tagsNames={Constants.SOFTSKILLS_LIST} category={Constants.SOFTSKILL} />
                </QuestionContainer>

                
                <QuestionContainer>
                    <TagsCategory category= {Constants.AGENDAS}/>
                    <Statement>What social agendas are important to you and would you like to promote?</Statement>
                    <TagsContainer tagsNames={Constants.AGENDAS_LIST} category={Constants.AGENDA} />
                </QuestionContainer>

                <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />

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
        </div>
        </>
        );
    } else {
        return (
            <>
            <div style={{ backgroundColor: '#FEFCFF' }}>
            <RootContainer maxWidth="md">

            <Title>Hey {user.name},</Title>
            <SubTitle>Tell us about yourself so we can find you the right interviewer</SubTitle>

                <QuestionContainer>
                    <Category>Your choices:</Category>
                </QuestionContainer>

                <QuestionContainer>
                    <TagsCategory category= {Constants.FIELDS}/>
                    <Statement>In which professional fields would you like to be interviewed?</Statement>
                    <TagsContainer tagsNames={Constants.FIELDS_LIST} category={Constants.FIELD} />
                </QuestionContainer>

                <QuestionContainer>
                    <TagsCategory category= {Constants.TECHSKILLS}/>
                    <Statement> What technical skills would you like to be interviewed about?</Statement>
                    <TagsContainer tagsNames={Constants.TECHSKILLS_LIST} category={Constants.TECHSKILL} />
                </QuestionContainer>

                <QuestionContainer>
                    <TagsCategory category= {Constants.SOFTSKILLS}/>
                    <Statement> What soft skills would you like to focus on in the interview?</Statement>
                    <TagsContainer tagsNames={Constants.SOFTSKILLS_LIST} category={Constants.SOFTSKILL} />
                </QuestionContainer>

                <QuestionContainer>
                    <TagsCategory category= {Constants.AGENDAS}/>
                    <Statement>Your personal background matters so that we can find you the right interviewer</Statement>
                    <TagsContainer tagsNames={Constants.AGENDAS_LIST} category={Constants.AGENDA} />
                </QuestionContainer>

                <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />

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
        </div>
        </>
        );
    }  
};

export default NewFormPage;