import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
const Navbar = ({setIsAdminPage}) => {

    const items = [
        {
            label: (
                <Link onClick={()=>{setIsAdminPage(true)}} style={{ display: 'inline-block', marginInline: '10px' }} to={"/admin"}>Admin</Link>
            )
        },
        {
            label: (
                <Link style={{ display: 'inline-block', marginInline: '10px' }} to={"/"}>Home</Link>
            )
        },
        {
            label: (
                <Link style={{ display: 'inline-block', marginInline: '10px' }} to={"/contact"}>Contact</Link>
            )
        },
        {
            label: (
                <Link style={{ display: 'inline-block', marginInline: '10px' }} to={"/about"}>About</Link>
            )
        }
    ];

    return (
        <>
            <Menu mode="horizontal" items={items} />
        </>
    )
}

export default Navbar