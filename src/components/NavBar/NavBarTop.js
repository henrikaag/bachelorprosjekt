import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function NavBarTop() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between" bg="dark" data-bs-theme="dark">
      <Container>
        <Form inline>
          <Row>
            <Col xs="auto">
            <Navbar.Brand href="#home">
              <img
                src={require(`../../img/Oda-logo.png`)}
                alt="oda-logo"
                width={65}
                height={25}
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
              <Button type="submit" variant="outline-light">Velg leveransetid</Button>
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="outline-light">0,00 kr</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBarTop;
