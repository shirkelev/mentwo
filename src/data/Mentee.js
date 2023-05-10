import User from './User.js'

export default class Mentee extends User {
    constructor(userName, name, lastName, password, img, email, description) {
        super(userName, name, lastName, password, img, email, 'mentee', description);
        this.offeredMentors = [];
        this.currentMentor = null;
        this.mentorshipStatus = null;
        this.optionalMentors = [];
    }

    addMentor(mentor){
        this.currentMentor = mentor;
        this.mentorshipStatus = 'active'
    }
    addOptionalMentor(mentor){
        this.optionalMentors.push(mentor);
    }
}

// // export Mentee;
// console.log(new Mentee('a','a','a'))