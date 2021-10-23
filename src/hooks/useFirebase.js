import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,
    onAuthStateChanged } from "firebase/auth";
import { useState,useEffect } from "react";
import initializeAuthentication from '../firebase/firebase.init';
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();
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
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;