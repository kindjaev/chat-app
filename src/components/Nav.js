import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'
// import GoogleButton from 'react-google-button'


const style = {
    nav: `bg-olive h-14 rounded-t-lg flex items-center p-4 justify-between`,
    heading: `text-dark-olive text-lg`,

}

function Nav() {
  const [user] = useAuthState(auth)
  // console.log(user)
  return (
    <div className={style.nav}>
        <div className={style.heading}>Chat App</div>
        {/* <GoogleButton /> */}
        {!user ?<SignIn /> : <LogOut />}
    </div>
  )
}

export default Nav