
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
                , password, require('./images/nitsan.jpeg'),  'nitsan' + emailEnd, 8);

            const shir = new Mentee('Shik', 'Shir', 'Levran'
                , password, require('./images/shir.jpeg'),  'shir' + emailEnd);

            const yuvi = new Mentee('Yuval', 'Yuval', 'Yusipov'
                , password, require('./images/yuvi.jpeg'),  'yuvi' + emailEnd, 'I am a very long description dsadjbasdkisabdkhjsabdkshabsakhdbsajhkdbashkdbsahdbashidbsadihbashidbsaihdbsaihdbasdihbdasihbdsaih');

            const omer = new Mentee('omer', 'Omer', 'Getzler'
                , password, require('./images/omer.jpeg'),  'omer' + emailEnd);
            
            const bls = new Mentee('bla', 'bla', 'Getzler'
                , password, require('./images/omer.jpeg'),  'omer' + emailEnd);

            nitsan.addMentee(shir, 'approved');
            nitsan.addMentee(bls, 'approved');
            shir.addMentor(nitsan);
            nitsan.addMentee(yuvi, 'pending');
            nitsan.addMentee(omer, 'finished');
            shir.addOptionalMentor(yuvi);
            shir.addOptionalMentor(omer);
            shir.addOptionalMentor(nitsan);
            for(let i = 0; i < 3; i++){
                nitsan.addMentee(new Mentee('Name' + String(i), 'Name' + String(i), 'Last'
                , password, '',  'omer' + emailEnd))
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
        alert('Adding user')
        this.data.push(user);
    }
}
// console.log(new DataBase().findById(1))


