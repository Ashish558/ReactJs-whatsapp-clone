
import React from 'react'
import {useGlobalContext} from './context'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PersonDetail=(props)=>{
	const {people} = useGlobalContext()
  	const id = props.match.params.id
  	const [person, setPerson] = React.useState({})

  	React.useEffect(()=>{
        const newPerson = people.find((specificPerson)=>specificPerson.id ===id)
        setPerson(newPerson)
  	},[people,id])
  	const {name ,  image} = person

  return(
<div className="person-detail" >
    <header className="person-detail-header">
           <div className="header-wrapper" >
                <Link to={`/personChat/${id}`} className="back-btn"  >
                      <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <h4>{name}</h4>
                <FontAwesomeIcon icon="ellipsis-v"  className="ellipsis" />
          </div>
    </header>
    <div className="img-container" >
           <img alt="Prof" src={"."+image} />
    </div>
       <div className="content-container" >
                <div className="subcontent row s-b" >
                      <div className="left column">
                            <p className="bold" >Mute Notifications</p>
                            <p className="light mar-top" >Always</p>
                      </div>
                      <div className="right center-v">
                            <FontAwesomeIcon icon="toggle-on" className="icon-toggle" />
                      </div>
                </div>
                <div className="subcontent" >
                        <p className="bold padd-left" >Custom Notifications</p>
                </div>
                <div className="subcontent row s-b" >
                        <p className="bold padd-left" > Media Visibility</p>
                </div>
       </div>
       
       <div className="content-container" >
             <div className="subcontent row s-b" >
                   <div className="left column">
                         <p className="bold">Disappearing Messages</p>
                         <p className="light mar-top">Off</p>
                   </div>
                   <div className="right center-v">
                         <FontAwesomeIcon icon="clock" className="icon-bold light" />
                   </div>
             </div>
             <div className="subcontent row s-b" >
                   <div className="left column">
                         <p className="bold">Encryption</p>
                         <p className="light mar-top">Messages and calls are end to end encrypted. Tap to verify</p>
                   </div>
                   <div className="right center-v">
                         <FontAwesomeIcon icon="lock"  className="icon-bold light" />
                   </div>
             </div>
       </div>
       
       <div className="content-container" > 
             <div className="subcontent row s-b" >
                   <div className="left column">
                         <p className="subcontent-title dark-green"> About and phone number</p>
                         <p className="bold">Hey there ! i am using Whatsapp</p>
                         <p className="light mar-top">February 27, 2021</p>
                   </div>
             </div>
             <div className="subcontent row s-b" >
                   <div className="left column">
                         <p className="bold"> +91 12345 67890</p>
                         <p className="light mar-top">Mobile</p>
                   </div>
                   <div className="buttons row">
                        <FontAwesomeIcon icon="phone" className="icon-bold icon" />
                        <FontAwesomeIcon icon="phone"  className="icon-bold icon" />
                        <FontAwesomeIcon icon="video" className="icon-bold icon" />
                   </div>
             </div>             
       </div>
       
     <div className="content-container" > 
          <div className="subcontent-footer row" >
               <FontAwesomeIcon icon="times-circle" className="icon red" />
               <p className="red" >Block</p>
         </div>
     </div>
     <div className="content-container" > 
          <div className="subcontent-footer row" >
               <FontAwesomeIcon icon="thumbs-down" className="icon red" />
               <p className="red" >Report</p>
         </div>
     </div>
     
  </div>
  )
}

export default PersonDetail