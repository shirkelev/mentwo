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

                {/* <SingleRecommendation text="Contact your mentee and set up a time to meet online, in order to get to know each other and discuss his career goals." />
                <SingleRecommendation text="Go through the mentee's resume together, and provide him with recommendations for upgrading it if necessary." />
                <SingleRecommendation text="Help your mentee understand what types of jobs might be relevant to him, and whether he has a preference for companies of a certain nature." />
                <SingleRecommendation text="Prepare your mentee for interviews by supplying materials and by conducting mock interviews." />
                <SingleRecommendation text="Help your mentee understand the salary range he can expect, and how to negotiate his salary." />
                <SingleRecommendation text="When your mentee is hired and you are free to mentor other mentees, recommend him to become a mentor himself!" /> */}
            
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

            {/* <SingleRecommendation text="Contact your mentor and set up a time to meet online, in order to get to know each other and discuss your career goals." />
            <SingleRecommendation text="Review your resume with your mentor and be open to their suggestions for improvement." />
            <SingleRecommendation text="Research different types of jobs and industries to gain a better understanding of what might be a good fit for you, and talk about it with your mentor." />
            <SingleRecommendation text="Take advantage of mock interview opportunities with your mentor to improve your interview skills and confidence." />
            <SingleRecommendation text="Discuss salary expectations and negotiation strategies with your mentor to ensure you are fairly compensated for your skills and experience." />
            <SingleRecommendation text="After you have secured a job with the help of your mentor, become a mentor yourself and help others achieve their career goals!" /> */}
        </Box>
      );
    };
}