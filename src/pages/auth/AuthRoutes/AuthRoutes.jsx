import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../RegisterPage/RegisterPage'
import { LoginPage } from '../LoginPage/LoginPage'
import { Home } from '../../Home/Home'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
