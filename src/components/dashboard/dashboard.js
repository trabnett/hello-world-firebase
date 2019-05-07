import React, { Component } from 'react';
import Notifications from './notifications';
import ProjectList from '../projects/project_list';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component{

    render(){
        // console.log(this.props)
        const { projects, auth } = this.props
        if (!auth.uid){
            return <Redirect to='/signin' />
        }
        return(
            <div className="dashboard container">
                <div>
                    <ProjectList projects={projects}/>
                </div>
                <div>
                    <Notifications />
                </div>
            </div>
        )
    }
}
const mapPropsToState = (state) => {
    console.log(state, "in map state to props")
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapPropsToState),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)