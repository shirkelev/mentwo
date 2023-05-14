
import { Shield } from "@mui/icons-material";
import Mentee from "./Mentee.js"
import Mentor from "./Mentor.js"

function defaultMentee(){
    return new Mentee('Shiroosh')
}

export default class DataBase{
        constructor(){
            const password = '12345678';
            const emailEnd = '@gmail.com';

            const nitsan = new Mentor('Nits', 'Nitsan', 'Heiman'
            , password, require('./images/nitsan.jpeg'),  'nitsan' + emailEnd, '0545535498',4 , 'I have been working in the field of algorithms for 3 years. During my studies at Haifa University I worked in a large corporation as a software developer.');

        const shir = new Mentee('Shik', 'Shir', 'Levran'
            , password, require('./images/shir.jpeg'),  'shir' + emailEnd, '0529088712', 'I am interested in the field of data science, I am a student in the second year of studies at Tel Aviv University, looking for a position in this field in a new startup.');

        const yuvi = new Mentee('Yuval', 'Yuval', 'Yusipov'
            , password, require('./images/yuvi.jpeg'),  'yuvi' + emailEnd, '0506783444', 'I am a student in my last year of studies at the Hebrew University of Jerusalem, looking for a position in the field of image processing at a company in the Jerusalem or Tel Aviv area.');

        const omer = new Mentee('omer', 'Omer', 'Getzler'
            , password, require('./images/omer.jpeg'),  'omer' + emailEnd, '0548221309', 'I am studying computer science at the Open University, finishing my studies at the end of the year and looking for a job in the field as a student.');
        
        const herzl = new Mentee('Theodor', 'Herzl', 'Herzl'
            , password, require('./images/omer.jpeg'),  'herzl' + emailEnd, '0522345118', 'I studied computer science in Vienna and I am currently looking for a job as a junior in the field of operating systems.');

        nitsan.addMentee(shir, 'approved');
        nitsan.addMentee(herzl, 'approved');
        shir.addMentor(yuvi);
        nitsan.addMentee(yuvi, 'pending');
        nitsan.addMentee(omer, 'finished');
        shir.addOptionalMentor(yuvi);
        shir.addOptionalMentor(omer);
        shir.addOptionalMentor(nitsan);
        shir.status = 1;
        for(let i = 0; i < 3; i++){
            nitsan.addMentee(new Mentee('Name' + String(i), 'Name' + String(i), 'Last'
            , password, '',  'omer' + emailEnd, '0509776592'))
        }

            this.data = 
                [
                nitsan,
                yuvi,
                shir,
                omer
                ];
        };
    findById(id){
        for(const user of this.data){
            // console.log(user.userName)
            if(user.id === id){
                return user
            }
        }
        return new Mentor('Shiroosh')
    };

    findByName(userName){
        for(const user of this.data){
            if(userName === user.userName){
                return user
            }
       
        }
        return new Mentor('Shiroosh')
    };
    
    checkPass(password, user){
        return(
            user.password === password
        )
    }

    addUser(user){
        this.data.push(user);
    }
}
// console.log(new DataBase().findById(1))


