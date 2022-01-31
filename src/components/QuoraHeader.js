import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon  from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon  from '@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleAltOutlinedIcon  from '@material-ui/icons/PeopleAltOutlined'
import NotificationsOutlinedIcon  from '@material-ui/icons/NotificationsOutlined'
import SearchIcon  from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar, Button } from '@material-ui/core'

import './css/QuoraHeader.css'



const QuoraHeader = () => {
  return (
    <div className='qHeader'>
      
   
   <div className='qHeader-content'>
   <div className='qHeader__logo'>
       <img src='https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif' alt='source'/>
       </div>


   <div className='qHeader__icons'>
       
   <div className='qHeader__icon'>
       <HomeIcon/>
       </div> 
       <div className='qHeader__icon'>
      < FeaturedPlayListOutlinedIcon/> 
       </div> 
       <div className='qHeader__icon'>
       <AssignmentTurnedInOutlinedIcon/>
       </div> 
       <div className='qHeader__icon'>
       <PeopleAltOutlinedIcon/>
       </div> 
       <div className='qHeader__icon'>
       <NotificationsOutlinedIcon/>
       </div> 
       </div> 

       <div className='qHeader__input'>
       <SearchIcon/>
       <input type='text' placeholder='Search questions'/>
       </div>

       <div className='qHeader__Rem'>
        <Avatar />
       </div>

       <Button>Add Question</Button>

   </div>
    </div>
  )
}

export default QuoraHeader




