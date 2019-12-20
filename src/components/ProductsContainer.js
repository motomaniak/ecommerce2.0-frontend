import React, {Component} from 'react'
import Products from '../components/Products'

class ProductsContainer extends Component {
    state = {
        produtcs: []
    }

    componentDidMount = () => {
        let url = `http://localhost:9000/api/store/products`
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({produtcs: res}))
    }

    render() {
        return (
            <div className='cards'>
                <Products data={this.state.produtcs.length === 0 ? [] : this.state.produtcs} />
            </div>
        )
    }
} 

export default ProductsContainer