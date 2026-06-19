import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup, setPickup] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [panelOpen, setPanelOpen] = React.useState(false)
  const panelRef = React.useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = React.useState(false)
  const vehiclePanelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()

  }

  useGSAP(() => {
    if(panelOpen) {
      gsap.to(panelRef.current, {height: '75%', opacity: 1, padding: 24})
      gsap.to(panelCloseRef.current, {opacity: 1})
    }
    else {
      gsap.to(panelRef.current, {height: '0', opacity: 0, padding: 0})
      gsap.to(panelCloseRef.current, {opacity: 0})
    }
  }, [panelOpen])

  useGSAP(() => {
    if(vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {transform: 'translateY(0%)'})
    }
    else {
      gsap.to(vehiclePanelRef.current, {transform: 'translateY(100%)'})
    }
  }, [vehiclePanelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png" alt='uber logo' />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
      </div>
      <div className='flex flex-col justify-end h-full absolute top-0 w-screen rounded-lg overflow-hidden'>
        <div className='bg-white p-5 w-screen h-fit relative'>
          <div>
            <h5 ref={panelCloseRef} className='text-xl absolute top-7 right-7 opacity-0' onClick={() => setPanelOpen(false)}>
              <i className='ri-arrow-down-wide-line'></i>
            </h5>
          </div>
          <h4 className='text-2xl font-semibold pt-2'>Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-[35%] w-1 top-[47%] bg-gray-900 left-10 rounded-full"></div>
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
        <div className='bg-white h-[0] overflow-hidden' ref={panelRef}>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0  bg-white py-8 px-3'>
        <h3 className='text-2xl text-bold mb-5'>Choose a vehicle</h3>
        <div className='flex border-2 active:border-black  rounded-lg p-3 mb-3 items-center justify-between'>
          <img className='h-[50px]' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n" alt="" />
          <div className='w-full p-2'>
            <h4 className='font-semibold text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Afforable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹777.77</h2>
        </div>
        <div className='flex border-2 active:border-black  rounded-lg p-3 mb-3 items-center justify-between'>
          <img className='h-[60px] ml-3' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />
          <div className='w-full p-2 ml-3'>
            <h4 className='font-semibold text-base'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Afforable, motorcycle ride</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹222.22</h2>
        </div>
        <div className='flex border-2 active:border-black  rounded-lg p-3 mb-3 items-center justify-between'>
          <img className='h-[80px]' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn" alt="" />
          <div className='w-full p-2'>
            <h4 className='font-semibold text-base'>Uber Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Afforable auto rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹444.44</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
