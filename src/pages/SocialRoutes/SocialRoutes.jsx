import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'

export const SocialRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />


        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
