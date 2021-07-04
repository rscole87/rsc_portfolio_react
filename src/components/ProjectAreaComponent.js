import React, {Component} from 'react';
import PROJECTS from '../shared/projectList'

class ProjectArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: PROJECTS
        }
    }

    render(){
        const displayedProjects = this.state.projects.slice()
        
        return(
            displayedProjects.forEach(project => {
                <div className="project-thumb" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    <image src={project.image} />
                </div>
            })
        )
    }
}

export default ProjectArea;