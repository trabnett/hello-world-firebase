import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './signed_in'
import SignedOutLinks from './signed_out'
const Navbar = () => {
    return(
        <nav style={{backgroundColor: "grey", height: "5em", color: "black"}}>
            <div>
                <Link to='/' style={{lineHeight: "75px"}}>home</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;