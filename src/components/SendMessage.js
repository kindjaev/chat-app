import React, {useState, useEffect} from 'react'
import {auth, db} from "../firebase"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


const style = {
    form: `bg-olive p-4 absolute bottom-0 w-[100%] h-18 rounded-b-xl`,
    input: `w-[80%] p-2 px-4 rounded-xl float-left justify-right text-dark-olive`,
    btn: `hover:shadow-lg bg-white w-[19%] rounded-xl py-2 px-4 float-right text-dark-olive text-center`
}
function SendMessage({scroll}) {
    const [input, setInput] = useState('')

    const handleInput = (ev) => {
        setInput(ev.target.value)
    }

    const sendMessage = async (ev) => {
        ev.preventDefault()
        const {uid, displayName} = auth.currentUser
        if (input){
            await addDoc(collection(db, "messages"), {
                text: input,
                name: displayName,
                uid: uid,
                timestamp: serverTimestamp()
            })
            setInput('')
            scroll.current.scrollIntoView({behavior: "smooth"})
        } else return 
       
    }
  return (
    <form className={style.form} onSubmit={sendMessage}>
        <input type="text" className={style.input} placeholder='Message' value={input} onChange={(ev) => handleInput(ev)}/>
        <button className={style.btn} type="submit">Send</button>
    </form>
  )
}

export default SendMessage