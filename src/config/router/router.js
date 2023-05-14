import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Err404 from '../../screens/Err404'
import Login from '../../screens/login'
import Signup from '../../screens/signup'
import Home from '../../screens/Home'
import CardDetail from '../../screens/CardDetail'
import BookForm from '../../screens/BookForm'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="CardDetail" element={<CardDetail />} />
        <Route path="BookForm" element={<BookForm />} />
                  
                  
             {/* 404 Page */}
        <Route path="*" element={<Err404 />} />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter