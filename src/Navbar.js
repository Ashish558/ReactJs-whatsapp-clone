
import React from 'react'
import {useGlobalContext} from './context'
import {setLink, handleHomeEllipsis} from './script'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar=()=>{
	const {setActivePage, activePage} = useGlobalContext()

 React.useEffect(()=>{
    setLink()  
    handleHomeEllipsis()
    //functn in script.js which change link class
 },[activePage])
 
 return(
   <header className="header" >
      <div className="header-main">
          <h3>WhatsApp</h3>
          <FontAwesomeIcon icon="search" className="icon" />
          
          <div className="home-option-icon" >
              <FontAwesomeIcon icon="ellipsis-v" className="icon" id="home-ellipsis-icon" />          
               <div className="lists-overlay lists-inactive" id="home-list-overlay" >
                  <ul className="lists"   >
			          <li className="list-item"><p className="link" ><span class="link-text">New group</span></p></li>
                      <li className="list-item"><p className="link"><span className="link-text">New Broadcast</span></p></li>
			          <li className="list-item"><p className="link"><span className="link-text">Whatsapp web</span></p></li>
                      <li className="list-item"><p className="link"><span className="link-text">Starred mesages</span></p></li>
			          <li className="list-item"><p className="link"><span className="link-text">Payments</span></p></li>
			          <li className="list-item"><Link to="/settings"  className="link"><span className="link-text">Settings (works)</span></Link></li>
	           </ul >
             </div>
          </div>

      </div>
      <div className="nav" >
            <FontAwesomeIcon icon="camera" className="fas fa-camera icon" />
            <p className="btn active-nav"  onClick={()=>setActivePage("home-active")}>chats</p>
            <p className="btn" onClick={()=>setActivePage("status-active")}>status</p>
            <p className="btn" onClick={(e)=>setActivePage("call-active") } >calls</p>
      </div>
   </header>
 )
}

export default Navbar