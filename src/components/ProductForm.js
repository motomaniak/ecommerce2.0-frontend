import React, { Component } from 'react'

export default class ProductForm extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        quantity: 0,
        category: '',
        price: ''

    }

    submit = () => {
        let url = `http://localhost:9000/api/store/product`
        let name = document.getElementById('name').value
        let description = document.getElementById('description').value
        let quantity = document.getElementById('quantity').value
        let image = document.getElementById('image').value
        let category = document.getElementById('category').value
        let price = document.getElementById('price').value

        this.setState({
            name: name,
            description: description,
            image: image,
            quantity: quantity,
            category: category,
            price: price
        })

        const options = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type':'application/json' 
            }
        }

        fetch(url, options)
            .then(res=>console.log(res))
            .catch(err => console.log(err))

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.submit()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' id='name' placeholder='Product Name' required /><br/>
                    <textarea id='description' placeholder='Product Description' required ></textarea><br/>
                    <input type='text' id='image' placeholder='Product image' required /><br/>
                    <input type='number' id='quantity' placeholder='Product Quantity' required /><br/>
                    <input type='text' id='category' placeholder='Product Category' required /><br/>
                    <input type='text' id='price' placeholder='Product Price' required /><br/>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}
