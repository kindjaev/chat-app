import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../firebase"


const logOut = () => {
    signOut(auth)
}

function LogOut() {
  return (
    <button className='logout-with-google-btn' onClick={logOut}>Log out</button>
  )
}

export default LogOut