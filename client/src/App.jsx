import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import Dashboard from './components/Dashboard'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div><SignIn/></div>
    },
    {
      path: '/signup',
      element: <div><SignUp/></div>
    },
    {
      path: '/dashboard',
      element: <div><Dashboard/></div>
    }
  ]
  )

const App = () => {
  return (
    <>
      <Toaster position=' bottom' toastOptions={{duration: 2000}}/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App