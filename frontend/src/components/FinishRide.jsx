import React from 'react'
import { Link } from 'react-router-dom'
import CaptainRiding from '../pages/CaptainRiding'

const FinishRide = (props) => {
  return (
    <div>
            <h4 onClick={() => {
              props.setFinishRidePanel(false)
            }} className='p-2 w-[93%] text-gray-300 text-center text-2xl absolute top-0'>
              <i className="ri-arrow-down-wide-line"></i>
            </h4>
            <h3 className='text-2xl text-center font-semibold mb-5'>Finish Ride</h3>
            
            <div className='flex items-center justify-between p-3 bg-gray-200 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className="h-12 w-12 rounded-full object-cover" src="https://i.pinimg.com/736x/7c/57/9a/7c579aa1ae1855c99f41f23b7e34cfe4.jpg" alt="" />
                    <h4 className="text-xl font-medium ">Tohru Honda</h4>
                </div>
                <h5 className='text-lg font-semibold'>2.22 Km</h5>
            </div>
    
            
            <div className='flex-col justify-between gap-2 items-center'>
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
    
            <div className='mt-6 w-full'>
                <Link to='/captain-home' onClick={() => {
                }} className='w-full flex justify-center bg-green-400 text-white rounded-md font-semibold p-2 px-4 mt-5'>Finish Ride</Link>
                <p className='text-red-400 flex items-center mt-2 text-sm'>Click on Finish Ride button after payment!</p>
            </div>
    
        </div>
  )
}

export default FinishRide
