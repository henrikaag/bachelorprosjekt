import { Col, Container, Row } from "react-bootstrap";

import "../../css/Innblikk/Innblikk.css";

function KategoriBruk() {
    return(
        <Container>
            <Row>
                <h1>Kategorier du bruker penger på</h1>
            </Row>
            <Row className="kategori-bruk-row">
                <Container className="kategori-bruk-container">
                    <Row className="item-row">
                        <Col xs={1} className="kategori-bruk-col">
                            <div className="dot-yellow"></div>
                        </Col>
                        <Col>
                            <div>Kylling og kjøtt</div>
                        </Col>
                        <Col xs={3} className="kategori-bruk-col" >
                            <div>1500kr</div>
                        </Col>
                        <Col xs={2} className="kategori-bruk-col" >
                            <div>60%</div>
                        </Col>
                    </Row>
                    <Row className="item-row">
                        <Col className="kategori-bruk-col">
                        <div className="dot-blue"></div>
                        </Col>
                        <Col className="kategori-bruk-col">

                        </Col>
                        <Col className="kategori-bruk-col">

                        </Col>
                        <Col className="kategori-bruk-col">
                        
                        </Col>
                    </Row>
                    <Row className="item-row">
                        <Col className="kategori-bruk-col">
                            <div className="dot-red"></div>
                        </Col>
                        <Col className="kategori-bruk-col">

                        </Col>
                        <Col className="kategori-bruk-col">

                        </Col>
                        <Col className="kategori-bruk-col">
                        
                        </Col>
                    </Row>
                    <Row className="item-row">
                        <Col>
                            <div className="dot-green"></div>
                        </Col>
                        <Col>

                        </Col>
                        <Col>

                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default KategoriBruk;
