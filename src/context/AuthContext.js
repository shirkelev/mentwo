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

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exData, setExData] = useState(false);

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
  if(user.metadata.creationTime === user.metadata.lastSignInTime) {
    await DB.addUser(user);
  }
  const userData = await DB.getUser(user.uid);
  console.log("User Data Gotten", userData.data());
  setUserData(userData.data());
  setLoading(false);
}

const fetchExtraData = async () => {
  if(userData && userData.signedUp && !exData){
    try{
      console.log("Fetching Extra User Data ", user.uid, " ...", userData);
      setLoading(true);
      const userExtraData = await DB.getRoleData(user.uid);
      console.log("User Data Gotten", userData.data());
      
      setUserData({...userData, ...userExtraData.data()});
      setExData(true);
      setLoading(false);
    
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  } else {
    console.log("No Extra User Data");
    return;
    }
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
  };
}, []);




  return (
    <AuthContext.Provider value={{ 
      googleSignIn, emailSignIn, logOut, user, setUser, 
      emailSignUp, error, userData, setUserData, loading, setLoading, fetchExtraData
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};