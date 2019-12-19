import React, {Component} from 'react'

class Product extends Component {
    state = {
        product: {}
    }

    componentDidMount = () => {
        let {id} = this.props.match.params
        let url = `http://localhost:9000/api/store/product/${id}`
        console.log(url)
        fetch(url)
            .then(res=>res.json())
            .then(res=> this.setState({product: res}))
    }
    
    render() {
        return (
            <div className='container'>
                <img src={this.state.product.length == 0 ? '' : this.state.product.image} alt={this.state.product.length == 0 ? '' : this.state.product.name} />
                {this.state.product.length == 0 ? '' : this.state.product.name}
                {this.state.product.length == 0 ? '' : this.state.product.description}
                {this.state.product.length == 0 ? '' : this.state.product.price}
                <button value='Edit' onClick={()=>this.props.history.push('/addproduct', {...this.state.product})} >Edit</button>
            </div>
        )
    }
} 
export default Product