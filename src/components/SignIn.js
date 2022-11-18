import React from 'react'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {auth} from "../firebase"


const signIn =() => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);

}

function SignIn() {
  return (
    <button className='login-with-google-btn' onClick={signIn}>Sign in</button>
  )
} 

export default SignIn