import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl, Offcanvas } from 'react-bootstrap';
import Cards from "../Product/Cards";
import "./Style.css";
import { Link } from "react-router-dom";

export default function index() {
  return <div>
    <div className="row">
    <h2>TOP PRODUCT</h2>
    <Nav>
    <Nav.Link><Link className="link" to="/">Home & Garden</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/shop">Camera & Photo</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/blog">Audio & Home</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/about">Video & Audio</Link></Nav.Link>
        </Nav>
        </div>
    <div className="TopProduct">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  </div>;
}
