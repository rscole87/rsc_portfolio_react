import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import PROJECTS from "../shared/projectList";

function RenderProject(props){
  return (
    <Modal id="project-modal" isOpen={props.isModalOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>
        <h4 className="project-name" id="active-project-name">
          {props.project.name}
        </h4>
      </ModalHeader>
      <ModalBody>
        <div className="modal-column-container">
          <div className="modal-img-column">
            <video className="project-vid" id="active-project-video" src={props.project.video} project-vid controls loop autoplay webkit-playsinline playsinline>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="modal-description-column">
            <p className="project-description" id="active-project-description" project-description>
              {props.project.description}
            </p>

            <div className="modal-bttn-container">
              <a className="code-bttn" id="active-project-demo" href={props.project.demo} target="_blank">
                Live Code
              </a>
              <a className="code-bttn" id="active-project-github" href={props.project.github} target="_blank">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};


function ProjectThumb(props) {
  return <div className="project-thumb" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" style={{ backgroundImage: `url(${props.project.image})` }} onClick={() => (<RenderProject project={props.project} isOpen={true} toggleModal={props.toggleModal}/>)} />;
}
class ProjectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
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
            <ProjectThumb project={project} isOpen={this.state.isModalOpen} toggleModal={this.toggleModal} />
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
