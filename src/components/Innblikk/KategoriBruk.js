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
                    <div className="width-div">
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
                            <div>45%</div>
                        </Col>
                    </Row>
                    <Row className="item-row">
                        <Col xs={1} className="kategori-bruk-col">
                        <div className="dot-blue"></div>
                        </Col>
                        <Col className="kategori-bruk-col">
                            <div>Frukt og Grønt</div>
                        </Col>
                        <Col xs={3} className="kategori-bruk-col">
                            <div>700 kr</div>
                        </Col>
                        <Col xs={2} className="kategori-bruk-col">
                            <div>25%</div>
                        </Col>
                    </Row>
                    <Row className="item-row">
                        <Col xs={1} className="kategori-bruk-col">
                            <div className="dot-red"></div>
                        </Col>
                        <Col className="kategori-bruk-col">
                            <div>Karbohydrater</div>
                        </Col>
                        <Col xs={3} className="kategori-bruk-col">
                            <div>900 kr</div>
                        </Col>
                        <Col xs={2} className="kategori-bruk-col">
                            <div>30%</div>
                        </Col>
                    </Row>
                    <Row className="item-row">
                        <Col xs={1} className="kategori-bruk-col">
                            <div className="dot-green"></div>
                        </Col>
                        <Col className="kategori-bruk-col">
                            <div>Snacks og godteri</div>
                        </Col>
                        <Col xs={3} className="kategori-bruk-col">
                            <div>200 kr</div>
                        </Col>
                        <Col xs={2} className="kategori-bruk-col">
                            <div>10%</div>
                        </Col>
                    </Row>
                    </div>
                    <div>
                        <Row>
                            <div className="divider-div"></div>
                        </Row>
                        <Row className="kategori-bruk-text">
                            <h4>Denne måneden</h4>
                            <h1>3300 KR</h1>
                            <h4>Totalt</h4>
                        </Row>
                    </div>
                </Container>
            </Row>
        </Container>
    )
}

export default KategoriBruk;
