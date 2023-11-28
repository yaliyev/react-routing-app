import React from 'react'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Categories from '../pages/Categories'
import AddCategory from '../pages/AddCategory'
import Suppliers from '../pages/Suppliers'
import NotFound from '../components/NotFound'
import Details from '../pages/Details'

export const ROUTES = [
    {
        path:'/',
        element: <Home/>
    },{
        path:'/admin',
        element: <Admin/>
    },{
        path:'/admin/categories',
        element: <Categories/>
    },{
        path:'/admin/categories/addCategory',
        element: <AddCategory/>
    },{
        path:'/admin/categories/details',
        element: <Details/>
    },{
        path:'/admin/suppliers',
        element: <Suppliers/>
    },{
        path:'/contact',
        element: <Contact/>
    },{
        path:'/about',
        element: <About/>
    },{
        path:'*',
        element: <NotFound/>
    }
]