import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import SingleRecommendation from '../components/small-components/SingleRecommendation';

export default function Recommendations({user}) {
    if (user.type === 'mentor') {
        return (
            <Box style={{ margin: '20px', height:'85vh' }}>
                <Typography> <span style={{ fontWeight: 'bold' }}>Here are some recommended next steps to do with your mentee:<br /><br /></span></Typography>
                <SingleRecommendation text="Contact your mentee and set up a time to meet online, in order to get to know each other and discuss his career goals." />
                <SingleRecommendation text="Go through the mentee's resume together, and provide him with recommendations for upgrading it if necessary." />
                <SingleRecommendation text="Help your mentee understand what types of jobs might be relevant to him, and whether he has a preference for companies of a certain nature." />
                <SingleRecommendation text="Prepare your mentee for interviews by supplying materials and by conducting mock interviews." />
                <SingleRecommendation text="Help your mentee understand the salary range he can expect, and how to negotiate his salary." />
                <SingleRecommendation text="When your mentee is hired and you are free to mentor other mentees, recommend him to become a mentor himself!" />
            </Box>
        );
    }
  else {
    return (
        <Box style={{ margin: '20px', height:'85vh' }}>
            <Typography> <span style={{ fontWeight: 'bold' }}>We're glad you found a match! Here are some recommended next steps with your mentor:<br /><br /></span></Typography>
            <SingleRecommendation text="Contact your mentor and set up a time to meet online, in order to get to know each other and discuss your career goals." />
            <SingleRecommendation text="Review your resume with your mentor and be open to their suggestions for improvement." />
            <SingleRecommendation text="Research different types of jobs and industries to gain a better understanding of what might be a good fit for you, and talk about it with your mentor." />
            <SingleRecommendation text="Take advantage of mock interview opportunities with your mentor to improve your interview skills and confidence." />
            <SingleRecommendation text="Discuss salary expectations and negotiation strategies with your mentor to ensure you are fairly compensated for your skills and experience." />
            <SingleRecommendation text="After you have secured a job with the help of your mentor, become a mentor yourself and help others achieve their career goals!" />
        </Box>
      );
    };
}