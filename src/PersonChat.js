
import React from 'react'
import ChatMessage from './ChatMessage'
import {useGlobalContext} from './context'
//import {fas , fa} from 'fontawesome'
import {setHeight, handleLinks} from './script' 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PersonChat =(props)=>{
	const {people, inputMessage, setInputMessage, displayMessage, clearChat} = useGlobalContext()
	const id= props.match.params.id
	const [person, setPerson] = React.useState({})
    const {text} = inputMessage
	
	React.useEffect(()=>{ //For setting height of msg box
       setHeight()
       handleLinks()
	},[ ])

	React.useEffect(()=>{
      const newPerson = people.find((specificPerson)=>specificPerson.id ===id)
	  setPerson(newPerson)
	},[people,id])
	
	const {name , chatList, image} = person
// src={require(`../assets/images/${logo}`)}
 return(
<div className="chat-container" >
   <header className="chat-header" >
       <Link className="back-link" to = "/" >
             <FontAwesomeIcon icon="arrow-left" className="fas fa-arrow-left back-btn" />
             <img src={"."+image} alt="Prof" className="profile-img chat-header-img" />
       </Link>
       <Link className="chat-name" to={`/personDetail/${id}`} >   
              <h4>{name}</h4>
       </Link>

       <div className="buttons" >
             <FontAwesomeIcon icon="video"  className="icon" />
             <FontAwesomeIcon icon="phone"  className="icon" />
             <div className="chat-option-icon" >
                  <FontAwesomeIcon icon="ellipsis-v" className="icon" id="chat-ellipsis-icon" />
                  <ul className="lists" id="chat-list" >
                        <li><Link to={`/personDetail/${id}`} className="link" ><span className="link-text" >View contact</span></Link></li>
                        <li><p className="link"><span className="link-text">Media links and docs</span></p></li>
                        <li><p className="link"><span className="link-text">Click to close</span></p></li>
                        <li><p onClick={()=>clearChat(id)} className="link" ><span className="link-text">Clear chat</span></p></li>
                  </ul>
             </div>
             
       </div>
   </header>

   <div className="chat-message-container">
     {(chatList) ? (
         chatList.map((singleMessage, index)=>{
         return <ChatMessage key={index} singleMessage={singleMessage} />
         })
     ) : ("") }  
  </div>

    <div className="chat-footer" >
        <div className="input-box">
              <FontAwesomeIcon icon="smile-wink"  className="smile-icon" />
              <input type="text" 
                                      placeholder="Type... " 
                                      value={inputMessage.text}
                                      onChange = {(e)=>setInputMessage({text:e.target.value, msgClass:"msg-div right"}) }/>
              <FontAwesomeIcon icon="paperclip"  className="clip-icon" />
              <FontAwesomeIcon icon="camera"  className="camera-icon" />
        </div>
        <div className="input-send-container" >
       {text ? (
         <FontAwesomeIcon icon="arrow-right" onClick={()=>displayMessage(id)} className="input-send" />
          ) : (<FontAwesomeIcon icon="microphone" className="mic-icon input-send" />)
        }
        </div>
    </div>
    
</div> 
   ) 
}

export default PersonChat