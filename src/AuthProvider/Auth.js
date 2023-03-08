import React, {  createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const authContext = createContext();
const auth = getAuth(app);
 

const Auth = ({children}) => {
     const [user, setUser] = useState();

     // create user with email 
     const createUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth,email,password);
     }

     // sign in with email password 

     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password)
     }

     // sign in with google 

     const googleProvider = (provider) =>{
          return signInWithPopup(auth, provider)
     }

     // update user 

     const updateUser = (userInfo) =>{
          return updateProfile(auth.currentUser, userInfo)
     }

     // log out 

     const logOut = () =>{
          return signOut(auth)
     }

     // observe 

     useEffect(()=>{

          const unsubscribe = onAuthStateChanged(auth, currentUser =>{
               console.log('observing');
               setUser(currentUser)
          });

          return ()=> unsubscribe();
     },[])

     const authInfo = { createUser, signIn, googleProvider, logOut, user, updateUser}

     return (
         <authContext.Provider value={authInfo}>
          {children}
         </authContext.Provider>
     );
};

export default Auth;