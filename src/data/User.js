export default class User {
    static latestId = 0;

    constructor(userName, name, lastName, password, img, email) {
        this.id = User.nextId();
        this.img = img;
        this.userName = userName;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }

    static nextId() {
        if (!this.latestId) {
        this.latestId = 1;
        } else {
        this.latestId++;
        }
        return this.latestId;
    }
}



