import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'


const style = {
    nav: `bg-blue h-14 rounded-t-lg flex items-center p-4 justify-between`,
    heading: `text-light-blue text-lg`,

}

function Nav() {
  const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
        <div className={style.heading}>Chat App</div>
        {!user ?<SignIn /> : <LogOut />}
    </div>
  )
}

export default Nav