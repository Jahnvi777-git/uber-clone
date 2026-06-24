import React, { useState } from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import ConfirmRidePopup from '../components/ConfirmRidePopup'
import { Link } from 'react-router-dom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = React.useRef(null)

    useGSAP(() => {
        if(finishRidePanel) {
          gsap.to(finishRidePanelRef.current, {transform: 'translateY(0%)'})
        }
        else {
          gsap.to(finishRidePanelRef.current, {transform: 'translateY(100%)'})
        }
      }, [finishRidePanel])

  return (
    <div className="h-screen">
      <div className="flex items-center justify-between w-full fixed p-3 top-0">
        <img
          className="w-16"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber logo"
        />
        <Link
          to="/captainlogin"
          className="h-10 w-10 font-semibold flex bg-white rounded-full text-lg items-center justify-center"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        /> 
      </div>
      <div onClick={() => {
        setFinishRidePanel(true)
      }} className="h-1/5 p-4 items-center justify-between relative flex bg-gray-200 ">
        <h5 className='p-1 text-center w-[90%] absolute top-0'>
            <i className='text-3xl text-gray-500 ri-arrow-down-wide-line'></i>
        </h5>
        <h4 className='text-xl p-4 font-semibold'>4KM away</h4>
         <button onClick={() => {
            }} className='bg-green-400 text-white rounded-lg font-semibold p-3 px-20'>Confirm</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white py-10 px-3 pt-12'>
        <FinishRide setFinishRidePanel={setFinishRidePanel}></FinishRide>
      </div>
    </div>
  )
}

export default CaptainRiding
