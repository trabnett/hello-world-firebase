import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

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
        this.props.signUp(this.state)

    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid){
            return <Redirect to='/' />
        }
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
                <div style={{color: "red"}}>{authError ? <p>{authError}</p> : null}</div>
            </form>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);