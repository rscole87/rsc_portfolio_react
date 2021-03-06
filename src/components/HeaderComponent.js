import { link } from "fs";
import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import FullBrand from "../images/Full_Branding_WHITE-01.svg";
import Logo from "../images/Logo_WHITE-01.svg";
import links from '../shared/links'

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };

    this.closeNav = this.closeNav.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  closeNav() {
    if (this.state.isNavOpen === true) {
      this.toggleNav();
    }
  };

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  
  render() {
    const navLinks = links.map(link => {
      return (
        <NavItem>
          <a className="nav-link" href={link.url} onClick={() => this.closeNav()}>{link.text}</a>
        </NavItem>
      )
    })

    return (
      <>
        <section id="header-section">
          <div className="container">
            <div id="header-image-container">
              <img className="mx-auto d-block" src={FullBrand} alt="Rodrick Coleman, Web Developer" />
            </div>
          </div>
        </section>

        <Navbar id="main-nav" dark color="faded" sticky="top" expand="sm">
          <div className="container-fluid container-xl">
            <NavbarBrand className="mr-auto">
              <img src={Logo} id="logo" alt="rsc-logo" width="30" height="24" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="mr-2"/>

            <Collapse isOpen={this.state.isNavOpen} navbar className="text-center justify-content-sm-end">
              <Nav className="ml-auto" navbar>
                {navLinks}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
