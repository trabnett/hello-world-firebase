import React from 'react';
import ProjectSummary from './project_summary'

const ProjectList = () => {
    return(
        <div className="project-list">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
}

export default ProjectList;