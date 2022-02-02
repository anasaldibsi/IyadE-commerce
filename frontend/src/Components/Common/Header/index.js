import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl, Offcanvas } from 'react-bootstrap';
// import React, { useContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { Link } from "react-router-dom";
import {BsFillCartFill,BsFillHeartFill} from "react-icons/bs"
export default function index() {
  return <div className="header">
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand ><Link className="link" to="/"><img  src='https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/images%2Fdownload.png?alt=media&token=9fe5911e-ab7c-4c23-bf00-09b825bfa616' alt="logo" /></Link> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><Link className="link" to="/">Home</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/shop">Shop</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/blog">Blog</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/about">About</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/myAccount">MyAccount</Link></Nav.Link>
        <Nav.Link><Link className="link" to="/wishList"><BsFillHeartFill/></Link></Nav.Link>
        <Nav.Link><Link className="link" to="/cart"><BsFillCartFill/></Link></Nav.Link>
        

      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

  </div>;
}
