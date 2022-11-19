
import { GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
import {auth} from "../firebase"




function SignIn() {
  const signIn =() => {
      const provider = new GoogleAuthProvider();
      // signInWithRedirect(auth, provider)
      signInWithPopup(auth, provider)
  }

  return (
    <button className='login-with-google-btn' onClick={signIn}>Sign in</button>
  )
} 

export default SignIn