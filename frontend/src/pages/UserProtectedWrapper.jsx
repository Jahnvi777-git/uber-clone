import React, {useContext, useEffect} from 'react'
import { UserDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({ children}) => {
  const { user } = useContext(UserDataContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  console.log(token)
  useEffect(() => {
    if (!token) {
      navigate('/userlogin')
    }
    }, [token])
  
    return <> {children} </>
  
}

export default UserProtectedWrapper
