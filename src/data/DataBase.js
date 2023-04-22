
import Mentee from "./Mentee.js"
import Mentor from "./Mentor.js"

export default class DataBase{
        constructor(){
            const password = '12345678';
            const emailEnd = '@gmail.com';

            const nitzan = new Mentor('Nits', 'Nitsan', 'Heiman'
                , password, 'nitzan.jpeg',  'nitzan' + emailEnd);

            const shir = new Mentee('Shik', 'Shir', 'Levran'
                , password, 'shir.jpeg',  'shir' + emailEnd);

            const yuvi = new Mentee('Yuval', 'Yuval', 'Yusipov'
                , password, 'yuvi.jpeg',  'yuvi' + emailEnd);

            const omer = new Mentee('omer', 'Omer', 'Getzler'
                , password, 'omer.jpeg',  'omer' + emailEnd);
            
            const bls = new Mentee('bla', 'bla', 'Getzler'
                , password, 'omer.jpeg',  'omer' + emailEnd);

            nitzan.addMentee(shir, 'approved');
            nitzan.addMentee(bls, 'approved');
            shir.addMentor(nitzan);
            nitzan.addMentee(yuvi, 'pending');
            nitzan.addMentee(omer, 'declined');


            this.data = 
                [
                nitzan,
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
}
// console.log(new DataBase().findById(1))


