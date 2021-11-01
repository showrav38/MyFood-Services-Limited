import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const signInWithGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setLoading(false);
            })
    }
    const setUserName = name => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const registerWithEmailandPass = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signInUsingEmailandPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return {
        signInWithGoogle,
        user,
        setUser,
        logOut,
        registerWithEmailandPass,
        error,
        setError,
        signInUsingEmailandPassword,
        setUserName,
        loading,
        setLoading
    }
}

export default useFirebase;




