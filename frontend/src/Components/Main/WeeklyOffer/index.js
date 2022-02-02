import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl, Offcanvas, Carousel } from 'react-bootstrap';
import "./Style.css";
import Cards from "../Product/Cards";
import SliderOne from "react-slick"
export default function index() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    lazyLoad:true
  };
    return <div >
     <h2>WEEKLY DEAL PRODUCT</h2>
    <div className="WeeklyOffer">
    <SliderOne {...settings}  >
      
      <div >
       <Cards/>
       </div>
       
       <div >
       <Cards/>
       </div>
       
       <div >
       <Cards/>
       </div>
       
       <div >
       <Cards/>
       </div>
       
       <div >
       <Cards/>
       </div>
       
       <div >
       <Cards/>
       </div>
       
       <div >
       <Cards/>
       </div>
       
       <div >
       <Cards/>
       </div>
     </SliderOne>
    </div>
     {/* <div className="WeeklyOffer">
     <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://andshop-react.netlify.app/static/media/3.63bfd30e.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://andshop-react.netlify.app/static/media/5.8b2afde4.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://andshop-react.netlify.app/static/media/2.0e01aae4.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://andshop-react.netlify.app/static/media/9.063f1f34.jpg"
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h5>Fourth slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> */}
    </div>;
}