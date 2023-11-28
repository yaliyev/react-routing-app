import React from 'react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import Contact from './components/Contact'
import About from './components/About'
import Categories from './components/Categories'
import AddCategory from './components/AddCategory'
import Suppliers from './components/Suppliers'
import AdminNavbar from './components/AdminNavbar'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import Details from './components/Details'

function App() {
  const [isAdminPage,setIsAdminPage] = useState(false)
  const [currentCategory,setCurrentCategory] = useState(null);
  return (
    <>
    {isAdminPage  ?  <AdminNavbar setIsAdminPage={setIsAdminPage} /> :  <Navbar setIsAdminPage={setIsAdminPage} />}
    
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/admin/categories" element={<Categories setCurrentCategory={setCurrentCategory} />} />
      <Route path="/admin/categories/addCategory" element={<AddCategory/>} />
      <Route path="/admin/categories/details" element={<Details currentCategory={currentCategory} />} />
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
