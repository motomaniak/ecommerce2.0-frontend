import React, { Component } from 'react'

export default class UserForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
    }

    submit = () => {
        let url = `http://localhost:9000/api/store/customer`
        let firstName = document.getElementById('fName').value
        let lastName = document.getElementById('lName').value
        let email = document.getElementById('email').value
        let address = document.getElementById('address').value
        let city = document.getElementById('city').value
        let state = document.getElementById('state').value
        let zip = document.getElementById('zip').value
        let phone = document.getElementById('phone').value
        
        this.setState({
            first_name: firstName,
            last_name: lastName,
            email: email,
            address: address,
            city: city,
            state: state,
            zip: zip,
            phone: phone
        })

        const options = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type':'application/json' 
            }
        }
        
        fetch(url, options)
            .then(res=> console.log(res))
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
                    <input type='text' id='fName' placeholder='First Name' required /><br/>
                    <input type='text' id='lName' placeholder='Last Name' required /><br/>
                    <input type='email' id='email' placeholder='Enter a Valid E-mail' required /><br/>
                    <input type='text' id='address' placeholder='Address' required /><br/>
                    <input type='text' id='city' placeholder='City' required /><br/>
                    <input type='text' id='state' placeholder='State' required /><br/>
                    <input type='text' id='zip' placeholder='Zip' required /><br/>
                    <input type='text' id='phone' placeholder='Phone Number' required /><br/>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}
