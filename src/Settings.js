
import React from 'react'
import {useGlobalContext} from './context'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Settings =()=>{
const {user} = useGlobalContext()
const {username, profileImg} = user

 return(
<div className="settings-page">
<header className="settings-header" >
      <div className="header-wrapper row" >
          <Link to="/">
              <FontAwesomeIcon icon="arrow-left"  className="back-btn" />
          </Link>
          <h4>Settings</h4>
     </div>
 </header>
   <Link to="/userProfile" className="profile row s-b" >
        <div className="img-container" >
             <img className="profile-img"  src={profileImg} alt="profile"/>
        </div>
        <div className="profile-body" >
             <h4 className="title name" >{username}</h4>
             <p className="dark-text">Hey there !</p>
        </div>
        <FontAwesomeIcon icon="qrcode" className="settings-icon qrcode-icon" />
   </Link>
   
   <div className="settings-content row s-b" >
       <FontAwesomeIcon icon="key" className="content-icon" />
       <div className="content-body column">
            <p className="title">Account</p>
            <p className="dark-text footer">Privacy, security, change number</p>
       </div>
   </div>
<div className="settings-content row s-b" >
     <FontAwesomeIcon icon="feather"  className="content-icon" />
     <div className="content-body column">
          <p className="title">Chats</p>
          <p className="dark-text footer">Theme, wallpaper, chat history</p>
     </div>
 </div>
<div className="settings-content row s-b" >
     <FontAwesomeIcon icon="bell" className="fas fa-bell content-icon" />
     <div className="content-body column">
          <p className="title">Notifications</p>
          <p className="dark-text footer">Message, group & call tones</p>
     </div>
 </div>
<div className="settings-content row s-b" >
     <FontAwesomeIcon icon="store"  className="content-icon" />
     <div className="content-body column">
          <p className="title">Storage and data</p>
          <p className="dark-text footer">Network usage, auto download</p>
     </div>
 </div>
<div className="settings-content row s-b" >
     <FontAwesomeIcon icon="question-circle" className="content-icon" />
     <div className="content-body column">
          <p className="title">Help</p>
          <p className="dark-text footer">Help center, contact us, privacy policy</p>
     </div>
 </div>
<div className="settings-content row s-b last-content" >
     <FontAwesomeIcon icon="users"  className="content-icon" />
     <div className="content-body column">
          <p className="title">Invite a friend</p>
     </div>
 </div>

<footer className="column" >
    <p className="dark-text" >from</p>
    <p className="fb-text" >Facebook</p>
</footer>
 
</div>

 ) 
}

export default Settings