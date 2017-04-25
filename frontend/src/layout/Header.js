import React, { Component } from 'react';
import logo from '../../public/logo.jpg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './header.css';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand className="navbar-left">
              <Link to="/">
                <img src={logo} className="navbar-left agze_header_logo" alt="logo" />
                AG.ZE 
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="/horses">Pferde</Link>
            </NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Header;
