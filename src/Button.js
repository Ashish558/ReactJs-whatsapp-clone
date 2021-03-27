import React from 'react'
import {useGlobalContext} from './context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button =()=>{
 const {addPerson, activePage} = useGlobalContext()
 return(
 <div>
       {(activePage==="home-active") ?   
          (<FontAwesomeIcon icon="plus" onClick={addPerson} className="fas fa-plus plus-btn" />)
       :("") }
       {(activePage==="status-active") ?   
          (<FontAwesomeIcon icon="camera" className="fas fa-camera plus-btn" />)
       :("") }
       {(activePage==="call-active") ?   
          (<FontAwesomeIcon icon="phone"  className="fas fa-phone plus-btn" />)
       :("") }
       
    </div>
 ) 
}

export default Button