import React from 'react'
import { useState } from 'react'
import { Link, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import About from './pages/About'
import Categories from './pages/Categories'
import AddCategory from './pages/AddCategory'
import Suppliers from './pages/Suppliers'
import AdminNavbar from './components/AdminNavbar' 
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import Details from './pages/Details'


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
