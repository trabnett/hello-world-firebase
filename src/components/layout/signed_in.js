import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SignedInLinks = (props) => {

    return(
        <ul style={{float: "right", marginRight: "2em"}}>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a href="/" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/'></NavLink>{props.profile.initials}</li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(
null,
mapDispatchToProps
)
(SignedInLinks);