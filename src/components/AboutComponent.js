import React from "react";
import "../css/portfolio.css";
import Headshot from "../images/Rodrick-headshot.jpg";
import HtmlIcon from "../images/icon-html.svg";
import JsIcon from "../images/icon-js.svg";
import CssIcon from "../images/icon-css.svg";
import BootstrapIcon from "../images/icon-bootstrap.svg";
import SassIcon from "../images/icon-sass.svg";
import ReactIcon from "../images/icon-react.svg";

function AboutMe() {
  return (
    <>
      <section id="about-section" className="">
        <div className="container">
          <div className="row heading-div">
            <div className="col">
              <h3 className="heading-medium">About Me</h3>
            </div>
          </div>

          <div id="about-content-div" className="row align-items-center">
            <div id="headshot-div" className="col-12 col-lg-6 py-3" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
              <img id="headshot-img" className="mx-auto d-block" src={Headshot} alt="" />
            </div>

            <div id="about-text" className="col-12 col-lg-6 mt-3 mt-lg-0 d-flex align-items-center justify-content-center">
              <div>
                <h4 className="pull-quote text-center text-sm-start">Hi, I'm Rodrick. Nice to meet you!</h4>
                <p className="body-copy text-center text-sm-start">I'm a web developer specializing in front-end development, currently living in the Tampa Bay Area.</p>
                <p className="body-copy text-center text-sm-start">After studying graphic design during my collegiate years, I discovered the world of web development and found it to be another challenging yet fulfilling outlet for my creativity. Web development has allowed me to successfully fuse my passion for both design and technology.</p>
                <p className="body-copy text-center text-sm-start">My development experience has allowed me to employ the use of foundational tools such as HTML 5, CSS 3, and vanilla JavaScript as well as web and mobile development frameworks & libraries such as SASS, React.js, and React Native.</p>
                <p className="body-copy text-center text-sm-start">Take a look through the below samples of my work and feel free to send me a message. I'd love to hear from you!</p>
              </div>
            </div>
          </div>

          <div id="stack-div" className="row position-relative mx-auto" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <div className="heading-div col-12 text-center">
              <h3 className="font-light">My Dev Stack</h3>
            </div>
            <div id="stack-icon-div" className="col-12 d-flex flex-wrap">
              <div className="col-4 col-sm-2 py-2 text-center">
                <img src={HtmlIcon} className="stack-icon" alt="HTML 5" />
              </div>
              <div className="col-4 col-sm-2 py-2 text-center">
                <img src={JsIcon} className="stack-icon" alt="Javascript ES6" />
              </div>
              <div className="col-4 col-sm-2 py-2 text-center">
                <img src={CssIcon} className="stack-icon" alt="CSS 3" />
              </div>
              <div className="col-4 col-sm-2 py-2 text-center">
                <img src={BootstrapIcon} className="stack-icon" alt="Bootstrap" />
              </div>
              <div className="col-4 col-sm-2 py-2 text-center">
                <img src={SassIcon} className="stack-icon" alt="Sass" />
              </div>
              <div className="col-4 col-sm-2 py-2 text-center">
                <img src={ReactIcon} className="stack-icon" alt="React JS" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
