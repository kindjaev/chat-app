import React from 'react'
import {auth} from '../firebase'

const style = {
    message: `flex shadow-lg m-4 py-2 px-4 rounded-xl`,
    name: `absolute mt-[-1.5rem] text-gray-600 text-xs`,
    sent: `bg-[#b9fbc0] text-blue flex-row-reverse text-end float-right`,
    received: `bg-white float-left text-blue`
}
function Message({msg}) {

  const messageClass = msg.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`

  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
            <p className={style.name}>{msg.name}</p>
            <p className=''>{msg.text}</p>
        </div>
    </div>
  )
}

export default Message