import React from 'react'
import {Link} from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userData, setUserData] = React.useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({email: email, password: password})
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
