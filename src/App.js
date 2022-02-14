import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Login from './components/auth/Login';
import Quora from './components/Quora';
import { selectUser } from './features/Userslice';
import { auth } from './firabase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import onAuthStateChanged from 'firabase/auth'
import {login} from "../src/features/Userslice"


function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  

  useEffect(()=>{
    // onAuthStateChanged(auth,(authUser)=>{
    auth.onAuthStateChanged((authUser)=>{

      if(authUser){
        dispatch(login({
          userName:authUser.displayName,
          photo:authUser.photoURL,
          email:authUser.email,
          uid:authUser.uid
                }))
        console.log("Authuser",authUser)
      }
    });
  },[dispatch]);
  return (
    <div className="App">
      {user? <Quora/>:<Login/>}
  

  {/* <Quora/> */}

   </div>
  );
}

export default App;

