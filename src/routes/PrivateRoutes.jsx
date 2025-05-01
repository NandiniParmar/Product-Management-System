import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const isUserAuthenticated = localStorage.getItem("accessToken")
    if(!isUserAuthenticated){
        return <Navigate to="/"/>
    }
    return children;
}

export default PrivateRoutes