import React from "react";
import AOS from "aos";
import "../css/portfolio.css";
import Headshot from "../images/Rodrick-headshot.jpg";
import HtmlIcon from "../images/html.svg";
import JsIcon from "../images/js.svg";
import CssIcon from "../images/css.svg";
import BootstrapIcon from "../images/bootstrap.svg";
import SassIcon from "../images/sass.svg";
import ReactIcon from "../images/react.svg";

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

          <div id="about-content-div" className="row">
            <div id="headshot-div" className="col-12 col-sm-6 py-3" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
              <img id="headshot-img" className="mx-auto d-block" src={Headshot} alt="" />
            </div>

            <div id="about-text" className="col-12 col-sm-6 d-flex align-items-center">
              <div>
                <h4 className="pull-quote text-center text-sm-start">Hi, I'm Rodrick. Nice to meet you.</h4>

                <p className="body-copy text-center text-sm-start">I'm a self-taught web developer living in South Florida. After studying graphic design during my collegiate years, I discovered the world of web development and found it to be another challenging yet fulfilling outlet for my creativity. Web development has allowed me to successfully fuse my passion for both design and technology.</p>
              </div>
            </div>
          </div>

          <div id="stack-div" className="row position-relative mx-auto" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <div className="heading-div col-12 text-center">
              <h3 className="font-light">My Stack</h3>
            </div>
            <div id="stack-icon-div" className="col-12 d-flex flex-wrap">
              <div className="col-4 col-sm-2 py-2">
                <img src={HtmlIcon} className="stack-icon" alt="HTML 5" />
              </div>
              <div className="col-4 col-sm-2 py-2">
                <img src={JsIcon} className="stack-icon" alt="Javascript ES6" />
              </div>
              <div className="col-4 col-sm-2 py-2">
                <img src={CssIcon} className="stack-icon" alt="CSS 3" />
              </div>
              <div className="col-4 col-sm-2 py-2">
                <img src={BootstrapIcon} className="stack-icon" alt="Bootstrap" />
              </div>
              <div className="col-4 col-sm-2 py-2">
                <img src={SassIcon} className="stack-icon" alt="Sass" />
              </div>
              <div className="col-4 col-sm-2 py-2">
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
