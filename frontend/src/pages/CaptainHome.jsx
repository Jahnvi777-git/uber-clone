import React, { useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import RidePopup from "../components/RidePopup";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = () => {
  
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = React.useRef(null)
  const confirmRidePopupPanelRef = React.useRef(null)

  useGSAP(() => {
    if(ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {transform: 'translateY(0%)'})
    }
    else {
      gsap.to(ridePopupPanelRef.current, {transform: 'translateY(100%)'})
    }
  }, [ridePopupPanel])

  useGSAP(() => {
    if(confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {transform: 'translateY(0%)'})
    }
    else {
      gsap.to(confirmRidePopupPanelRef.current, {transform: 'translateY(100%)'})
    }
  }, [confirmRidePopupPanel])

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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        /> 
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white py-10 px-3 pt-12'>
        <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}></RidePopup>
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full h-full z-10 bottom-0 translate-y-full bg-white py-10 px-3 pt-12'>
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
