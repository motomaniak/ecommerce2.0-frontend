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
        const options = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type':'application/json' 
            }
        }
        
        fetch(url, options)
            .then(res=> {
                if(res.status == '200'){
                    alert(`${this.state.first_name}, added successfully`)
                    document.getElementById('user-form').reset()
                }
                else{
                    alert('not added')
                }
            })
            .catch(err => console.log(err))

    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.submit()
    }

    render() {
        return (
            <div className='container'>
                <form id='user-form' onSubmit={this.handleSubmit} >
                    <fieldset>
                    <input type='text' onChange={this.handleChange} id='first_name' placeholder='First Name' required /><br/>
                    <input type='text' onChange={this.handleChange} id='last_name' placeholder='Last Name' required /><br/>
                    <input type='email' onChange={this.handleChange} id='email' placeholder='Enter a Valid E-mail' required /><br/>
                    <input type='text' onChange={this.handleChange} id='address' placeholder='Address' required /><br/>
                    <input type='text' onChange={this.handleChange} id='city' placeholder='City' required /><br/>
                    <input type='text' onChange={this.handleChange} id='state' placeholder='State' required /><br/>
                    <input type='text' onChange={this.handleChange} id='zip' placeholder='Zip' required /><br/>
                    <input type='text' onChange={this.handleChange} id='phone' placeholder='Phone Number' required /><br/>
                    <input type='submit' value='Submit'></input>
                    </fieldset>
                </form>
            </div>
        )
    }
}
