import React from 'react'
import Profile from './userprofile/Profile'
import Chatsearch from './chats/Chatsearch'
import Startchat from './chats/Startchat'
import Chatlist from './chats/Chatlist'

const Dashboard = () => {
  return (
    <div className=' bg-primary h-screen flex justify-between'>
      <div className=' w-1/5 px-5'>
        <Chatsearch/>
        <Startchat/>
        <Chatlist/>
      </div>
      <div className=' w-3/5 bg-dark-color'>
        <div>
        </div>
      </div>
      <div className=' w-1/5 border-l border-secondary'>
        <div className=' w-full'>
          <Profile/>
          <div className=' border-b border-secondary'></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard