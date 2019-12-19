import React, { Component } from 'react'

export default class ProductForm extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        quantity: 0,
        category: '',
        price: '',
        method: 'POST',
        id: null
    }

    componentDidMount = () => {
        if(this.props.location.state !== undefined) {
            document.getElementById('name').value = this.props.location.state.product_name
            document.getElementById('description').value = this.props.location.state.description
            document.getElementById('image').value = this.props.location.state.image
            document.getElementById('quantity').value = this.props.location.state.quantity
            document.getElementById('category').value = this.props.location.state.category_name
            document.getElementById('price').value = this.props.location.state.price
            this.setState({
                method: 'PUT', 
                id: this.props.location.state.product_id,
                name: this.props.location.state.product_name,
                description: this.props.location.state.description,
                image: this.props.location.state.image,
                quantity: this.props.location.state.quantity,
                price: this.props.location.state.price,
                category: this.props.location.state.category_name
            })
        }
    }

    submit = () => {
        let url 
        if(this.state.method == 'POST')
            url = `http://localhost:9000/api/store/product`
        else 
            url = `http://localhost:9000/api/store/product/${this.state.id}`
        
        const options = {
            method: this.state.method,
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                image: this.state.image,
                quantity: this.state.quantity,
                price: this.state.price,
                category: this.state.category
            }),
            headers: {
                'Content-Type':'application/json' 
            }
        }

        console.log(this.state)

        fetch(url, options)
            .then(res=> {
                if(res.status == 200)
                    this.props.history.push('/products')
                else{
                    alert('Something went wrong adding/updating your product')
                }
            })
            .catch(err => console.log(err))

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.submit()
    }

    handleChange = (e) => {
        let target = e.target 
        let value = target.value
        let name = target.id
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} >
                    <fieldset>
                    <input type='text' id='name' onChange={this.handleChange} placeholder='Product Name' required /><br/>
                    <textarea id='description' onChange={this.handleChange} placeholder='Product Description' required ></textarea><br/>
                    <input type='text' id='image' onChange={this.handleChange} placeholder='Product image' required /><br/>
                    <input type='number' id='quantity' onChange={this.handleChange} placeholder='Product Quantity' required /><br/>
                    <input type='text' id='category' onChange={this.handleChange} placeholder='Product Category' required /><br/>
                    <input type='text' id='price' onChange={this.handleChange} placeholder='Product Price' required /><br/>
                    <input type='submit' value='Submit'></input>
                    </fieldset>
                </form>
            </div>
        )
    }
}
