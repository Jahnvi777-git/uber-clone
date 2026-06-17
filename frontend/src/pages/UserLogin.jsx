import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userData, setUserData] = React.useState({})
  
  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {email: email, password: password}
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, newUser)
    if ( response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
          <img className='w-16 mb-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png" alt='uber logo' />
        <form onSubmit={(e)=>submitHandler(e)}>
          <h3 className='text-lg mb-2'>What's your email?</h3>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 border w-full placeholder:text-lg' required type="email" placeholder='email@example.com' />

          <h3 className='text-lg mb-2'>Enter password</h3>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-5 border w-full placeholder:text-lg' type="password" required placeholder='Enter password' />
          
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg w-full placeholder:text-base'>Login</button>
        </form>
        <Link to='/UserSignup' className='text-blue-600'>Create new account</Link>
      </div>
      <div>
        <Link to='/CaptainLogin' className='bg-[#10b461] flex flex-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 text-lg w-full placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
