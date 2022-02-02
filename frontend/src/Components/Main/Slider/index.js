import React from 'react';
import {BsFillCartFill,BsFillHeartFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl, Offcanvas, Carousel } from 'react-bootstrap';
import './style.css';
export default function index() {
  return <div className="Slider">
    
    <Carousel  controls={false} touch={true} wrap={true}>
      <Carousel.Item>
      <img className="d-block w-100 "  src='https://wallpaperaccess.com/full/123346.jpg' alt="logo" />
      <Carousel.Caption className="justify-content-start">
        <h6>New Trending</h6>
        <Button>SHOP NOW</Button>
      </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 "  src='https://wallpaperaccess.com/full/123346.jpg' alt="logo" />
      <Carousel.Caption className="justify-content-start">
        <h6>New Trending</h6>
        <Button>SHOP NOW</Button>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100 " src='https://wallpaperaccess.com/full/123346.jpg' alt="logo" />
      <Carousel.Caption className="justify-content-start">
        <h6>New Trending</h6>
        <Button>SHOP NOW</Button>
      </Carousel.Caption >
      </Carousel.Item>
    </Carousel>
  </div>;
}
