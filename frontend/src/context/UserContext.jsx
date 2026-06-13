import React, { createContext } from 'react'

export const UserDataContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = React.useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        },
    });

  return (
    <UserDataContext.Provider value={user}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext

