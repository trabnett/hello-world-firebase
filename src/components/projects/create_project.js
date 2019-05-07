import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    eventHandler = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createProject(this.state)
        this.setState({title: '', content: ''}, this.props.history.push('/'))
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        const { auth } = this.props
        if (!auth.uid){
            return <Redirect to='/signin' />
        }
        return (
        <div style={{marginTop: "10em"}}>
            <form onSubmit={this.eventHandler}>
                <h1>New Project</h1>
                <label>Title</label>
                <input type="text" id='title' value={this.state.title} placeholder="title" onChange={this.handleChange}></input>
                <label>Project Content</label>
                <textarea id='content' value={this.state.content} onChange={this.handleChange}></textarea>
                <div>
                    <button>create</button>
                </div>
            </form>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);