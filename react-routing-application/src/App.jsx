import React from 'react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
     </Routes>
    </>
  )
}

export default App
