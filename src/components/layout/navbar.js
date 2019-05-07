import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './signed_in'
import SignedOutLinks from './signed_out'
import { connect } from 'react-redux'
const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return(
        <nav style={{backgroundColor: "grey", height: "5em", color: "black"}}>
            <div>
                <Link to='/' style={{lineHeight: "75px"}}>home</Link>
                { links }
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log("navbar", state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);