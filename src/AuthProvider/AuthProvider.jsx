import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    // create user
    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = (fullname, imageURL) => {
        return updateProfile(auth.currentUser, {
            displayName: fullname,
            photoURL: imageURL
        });
    }

    // sign in user
    const signInUser = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        
        return signInWithPopup(auth, googleProvider);
    }

    // github login
    const githubLogin = () => {
        
        return signInWithPopup(auth, githubProvider);
    }

    // sign out user
    const logout = () => {
        setUser(null);
        signOut(auth);
    }



    const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
