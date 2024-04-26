import { Button, Col, Container, Row } from "react-bootstrap";

function Delmaal() {
    return(
        <Container className="delmaal-container">
            <Row className="delmaal-text">
                <h1>DELMÅL</h1>
                <p>Delmål du har gitt deg selv, eller du har valgt fra Oda</p>
            </Row>
            <Row className="delmaal-content-1">
                <Col>
                    <h4>Handle mer grønt</h4>
                    <p>Kjøp fem varer fra Frukt og Grønt kategorien denne uken</p>
                    <h5>3 Varer</h5>
                    <h6>av 5 handlet</h6>
                </Col>
                <Col>
                <h1>ET hjul</h1>
                </Col>
            </Row>
            <Row className="delmaal-content-2">
                <Col>
                    <h4>Handle mer grønt</h4>
                    <p>Kjøp fem varer fra Frukt og Grønt kategorien denne uken</p>
                    <h5>3 Varer</h5>
                    <h6>av 5 handlet</h6>
                </Col>
                <Col>
                <h1>ET hjul</h1>
                </Col>
            </Row>
            <Button className="delmaal-vis-mer">
                Vis mer
            </Button>
        </Container>
    )
}

export default Delmaal;
