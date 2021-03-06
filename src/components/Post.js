import { Avatar } from '@material-ui/core'
import { ArrowDownward, ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

import './css/Post.css'

import 'react-responsive-modal/styles.css'
import {Modal} from 'react-responsive-modal'
import CloseIcon  from '@material-ui/icons/Close'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import ReactTimeAgo from 'react-time-ago'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/Userslice'

 function LastSeen({ date }) {
  return (
    <div>
      Last seen: <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}

 

function Post({post}) {

const [isModalopen, setModalopen]=useState(false);
const [answer, setAnswer]=useState('')
const user=useSelector(selectUser)

const handleSubmit=async()=>{
  if(post?._id && answer !==""){


    const config={
      headers:{
        "Content_Type":"application/json"
      }
    }
const body ={
  answer:answer,
  questionId:post?._id,
  user:user
}

  await axios.post('/api/answers',body,config).then((res)=>{
    console.log(res.data)
    alert("Answer added succefully")
    setModalopen(false)
    window.location.href='/'
  }).catch((e)=>{
    console.log(e)
  })
  }
}

const handlequill=(value)=>{

 setAnswer(value)

}

const ModalClose=(
    <CloseIcon/>)

  return (
    <div className='post'>
      <div className='post__info'>
          <Avatar  src={user.photo}/>
          <h4>{user. userName}</h4>
          <small><LastSeen date={post?.createdAt}/></small>
      </div>

      <div className='post__body'>
      <div className='post__question'>

        <p>
          {post?.questionName}
        </p>

        <button  onClick={()=>setModalopen(true)} className='post__btnAnswer'>Answer</button>
     
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
        }}>
           <div className='modal__question'>
               <h1>{post?.questionName}</h1>
               <p>Asked by {"  "} <span className='name'>Username</span> on <span className='name'>{new Date(post?.createdAt).toLocaleString()}</span>  </p>
           </div>
           <div className='modal__answer'>
               <ReactQuill  value={answer} onChange={handlequill}  placeholder='Enter your answer'/>
           </div>
           <div className='modal__button'>
           <button className='cancle' onClick={()=>setModalopen(false)}>Cancle</button>
      <button  onClick={handleSubmit} className='add' type='submit' >Add Answer</button>

           </div>
        </Modal>
      </div>
      {
       post.questionUrl!=="" && <img src={post.questionUrl} alt='questionUrl'/>
      }
      </div>


      <div className='post__footer'>
          <div className='post__footerAction'>

              <ArrowUpwardOutlined/>
              <ArrowDownwardOutlined/>
          </div>
          <RepeatOneOutlined/>
          <ChatBubbleOutlined/>

          <div className='post__footerLeft'>
              <ShareOutlined/>
              <MoreHorizOutlined/>
          </div>
      </div>


  <p style={{
      color:'rgba(0,0,0,0.5)',
      fontSize:'12px',
      fontweight:'bold',
      margin:'10px 0',
  }}>{post?.allAnswers.length} Answer</p>

  <div style={{
      margin: '5px 0px 0px 0px',
      padding:'5px 0px 0px 20px',
      borderTop: '1px solid lightgray',
  }} className='post__answer'>
      <div 
      style={{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          padding:'10px 5px',
          borderTop: '1px solid lightgray'
      }}
       className='post-answer-container'>
{post?.allAnswers?.map()}

          <div  style={{
          display:'flex',
          alignItems:'center',
         marginBottom:'10px',
         fontSize:'12px',
         fontweight:600,
         color:'#888,'
      }}
             className='post-answered'>

              <Avatar/>
              <div style={{
                  margin: '0px 10px',

              }}
              
              className='post-info'>
                  <p>
                      Username
                  </p>
                  <span>
                      Timestamp
                  </span>
              </div>
          </div>

          <div className='post-answer'> This is test answer</div>
      </div>
  </div>
    </div>
  )
}

export default Post
