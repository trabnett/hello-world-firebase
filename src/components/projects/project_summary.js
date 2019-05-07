import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project}) => {
    console.log(project, "this is a project")
    return(
        <div>
            <h1>{project.title}</h1>
            <p>posted by {project.authorFirstName}</p>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
    )
}

export default ProjectSummary;