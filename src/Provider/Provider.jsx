/* eslint-disable react/prop-types */
// import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { auth } from "../Config_file/Firebse";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Confil_file/firbase";
// import { auth } from "../Confil_file/firbase";



 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
     const Googleprovider = new GoogleAuthProvider()

    const [ user , setUser] = useState(null)
    const [ isLoading , setIsLoading] = useState (true)


// crate user
    const crateUser = (email , password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }




const siginGoogle = () =>{
    setIsLoading(true);
    return signInWithPopup(auth, Googleprovider);
}

    // login 


    const logIn = (email , password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth ,email , password)
    }


    


    const logOut = () =>{
        return signOut(auth)
    }
// user ache kih na 

useEffect (()=>{
const mxv = onAuthStateChanged(auth, (currentUesr)=>{
    setUser(currentUesr);
    setIsLoading(false);
});
return () =>{
    return mxv();
};

},[]);


const values = {
    crateUser,
    logIn,
    logOut,
    user,
    isLoading,
    siginGoogle,

}


    return (
        <AuthContext.Provider value={values}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;