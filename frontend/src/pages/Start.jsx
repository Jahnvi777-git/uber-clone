import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-300'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png" alt='uber logo' />
      <div className='bg-white pb-7 py-4 px-4 mt-auto'>
        <h2 className='text-3xl font-bold'>Get started with Uber</h2>
        <Link to='/userlogin' className='flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded mt-4'>Continue</Link>  
      </div>
    </div>
  )
}

export default Start
