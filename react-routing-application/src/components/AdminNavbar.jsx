import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
const AdminNavbar = ({setIsAdminPage}) => {

    const items = [
        {
            label: (
                <Link onClick={()=>{setIsAdminPage(false)}} style={{ display: 'inline-block', marginInline: '10px' }} to={"/"}>Site</Link>
            )
        },
        {
            label: (
                <Link style={{ display: 'inline-block', marginInline: '10px' }}>Dashboard</Link>
            )
        },
        {
            label: (
                <Link style={{ display: 'inline-block', marginInline: '10px' }} to={"/categories"}>Categories</Link>
            )
        }
    ];

    return (
        <>
            <Menu mode="horizontal" items={items} />
        </>
    )
}

export default AdminNavbar