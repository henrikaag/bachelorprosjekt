
import { Container, Row, Col } from "react-bootstrap";
import React from "react";



function TipBox3() {
    return (
        <Container className="tip-box-3-container">
            <Row>
                    <div  className="tip-box-3">
                        <Row>
                            <Col xs={1} className="tip-box-3-icon">
                                
                                    <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div>
                            </Col>
                            <Col>
                                <div className="tip-box-3-text">
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

export default TipBox3;