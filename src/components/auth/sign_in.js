import React, { Component } from 'react'

class SignIn extends Component {
    state = {
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
                <h1>Sign In</h1>
                <input type="email" id='email' placeholder="email" onChange={this.handleChange}></input>
                <input type="password" id='password' placeholder="password" onChange={this.handleChange}></input>
                <div>
                    <button>login</button>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn;
