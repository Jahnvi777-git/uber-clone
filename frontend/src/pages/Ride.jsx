import React from 'react'
import {Link} from 'react-router-dom'

const Ride = () => {
  return (
    <div className='h-screen overflow-hidden'>
        <Link to='/home' className='h-10 fixed w-10 right-2 top-2 font-semibold flex bg-white rounded-full text-lg items-center justify-center'>
            <i className='ri-home-5-line'></i>
        </Link>
        <div className='h-1/2'>
            <img className='h-full w-full object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
        </div>
         <div className='flex items-center justify-between p-4'>
          <img className='h-[50px]' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Jahnvi</h2>
            <h4 className='text-xl font-semibold -mt-1'>TS22 AB 7777</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className='flex-col justify-between items-center'>
            <div className='w-full'>
                <div className='flex items-center gap-3 p-3 border-b-2'>
                    <h3 className='text-2xl'>
                        <i className='ri-map-pin-2-fill'></i>

                    </h3>
                    <div>
                        <h3 className='text-lg font-medium'>562-11-A</h3>
                        <p className='text-base text-gray-600'>Banjara Hills, Hyderabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 p-3'>
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
            <button className=' m-4 w-[90%] bg-green-400 text-white rounded-md font-semibold p-2'>Make a payment</button>
    </div>
  )
}

export default Ride
