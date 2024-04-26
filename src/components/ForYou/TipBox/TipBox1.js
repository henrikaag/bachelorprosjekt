
import { Container, Row, Col } from "react-bootstrap";
import React from "react";



function TipBox1() {
    return (
        <Container className="tip-box-1-container">
            <Row>
                    <div  className="tip-box-1">
                        <Row>
                            <Col xs={1} className="tip-box-1-icon">
                                
                                    <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div>
                            </Col>
                            <Col>
                                <div className="tip-box-1-text">
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

export default TipBox1;