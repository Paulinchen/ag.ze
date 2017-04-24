import React, { Component } from 'react';
import logo from '../../public/logo.jpg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './header.css';

class Header extends Component {
  render() {
    return (
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand className="navbar-left">
              <img src={logo} className="navbar-left agze_header_logo" alt="logo" />
              AG.ZE 
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>Pferde</NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Header;
