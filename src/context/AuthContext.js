import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  logOut,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  
} from 'firebase/auth';
import { auth, db } from '../data/firebase';
import { DB } from '../data/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import IntreviwerImg from '../data/images/interviewer.png';
import IntrevieweeImg from '../data/images/interveiwee.png';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullDataFetched, setFullDataFetched] = useState(false);
  const [enterHome, setEnterHome] = useState(false);

  const provider = new GoogleAuthProvider();

  const googleSignIn = async () => {
   
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider)
    .then((result) => {
      const credential = provider.credentialFromResult(result);
      console.log("Signup with Google", result.user, credential);
      setUser(result.user)
      return 1
      ;
    })
    .catch((error) => {
        console.log("error Signining In with Google", error);
        return -1;
    });
  };


  const logOut = () => {
    signOut(auth)
    window.history.pushState(null, "", "/sign-in");
    window.location.reload();
    };

  const emailSignIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Signin with email", userCredential); 
      })
      .catch((error) => {
        console.log(error);
      })
  };

const emailSignUp =  (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    console.log("Signup with Email", userCredential);
  }).catch((error) => {
    console.log(error);
  }); 
}

const fetchUserData = async (user) => {
  setLoading(true);
  const exists = await DB.userExists(user.uid);
  if(!exists) {
    await DB.addUser(user);
  }
  const userData = await DB.getUser(user.uid);
  console.log("User Data Gotten", userData.data());
  let data = userData.data();
  // const img = require(data.img? data.img : '');
  // data.img = img;
  setUserData(data);
  setLoading(false);
}





useEffect( () => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("User is logged in", currentUser);
      setUser(currentUser);
      fetchUserData(currentUser);
    } else {
      console.log("User is logged out");
      setUser(null);
    };

  });
  return () => {
    unsubscribe();
    <Navigate to="../" />;
  };
}, []);

useEffect(() => {
  const fetchExtraData = async () => {
    try{
      console.log("Fetching Extra User Data ", user.uid, " ...", userData);
      console.log("first update cur user data");
      const newUser = await DB.getUser(user.uid);
      console.log("The user Role is ", newUser.data().type);
      let userExtraData = await DB.getRoleData(user.uid, newUser.data().type);
      userExtraData = userExtraData.data();
      console.log("User Extra Data", userExtraData);
      switch (newUser.data().type) {
        case "mentor":
          console.log("Starting to fetch interviewees data")
          console.log("Pending Mentees", userExtraData.pendingMentees ? userExtraData.pendingMentees : [])
          console.log("Approved Mentees", userExtraData.approvedMentess ? userExtraData.approvedMentess : [])
          console.log("Finished Mentees", userExtraData.finishedMentees ? userExtraData.finishedMentees : [])
          const pendingInterviewees = await DB.getPendingInterviewees(userExtraData.pendingMentees ? userExtraData.pendingMentees : [] );
          const approvedMentess = await DB.getProcessedInterviewees(userExtraData.approvedMentess ? userExtraData.approvedMentess : []);
          const finishedMentees = await DB.getFinishedInterviewees(userExtraData.finishedMentees ? userExtraData.finishedMentees : []);
          userExtraData = {...userExtraData
            , pendingMenteesData: pendingInterviewees
            , approvedMentessData: approvedMentess,
             finishedMenteesData: finishedMentees
            };
          break;
        case "mentee":
          console.log("Starting to fetch mentors data")
          let currentMentor = null;
          if(userExtraData.currentMentor) {
            currentMentor = await DB.getInterviewerData(userExtraData.currentMentor);
          }
          userExtraData.currentMentorData = currentMentor;
          break;
        case "admin":
          console.log("Admin Data", userExtraData.data());
          break;
        default:
          console.log("No User Data");
          break;
      }
      console.log("New User Data", userExtraData);
      setUserData({...newUser.data(), ...userExtraData});
      setFullDataFetched(true);
      setLoading(false);
    } catch (error) {
        console.log(error);
    };
  }
  const onEnterHome = async () => {
    if(enterHome && !fullDataFetched){
      console.log("User is logged in and signed up, fetching data");
      setLoading(true);
      await fetchExtraData();
    } else if (enterHome && fullDataFetched) {
      console.log("User is logged in and signed up, data already fetched");
    } else {
      console.log("???", enterHome, fullDataFetched);
    }
  }
  onEnterHome();
}, [enterHome, fullDataFetched, user, userData]);




  return (
    <AuthContext.Provider value={{ 
      googleSignIn, emailSignIn, logOut, user, setUser, 
      emailSignUp, error, userData, setUserData, loading, setLoading, 
      setEnterHome
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};