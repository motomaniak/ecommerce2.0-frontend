import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Product from './Product'

function Products(props) {
    let products = props.data.map(product => {
        return (
                <>
                <nav>
                    {/* //<Link to={`api/store/product/${product.prodcut_id}`} component={Product}> */}
                    
                        <img float='left' height='100' width='100' className='thumbnail' id={product.product_id}
                            src={product.image} 
                            alt={product.name} />
                        {product.name} 
                        {product.price}
                    {/* //</Link> */}
                </nav>
                <div>
                    <Route path={`api/store/product/${product.prodcut_id}`} component={Product} />
                </div>
                </>
            )
    })

    return (
        <div>
            {products}
        </div>
    )
}

export default Products