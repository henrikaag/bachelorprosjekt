import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function NavBarTop() {
  return (
    
    <Navbar className="bg-body-tertiary justify-content-between" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">All products</Nav.Link>
            <Nav.Link href="#link">Recipes</Nav.Link>
            <Nav.Link href="#link">Lists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
   
      <Row>
          <Col xs="auto">
            <Button type="submit" variant="outline-light">Regina</Button>
          </Col>
        </Row>
        </Container>
    </Navbar>
    
    
  );
}

export default NavBarTop;
