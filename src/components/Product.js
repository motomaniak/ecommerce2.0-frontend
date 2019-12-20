import React, {Component} from 'react'

class Product extends Component {
    state = {
        product: {}
    }

    componentDidMount = () => {
        let {id} = this.props.match.params
        let url = `http://localhost:9000/api/store/product/${id}`
        
        fetch(url)
            .then(res=>res.json())
            .then(res=> this.setState({product: res}))
    }
    
    render() {
        return (
            <div className='product'>
                <img src={this.state.product.length === 0 ? '' : this.state.product.image} alt={this.state.product.length == 0 ? '' : this.state.product.name} />
                <p>{this.state.product.length === 0 ? '' : this.state.product.name}</p><br/>
                <p>{this.state.product.length === 0 ? '' : this.state.product.description}</p><br/>
                <h4>${this.state.product.length === 0 ? '' : this.state.product.price}</h4>
                <button value='Edit' onClick={()=>this.props.history.push(`/product/${this.state.product.product_id}/edit`, {...this.state.product})} >Edit</button>
            </div>
        )
    }
} 
export default Product