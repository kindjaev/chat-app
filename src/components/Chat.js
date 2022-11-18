import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'
import {db} from "../firebase"
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore'
import SendMessage from './SendMessage'

const style = {
    main: `flex flex-col p-[10px] relative overflow-scroll mb-16`
}

function Chat() {
  const [messages, setMessages] = useState([])
    const scroll = useRef()
    console.log(messages)


  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const querySnapshot = (data) => {
      let messages = []
      data.forEach(doc => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    }

    onSnapshot(q, querySnapshot)

    // const unsubscribe = onSnapshot(q, querySnapshot => {
    //   let messages = []
    //   querySnapshot.forEach(doc => {
    //     messages.push({...doc.data(), id: doc.id})
    //   })
    //   setMessages(messages)
    // })
    // return () => unsubscribe()
   
  }, [])


  return (
    <>
        <main className={style.main}>
          {messages && messages.map(msg => <Message key={msg.id} msg={msg}/>)}
          <span ref={scroll}></span>
        </main>
        
        <SendMessage scroll={scroll}/>
    </>
  )
}

export default Chat

