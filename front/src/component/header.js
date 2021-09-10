import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">DrinkAPI</Link>
              <Link to="/DrinkData">DrinkData</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
  }
}

export default header
