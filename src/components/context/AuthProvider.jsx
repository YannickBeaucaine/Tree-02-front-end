import React, { useState } from 'react'

export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    loggedIn : !!localStorage.getItem('token'),
    name: localStorage.getItem('name'),
    key: localStorage.getItem('key'),
    store_id: localStorage.getItem('store_id')
  })

  return (
    <AuthContext.Provider value={[auth,setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}
