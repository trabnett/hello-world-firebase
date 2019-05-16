import React from 'react';
import ProjectSummary from './project_summary'
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return(
        <div className="project-list">
        <h1>Projects</h1>
            { projects && projects.map(project => {
                return(
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;