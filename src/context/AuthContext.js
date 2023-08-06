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
import { 
  matchAll
  ,matchInterviewer
  ,getMutualTags
} from '../Algorithm/MatchingAlgorithm'


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullDataFetched, setFullDataFetched] = useState(false);
  const [enterHome, setEnterHome] = useState(false);
  const [clickSign, setClickSign] = useState(false);

  const provider = new GoogleAuthProvider();

  const googleSignIn = async () => {
   try{
      // signInWithRedirect(auth, provider)
      // signInWithPopup(auth, provider);
      setClickSign(true);
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      // const credential = await provider.credentialFromResult(result);
      // console.log("Signup with Google", result.user);
      fetchUserData(result.user); 
      setUser(result.user)
      setClickSign(false);
      return 1
   }catch(error){
      // console.log("error Signining In with Google", error);
      setError("Error trying to sign in with Google");
      setLoading(false);
      return -1;
    }
  };


  const logOut = () => {
    
    signOut(auth).then(() => {
      setUser(null);
      setUserData(null);
      setFullDataFetched(false);
      setEnterHome(false);
      window.history.pushState(null, "", "/sign-in");
    window.location.reload();
    }).catch((error) => {
      // console.log("Error Signing Out", error);
      setError("Error Signing Out")
      setLoading(false);
      setClickSign(false);

    });
  };

  const emailSignIn = async (email, password) => {
    setLoading(true);
    setClickSign(true);
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      // console.log("Signin with email", userCredential);
      fetchUserData(userCredential.user);
      setUser(userCredential.user);
      
    }catch(error){
      setError("One or more fields have an error")
      setLoading(false);
      // console.log(error);
    } finally {
      setClickSign(false);
    }
  };

const emailSignUp =  async (email, password) => {
  setLoading(true);
  setClickSign(true);
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    // console.log("Signup with Email", userCredential);
    fetchUserData(userCredential.user);
    setUser(userCredential.user);
  }catch(error){
    // console.log(error);
    setError("One or more fields have an error")
    setLoading(false);
  } finally {
    setClickSign(false);
  }
}

const fetchUserData = async (user) => {
  setLoading(true);
  const exists = await DB.userExists(user.uid);
  if(!exists) {
    await DB.addUser(user);
  }
  const userData = await DB.getUser(user.uid);
  // console.log("User Data Gotten", userData.data());
  let data = userData.data();
  if(data?.signedUp){
    setEnterHome(true);
    setUser(user)
  }
  else{
    setUserData(data);
    setUser(user);
    setLoading(false);
  }
}

function sameLists(list1, list2){
  if(list1.length !== list2.length){
    return false;
  }
  for(let i = 0; i < list1.length; i++){
    if(list1[i] && list2[i] && !list1[i].includes(list2[i])){ 
      return false;
    }
  }
  return true;
}


useEffect( () => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if(!loading){
      setLoading(true);
    }
    if (currentUser) {
      // console.log("User is logged in", currentUser);
      // setUser(currentUser);
      fetchUserData(currentUser);
    } else {
      // console.log("User is logged out");
      setUser(null);
    };
    setLoading(false);

  });
  return () => {
    if(!clickSign){
      unsubscribe();
    }
    <Navigate to="../" />;
  };
}, []);

useEffect(() => {
  const fetchExtraData = async () => {
    try{
      setLoading(true);
      // console.log("Fetching Extra User Data ", user.uid, " ...", userData);
      // console.log("first update cur user data");
      const newUser = await DB.getUser(user.uid);
      // console.log("The user Role is ", newUser.data().type, newUser.data());
      let userExtraData = await DB.getRoleData(user.uid, newUser.data().type);
      userExtraData = userExtraData.data();
      // console.log("User Extra Data", userExtraData);
      switch (newUser.data().type) {
        case "mentor":
          // console.log("Starting to fetch interviewees data")
          // console.log("Pending Mentees", userExtraData.pendingMentees ? userExtraData.pendingMentees : [])
          // console.log("Approved Mentees", userExtraData.approvedMentess ? userExtraData.approvedMentess : [])
          // console.log("Finished Mentees", userExtraData.finishedMentees ? userExtraData.finishedMentees : [])
          if(userExtraData.pendingMentees.length <= 3) {
            const availbleInterviewees = await DB.getUnmatchedInterviewees();
            // console.log("Available Interviewees", availbleInterviewees);
            const matches = matchInterviewer(userExtraData, availbleInterviewees);
            // console.log("Matches", matches);
            userExtraData.pendingMentees = matches? matches.matches : [];
            
            // Todo update pending interviewees for interviewer in DB
          }
          // console.log("Approved Ids ", userExtraData.approvedMentess)
          const pendingInterviewees = await DB.getPendingInterviewees(userExtraData.pendingMentees ? userExtraData.pendingMentees : [] );
          const approvedInterviewees = await DB.getProcessedInterviewees(userExtraData.approvedMentess ? userExtraData.approvedMentess : []);
          const finishedIntervieweesData= await DB.getFinishedInterviewees(user.uid
                                                      ,userExtraData.finishedMentees ? userExtraData.finishedMentees : []);
          // console.log('Approved: ', approvedInterviewees)
          userExtraData = {...userExtraData
            , pendingMenteesData: pendingInterviewees
            , approvedMentessData: approvedInterviewees,
             finishedMenteesData: finishedIntervieweesData
            };
          const newPendingInterviewees = pendingInterviewees.map((pi) => pi.id)
          // console.log("New Pending Interviewees", newPendingInterviewees);
          if(!sameLists(newPendingInterviewees, userExtraData.pendingMentees)){
            // console.log("Updating Pending Mentees", newPendingInterviewees, userExtraData.pendingMentees);
            DB.UpdatePendingMentees(user.uid, newPendingInterviewees);
          }
          for(let i = 0; i < userExtraData.pendingMenteesData.length; i++) {
            // console.log("Pending Mentee", userExtraData.pendingMenteesData[i]);
            const mutualTags = getMutualTags(userExtraData, userExtraData.pendingMenteesData[i]);
            // console.log("Mutual Tags From Func", mutualTags)
            userExtraData.pendingMenteesData[i].mutualTags = mutualTags;
            // console.log("Mutual Tags", userExtraData.pendingMenteesData[i].mutualTags)
          }
          // console.log('My Int', userExtraData.approvedMentess, userExtraData.approvedMentess.length)
          for(let i = 0; i < userExtraData.approvedMentessData.length; i++) {
            // console.log("Approved Mentee", userExtraData.approvedMentessData[i])
            userExtraData.approvedMentessData[i].mutualTags = getMutualTags(userExtraData, userExtraData.approvedMentessData[i]);
          }
          break;
        case "mentee":
          // console.log("Starting to fetch mentee data")
          let currentMentor = null;
          if(userExtraData.currentMentor) {
            currentMentor = await DB.getInterviewerData(userExtraData.currentMentor);
            currentMentor.mutualTags = getMutualTags( userExtraData, currentMentor);
          }
          let finishedMentorsData;
          if(userExtraData.finishedMentors && userExtraData.finishedMentors.length > 0) {
            finishedMentorsData = await DB.getFinishedMentors(user.uid, userExtraData.finishedMentors);
            userExtraData.finishedMentorsData = finishedMentorsData;
          } else {
            userExtraData.finishedMentorsData = [];
          }
          userExtraData.currentMentorData = currentMentor;
          // userExtraData.currentMentor['mutualTags'] = currentMentorMutualTags;
          break;
        case "admin":
          console.log("Admin Data", userExtraData.data());
          break;
        default:
          console.log("No User Data");
          break;
      }
      // console.log("New User Data", userExtraData);
      if(!(newUser.data()).img){
        const defaultImg = newUser.data().type === 'mentee' ? IntrevieweeImg : IntreviwerImg;
        // console.log("Default Img", defaultImg, userExtraData.type);
        userExtraData.img = defaultImg;
      }
      setUserData({...newUser.data(), ...userExtraData});
      setFullDataFetched(true);
      setLoading(false);
    } catch (error) {
        console.log(error);
    };
  }
  const onEnterHome = async () => {
    if(enterHome && !fullDataFetched){
      // console.log("User is logged in and signed up, fetching data");
      await fetchExtraData();
    } else if (enterHome && fullDataFetched) {
      // console.log("User is logged in and signed up, data already fetched");
    } else {
      // console.log("???", enterHome, fullDataFetched, loading);
      setLoading(false);
    }
    
  }
  onEnterHome();
}, [enterHome, fullDataFetched, user, userData, loading]);




  return (
    <AuthContext.Provider value={{ 
      googleSignIn, emailSignIn, logOut, user, setUser, 
      emailSignUp, error, userData, setUserData, loading, setLoading, 
      setEnterHome, fullDataFetched
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};