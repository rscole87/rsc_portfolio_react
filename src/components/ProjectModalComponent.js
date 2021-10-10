import React from "react";
import { Modal, ModalHeader, ModalBody, Container, Row, Col } from "reactstrap";

function ProjectModal(props) {
  const projectImg = <img src={props.project.image} alt={props.project.name} />;
  const projectVid = (
    <video className="project-vid" id="active-project-video" src={props.project.video} autoplay="true" controls loop webkit-playsinline playsinline>
      Your browser does not support the video tag.
    </video>
  );

  return (
    <Modal id="project-modal" isOpen={props.isModalOpen} toggle={props.toggleModal} size="xl">
      <Container>
        <ModalHeader toggle={props.toggleModal}>
          <h4 className="project-name" id="active-project-name">
            {props.project.name}
          </h4>
        </ModalHeader>
        <ModalBody>
          <div className="modal-column-container">
            <div className="modal-img-column">{window.innerWidth < 575 ? projectImg : projectVid}</div>

            <div className="modal-description-column">
              <p className="project-description" id="active-project-description" project-description>
                {props.project.description}
              </p>

              <div className="modal-bttn-container">
                <a className="code-bttn" id="active-project-demo" href={props.project.demo} target="_blank">
                  Live Demo
                </a>
                <a className="code-bttn" id="active-project-github" href={props.project.github} target="_blank">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </ModalBody>
      </Container>
    </Modal>
  );
}

export default ProjectModal;
