import React from 'react'

export default function Header() {
    return (
        <div>
           <header>
               <h1>E-commerce</h1>
               <nav>
                   <a href="/register">User</a>
                   <a href="/products">Products</a>
                   <a href="/product/add_edit">Add Product</a>
               </nav>
           </header> 
        </div>
    )
}
