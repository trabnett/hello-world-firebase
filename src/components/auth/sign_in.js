import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    eventHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.signIn(this.state)
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid){
            return <Redirect to='/' />
        }
        return (
        <div style={{marginTop: "10em"}}>
            <form onSubmit={this.eventHandler}>
                <h1>Sign In</h1>
                <input type="email" id='email' placeholder="email" onChange={this.handleChange}></input>
                <input type="password" id='password' placeholder="password" onChange={this.handleChange}></input>
                <div>
                    <button>login</button>
                </div>
                <div style={{color: "red"}}>{ authError ? <p>{authError}</p> : null}</div>
            </form>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
