import { User }  from './User.js'

export class Mentee extends User {
    constructor(userName, name, lastName, password, img, email) {
        super(userName, name, lastName, password, img, email);
        this.offeredMentors = [];
        this.currentMentor = null;
        this.mentorshipStatus = null;

    }

    addMentor(mentor){
        this.currentMentor = mentor;
        this.mentorshipStatus = 'active'
    }
}

// export Mentee;
// console.log(new Mentee('a','a','a'))