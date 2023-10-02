import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import {GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from './../firebase/firebase.config';
 const provider=new GoogleAuthProvider()
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setLoading(true)
       return signOut(auth)
    }

    const googleSignin=()=>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }

    // Obserbe auth state change
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])



    const authInfo={loading,user,createUser,signinUser,logout,googleSignin}
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

    AuthProvider.propTypes={
        children:PropTypes.node.isRequired
    }

export default AuthProvider;