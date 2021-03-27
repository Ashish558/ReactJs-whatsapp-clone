import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home'
import PersonChat from './PersonChat'
import PersonDetail from './PersonDetail'
import Settings from './Settings'
import UserProfile from './UserProfile'

import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSearch, faEllipsisV, faCamera, faWindowClose, 
             faPlus, faPhone , faArrowLeft, faVideo , faSmileWink, 
             faArrowRight, faPaperclip, faMicrophone, faToggleOn, 
             faClock, faLock, faTimesCircle, faThumbsDown, faKey, 
             faQrcode, faFeather , faBell, faStore, faQuestionCircle, 
             faUsers, faUser, faEdit, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faEllipsisV, faCamera, faWindowClose,  
                     faPlus, faPhone, faArrowLeft, faVideo, faSmileWink,
                      faArrowRight, faPaperclip, faMicrophone, faToggleOn, 
                      faClock, faLock, faTimesCircle, faThumbsDown,faKey, 
                      faQrcode, faFeather, faBell, faStore, faQuestionCircle, 
                      faUsers, faEdit, faUser, faInfoCircle)

const App=()=>{
  return(
  <div className="container">
     <Router>
     <Switch>
          <Route path="/" exact component={Home} />       
          <Route path="/personChat/:id"  component={PersonChat} />       
          <Route path="/personDetail/:id"  component={PersonDetail} />       
          <Route path="/settings" component={Settings} />       
          <Route path="/userProfile" component={UserProfile} />       
     </Switch>
     </Router>    
  </div>
  )
}

export default App