import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Link style={{display:'inline-block',marginInline:'10px'}} to={"/admin"}>Admin</Link>
    <Link style={{display:'inline-block',marginInline:'10px'}} to={"/"}>Home</Link>
    <Link style={{display:'inline-block',marginInline:'10px'}} to={"/contact"}>Contact</Link>
    <Link style={{display:'inline-block',marginInline:'10px'}} to={"/about"}>About</Link>
    </>
  )
}

export default Home