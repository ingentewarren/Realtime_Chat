import React from 'react'
import { useState } from 'react'
import background from '../assets/waranont-joe-T7qyLNPwgKA-unsplash.jpg'
import {FaFacebook} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { firstname, lastname, email, password } = user;
  
    try {
      const {data} = await axios.post('/register', {
        firstname, lastname, email, password
      })
  
      if (data.error) {
        toast.error(data.error);
      } else {
        setUser({});
        toast.success('Log in success');
        navigate('/');
      }
    } catch (error) {
      console.log('register error', error);
    }
  }
  

  return (
    <div className=' w-full h-full bg-primary flex justify-center items-center relative'>
      <div className=' w-2/3 sm:h-full sm:px-10'>
        <div className=' h-full px-10 my-4 font-poppins text-1xl flex justify-start font-semibold pb-8 text-white'>
          Create new account
        </div>
        <form action="" onSubmit={handleSubmit}>
         <div className=' flex flex-col sm:px-10 relative pb-8'>
            <input type="text" id='firstname' className=' bg-primary border-b h-10 font-poppins text-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-colors peer'
            autoComplete='off'
            value={user.firstname}
            onChange={(e) => setUser({...user, firstname: e.target.value})}/>
            <label htmlFor="firstname" className=' absolute left-10 top-1 text-font-color tracking-wider cursor-text peer-focus:text-xs peer-focus:-top-3 transition-all '>
              Firstname</label>     
          </div>
          <div className=' flex flex-col sm:px-10 relative pb-8'>
            <input type="text" id='lastname' className=' bg-primary border-b h-10 font-poppins text-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-colors peer'
            autoComplete='off'
            value={user.lastname}
            onChange={(e) => setUser({...user, lastname: e.target.value})}/>
            <label htmlFor="lastname" className=' absolute left-10 top-1 text-font-color tracking-wider cursor-text peer-focus:text-xs peer-focus:-top-3 transition-all '>
              Lastname</label>   
          </div>
          <div className=' flex flex-col sm:px-10 relative pb-8'>
            <input type="text" id='email' className=' bg-primary border-b h-10 font-poppins text-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-colors peer'
            autoComplete='off'
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}/>
            <label htmlFor="email" className=' absolute left-10 top-1 text-font-color tracking-wider cursor-text peer-focus:text-xs peer-focus:-top-3 transition-all '>
              Email</label>    
          </div>
          <div className=' flex flex-col sm:px-10 relative pb-8'>
            <input type="password" id='password' className=' bg-primary border-b h-10 font-poppins text-white focus:outline-none focus:border-b-2 focus:border-blue-400 transition-colors peer'
            autoComplete='off'
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}/>
            <label htmlFor="password" className=' absolute left-10 top-1 text-font-color tracking-wider cursor-text peer-focus:text-xs peer-focus:-top-3 transition-all '>
              Password</label>     
          </div>
          <div className=' sm:px-10'>
            <button className=' bg-button-color w-full h-10 text-white font-palanquin font-normal tracking-wide'>SIGN IN</button>
          </div>
        </form>
        <div className=' pt-10 sm:px-10 w-full flex relative justify-between'>
          <div className=' border-b w-44 border-[#8492a5]'></div>
          <span className=' absolute right-[270px] top-[25px] text-[#8492a5]'>or</span>
          <div className=' border-b w-44 border-[#8492a5]'></div>
        </div>
        <div className=' w-full sm:px-10 pt-8 flex justify-between'>
          <span className=' text-[#8492a5]'>
            Sign in with?</span>
          <div className=' flex gap-5'>
            <a href="/"><FaFacebook size={30} className=' hover:text-[#3F89F8] text-[#8492a5] transition duration-600'/></a>
            <a href=""><BiLogoGmail size={30} className=' hover:text-[#FB171F] text-[#8492a5] transition duration-600'/></a>
            <a href=""><AiFillGithub size={30} className=' hover:text-[#8560bd] text-[#8492a5] transition duration-600'/></a>
          </div>
        </div>
        <div className=' w-full sm:px-10 flex gap-5 justify-center py-10'>
          <span className=' text-[#8492a5]'>
            Already have account?</span>
          <a href="/" className=' text-blue-500'>
            Sign in</a>
        </div>
      </div>
      <div className=' w-full hidden sm:block relative'>
        <img src={background} alt="" className=' w-full h-screen object-cover bg-gradient-to-r from-secondary opacity-80'/>
      </div>
    </div>
  )
}

export default SignUp