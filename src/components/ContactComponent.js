import React from "react";
import { Container } from "reactstrap";
import linkedInIcon from "../images/social-icon-linkedin.svg";
import gitHubIcon from "../images/social-icon-github.svg";
import instagramIcon from "../images/social-icon-instagram.svg";
import twitterIcon from "../images/social-icon-twitter.svg";

function ContactArea() {
  return (
    <section id="contact-section">
      <Container>
        <div className="heading-div">
          <h3 className="heading-medium">Contact Me</h3>
        </div>

        <div id="form-div">
          <form id="contact-form" className="row" name="contact-form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="col-12 col-sm-6">
              <input className="form-control" id="first-name" name="first-name" type="text" placeholder="First Name" />
            </div>
            <div className="col-12 col-sm-6">
              <input className="form-control" id="last-name" name="last-name" type="text" placeholder="Last Name" />
            </div>
            <div className="col-12">
              <input className="form-control" name="email" type="text" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea className="form-control" name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
            </div>

            <div id="submit-bttn-div" className="col-4">
              <input className="btn" id="submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <div id="contact-menu-div">
          <div className="row">
            <div className="col text-center">
              <a href="https://www.linkedin.com/in/rodrick-coleman/" target="_blank">
                <img src={linkedInIcon} className="social-media-icon" alt="LinkedIn" />
              </a>
            </div>
            <div className="col text-center">
              <a href="https://github.com/rscole87" target="_blank">
                <img src={gitHubIcon} className="social-media-icon" alt="GitHub" />
              </a>
            </div>
            <div className="col text-center">
              <a href="https://www.instagram.com/rodrick.s.coleman/" target="_blank">
                <img src={instagramIcon} className="social-media-icon" alt="Instagram" />
              </a>
            </div>
            <div className="col text-center">
              <a href="https://twitter.com/rodrickCodesman" target="_blank">
                <img src={twitterIcon} className="social-media-icon" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactArea;
