import User from './User.js'
import * as CONSTANTS from '../Constants';

export default class Mentee extends User {
    constructor(userName, name, lastName, password, img, email, phone, description, profession) {
        super(userName, name, lastName, password, img, email, phone, 'mentee', description);
        this.filedsList = Array(CONSTANTS.FIELDS_LIST.length).fill(null);
        this.techSkills = Array(CONSTANTS.TECHSKILLS_LIST.length).fill(null);
        this.softSkills = Array(CONSTANTS.SOFTSKILLS_LIST.length).fill(null);
        this.agendas = Array(CONSTANTS.AGENDAS_LIST.length).fill(null);
        this.currentMentor = null;
        this.isMatched = false;
        this.profession = profession;
    }

    addMentor(mentor){
        this.currentMentor = mentor;
    }
}

// // export Mentee;
// console.log(new Mentee('a','a','a'))