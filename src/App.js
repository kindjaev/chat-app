import React from 'react'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

import "./App.css"
import Nav from "./components/Nav"
import Chat from './components/Chat'

const style = {
  app_container: `max-w-[728px] mx-auto text-center`,
  app_section: `flex flex-col h-[90vh] bg-light-olive mt-10 relative shadow-md rounded-xl`
}

function App() {
  const [user] = useAuthState(auth)
  // console.log(user)
  return (
    <div className={style.app_container}>
      <section className={style.app_section}>
        <Nav />
        {user &&  <Chat />}
      </section>
    </div>
  )
}

export default App