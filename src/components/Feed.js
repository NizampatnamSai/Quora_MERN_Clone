import React, { useEffect, useState } from 'react'
import QuoraBox from './QuoraBox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'
function Feed() {
  const [posts, setPosts]=useState([])

  // "proxy": "http://127.0.0.1:80",
// Pakage.json in must...


  useEffect(()=>{
  axios.get("localhost:80/api/questions").then((res)=>{
    console.log(res.data.reverse())
    setPosts(res.data)
  }).catch((e)=>{
    console.log(e)
  })
  },[])
  return (
    <div className='feed'>
      
      <QuoraBox/>

      {posts.map((post,index)=>{
        (<Post key={index}  post={post} />)
      })}
      
      

    </div>
  )
}

export default Feed
