import React from 'react';
import { NavLink } from 'react-router-dom'
const SignedOutLinks = () => {
    return(
        <ul style={{float: "right", marginRight: "2em"}}>
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;