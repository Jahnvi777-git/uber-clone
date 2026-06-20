import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h4 onClick={() => {
          props.setVehiclePanelOpen(false)
        }} className='p-2 w-[93%] text-gray-300 text-center text-2xl position absolute top-0'>
          <i className='ri-arrow-down-wide-line'></i>
        </h4>
        <h3 className='text-2xl text-bold mb-5'>Choose a vehicle</h3>
        <div onClick={() => {
            props.setConfirmRidePanelOpen(true)
        }} className='flex border-2 active:border-black  rounded-lg p-3 mb-3 items-center justify-between'>
          <img className='h-[50px]' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n" alt="" />
          <div className='w-full p-2'>
            <h4 className='font-semibold text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Afforable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹777.77</h2>
        </div>
        <div onClick={() => {
            props.setConfirmRidePanelOpen(true)
        }} className='flex border-2 active:border-black  rounded-lg p-3 mb-3 items-center justify-between'>
          <img className='h-[60px] ml-3' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />
          <div className='w-full p-2 ml-3'>
            <h4 className='font-semibold text-base'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Afforable, motorcycle ride</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹222.22</h2>
        </div>
        <div onClick={() => {
            props.setConfirmRidePanelOpen(true)
        }} className='flex border-2 active:border-black  rounded-lg p-3 mb-3 items-center justify-between'>
          <img className='h-[80px]' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn" alt="" />
          <div className='w-full p-2'>
            <h4 className='font-semibold text-base'>Uber Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Afforable auto rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹444.44</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
 