import User from './User.js'

export default class Mentee extends User {
    constructor(userName, name, lastName, password, img, email, phone, description, profession) {
        super(userName, name, lastName, password, img, email, phone, 'mentee', description);
        this.offeredMentors = [];
        this.currentMentor = null;
        this.mentorshipStatus = null;
        this.optionalMentors = [];
        this.profession = profession;
        this.status = 0
    }

    addMentor(mentor){
        this.currentMentor = mentor;
        this.mentorshipStatus = 'active'
    }
    addOptionalMentor(mentor){
        this.optionalMentors.push(mentor);
    }

    changeStatus(status){
        this.status = status
    }
}

// // export Mentee;
// console.log(new Mentee('a','a','a'))