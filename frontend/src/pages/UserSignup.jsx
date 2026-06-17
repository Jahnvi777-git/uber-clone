import { useState } from 'react'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext.jsx'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const { user, setUser } = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')

  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
          <img className='w-16 mb-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png" alt='uber logo' />
        <form onSubmit={(e)=>submitHandler(e)}>
          <h3 className='text-lg mb-2'>What is your name</h3>
          <div className='flex gap-2'>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-1/2 placeholder:text-lg' required type="text" placeholder='First name' />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-1/2 placeholder:text-lg' required type="text" placeholder='Last name' />

          </div>
          <div>
            <h3 className='text-lg mb-2'>What's your email?</h3>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' required type="email" placeholder='email@example.com' />

            <h3 className='text-lg mb-2'>Enter password</h3>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' type="password" required placeholder='Enter password' />
            
            <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 mt-2 mb-2 text-lg w-full placeholder:text-base'>Create an account</button>
          </div>
        </form>
        <Link to='/userlogin' className='text-blue-600'>Already have an account? Log in</Link>
      </div>
      <div>
          <p className='text-[10px] leading-tight'>This site is proteted by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> applies.</p>
      </div>
    </div>
  )
}

export default UserSignup
