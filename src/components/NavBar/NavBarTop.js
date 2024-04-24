import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function NavBarTop() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container>
        <Form inline>
          <Row>
          <Col xs="auto">
            <Navbar.Brand href="#home">
              <img
                src="src\img\Oda-logo.png"
                alt="oda-logo"
              />
            </Navbar.Brand>
            </Col>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 ml-5"
              />
            </Col>
          </Row>
        </Form>

        <Form inline>
          <Row>
            <Col xs="auto">
              <Button type="submit">Velg leveransetid</Button>
            </Col>
            <Col xs="auto">
              <Button type="submit">0,00 kr</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBarTop;
