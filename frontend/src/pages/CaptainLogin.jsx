import React from 'react'
import {Link} from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [captainData, setCaptainData] = React.useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({email: email, password: password})
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
          <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt='uber logo' />
        <form onSubmit={(e)=>submitHandler(e)}>
          <h3 className='text-lg mb-2'>What's your email?</h3>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 border w-full placeholder:text-lg' required type="email" placeholder='email@example.com' />

          <h3 className='text-lg mb-2'>Enter password</h3>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-5 border w-full placeholder:text-lg' type="password" required placeholder='Enter password' />
          
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg w-full placeholder:text-base'>Login</button>
        </form>
        <Link to='/CaptainSignup' className='text-blue-600'>Register as a Captain</Link>
      </div>
      <div>
        <Link to='/UserLogin' className='bg-[#ff8a3d] flex flex-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 text-lg w-full placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
