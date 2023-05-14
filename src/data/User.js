export default class User {
    static latestId = 0;

    constructor(userName, name, lastName, password, img, email, phone, type, description='I am a short description about the user.') {
        this.id = User.nextId();
        this.img = img;
        this.userName = userName;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.type = type;
        this.description = description;
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



