
import React from 'react'
import {useGlobalContext} from './context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Status=()=>{
const {user} = useGlobalContext()
const {username, profileImg} = user
 return(
<div className="status-page" >
    <p className="status" >
          <div className="img-container" >
               <img className="profile-img" src={profileImg} alt="profile" />
               <FontAwesomeIcon icon="plus"  className="plus-btn status-plus-btn" />
          </div>
          <div className="status-content" >
                <h4>{username}</h4>
                <p>Tap to add status update</p>
          </div>
    </p>
    
    <h5>Recent updates</h5>
    
    <p className="status recent-status" >
          <div className="img-container" >
               <img alt="profile" className="profile-img"  src="./images/profile-10.jpg" />
                   <span className="gap gap-top" ></span>
                   <span className="gap gap-bottom" ></span>
          </div>
          <div className="status-content recent-status-content"  >
                <h4>Chris</h4>
                <p>Tap to see status</p>
          </div>
    </p>
    <p className="status recent-status" >
          <div className="img-container" >
               <img alt="profile" className="profile-img"  src="./images/profile-6.jpg" />
          </div>
          <div className="status-content recent-status-content"  >
                <h4>Ricky</h4>
                <p>Tap to see status</p>
          </div>
    </p>
   
</div>
 )
}

export default Status