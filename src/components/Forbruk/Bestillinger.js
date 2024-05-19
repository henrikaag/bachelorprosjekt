import { Col, Container, Row, Button } from "react-bootstrap";

function Bestillinger() {

    return(
        <Container>
            <Container>
            <Row className="header">
                <h1>Bestillinger</h1>
            </Row>
            </Container>
            <Container>
            <Row>
                <Col><Button className="filter-btn" variant="warning">1 mnd</Button></Col>
                <Col><Button className="filter-btn" variant="warning">3 mnd</Button></Col>
                <Col><Button className="filter-btn" variant="warning">6 mnd</Button></Col>
                <Col><Button className="filter-btn" variant="warning">1 år</Button></Col>
                <Col><Button className="filter-btn" variant="warning">Alle</Button></Col>
            </Row>
            </Container>
            <Container>
            
            
                <h4 className="month-header">Mars 2024</h4>
            
            <Container>
            <Row className="bestilling-card">
                <Col>
                    <p>Ons 19. Mars, 12:02</p>
                    <p>Slottsplassen 1, 0010 Oslo</p>
                    <a href="url">Se kategorifordeling</a>
                </Col>
                <Col>
                <p>978,57 kr</p>
                </Col>
            </Row>
            </Container>

           
                <h4 className="month-header">April 2024</h4>
            
            <Container>
            <Row className="bestilling-card">
                <Col>
                    <p>Ons 14. April, 15:07</p>
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