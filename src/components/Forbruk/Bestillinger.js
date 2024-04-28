import { Col, Container, Row, Button } from "react-bootstrap";

function Bestillinger() {

    return(
        <Container>
            <Container>
            <Row className="header">
                <h1>Bestillinger</h1>
            </Row>
            </Container>
            <Row>
                <Col><Button className="filter-btn" variant="light">1 mnd</Button></Col>
                <Col><Button className="filter-btn" variant="dark">3 mnd</Button></Col>
                <Col><Button className="filter-btn" variant="light">6 mnd</Button></Col>
                <Col><Button className="filter-btn" variant="light">1 år</Button></Col>
                <Col><Button className="filter-btn" variant="light">Alle</Button></Col>
            </Row>
            <Container>
            {/* Skal fikse spacing på elementene her */}
            <Row className="month-header">
                <h4>Mars 2024</h4>
            </Row>
            <Container>
            <Row className="bestilling-card">
                <Col>
                    <p>Ons 14. Februar, 15:02</p>
                    <p>Slottsplassen 1, 0010 Oslo</p>
                    <a href="url">Se kategorifordeling</a>
                </Col>
                <Col>
                <p>978,57 kr</p>
                </Col>
            </Row>
            </Container>

            <Row className="month-header">
                <h4>April 2024</h4>
            </Row>
            <Container>
            <Row className="bestilling-card">
                <Col>
                    <p>Ons 14. Februar, 15:02</p>
                    <p>Slottsplassen 1, 0010 Oslo</p>
                    <a href="url">Se kategorifordeling</a>
                </Col>
                <Col>
                <p>978,57 kr</p>
                </Col>
            </Row>
            </Container>
            </Container>
        </Container>
    )
}

export default Bestillinger;