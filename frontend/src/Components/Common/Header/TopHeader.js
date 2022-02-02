import React , {useState} from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,Button,FormControl,Offcanvas} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsSearch,BsTruck,BsPersonCircle,BsFillLockFill } from "react-icons/bs";
import {AiOutlineSync} from "react-icons/ai"
import './style.css';
export default function TopHeader() {
    const [showSearch,setShowSearch] =useState(false);
  return <div className="top-header">
      
          <div className="topWord">
          
          
              <h6>
              Special collection already available.
              </h6>
          
          </div>
      <Nav className="justify-content-end align-items-end" >
         <Nav.Item>
         <Nav.Link>
           <Link className="link" to="/compare"><AiOutlineSync className="icon"/>Compare</Link>
           </Nav.Link>
         </Nav.Item>
       <Nav.Item>
       
           <Nav.Link>
           <Link className="link" to="/login"><BsPersonCircle className="icon"/>Login</Link>
           </Nav.Link>
       </Nav.Item>
       <Nav.Item>
           <Nav.Link>
           <Link className="link" to="/register"><BsFillLockFill className="icon"/>Register</Link>
           </Nav.Link>
   </Nav.Item>
   <Nav.Item>
   <BsSearch onClick={() =>{setShowSearch(true)}}/>
<Offcanvas placement={'bottom'}  show={showSearch}  onHide={()=>{setShowSearch(false)}}>
    <Offcanvas.Header className="justify-content-end" closeButton>
    </Offcanvas.Header>
    <Offcanvas.Body >

    <Form className="d-flex ">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Offcanvas.Body>
</Offcanvas>
   </Nav.Item>
  </Nav>
  
   
  </div>;
}
