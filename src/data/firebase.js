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
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
    this.storage = getStorage(app);
    // this.intreviwers = collection(db, 'intreviwers');
    // this.intreviewees = collection(db, 'intreviewees');
  }


  async uploadFileAndGetURL(file, name) {
    let uploadTask;
    try{
      const storageRef = ref(this.storage, name);
      uploadTask = await uploadBytesResumable(storageRef, file);
      const url = await getDownloadURL(uploadTask.ref);
      return url;
    } catch (e) {
      console.log("Error uploading file", e);
      return null;
    }
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

  async userExists(id) {
    // Returns true if the user exists in the database
    // Returns false otherwise
    try{
      const docRef = doc(this.db, Constants.USERS_DB_NAME, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("User with ID ", id, " exists");
        return true;
      } else {
        console.log("User with ID ", id, " does not exist");
        return false;
      }
    } catch (e) {
      console.log("Error checking user with ID ", id, e);
      return null;
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

  async updateUserProp(id, signedUp, description, role) {
    try{
      console.log("Updating user with ID ", id);
      const userRef = doc(this.db, Constants.USERS_DB_NAME, id);
      return updateDoc(userRef, {type: role, description: description, signedUp: signedUp});
    } catch (e) {
      console.log("Error updating user with ID ", id, e);
      return null;
    }
  }

  async getRoleData(id, role) {
    // Retutns the additional data of the user with the given id and role
    // Role can be either 'mentor' or 'mentee'
    try {
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

  async getPendingInterviewees(pendingList) {
    // Returns a list of all pending interviewees for the given interviewer
    // pendingList is a list of all pending interviewees
    // id is the id of the interviewer
    let pendingInterviewees = [];
    try{
      for(let i = 0; i < pendingList.length; i++){
        const intervieweeBaseData = await getDoc(doc(this.db, Constants.USERS_DB_NAME, pendingList[i]));
        const intervieweeExtraData = await getDoc(doc(this.db, Constants.INTERVIEWEES_DB_NAME, pendingList[i]));
        const interviewee = {...intervieweeBaseData.data(), ...intervieweeExtraData.data()};
        if(!interviewee.isMatched){
          pendingInterviewees.push(interviewee);
        }
      }
      console.log("All pending interviewees are added");
      return pendingInterviewees;
    } catch (e) {
      console.log("Error getting all pending interviewees");
      return [];
    }

  }

  async getUnmatchedInterviewees(){
    let intervieweesList = [];
    try{
      const allDocs = await getDocs(this.interviewess);
      console.log("All interviewees are fetched");
      allDocs.forEach(doc => {
        if(!doc.data().isMatched){
          const interveiweeData = {...doc.data(), id: doc.id};
          console.log('Getting all intervieww, interview: ', interveiweeData);
          intervieweesList.push(interveiweeData);
        }
      });
      console.log("All unmatched interviewees are added");
    } catch (e) {
      console.log("Error getting all interviewees");
    }
    return intervieweesList;
  }

  async getFinishedInterviewees(finishedList) {
    let finishedInterviewees = [];
    try{
      for(let i = 0; i < finishedList.length; i++){
        const intervieweeBaseData = await getDoc(doc(this.db, Constants.USERS_DB_NAME, finishedList[i]));
        const intervieweeExtraData = await getDoc(doc(this.db, Constants.INTERVIEWEES_DB_NAME, finishedList[i]));
        const interviewee = {...intervieweeBaseData.data(), ...intervieweeExtraData.data()};
        finishedInterviewees.push(interviewee);
      }
      console.log("All finished interviewees are added");
      return finishedInterviewees;
    }
    catch (e) {
      console.log("Error getting all finished interviewees");
      return [];
    }
  }

  async getProcessedInterviewees(processedList) {
    let processedInterviewees = [];
    try{
      for(let i = 0; i < processedList.length; i++){
        const intervieweeBaseData = await getDoc(doc(this.db, Constants.USERS_DB_NAME, processedList[i]));
        const intervieweeExtraData = await getDoc(doc(this.db, Constants.INTERVIEWEES_DB_NAME, processedList[i]));
        const interviewee = {...intervieweeBaseData.data(), ...intervieweeExtraData.data()};
        processedInterviewees.push(interviewee);
      }
      console.log("All processed interviewees are added");
      return processedInterviewees;
    }
    catch (e) {
      console.log("Error getting all processed interviewees", e);
      return [];
    }
  }

  async getInterviewerData(id) {
    try{
      const interviewerBaseData = await getDoc(doc(this.db, Constants.USERS_DB_NAME, id));
      const interviewerExtraData = await getDoc(doc(this.db, Constants.INTERVIEWERS_DB_NAME, id));
      const interviewer = {...interviewerBaseData.data(), ...interviewerExtraData.data()};
      console.log("Interviewer data is added");
      return interviewer;
    } catch (e) {
      console.log("Error getting interviewer data");
      return null;
    }
  }

  async changeUserBasicInfo(id, name, lastName, phone, img) {
    console.log("Updating user with ID ", id, name, lastName, phone, img);
    const downloadURL = await this.uploadFileAndGetURL( img, 'profile_img_' + id);
    console.log("Download URL is ", downloadURL);
    try{
      const userRef = doc(this.db, Constants.USERS_DB_NAME, id);
      return updateDoc(userRef, {name: name, lastName: lastName,  phone: phone, img: downloadURL});
    } catch (e) {
      console.log("Error updating user with ID ", id, e);
      return null;
    }
  }


}

      

const DB = new DataBase(db);

export { db, auth, googleAuthProvider, DB};

