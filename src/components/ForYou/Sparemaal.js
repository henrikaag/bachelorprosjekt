import { Button, Container, Row, Col } from "react-bootstrap";
import React from "react";

import "../../css/ForYou/ForYouPage.css"; 

function Sparemaal() {
    return(
        <Container className="sparemaal-container">
            <Row>
                <h1 className="sparemaal-headline">Sparemål</h1>
                <p className="sparemaal-text">Spar 300kr ved å handle varer på tilbud</p>
            </Row>
            <Row className="row-progressbar">
                <Col>
                    <div className="progressbar">
                    <div className="progressbarfill">
                    </div>
                    </div>
                </Col>
            </Row>
            <Row className="row-progressbar-text">
                <Col>
                <p>0 kr</p>
                </Col>

                <Col>
                <p>100 kr</p>
                </Col>

                <Col>
                <p>200 kr</p>
                </Col>

                <Col>
                <p>300 kr</p>
                </Col>

                <Col>
                <p>400 kr</p>
                </Col>

                <Col>
                <p>500 kr</p>
                </Col>

            </Row>
            <Row>
                <div className="sparemaal-btn-div">
                <Button className="sparemaal-btn btn-warning">Endre Sparemål</Button>
                </div>
            </Row>
        </Container>
    )
};

export default Sparemaal;