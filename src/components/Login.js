import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submit = () => {
        const url = `http://localhost:9000/api/ecommerce/auth/login` 
        const options = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type':'application/json'
            }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.props.setCurrentUser(data.signedJwt)
                this.props.history.push('/profile')
            })
            .catch(err => {
                this.setState({error: err.response.data.message})
            })
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
