import { Avatar } from '@material-ui/core'
import { ArrowDownward, ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import './css/Post.css'
function Post() {
  return (
    <div className='post'>
      <div className='post__info'>
          <Avatar/>
          <h4>User Name</h4>
          <small>Timestamp</small>
      </div>

      <div className='post__body'>
        <p>
            This is test question
        </p>

        <button className='post__btnAnswer'>Answer</button>
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


  <p>1 Answer</p>

  <div className='post__answer'>
      <div className='post-answer-container'>
          <div className='post-answered'>

              <Avatar/>
              <div className='post-info'>
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
