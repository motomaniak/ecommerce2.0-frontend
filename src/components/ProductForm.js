import React, { Component } from 'react'

export default class ProductForm extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        quantity: 0,
        category_id: null,
        price: '',
        method: 'POST',
        id: null,
        categories: [],
        edit: true
    }

    componentDidMount = () => {
        if(typeof(this.props.location) !== "undefined" && this.props.location.state !== undefined) {
            document.getElementById('name').value = this.props.location.state.product_name
            document.getElementById('description').value = this.props.location.state.description
            document.getElementById('image').value = this.props.location.state.image
            document.getElementById('quantity').value = this.props.location.state.quantity
            document.getElementById('category').value = this.props.location.state.category_id
            document.getElementById('price').value = this.props.location.state.price
            document.getElementById('delete').classList.toggle('edit')
            this.setState({
                method: 'PUT', 
                id: this.props.location.state.product_id,
                name: this.props.location.state.product_name,
                description: this.props.location.state.description,
                image: this.props.location.state.image,
                quantity: this.props.location.state.quantity.map,
                price: this.props.location.state.price,
                category: this.props.location.state.category_id
            })
        }

        let url = `http://localhost:9000/api/store/categories`
        fetch(url)
            .then(res=>res.json())
            .then(res=> this.setState({categories: res.map(category => {
                if(this.state.category !== null && this.state.category === category.category_id)
                    return <option key={category.category_id} selected='selected' value={category.category_id}>{category.name}</option>
                else    
                    return <option key={category.category_id} value={category.category_id}>{category.name}</option>
            })
        }))               
            
    }
    
    submit = () => {
        let url 
        if(this.state.method === 'POST')
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
                category_id: this.state.category
            }),
            headers: {
                'Content-Type':'application/json' 
            }
        }

        fetch(url, options)
            .then(res=> {
                if(res.status === 200)
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

    handleDelete = () => {
        if(window.confirm("Do you want to delete item?")){
            let url = `http://localhost:9000/api/store/product/${this.state.id}`
            fetch(url, {method:'DELETE'})
                .then(res => {
                    if(res.status === 200)
                        this.props.history.push('/products')
                    else
                        alert('Something went wrong removing your product')
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} >
                    <fieldset>
                    Name:<input type='text' id='name' onChange={this.handleChange} placeholder='Product Name' required /><br/>
                    Description:<textarea id='description' onChange={this.handleChange} placeholder='Product Description' required ></textarea><br/>
                    Image:<input type='text' id='image' onChange={this.handleChange} placeholder='Product image URL' required /><br/>
                    Quantity:<input type='number' id='quantity' onChange={this.handleChange} placeholder='Product Quantity' required /><br/>
                    Category: <br/><select name='category' required onChange={this.handleChange} id='category'><option value='' disabled selected>Choose a Category</option>{this.state.categories.length === 0 ? '' : this.state.categories}</select><br/>
                    Price:<input type='text' id='price' onChange={this.handleChange} placeholder='Product Price' required /><br/>
                    <input type='submit' value='Save'></input><input id='delete' className='edit' type='button' onClick={this.handleDelete} value='Delete'></input>
                    </fieldset>
                </form>
            </div>
        )
    }
}