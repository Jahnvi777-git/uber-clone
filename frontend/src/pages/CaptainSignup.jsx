import { useState, useContext } from 'react'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')

    const { captain, setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate()
  
    const submitHandler = async (e) => {
      e.preventDefault()
      const captainData = {
        fullname: { firstname: firstName, lastname: lastName },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType,
        },
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleType('')
      setVehiclePlate('')
      setVehicleColor('')
      setVehicleCapacity('')
      // navigate('/CaptainLogin')
    }
  
    return (
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt='uber logo' />
          <form onSubmit={(e)=>submitHandler(e)}>
            <h3 className='text-lg mb-2'>What is our Captain's name?</h3>
            <div className='flex gap-2'>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-1/2 placeholder:text-lg' required type="text" placeholder='First name' />
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-1/2 placeholder:text-lg' required type="text" placeholder='Last name' />
  
            </div>
            <div>
              <h3 className='text-lg mb-2'>What's our Captain's email?</h3>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' required type="email" placeholder='email@example.com' />
  
              <h3 className='text-lg mb-2'>Enter password</h3>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' type="password" required placeholder='Enter password' />
              
              <h3 className='text-lg mb-2'>Vehicle Type</h3>
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' required>
                <option value="">Select vehicle type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>

              <h3 className='text-lg mb-2'>Vehicle Plate</h3>
              <input value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' required type="text" placeholder='Vehicle plate' />

              <h3 className='text-lg mb-2'>Vehicle Color</h3>
              <input value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' required type="text" placeholder='Vehicle color' />

              <h3 className='text-lg mb-2'>Vehicle Capacity</h3>
              <input value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} className='bg-[#eeee] rounded px-4 py-2 mb-2 border w-full placeholder:text-lg' required type="number" placeholder='Vehicle capacity' />

              <button className='bg-[#111] text-white font-semibold rounded px-4 py-2 mt-2 mb-2 text-lg w-full placeholder:text-base'>Create an account</button>
            </div>
          </form>
          <Link to='/CaptainLogin' className='text-blue-600'>Already have an account? Log in</Link>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is proteted by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> applies.</p>
        </div>
      </div>
    )
}

export default CaptainSignup
