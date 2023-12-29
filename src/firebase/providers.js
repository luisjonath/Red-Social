import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        
        const {displayName, email, photoURL, uid} = result.user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

        
    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, photoURL} = response.user
        await updateProfile(firebaseAuth.currentUser, {displayName})

        return {
            ok: true,
            uid, displayName, email, photoURL
        }

    } catch (error) {
        console.log(error)
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }
}

export const loginWithEmailPasword = async({email, password}) => {
    try {
        
        const response = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const {uid, photoURL, displayName} = response.user
        return {
            ok: true,
            uid, displayName, photoURL
        }
    } catch (error) {
        console.log(error)
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }

}

export const logoutFirebase = async() => {
    return await firebaseAuth.signOut()
}