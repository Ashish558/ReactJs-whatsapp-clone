
import React from 'react'
import People from './People'
import AddPersonModal from './AddPersonModal'

const Chats=()=>{

 return(
   <div className="chats" >
       <AddPersonModal />
       <People />
   </div>
 )
}

export default Chats