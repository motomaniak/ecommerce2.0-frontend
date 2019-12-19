import React from 'react'
import {Link} from 'react-router-dom'

function Products(props) {
    let products = props.data.map(product => {
        return (
            <>
                <Link to={`/${product.product_id}`}>
                    <div className='products_container' key={product.product_id}>
                    <img float='left' height='100' width='100' className='thumbnail' id={product.product_id}
                        src={product.image} 
                        alt={product.name} />
                    {product.name} 
                    {product.price}
                    </div>
                </Link>
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