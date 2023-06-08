import User from './User.js'
import * as CONSTANTS from '../Constants';

export default class Mentor extends User {
    constructor(userName, name, lastName, password, img, email, phone,available, description, profession='I am a proffesion') {
        super(userName, name, lastName, password, img, email, phone, 'mentor', description);
        this.approvedMentees = [];
        this.pendingMentees = [];
        this.finishedMentees = [];
        this.declinedMentees = [];
        this.available = available;
        this.profession = profession;
        this.filed_list = Array(CONSTANTS.FIELDS_LIST.length).fill(null);
        this.filed_list = Array(CONSTANTS.TECHSKILLS_LIST.length).fill(null);
        this.filed_list = Array(CONSTANTS.SOFTSKILLS_LIST.length).fill(null);
        this.filed_list = Array(CONSTANTS.AGENDAS_LIST.length).fill(null);
    };

    addMentee(mentee, type) {
        if(type === 'approved'){
            const index = this.pendingMentees.indexOf(mentee);
            if (index > -1) { 
                this.pendingMentees.splice(index, 1); 
            }
            this.approvedMentees.push(mentee);
        }
        else if(type === 'declined'){
            const index = this.pendingMentees.indexOf(mentee);
            if (index > -1) { 
                this.pendingMentees.splice(index, 1); 
            }
            this.declinedMentees.push(mentee);
        }
        else if(type === 'finished'){
            const index = this.pendingMentees.indexOf(mentee);
            if (index > -1) { 
                this.pendingMentees.splice(index, 1); 
            }
            this.finishedMentees.push(mentee);
        }
        else{
            const index = this.pendingMentees.indexOf(mentee);
            if (index === -1) { 
                this.pendingMentees.push(mentee); 
            }
            
        }
        
    }
}
