/* eslint-disable react/prop-types */


import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";
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

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:photo
        })
    };

    const logOut = () =>{
        return signOut(auth)
    }

  
   


useEffect(() => {
    const unSubcribe = () => {
        onAuthStateChanged(auth, cuser => {
            setUser(cuser)
            setIsLoading(false)
        })
    }
    return unSubcribe();
}, [])








const values = {
    crateUser,
    logIn,
    logOut,
    user,
    isLoading,
    siginGoogle,
    updateUserProfile

}


    return (
        <AuthContext.Provider value={values}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;