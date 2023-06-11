/* global firebase */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getFirestore
  ,collection
  ,doc
  ,setDoc
  ,getDocs
  ,getDoc
  ,onSnapshot,
  addDoc,
  updateDoc
} from "firebase/firestore";
import { 
  getAuth
  , GoogleAuthProvider
  ,createUserWithEmailAndPassword
  ,signOut
  ,signInWithEmailAndPassword 
  ,onAuthStateChanged
} from "firebase/auth";
import * as Constants from '../Constants';

const firebaseConfig = {
  apiKey: "AIzaSyBS1VZCQRZHQUQjWoK9aXAvl1YuKwCpZPo",
  authDomain: "internview-af2ef.firebaseapp.com",
  projectId: "internview-af2ef",
  storageBucket: "internview-af2ef.appspot.com",
  messagingSenderId: "884230331509",
  appId: "1:884230331509:web:c873584da72b8b9c96ac3c",
  measurementId: "G-SLLLHV84CM"
};

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

// DataBase
const db = getFirestore(app);
// const usersDB = getUsers(db);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

class DataBase {
  
  // Creating an API suited for the project based on the firebase API

  constructor(db) {
    this.db = db;
    this.users = collection(db, Constants.USERS_DB_NAME);
    this.interviews = collection(db, Constants.INTERVIEWERS_DB_NAME);
    this.interviewess = collection(db, Constants.INTERVIEWEES_DB_NAME);
    // this.intreviwers = collection(db, 'intreviwers');
    // this.intreviewees = collection(db, 'intreviewees');
  }

  async getAllUsers() {
    // Returns a list of all users

    let usersList = [];
    try{
      getDocs(this.users).then((querySnapshot) => {querySnapshot.forEach((doc) => {
      console.log('Get All Docs', {...doc.data(), id: doc.id});
      usersList.push(doc.data())
      })});
      console.log("All users are added");
    } catch (e) {
      console.log("Error getting all users");
    }
    return usersList;
  }

  async getUser(id) {
    // Returns a promise of user object with the given id
    
    try{ 
      return getDoc(doc(this.db, Constants.USERS_DB_NAME, id))

    } catch (e) {
      console.log("Error getting user with ID ", id, e);
      return null
    }
    
  }


  async addUser(user) {
    // Adds a user to the database
    // Returns the id of the user
    user = this.modifyUser(user, user.displayName ? 'google' : 'email');
    setDoc(doc(this.db, Constants.USERS_DB_NAME, user.id), user)
    .then(() => {
      console.log("User with ID ", user.id, " is added");
    }).catch((error) => {
      console.log("Error adding user with ID ", user.id, error);
      return null;
    });
    return user.id;
  }

  async addInterviewer(id, interviewer) {
    try{
      return setDoc(doc(this.db, Constants.INTERVIEWERS_DB_NAME, id), interviewer)
    } catch (e) {
      console.log("Error adding interviewer with ID ", id, e);
      return null;
    }
  }

  
  async addInterviewee(id, interviewee) {
    try{
      const docRef = doc(this.db, Constants.INTERVIEWEES_DB_NAME, id)
      return setDoc(docRef, interviewee)
    } catch (e) {
      console.log("Error adding interviewee with ID ", id, e);
      return null;
    }
  }

  async updateUserProp(id, signedUp, description, type) {
    try{
      console.log("Updating user with ID ", id);
      const userRef = doc(this.db, Constants.USERS_DB_NAME, id);
      return updateDoc(userRef, {type: type, description: description, signedUp: signedUp});
    } catch (e) {
      console.log("Error updating user with ID ", id, e);
      return null;
    }
  }

  async getRoleData(id) {
    // Retutns the additional data of the user with the given id and role
    // Role can be either 'mentor' or 'mentee'
    try {
    const userRef = doc(this.db, Constants.USERS_DB_NAME, id);
    let role;
    role = await getDoc(userRef)
    role = role.data().type;
    console.log("Role is ", role)
    if(role === 'mentor'){
      return getDoc(doc(this.db, Constants.INTERVIEWERS_DB_NAME, id))
    } else if(role === 'mentee'){
      return getDoc(doc(this.db, Constants.INTERVIEWEES_DB_NAME, id))
    } else {
      console.log("Error getting role data");
      return null;
    }
    } catch (e) {
      console.log("Error getting role data");
      return null;
    }
  }

  modifyUser(user, type) {
    let firstName = null;
    let lastName = null;
    if(type === 'google'){
      const [first, ...rest] = user.displayName.split(' ');
      firstName = first;
      lastName = rest.join(' ');
    } else if(type === 'email'){

    }
    return(
      {
        id: user.uid,
        name: firstName,
        lastName: lastName,
        email: user.email,
        type: null,
        phone: user.phoneNumber ? user.phoneNumber : null,
        img: user.photoURL ? user.photoURL : null,
      }
    )
  }

}

const DB = new DataBase(db);

export { db, auth, googleAuthProvider, DB};

