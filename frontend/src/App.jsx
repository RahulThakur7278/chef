import React from 'react'
import { Routes, Route } from 'react-router-dom';
import BookingForm from './home/BookingForm'
import NextPage from './home/NextPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BookingForm />} />
      <Route path="/next-page" element={<NextPage />} />
    </Routes>
  )
}

export default App
