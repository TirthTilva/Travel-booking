import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Tours from '../pages/Tours.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import SearchResult from '../pages/SearchResult.jsx'
import TourDetails from '../pages/Tourdetails.jsx'
import ThankYou from '../pages/ThankYou.jsx'
import MyBookings from '../pages/my-Booking.jsx'
import AdminPanel from '../pages/AdminPanel.jsx'
import Payment from '../pages/Payment.jsx'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/tours/search' element={<SearchResult />} />
      <Route path='/my-bookings' element={<MyBookings />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/payment' element={<Payment />} />
    </Routes>
  )
}

export default Routers
