import React from 'react'
import {AiOutlineDown} from 'react-icons/ai'

const Profile = () => {
  return (
    <div className=' flex w-auto gap-2 items-center px-5 py-2 justify-between'>
        <div className=' h-10 w-10 rounded-full bg-button-color'>

        </div>
        <div className=' '>
            <h2 className=' font-poppins font-semibold tracking-wider text-md text-white'>Warren Ingente</h2>
            <span className=' text-sm font-normal text-font-color'>Software Engineer</span>
        </div>
        <div className=' w-10 h-10 hover:bg-secondary rounded-lg flex justify-center items-center'>
            <AiOutlineDown size={20} className=' text-white'/>
        </div>
    </div>
  )
}

export default Profile