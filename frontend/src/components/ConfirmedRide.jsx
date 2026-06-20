import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
      <h4 onClick={() => {
          props.setConfirmRidePanelOpen(false)
          props.setVehiclePanelOpen(true)
        }} className='p-2 w-[93%] text-gray-300 text-center text-2xl absolute top-0'>
          <i className="ri-arrow-down-wide-line"></i>
        </h4>
        <h3 className='text-2xl text-center font-semibold mb-5'>Confirm your Ride</h3>
        <div className='flex-col justify-between gap-2 items-center'>
            <img className='h-[150px]' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n" alt="" />
            <div className='w-full'>
                <div className='flex items-center gap-5 p-5 border-b-2'>
                    <h3 className='text-2xl'>
                        <i className="ri-map-pin-user-line"></i>

                    </h3>
                    <div>
                        <h3 className='text-lg font-medium'>562-11-A</h3>
                        <p className='text-base text-gray-600'>Banjara Hills, Hyderabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-5 border-b-2'>
                    <h3 className='text-2xl'>
                        <i className='ri-map-pin-2-fill'></i>

                    </h3>
                    <div>
                        <h3 className='text-lg font-medium'>562-11-A</h3>
                        <p className='text-base text-gray-600'>Banjara Hills, Hyderabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-5'>
                    <h3 className='text-2xl'>
                        <i className='ri-currency-line'></i>

                    </h3>
                    <div>
                        <h3 className='text-lg font-medium'>₹777.77</h3>
                        <p className='text-base text-gray-600'>Cash, cash</p>
                    </div>
                </div>
            </div>
        </div>


        <button className='w-full bg-green-400 text-white rounded-md font-semibold p-2'>Confirm</button>
    </div>
  )
}

export default ConfirmedRide
