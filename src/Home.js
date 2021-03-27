
import React from 'react'
import {useGlobalContext} from './context'
import Navbar from './Navbar'
import Button from './Button'
import Chats from './Chats'
import Status from './Status'
import CallPage from './CallPage'

const Home=()=>{
 const {activePage} = useGlobalContext()

 return(
 <section>
   <Navbar />
       <div id="toggle" >
           <Button />
          <div className={`toggle-wrapper ${activePage}`} >
               <div className="home-page" >
                     <Chats />                           
              </div>
             <Status/>
             <CallPage />
      </div> 
   </div> 

</section>   
 )
}

export default Home