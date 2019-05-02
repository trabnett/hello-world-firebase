import React, { Component } from 'react';
import Notifications from './notifications'
import ProjectList from '../projects/project_list'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div>
                    <ProjectList />
                </div>
                <div>
                    <Notifications />
                </div>
            </div>
        )
    }
}

export default Dashboard