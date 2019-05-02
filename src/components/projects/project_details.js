import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    return(
        <div>
            <h1>title {props.match.params.id}</h1>
            <p>content</p>
            <p>user</p>
            <p>date registerd</p>
        </div>
    )
}

export default ProjectDetails;
