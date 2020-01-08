import React from 'react'
import {Link} from 'react-router-dom'

function Products(props) {
    let products = props.data.map(product => {
        return (
            <Link key={product.product_id} className='card' to={`product/${product.product_id}`}>
                <img id={product.product_id}
                    src={product.image} 
                    alt={product.name} />
                <p>{product.name}</p><br/>
                <h4>${product.price}</h4>
            </Link>
        )
    })

    return (
        <>{products}</>
    )
}

export default Products