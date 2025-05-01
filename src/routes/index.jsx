import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../modules/Home'
import Login from '../modules/Auth/Login'
import PrivateRoutes from './PrivateRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import PageNotFound from '../common/PageNotFound'

const RoutesPage = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={
        <ProtectedRoutes>
          <Login/>
        </ProtectedRoutes>
      } />
        <Route path="/dashboard" element={
          <PrivateRoutes>
            <Home/>
          </PrivateRoutes>
        }/>
    <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default RoutesPage