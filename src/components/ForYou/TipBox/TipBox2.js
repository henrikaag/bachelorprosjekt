import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function TipBox2() {
  return (
    <Container className="tip-box-2-container">
      <Row>
        <div className="tip-box-2">
          <Row>
            <Col xs={1} className="tip-box-2-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-patch-exclamation-fill tipbox-img"
                viewBox="0 0 16 16"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Col>
            <Col>
              <div className="tip-box-2-text">
                <h5 className="tip-header">Reduser matavfall</h5>
                <p>
                  Ikke kast mat. bruk heller Oda til å lage deilige restemiddager. Ved å redusere matsvinn sparer du både penger og miljøet. 
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default TipBox2;
