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

    componentDidMount() {
        fetch(`http://localhost:9000/api/store/customer`, {
            headers: {
                'authorization':`Bearer ${localStorage.id}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.first_name != null){
                this.setState({first_name: data.first_name})
                document.getElementById('first_name').value = data.first_name
            }
            if(data.last_name != null){
                this.setState({last_name: data.last_name})
                document.getElementById('last_name').value = data.last_name
            }
            if(data.email != null){
                this.setState({email: data.email})
                document.getElementById('email').value = data.email
            }
            if(data.address != null){
                this.setState({address: data.address})
                document.getElementById('address').value = data.address
            }
            if(data.city != null){
                this.setState({city: data.city})
                document.getElementById('city').value = data.city
            }
            if(data.state != null){
                this.setState({state: data.state})
                document.getElementById('state').value = data.state
            }
            if(data.zip != null){
                this.setState({zip: data.zip})
                document.getElementById('zip').value = data.zip
            }
            if(data.phone != null){
                this.setState({phone: data.phone})
                document.getElementById('phone').value = data.phone
            }
        })

    }

    delete = () => {
        let url = `http://localhost:9000/api/store/customer`
        const options = {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.id}`
            }
        }

        fetch(url, options)
            .then(res => res.json())
    }

    submit = () => {
        let url = `http://localhost:9000/api/store/customer`
        const options = {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.id}`
            }
        }
        console.log(options)
        fetch(url, options)
            .then(res=> {
                console.log(typeof res.status)
                if(res.status === 200){
                    alert(`${this.state.first_name}, added successfully`)
                    // document.getElementById('user-form').reset()
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
                    {/* <input type='button' onClick={this.delete()} value='Delete'></input> */}
                    </fieldset>
                </form>
            </div>
        )
    }
}
