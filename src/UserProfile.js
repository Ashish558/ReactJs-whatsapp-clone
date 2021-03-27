
import React from 'react'
import {Link} from "react-router-dom";
import {useGlobalContext} from './context'

import {Swiper , SwiperSlide} from  'swiper/react'

import 'swiper/swiper-bundle.css'
import {profileImages} from './script'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserProfile=()=>{
  const {user, changeProfile} = useGlobalContext()
  const {username, profileImg} = user
  const [isImagesOpen, setIsImagesOpen]= React.useState(false)

return(

<div className="profile-page" >
<header className="profile-header" >
     <div className="header-wrapper row" >
         <Link to="/settings"><FontAwesomeIcon icon="arrow-left"  className="back-btn" /></Link>
         <h4>Profile</h4>
    </div>
</header>
    <div className="img-container">
        <div className="img-wrapper">            
             <img alt="profile" className="profile-img"  src={profileImg} />
              <FontAwesomeIcon icon="camera"  onClick={()=>setIsImagesOpen(true)} id="camera-icon" className="cam-icon" />
        </div>
    </div>
    
    <div className="profile-content row s-b" >
         <FontAwesomeIcon icon="user" className="icon user-icon grey" />
         <div className="profile-body column first-body">
              <div className="content row s-b" >
                       <div className="column" >
                            <p className="dark-text small" >name</p>
                            <p className="title" >{username}</p>
                       </div>
                       <FontAwesomeIcon icon="edit" className="green icon mar-auto-v" />
              </div>
              <div>
                  <p className="small dark-text content-footer">This is not your username or pin. This name will be visible to your Whatsapp contacts</p>
              </div>
         </div>
    </div>
    

<div className="profile-content row s-b" >
     <FontAwesomeIcon icon="info-circle"  className="icon  mar-v-auto grey" />
     <div className="profile-body column">
          <div className="content row s-b" >
                   <div className="column" >
                        <p className="dark-text small" >about</p>
                        <p className="title" >Hey there !</p>
                   </div>
                   <FontAwesomeIcon icon="edit"  className="green icon mar-auto-v" />
          </div>
     </div>
</div>

<div className="profile-content row s-b" >
     <FontAwesomeIcon icon="user" className="fas fa-user icon  mar-v-auto grey" />
     <div className="profile-body column ">
          <div className="content row s-b" >
                   <div className="column" >
                        <p className="dark-text small" >phone</p>
                        <p className="title" >+91 12345 67890</p>
                   </div>
          </div>
     </div>
</div>

<div className={isImagesOpen ? "images" : "images images-inactive"}  id="images">

<div className="images-header" >
   <FontAwesomeIcon icon="window-close" onClick={()=>setIsImagesOpen(false)} 
                        className="close-btn" id="close-btn" /> 
 </div>
  <Swiper className="swiper-container"
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesVisibility= {true}
                  watchSlidesProgress={true}
                  >
       {profileImages.map((imageSrc)=>{
         return <SwiperSlide tag="div"
                                          key={imageSrc}  
                                          className="swiper-slide" >
                         <img alt="img" onClick={(e)=>changeProfile(e)} className="image"  src={"."+imageSrc}/>
                 </SwiperSlide>
       })}
  </Swiper>
</div>

</div>
 )
}

export default UserProfile