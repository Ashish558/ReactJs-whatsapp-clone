import React from 'react'
import {useGlobalContext} from './context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddPersonModal=()=>{
  const {isModalOpen, setIsModalOpen, inputValue, changeInput, handleSubmit} = useGlobalContext()
  if(isModalOpen){
   return(
  <div className="modal-overlay" >
     <div className="modal" >
          <FontAwesomeIcon icon="window-close" className="close-icon"  onClick={()=>setIsModalOpen(false)} />
          <label>Name :</label>
           <div className="inputbox" >
               <span className="rect" ></span>
               <input type="text" 
                           className="input"
                           value = {inputValue} 
                           onChange ={(e)=>changeInput(e) }/>
           </div>
          <button onClick={handleSubmit} className="submit-btn" >Submit</button>
     </div>
  </div>
     )
  }
return null
}  

export default AddPersonModal