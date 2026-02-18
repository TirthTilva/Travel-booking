import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Tours from '../pages/Tours'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResult from '../pages/SearchResult'
import TourDetails from '../pages/TourDetails'
import ThankYou from '../pages/ThankYou'
import MyBookings from '../pages/my-Booking'
import AdminPanel from '../pages/AdminPanel'
import Payment from '../pages/Payment'

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
