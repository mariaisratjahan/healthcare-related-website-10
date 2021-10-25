import { registerVersion } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,
    onAuthStateChanged,  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useState,useEffect } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import Login from "../pages/Login/Login";
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const useFirebase=()=>{
    const auth = getAuth();
    const [name,setName]=useState('');
    const [email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const [user,setUser]=useState({});
    const [isRegister,setIsRegister]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [error, setError]=useState('');
    // const [isLoading,setIsLoading]=useState(true);
    
    

    // signin with google-------------------------------------
    const signInUsingGoogle=()=>{
        setIsLoading(true);
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                console.log(user);
                // ...
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }

// create-user and sign-in with email and password---------------

//-------creating user with email & password----------------
const emailFieldHandler=(e)=>{
   
    setEmail(e.target.value);
    console.log(e.target.value);
}
const passwordFieldHandler=(e)=>{
   
    setPassword(e.target.value);
}
const handleRegistration= e =>{
    e.preventDefault();
    console.log(email,password);
    isRegister? register(email,password): login(email,password)
}
const register=(email,password)=>{
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        // Signed in 
        const user = result.user;
        console.log(user);
        setUserName();
        setError('')
    })
    .catch(error =>{
        setError(error.message)
    })
   
}
const setUserName=()=>{
  
    updateProfile(auth.currentUser, {
        displayName:name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
}
const login=(email,password)=>{
   
  signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    console.log(user);
    setError('');   
   
  })
  .catch(error =>{
    setError(error.message)
  })
    
    
}
const userNameFieldHandler=(e)=>{
   setName(e.target.value);
}
//toggle to register---
const toggleRegister=(e)=>{
    setIsRegister(e.target.checked);
}
    // observe user state change
    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              // ...
            } else {
               setUser({});
            }
            setIsLoading(false);
          });
          return ()=> unsubscribed;
    },[])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }
    return{
        user,
        isRegister,
        isLoading,
        email,
        password,
        name,
        signInUsingGoogle,
        userNameFieldHandler,
        emailFieldHandler,
        passwordFieldHandler,
        handleRegistration,
        toggleRegister,
        logOut,
        error
    }
}

export default useFirebase;