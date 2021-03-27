
import React from 'react'
import { Link } from "react-router-dom";


const SinglePerson =({singlePerson})=>{
const {name, fullDate, id, image} = singlePerson

 return(
  <div className="person" >
      <div className="img-container" >
          <img className="profile-img" src={image} alt="profile" />
     </div>
   
  <Link to ={`/personChat/${id}`} className="person-link">

  <div className="person-content" >
        <div className="person-title" >
             <h3>{name}</h3>
              <p className="date">{fullDate}</p>
        </div>
        <p className="message" >Tap to see message..</p>
    </div>
   </Link>
 
 </div>  
 )
}

export default SinglePerson