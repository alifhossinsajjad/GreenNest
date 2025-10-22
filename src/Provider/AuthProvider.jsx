import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import { auth } from '../Firebase/Firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        // loading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }



      const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

        
    }



const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser,updateData);
        
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth,(cureentUser) =>{
            // console.log('cureent user in auth state', cureentUser);
            setUser(cureentUser);
            setLoading(false);
        })

        return(() => {
            unsubscribe();
        })
    },[])



     const authData = {
            user,
            createUser,
            logInUser,
            logOut,
            loading,
            setLoading,
            updateUserProfile,
            setUser
        }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;