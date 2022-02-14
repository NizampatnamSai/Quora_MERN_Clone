import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon  from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon  from '@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleAltOutlinedIcon  from '@material-ui/icons/PeopleAltOutlined'
import NotificationsOutlinedIcon  from '@material-ui/icons/NotificationsOutlined'
import SearchIcon  from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar, Button, Input} from '@material-ui/core'
import CloseIcon  from '@material-ui/icons/Close'
import {Modal} from 'react-responsive-modal'
import './css/QuoraHeader.css'
import 'react-responsive-modal/styles.css'
import {ExpandMore} from '@material-ui/icons'
import axios from 'axios'
import { signOut } from 'firebase/auth'
import { auth } from '../firabase'
import {useDispatch, useSelector} from 'react-redux'
import {logout, selectUser, userSlice} from '../features/Userslice'



const QuoraHeader = () => {
  const [isModalopen, setModalopen]=useState(false)
  const [inputUrl, setInputUrl]=useState('')
  const [question, setquestion]=useState('')
  const dispatch=useDispatch()




  const user=useSelector(selectUser)
  const handlesubmit= async ()=>{
    if(question !=="") {
//  Sending to backend (mangodb) from frontend!!



      const config={
        headers:{
          "Content-Type":"application/json"
        }
      }


      const body ={
        questionName:question,
        questionUrl:inputUrl,
        user:user
      }
   
      await axios.post("/api/questions", body,config).then((res)=>{
        console.log(res.data)
        alert(res.data.message)
        window.location.href='/';
      }).catch((e)=>{
        console.log(e)
        alert("error in adding question!")

      })
    }

  }





  const ModalClose=(
    <CloseIcon/>)
  


const handleLogout=()=>{
  if(window.confirm('Are you sure to logout ?')){
    dispatch(logout())
  
  signOut(auth).then(()=>{
    
    console.log("Logged out")
  }).catch((e)=>{
    console.log('error in logout',e)
  })}

}


  return (
    <div className='qHeader'>
      
   
   <div className='qHeader-content'>
   <div className='qHeader__logo'>
       <img src='https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif' alt='source'/>
       </div>


   <div className='qHeader__icons'>
       
   <div className='qHeader__icon'>
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
         <span onClick={handleLogout}><Avatar src={user.photo}/></span>
       

       <Button   onClick={()=>setModalopen(true)}>Add Question</Button>
       </div>
       <Modal 
        open={isModalopen}
        closeIcon={ModalClose}
        onClose={()=>setModalopen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}

        styles={{
          overlay:{
            height:'auto',
          }
        }}

       >

       <div className='modal__title'>
        <h5>Add Question</h5>
        <h5>Share Link</h5>

       </div>
       <div className='modal__info'>

         <Avatar src={user?.photo} className='avatar'/>
      <div className='modal__scop'>
        <PeopleAltOutlinedIcon/>
        <p>Public</p>
        <ExpandMore/>

      </div>

       </div>
    
    <div className='modal__field'>
      <Input value={question}
      onChange={(e)=>{setquestion(e.target.value)}}
      type='text' placeholder="Start your question with 'What', 'How, 'Why' etc.."/>
       <div style={{
         dispaly:'flex',
         flexDirection:'column'
       }}>
         <input
         type='text'
         value={inputUrl}
         onChange={(e)=>setInputUrl(e.target.value)}
         style={{
           margin:'5px 0',
           border:'1px solid lightgray',
           padding:'10px',
           outline:'2px solid #000',
         }}   placeholder='Optional : include a link that gives context'/>

         {
         
         inputUrl !=="" && <img
          style={{
            height:'40vh',
            objectFit:'contain'
          }} 
         src={inputUrl} alt='img url u gaveit'/>
         }

       </div>
   
    </div>
    <div className='modal__buttons'>
      <button className='cancle' onClick={()=>setModalopen(false)}>Cancle</button>
      <button
      onClick={handlesubmit}
      className='add' type='submit' >Add question</button>

    </div>
       </Modal>

   </div>
    </div>
  )
}

export default QuoraHeader




