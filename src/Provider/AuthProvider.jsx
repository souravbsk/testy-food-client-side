/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../Utitlies/firebase.init';
export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //create user
    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //login user
    const loginUser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    //display name, photo update
    const updateUserNamePhoto = (currentUser,name,photo) => {
        setLoader(true)
        return updateProfile(currentUser,{
            displayName: name,
            photoURL: photo
        })
    } 

    //forget pass
    const forgetPass = (email) => {
        setLoader(true)
        return sendPasswordResetEmail(auth,email);
    }


    //getUser
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            setLoader(false);
        })
        return () => unSubscribe();
    },[])



//sign in with google 
const GoogleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
}

// sign in with github
const GithubSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth,githubProvider)
}



    //signOut 
    const logOutUser = () => {
        return signOut(auth);
    }
    const authInfo ={
        user,
        createUser,
        loginUser,
        forgetPass,
        updateUserNamePhoto,
        logOutUser,
        GoogleSignIn,
        GithubSignIn,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;