import React, {Component} from 'react'

class Product extends Component {
    state = {
        product: {},
        options: [],
        quantity: 0,
        user: {}
    }

    componentDidMount = () => {
        let {id} = this.props.match.params
        let url = `http://localhost:9000/api/store/product/${id}`
        
        fetch(url)
            .then(res=>res.json())
            .then(res=> {
                let input = []
                for(let i = 1; i <= res.quantity; i++){
                    input.push(<option value={i}>{i}</option>)
                }
                this.setState({product: res, options: input})
            })
        
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
        
    }

    handleAdd = () => {
        let url = `http://localhost:9000/api/store/order/1`
        let purchaseQuantity = this.state.quantity
        const options = {
            method: 'PUT',
            body: JSON.stringify({
                id: this.state.product.product_id,
                quantity: this.state.quantity
            }),
            headers: {
                'Content-Type':'application/json' 
            }
        }

        fetch(url, options)
            .then(res => res.json())
    }
    
    render() {
        return (
            <div className='product'>
                <img src={this.state.product.length === 0 ? '' : this.state.product.image} alt={this.state.product.length === 0 ? '' : this.state.product.name} />
                <p>{this.state.product.length === 0 ? '' : this.state.product.name}</p><br/>
                <p>{this.state.product.length === 0 ? '' : this.state.product.description}</p><br/>
                <h4>${this.state.product.length === 0 ? '' : this.state.product.price}</h4>
                <select id='quantity' onChange={this.handleChange} >{this.state.options.length === 0 ? '' : this.state.options}</select>
                <button value='Add' onClick={this.handleAdd} >Add to Cart</button> <br/>
                <button value='Edit' onClick={()=>this.props.history.push(`/product/${this.state.product.product_id}/edit`, {...this.state.product})} >Edit</button>
                
            </div>
        )
    }
} 
export default Product