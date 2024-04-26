import { Container, Row, Col } from "react-bootstrap";


function TidSpart() {
    return(
        <Container className="tid-spart-container">
            <Row className="tid-spart-text">
                <h1>TID SPART</h1>
                <p>Se timene du har spart ved å handle hos Oda</p>
            </Row>
            <Row className="tid-spart-content">
                <Row>
                <div className="tid-spart-content">
                    <h1>Denne måneden</h1>
                </div>
                </Row>
                    <Col>
                    <h1>11</h1>
                    </Col>
                    <Col>
                    <h1>23</h1>
                    </Col>
            </Row>
        </Container>
    );
}

export default TidSpart;