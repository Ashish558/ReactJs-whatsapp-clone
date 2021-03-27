
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CallPage =()=>{
 return(
<div className="call-page">
   
   <div className="call-content row ">
         <div className="img-container" >
            <img className="profile-img" alt="profile" src="./images/profile-8.jpg" />
        </div>
        <div className="subcontent row s-b">
             <div className="main" >
                   <h4>Harry</h4>
                   <div className="time row" >
                          <FontAwesomeIcon icon="arrow-left" className="fas fa-arrow-left icon green-icon" />
                          <p>Yesterday, 7:36 PM</p>
                   </div>
              </div>
              <FontAwesomeIcon icon="phone" className="call-icon" />
       </div>
  </div>
   <div className="call-content row ">
         <div className="img-container" >
            <img className="profile-img" alt="profile" src="./images/profile-15.jpg" />
        </div>
        <div className="subcontent row s-b">
             <div className="main" >
                   <h4>Mike</h4>
                   <div className="time row" >
                          <FontAwesomeIcon icon="arrow-left" className="icon red-icon" />
                          <p>Yesterday, 10:48 AM</p>
                   </div>
              </div>
              <FontAwesomeIcon icon="video" className="call-icon" />
       </div>
        </div>
   
</div>
  )
}

export default CallPage