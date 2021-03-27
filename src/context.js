
import React from 'react'
import {getFullDate, profileImages, replies} from './script'  

const AppContext=React.createContext()
const AppProvider=({children})=>{
   const [people, setPeople] = React.useState([]) 
   const [isModalOpen, setIsModalOpen]= React.useState(false) 
   const [inputValue, setInputValue] = React.useState("") 
   const [inputMessage, setInputMessage] = React.useState({text:"", msgClass:"msg-div right"}) 
   const [activePage, setActivePage] = React.useState("home-active")
   const [user, setUser] = React.useState({username:"Ashish", profileImg:"./images/profile-2.jpg"})
 const addPerson =()=>{
    setIsModalOpen(true)
    setInputValue("")
 }
 
 const changeInput =(e)=>{
    setInputValue(e.target.value)
 }
 
const handleSubmit =()=>{
  if(inputValue !== ""){
     const fullDate= getFullDate()
     const key = new Date().getTime().toString()
     const randomNumber= Math.floor(Math.random()*profileImages.length)
     const image = profileImages[randomNumber]
     setPeople([...people, {name:inputValue, fullDate, id:key, chatList:[ ], image:image } ])
     setIsModalOpen(false)
     setInputValue("")
  }
}

const displayMessage=(id)=>{

for(let i=0; i<replies.length; i++){
  if(replies[i].message===inputMessage.text.toLowerCase()){

       const tempPeople =people.map((person)=>{
           if(person.id===id){
              return {...person, chatList:[ ...person.chatList, inputMessage , {...replies[i], msgClass:"msgClass left"}] }
           }
          else{
              return {...person}
           }
       })
     setPeople(tempPeople)
     break;
    } 
    else{
       const tempPeople2 =people.map((person)=>{
           if(person.id === id){
              return {...person, chatList:[ ...person.chatList, inputMessage] }
          }
          else{
             return {...person}
          }
       })
       setPeople(tempPeople2)   
    }
  }
    setInputMessage({...inputMessage, text:""})
}

const clearChat=(id)=>{
console.log(id)
   const tempPeople =people.map((person)=>{
       if(person.id === id){
          return {...person, chatList:[ ] }
       }
       else{
          return {...person}
       }
   })
   setPeople(tempPeople)
}

const changeProfile=(e)=>{
  setUser({...user, profileImg:e.target.src})

}

 return (
    <AppContext.Provider
     value ={{people,
                 addPerson,
                 isModalOpen,
                 setIsModalOpen,
                 inputValue,
                 changeInput,
                 handleSubmit, inputMessage, setInputMessage,
                 displayMessage, activePage, 
                 setActivePage, clearChat, user, changeProfile
                 }}>
    
         {children}
  </AppContext.Provider>  
   )

}
export const useGlobalContext=()=>{
   return React.useContext(AppContext)
}

export {AppContext, AppProvider}