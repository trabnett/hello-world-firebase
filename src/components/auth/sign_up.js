import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    eventHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        return (
        <div style={{marginTop: "10em"}}>
            <form onSubmit={this.eventHandler}>
                <h1>Sign Up</h1>
                <input type="text" id='firstName' placeholder="First Name" onChange={this.handleChange}></input>
                <input type="text" id='lastName' placeholder="Last Name" onChange={this.handleChange}></input>
                <input type="email" id='email' placeholder="email" onChange={this.handleChange}></input>
                <input type="password" id='password' placeholder="password" onChange={this.handleChange}></input>
                <div>
                    <button>sign up</button>
                </div>
            </form>
        </div>
        )
    }
}

export default SignUp;