// Page Names
export const SIGN_IN = 'sign-in';
export const SIGN_UP = 'sign-up';
export const REG_FORM = 'registration-form';
export const PROCESS_COMPLETION_FORM = 'process-completion';
export const MENTOR_PENDINGS_AND_RUNNING_PAGE = 'MentorPendingsAndRunningPage';
export const LANDING_PAGE = '/';
export const CHOOSE_ROLE_PAGE = 'choose-role';
export const SIGN_UP_FLOW = 'sign-up';
export const MENTEE_STATUS = "MenteeStatusPage";
export const MENTOR_FINISHED_PAGE = 'Mentor-Finished-Page';
export const HOME_PAGE = 'home';
export const ABOUT_PAGE = 'about';
export const RECOMMENDATINS_PAGE = 'recommendations';
export const CHOOSE_MENTOR_PAGE = 'chooseMentorPage';
export const WAIT_MENTOR_APPROVAL_PAGE = 'mantorApprovalWaitPage';
export const MATCH_SUCCESS_PAGE = 'matchSuccessPage';
export const MENTOR_IN_PROCESS_PAGE = 'mentorInProcessPage';
export const NEW_FORM_PAGE = 'NewFormPage';
export const PROFILE_PAGE = 'ProfilePage';
export const FEEDBACK_FORM_FILLING_PAGE = 'FeedbackFormFillingPage';

// HomeContentTypes
export const PENDINGS = 'Pending Requests';
export const PROCESS = 'In Process';
export const FINISHED = 'Finished';
export const DECLINED = 'Declined';

// Person Card Buttons Text
export const PENDINGS_BUTTON1 = 'approve';
export const PENDINGS_BUTTON2 = 'decline';
export const PROCESS_BUTTON = 'finish';
export const FINISH_BUTTON1 = 'feedback';
export const FINISH_BUTTON2 = 'share';
export const DECLINED_BUTTON = 'undecline';

// Tag Categories
export const FIELD = 'field';
export const TECHSKILL = 'techSkill';
export const SOFTSKILL = 'softSkill';
export const AGENDA = 'agenda';

// Tag Headlines Categories
export const FIELDS = 'Fields';
export const TECHSKILLS = 'Tech Skills';
export const SOFTSKILLS = 'Soft Skills';
export const AGENDAS = 'Community';
export const AGENDAS_TITLE_FOR_INTERVIEWER = 'Make a Difference';
export const AGENDAS_TITLE_FOR_INTERVIEWEE = 'Your Journey, Your Story';
export const AGENDAS_BOX_COLOR_AND_BG = '#dadbf5'; // '#EDD6F8';

// Tags Lists
export const FIELDS_LIST = ['Data Analysis', 'UX', 'UI', 'Data Science', 'Product Management', 'QA', 'Software Engineer', 'Web Development', 'Project Managment', 'Algo Development']
export const TECHSKILLS_LIST = ['Python', 'C', 'C++', 'Java', 'React', 'Figma', 'R', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Vue.js', 'PHP', 'Swift', 'C#', 'Ruby', 'Go']
export const SOFTSKILLS_LIST = ['Articulation', 'English' , 'Self-Presentation', 'Small Talk', 'Formulation', 'Pressure Management', 'Orderly Answer', 'Enthusiasm', 'Motivation', 'F2F']
export const AGENDAS_LIST = ['Combat Soldier', 'Woman', 'Man', 'Haredi', 'Orthodox','Ex-Orthdox', 'Inexperienced', 'Periphery resident', 'disadvantaged', 'ethnic minority', 'Handicapped', 'LGBTQ', 'Vegan']

// Algorithm constants:
export const AGENDA_WEIGHT = 2;
export const TECHSKILLS_WEIGHT = 1;
export const SOFTSKILLS_WEIGHT = 1;
export const NUM_OF_MATCHES = 5;

// Sign Up Form Questions
export const MENTOR_QUESTIONS = [
    
    {
        name: 'Profession',
        id: 'profession',
        placeHolder: 'profession',
        title: 'What is your profession?'
    },
    {
        name: 'Company Name',
        id: 'company',
        placeHolder: 'Comapny',
        title: 'Comapny Name'
    },
    {
        name: 'Company Size',
        id: 'companySize',
        placeHolder: 'Comapny Size',
        title: 'Comapny Size'
    },
    {
        name: 'Seniority',
        id: 'seniority',
        placeHolder: 'Seniority',
        title: 'Seniority'
    },
    {
        name: 'Degree In ...',
        id: 'degree',
        placeHolder: 'Degree',
        title: 'Degree'
    },
    {
        name: 'Tell Us More About Yourself!',
        id: 'description',
        type: 'long',
        placeHolder: 'Tell Us Anout Yourself',
        title: 'Tell Us Anout Yourself'
    }
]
export const MENTEE_QUESTIONS = [
    
    {
        name: 'University',
        id: 'university',
        placeHolder: 'University',
        title: 'University'
    },
    {
        name: 'What is your degree?',
        id: 'degree',
        placeHolder: 'Degree',
        title: 'Degree'
    },
    {
        name: 'Year of Study?',
        id: 'yearOfStudy',
        placeHolder: 'Year',
        title: 'Year'
    },
    {
        name: 'Requested Profession',
        id: 'profession',
        placeHolder: 'Requested Profession',
        title: 'Requested Profession'
    },
    {
        name: 'Tell Us More About Yourself',
        id: 'description',
        type: 'long',
        placeHolder: 'Tell Us Anout Yourself!',
        title: 'Tell Us Anout Yourself'
    }
]
export const DEFAULT_QUESTIONS = [
    {
        name: 'Name*',
        qid: 'name',
        placeHolder: 'First Name',
        title: 'Name'
    },
    {
        name: 'Last Name*',
        qid: 'lastName',
        placeHolder: 'Last Name',
        title: 'Surname'
    },
    {
        name: 'Phone Number*',
        qid: 'phone',
        placeHolder: 'Phone Number',
        title: 'Phone Number'
    },
    {
        name: 'LinkedIn Profile',
        qid: 'linkedin',
        placeHolder: 'LinkedIn Profile Url',
        title: 'LinkedIn Profile'
    }
]
// Sign Up Form Steps

export const SIGN_UP_STEPS = ['Personal Info','Role', 'Proffesional Info'];


//FireBase

export const FIREBASE_CONFIG = {}
export const USERS_DB_NAME = 'users';
export const INTERVIEWERS_DB_NAME = 'interviewers'; 
// export const MENTEES_DB_NAME = 'mentees';
export const INTERVIEWEES_DB_NAME = 'interviewee';
export const FEEDBACKS_DB_NAME = 'feedbacks';


export const INTERVIEWEE_IMG_FILE = 'interveiwee.png';
export const INTERVIEWER_IMG_FILE = 'interviewer.png';