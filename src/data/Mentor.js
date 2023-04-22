import {User} from './User.js'

export default class Mentor extends User {
    constructor(userName, name, lastName, password, img, email) {
        super(userName, name, lastName, password, img, email);
        this.approvedMentees = [];
        this.pendingMentees = [];
        this.finishedMentees = [];
        this.declinedMentees = [];
    };

    addMentee(mentee, type) {
        if(type === 'approved'){
            this.pendingMentees.pull(mentee)
            this.approvedMentees.push(mentee)
        }
        else if(type === 'declined'){
            this.pendingMentees.pull(mentee)
            this.declinedMentees.push(mentee);
        }
        else{
            this.pendingMentees.push(mentee)
        }
        
    }
}
