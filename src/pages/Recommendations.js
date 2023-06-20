import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import SingleRecommendation from '../components/small-components/SingleRecommendation';

export default function Recommendations({user}) {
    if (user.type === 'mentor') {
        return (
            <Box style={{ margin: '20px', height:'85vh' }}>
                <Typography> <span style={{ fontWeight: 'bold' }}>Recommendations for the mock interview:<br /><br /></span></Typography>
                <SingleRecommendation text="Choose a company where the interview is taking place, and tell the interviewee a little about it and the intended position." />
                <SingleRecommendation text="Create a comfortable atmosphere but with a certain distance." />
                <SingleRecommendation text="Include in the mock interview a part of self-presentation." />
                <SingleRecommendation text="Prepare in advance a sufficient database of professional questions, so that you can skip a question that the interviewee is familiar with." />
                <SingleRecommendation text="At the end of the simulation, give the interviewee in-depth feedback on his performance." />
            </Box>
        );
    }
  else {
    return (
        <Box style={{ margin: '20px', height:'105vh' }}>
            <Typography> <span style={{ fontWeight: 'bold' }}>Recommendations for the mock interview:<br /><br /></span></Typography>

            <SingleRecommendation text="Determine with the interviewer the company and position you are interviewing for, read about them and understand why you are interested in them." />
            <SingleRecommendation text="Tell about yourself at the beginning of the interview, and prepare in advance to answer personal questions and questions about your professional project." />
            <SingleRecommendation text="At the end of the simulation, ask the interviewer for in-depth feedback on your performance." />
            <SingleRecommendation text="After the simulation, write to yourself what you learned and what you should work on for the next interview." />
        </Box>
      );
    };
}