import React from 'react';

const ProjectSummary = ({project}) => {
    return(
        <div>
            <h1>{project.title}</h1>
            <p>posted by Tim</p>
            <p>today</p>
        </div>
    )
}

export default ProjectSummary;