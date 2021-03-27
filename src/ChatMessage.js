
import React from 'react'

const ChatMessage =({singleMessage})=>{
  const {text, msgClass} = singleMessage

 return(
<div className={msgClass} >
     <p className="msg-text">{text}</p>
 </div>

 )
}

export default ChatMessage