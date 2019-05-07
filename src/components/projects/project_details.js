import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
    const id = props.match.params.id
    const { project, auth } =  props
    console.log("here", props)
    if (!auth.uid){
        return <Redirect to='/signin' />
    }
    if (project){
    return(
        <div>
            <h1>title {project.title}</h1>
            <p>content {project.content}</p>
            <p>user{project.authorFirstName} {project.authorLastName}</p>
            <p>date registerd</p>
        </div>
    )
    } else {
        return (
            <div>
                <p>Loading Project</p>
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project : project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)
(ProjectDetails);
