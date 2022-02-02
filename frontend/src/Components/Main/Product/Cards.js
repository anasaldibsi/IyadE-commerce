import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl, Offcanvas, Carousel,Card } from 'react-bootstrap';

export default function Cards() {
  return <div>
   
      <Card style={{ width: '18rem' }} onMouseEnter={()=>{console.log("Hi");}}>
  <Card.Img variant="top" src="https://andshop-react.netlify.app/static/media/4.bc52b1fc.jpg" alt="kk"/>
  <Card.Body>
    <Card.Title>Fossil Men's Quartz Watch</Card.Title>
    <Card.Text>
      $334.00
    </Card.Text>
  </Card.Body>
</Card>

  </div>;
}
