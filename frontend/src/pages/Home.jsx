import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [pickup, setPickup] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [panelOpen, setPanelOpen] = React.useState(false)
  const panelRef = React.useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()

  }

  useGSAP(() => {
    if(panelOpen) {
      gsap.to(panelRef.current, {height: '75%', opacity: 1})
      gsap.to(panelCloseRef.current, {opacity: 1})
    }
    else {
      gsap.to(panelRef.current, {height: '0'})
      gsap.to(panelCloseRef.current, {opacity: 0})
    }
  }, [panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png" alt='uber logo' />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
      </div>
      <div className='flex flex-col justify-end h-full w-ful absolute top-0 w-screen rounded-lg'>
        <div className='bg-white p-5 w-screen h-[25%] relative'>
          <div>
            <h5 ref={panelCloseRef} className='text-xl absolute top-7 right-7 opacity-0' onClick={() => setPanelOpen(false)}>
              <i className='ri-arrow-down-wide-line'></i>
            </h5>
          </div>
          <h4 className='text-2xl font-semibold pt-2'>Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-[32%] w-1 top-[45%] bg-gray-900 left-10 rounded-full"></div>
            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mb-5 mt-5' 
              type="text" 
              placeholder='Add a pickup location'
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input 
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full' 
              type="text" 
              placeholder='Enter your destination'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>
        <div className='bg-white h-[0]' ref={panelRef}>

        </div>
      </div>
    </div>
  )
}

export default Home
