import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: null,
        password: null
    }

    handleChange = (e) => {
        let target = e.target 
        let value = target.value
        let name = target.id
        this.setState({[name]:value})
    }

    submit = () => {
        const url = `api/ecommerce/auth/login` 
        const options = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type':'application/json'
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.submit()
    }

    render() {
        return (
            <div className='container'>
                <h2 className="mb-4">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" placeholder="example@example.com"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Login</button>
                </form>
            </div>
        )
    }
}
