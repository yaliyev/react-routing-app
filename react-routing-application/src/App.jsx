import React from 'react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import Contact from './components/Contact'
import About from './components/About'
import Categories from './components/Categories'
import Suppliers from './components/Suppliers'
import AdminNavbar from './components/AdminNavbar'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  const [isAdminPage,setIsAdminPage] = useState(false)

  return (
    <>
    {isAdminPage  ?  <AdminNavbar setIsAdminPage={setIsAdminPage} /> :  <Navbar setIsAdminPage={setIsAdminPage} />}
    
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/admin/categories" element={<Categories/>} />
      <Route path="/admin/suppliers" element={<Suppliers/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NotFound />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
