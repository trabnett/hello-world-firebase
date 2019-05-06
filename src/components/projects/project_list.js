import React from 'react';
import ProjectSummary from './project_summary'

const ProjectList = ({ projects }) => {
    return(
        <div className="project-list">
            { projects && projects.map(project => {
                return(
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList;