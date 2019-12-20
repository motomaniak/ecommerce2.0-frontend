import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
           <header>
               <h1>E-commerce</h1>
               <nav>
                   <Link to="/register">User</Link>
                   <Link to="/products">Products</Link>
                   <Link to="/product/add">Add Product</Link>
               </nav>
           </header> 
        </div>
    )
}
