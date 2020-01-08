import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        email: null,
        password: null,
        password2: null,
        errors: null
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let url = 'http://localhost:9000/api/ecommerce/auth/register'
        let options = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then(res => this.props.history.push('/login'))
            .catch(err => {
                console.log(err.response)
                this.setState({errors: err.response.data.errors})
            })
    }

    render() {
        return (
            <div className='container'>
                <h2 className="mb-4">Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" placeholder="example@example.com"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Register</button>
                </form>
            </div>
        )
    }
}
