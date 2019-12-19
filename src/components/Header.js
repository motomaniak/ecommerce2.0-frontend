import React from 'react'

export default function Header() {
    return (
        <div>
           <header>
               <h1>Ecommerce</h1>
               <nav>
                   <a href="/register">User</a>
                   <a href="/products">Products</a>
                   <a href="/addproduct">Add Product</a>
               </nav>
           </header> 
        </div>
    )
}
