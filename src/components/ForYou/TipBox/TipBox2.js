
import { Container, Row, Col } from "react-bootstrap";
import React from "react";



function TipBox2() {
    return (
        <Container className="tip-box-2-container">
            <Row>
                    <div  className="tip-box-2">
                        <Row>
                            <Col xs={1} className="tip-box-2-icon">
                                
                                    <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div>
                            </Col>
                            <Col>
                                <div className="tip-box-2-text">
                                    <h3>Tips</h3>
                                    <p>This text is not bold</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
            </Row>
        </Container>
    )
}

export default TipBox2;