



import Button from 'react-bootstrap/Button';
import sanas from '../Assets/sanas.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link }from "react-router-dom";
import '../Navbar/Navbar.css';
const Navbars = () => {
  return (
  <div>
      
      <div>
       <Navbar expand="lg" className="bg-body-tertiary">
       
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="All Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item  ><Link  style={{ textDecoration: 'none', color: 'black'}} to="/">DINING CHAIRS</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               <Link style={{ textDecoration: 'none', color :'black'}} to='/shop'> TABLES SHOP </Link>
              </NavDropdown.Item>
            
              <NavDropdown.Item href="#action5">
               <Link style={{ textDecoration: 'none', color :'black'}} to='/sofa'>  SOFA COLLECTION   </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
             < Link style={{ textDecoration: 'none', color :'black'}} to='/furni'>   STOOLS COLLECTION</Link>
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#action2">   Furniture   </Nav.Link>
        <div className='f23'>    <p><span style={{color: 'blue',fontSize: '1.5rem'}}>Sana</span> Company for event managment</p></div>
          </Nav>
          <Form className="d-flex justify-content-end">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        

        
    </div>
  );
}

export default  Navbars;
