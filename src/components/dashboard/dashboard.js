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
        const { projects, auth, notifications } = this.props
        if (!auth.uid){
            return <Redirect to='/signin' />
        }
        return(
            <div className="dashboard container">
                <div>
                    <ProjectList projects={projects}/>
                </div>
                <div>
                    <Notifications notifications={notifications}/>
                </div>
            </div>
        )
    }
}
const mapPropsToState = (state) => {
    console.log(state, "in map state to props")
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapPropsToState),
    firestoreConnect([
        {collection: 'projects', orderBy: ['createdAt', 'desc']}, 
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)