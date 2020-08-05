import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>CourseApp</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="Addcourses">
              <Navbar.Brand>Addcourses</Navbar.Brand>
            </Link>
            <Link to="ShowCourse">
              <Navbar.Brand>Course</Navbar.Brand>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
