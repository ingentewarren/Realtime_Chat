import React from 'react'
import { useState } from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const [isInputEmail, setInputEmail] = useState(false)
  const [isInputPassword, setInputPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = user

    try {
      const {data} = await axios.post('/login', {
        email, password
      })

      if(data.error){
        toast.error(data.error)
      }
      else{
        setUser({})
        toast.success('Log in user success')
        navigate('/dashboard')
      }
    } catch (error) {
      console.log('Log in error', error)
    }
    
  }

  return (
    <div className=' w-full h-screen bg-primary flex justify-center items-center'>
      <div className='  flex flex-col bg-white-300 h-[550px] bg-secondary w-[400px] rounded-lg'>
        <div className=' font-poppins text-2xl flex justify-center font-semibold py-8 text-white'>
          SIGN IN
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className=' flex flex-col px-10 relative pb-8'>
            <input type="text" id='email' className=' bg-secondary border-b h-10 font-poppins text-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-colors peer'
            autoComplete='off'
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            onFocus={() => setInputEmail(true)}
            onBlur={() => setInputEmail(false)}/>
            <label htmlFor="email" 
            className={`absolute left-10 top-1 text-font-color tracking-wider cursor-text ${isInputEmail || user.email ? 'text-xs -top-[13px] text-blue-400 transition' : ''}`}
            style={{ transition: 'top 0.2s, font-size 0.2s, color 0.2s' }}>
              Email</label>     
          </div>
          <div className=' flex flex-col px-10 relative pb-5'>
            <input type="password" id='password' className=' bg-secondary border-b h-10 font-poppins text-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-colors peer'
            autoComplete='off'
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            onFocus={() => setInputPassword(true)}
            onBlur={() => setInputPassword(false)}/>
            <label htmlFor="password" 
            className={`absolute left-10 top-1 text-font-color tracking-wider cursor-text ${isInputPassword || user.password ? 'text-xs -top-[13px] text-blue-400 transition' : ''}`}
            style={{ transition: 'top 0.2s, font-size 0.2s, color 0.2s' }}>
              Password</label>    
          </div>
          <div className=' px-10 pb-6 flex w-full items-center justify-between'>
            <div>
              <input type="checkbox" className='w-4 h-4 border-[1px] text-green-600 focus:ring-0'/>
              <span className=' ml-2 text-[#8492a5]'>
                Remember me</span>
            </div>
            <span className=' text-blue-500'>
              <a href="/">
                forgot password</a>
            </span>
          </div>
          <div className=' px-10'>
            <button className=' bg-button-color w-full h-10 text-white font-palanquin font-normal tracking-wide'>SIGN IN</button>
          </div>
        </form>
        <div className=' pt-10 px-10 w-full flex relative justify-between'>
          <div className=' border-b w-24 border-[#8492a5]'></div>
          <span className=' absolute right-48 top-[25px] text-[#8492a5]'>or</span>
          <div className=' border-b w-24 border-[#8492a5]'></div>
        </div>
        <div className=' w-full px-10 pt-8 flex justify-between'>
          <span className=' text-[#8492a5]'>
            Log in with?</span>
          <div className=' flex gap-5'>
            <a href="/"><FaFacebook size={30} className=' hover:text-[#3F89F8] text-[#8492a5] transition duration-600'/></a>
            <a href=""><BiLogoGmail size={30} className=' hover:text-[#FB171F] text-[#8492a5] transition duration-600'/></a>
            <a href=""><AiFillGithub size={30} className=' hover:text-[#8560bd] text-[#8492a5] transition duration-600'/></a>
          </div>
        </div>
        <div className=' w-full px-10 flex gap-5 justify-center pt-10'>
          <span className=' text-[#8492a5]'>
            Don't have account?</span>
          <a href="/signup" className=' text-blue-500'>
            Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default SignIn