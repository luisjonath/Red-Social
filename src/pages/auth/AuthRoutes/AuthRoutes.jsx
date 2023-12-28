import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../RegisterPage/RegisterPage'
import { LoginPage } from '../LoginPage/LoginPage'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
