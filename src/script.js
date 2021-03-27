/*
import imgOne from "./images/profile-1.jpg"
import imgTwo from "./images/profile-2.jpg"
import imgThree from "./images/profile-3.jpg"
import imgFour from "./images/profile-4.jpg"
import imgFive from "./images/profile-5.jpg"
import imgSix from "./images/profile-6.jpg"
import imgSeven from "./images/profile-7.jpg"
import imgEight from "./images/profile-8.jpg"
import imgNine from "./images/profile-9.jpg"
import imgTen from "./images/profile-10.jpg"
import imgEleven from "./images/profile-11.jpg"
import imgTwelve from "./images/profile-12.jpg"
import imgThirteen from "./images/profile-13.jpg"
import imgFourteen from "./images/profile-14.jpg"
import imgFifteen from "./images/profile-15.jpg"
*/
const profileImages=[
"./images/profile-1.jpg",
"./images/profile-2.jpg",
"./images/profile-3.jpg",
"./images/profile-4.jpg",
"./images/profile-5.jpg",
"./images/profile-6.jpg",
"./images/profile-7.jpg",
"./images/profile-8.jpg",
"./images/profile-9.jpg",
"./images/profile-10.jpg",
"./images/profile-11.jpg",
"./images/profile-12.jpg",
"./images/profile-13.jpg",
"./images/profile-14.jpg",
"./images/profile-15.jpg"
]


  function setHeight(){
  let header= document.querySelector(".chat-header")
  let footer= document.querySelector(".chat-footer")
  let messageBox= document.querySelector(".chat-message-container")
  let headerHeight = header.getBoundingClientRect().height
  let footerHeight = footer.getBoundingClientRect().height
      messageBox.style.top= headerHeight+"px"
      messageBox.style.bottom = footerHeight+"px"

  }

 const getFullDate=()=>{
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let meridian = "AM"
  if(hours>12){
     hours-=12
     meridian= "PM"
  }
  if(minutes<10){
     minutes = "0"+minutes
  }
 return `${hours}:${minutes} ${meridian}`
}

 const replies=[
  {message:"hello", 
   text:"Hey! how are you?"
   },
   {message:"hi", 
   text:"Hey! Wassup?"
   },
   {message:"wassup", 
   text:"Nothing, you say? "
   },
   {message:"your favourite dish?", 
   text:"chicken"
   },
]

 const handleLinks=()=>{
         var chatEllipsisIcon =document.getElementById("chat-ellipsis-icon")
         var chatList= document.getElementById("chat-list")
    
         chatEllipsisIcon.addEventListener("click", function(){
         chatList.style.opacity="1"
         chatList.style.transform="translate(0,0)"
         chatList.style.pointerEvents="all"
         })
         
     var links = document.querySelectorAll("#chat-list .link")
     for(let j= 0;j<links.length; j++){
     links[j].addEventListener("click", ()=>closeList(chatList))
     }
     function closeList(item){
     item.style.opacity="0"
     item.style.transform="translate(20%,-20%)"
     item.style.pointerEvents="none"
     }
     var chatMsgContainer= document.getElementsByClassName("chat-message-container")[0]
     chatMsgContainer.addEventListener("click", ()=>closeList(chatList))
}        

 const handleHomeEllipsis=()=>{
  
var homeEllipsisIcon =document.getElementById("home-ellipsis-icon")
var homeListOverlay= document.getElementById("home-list-overlay")

homeEllipsisIcon.addEventListener("click", openList) 
function openList(){
   homeListOverlay.classList.remove("lists-inactive")
}
homeListOverlay.addEventListener("click", function(e){
   homeListOverlay.classList.add("lists-inactive")
  // e.target.classList.contains("lists-overlay")
}) 
}


  const setLink=()=>{
const links= document.querySelectorAll(".nav .btn")

for(let i= 0; i<links.length; i++){
  links[i].addEventListener("click",changeLink)
}

 function changeLink(e){
   for(let i= 0; i<links.length; i++){
       links[i].classList.remove("active-nav")
   }
   e.target.classList.add("active-nav") 
 }
} 

export {setHeight, profileImages, getFullDate, replies, handleLinks, handleHomeEllipsis, setLink}