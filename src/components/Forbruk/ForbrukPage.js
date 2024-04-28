import { Col, Container, Row } from "react-bootstrap";
import Budsjett from '../Forbruk/Budsjett';
import Bestillinger from "./Bestillinger";

import '../../css/Forbruk/ForbrukPage.css';


function ForbrukPage() {
  return (
    <Container>
      <Row className="budsjett">
        <Col>
            <Budsjett />
        </Col>
        <Col className="bestillinger">
            <Bestillinger />
        </Col>
      </Row>
    </Container>
  );
}

export default ForbrukPage;
