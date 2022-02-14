import React from 'react'
import "./Login.css"
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../../firabase'

function Login() {

    const handlesubmit= async()=>{
        await signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='login-container'>
      <div className='login-content'>

     <img  src='https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif' alt='logo'/>
     <button onClick={handlesubmit}  className='btn-login'>Login to continue</button></div>
    </div>
  )
}

export default Login
