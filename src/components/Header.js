import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header({currentUser, logout}) {
    const links = (
        <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        </>
    )

    const authLinks = (
        <>
        <NavLink to="/profile">User</NavLink>
        <NavLink to="/product/add">Add Product</NavLink>
        <span className="nav-link" style={{cursor: 'pointer'}} onClick={logout}>Logout</span>
        </>
    )

    return (
        <div>
           <header>
                <h1>E-commerce</h1>
                <nav>
                    { currentUser ? authLinks : links } 
                    <NavLink to="/products">Products</NavLink>  
                </nav>
           </header> 
        </div>
    )
}
