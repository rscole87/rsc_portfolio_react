import React, { Component } from "react";
import PROJECTS from "../shared/projectList";


function ProjectThumb(props) {
  return (
    <div className="project-thumb" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
      <img src={props.image} alt={props.name} />
    </div>
  );
}
class ProjectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }

  render() {
    const displayedProjects = this.state.projects;

    return (
      <section id="projects-section">
        <div id="projects-div" className="container">
          <div className="heading-div">
            <h3 className="heading-medium">Projects</h3>
          </div>
        </div>

        <div id="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectThumb image={project.image} name={project.name} />
          ))}
        </div>

        <div id="call-to-action-div" className="container row position-relative mx-auto" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
          <div className="heading-div col-12 text-center">
            <h3 className="font-light">Like what you see?</h3>
          </div>
          <div>
            <p className="body-copy">Send me message or feel free to connect with me via my social media links below.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectArea;
