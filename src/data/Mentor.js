import User from './User.js'

export default class Mentor extends User {
    constructor(userName, name, lastName, password, img, email, phone, capacity, description) {
        super(userName, name, lastName, password, img, email, phone, 'mentor', description);
        this.approvedMentees = [];
        this.pendingMentees = [];
        this.finishedMentees = [];
        this.declinedMentees = [];
        this.capacity = capacity;
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
