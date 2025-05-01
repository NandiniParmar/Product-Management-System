import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const isAuthenticated = localStorage.getItem("accessToken")
    if(isAuthenticated){
        return <Navigate to="/dashboard" replace/>
    }
  return children
}

export default ProtectedRoutes