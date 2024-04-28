import { Col, Container, Row } from "react-bootstrap";

function Budsjett() {
  return (
    <Container className="budsjett-container">
      <Container>
        <Row className="header">
          <h1>Ditt matbudsjett</h1>
        </Row>
      </Container>

      <Row className="budsjett-box">
        <Row>
          <div className="budsjett-content-top">
            <h4>Du har igjen</h4>
            <br></br>
            <h1 className="budsjett-rest-number">700 kr</h1>
          </div>
        </Row>
        <hr className="divider-line"></hr>
        <Row className="budsjett-content-bot">
          <Col>
            <h4>Du har brukt</h4>
            <p>3300 kr</p>
          </Col>
          <Col>
            <h4>Ditt budsjett</h4>
            <p>4000 kr</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Budsjett;
