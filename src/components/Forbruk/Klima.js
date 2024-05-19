import { Col, Container, Row } from "react-bootstrap";

import ProgressBar from "react-bootstrap/ProgressBar";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const ORANGE_NOTCLICKED = "rgba(243, 170, 63, 0.8)";
const ORANGE_CLICKED = "rgba(230, 136, 0, 0.8)";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className="vis-varer-btn"
      style={{
        backgroundColor: isCurrentEventKey ? ORANGE_NOTCLICKED : ORANGE_CLICKED,
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Klima() {
  return (
    <Container className="ditt-klimaavtrykk">
      <Container>
        <Row className="header">
          <h1>Ditt klimaavtrykk</h1>
        </Row>
      </Container>

      <Row>
        <Col>
          <Row className="klima-box">
            <Row>
              <div className="budsjett-content-top">
                <h5>Tid spart denne måneden</h5>
                <br></br>
              </div>
            </Row>

            <Row className="budsjett-content-bot">
              <Col>
                <h4>9,5kg C02</h4>
              </Col>
              <Col>
                <h4>14 kg mat</h4>
              </Col>
            </Row>
            <Row>
            <Col>
                <p>Dette tilsvarer en enveis flytur over Atlanterhavet</p>
                <img
                src={require(`../../img/plane.png`)}
                alt="oda-logo"
                width={50}
                height={50}
                className="plane-img"
              />
              </Col>
            </Row>
          </Row>
        </Col>

        <Col>
          <Row className="klima-box-tip">
            <Row>
              <div className="budsjett-content-top">
                <h5>Hva tilsvarer egentlig 1kg C02 utslipp?</h5>
                <br></br>
              </div>
            </Row>

            <Row className="budsjett-content-bot">
              <Row><p>- Å kjøre en bensindrevet bil i ca. 5 km.</p></Row>
              <Row><p>- Å produsere omtrent 2,3 liter melk i konvensjonell melkeproduksjon.</p></Row>
              <Row><p>- Å bruke elektrisitet til å koke vann i en vannkoker til te eller kaffe rundt 100 ganger.</p></Row>
            </Row>
            <Row>
            <Col>

              </Col>
            </Row>
          </Row>
        </Col>

      </Row>

      <br></br>

      <h4>Klimautslipp fra dine siste handleturer</h4>
      <p>
        Grafen viser omtrent hvor mye CO2 varene i bestillingene dine tilsvarer,
        og hvilke utslippskategorier varene er i
      </p>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <p><b>21. Januar</b> - 24 matvarer</p>
            <Row>
              <Col>
                <ProgressBar className="progressbar">
                  <ProgressBar variant="danger" now={70} key={1} />
                  <ProgressBar variant="warning" now={15} key={2} />
                  <ProgressBar variant="success" now={15} key={3} />
                </ProgressBar>
              </Col>
              <Col>2,4kg C02/kg</Col>
              <Col>
                <ContextAwareToggle eventKey="0">Se varer</ContextAwareToggle>
              </Col>
            </Row>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body className="varer-box">
              <Row>
                <Col>
                  <Badge bg="danger">70%</Badge>
                </Col>

                <Col>
                  <p>Veldig høyt utslipp (10kg C02)</p>
                  <u>
                    <p>Vis varer</p>
                  </u>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge bg="warning">15%</Badge>
                </Col>

                <Col>
                  <p>Medium høyt utslipp (10kg C02)</p>
                  <u>
                    <p>Vis varer</p>
                  </u>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge bg="success">15%</Badge>
                </Col>

                <Col>
                  <p>Lavt utslipp (10kg C02)</p>
                  <u>
                    <p>Vis varer</p>
                  </u>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <p><b>28. Januar</b> - 29 matvarer</p>
            <Row>
              <Col>
                <ProgressBar className="progressbar">
                  <ProgressBar variant="danger" now={70} key={1} />
                  <ProgressBar variant="warning" now={15} key={2} />
                  <ProgressBar variant="success" now={15} key={3} />
                </ProgressBar>
              </Col>
              <Col>5,4kg C02/kg</Col>
              <Col>
                <ContextAwareToggle eventKey="1">Se varer</ContextAwareToggle>
              </Col>
            </Row>
          </Card.Header>

          <Accordion.Collapse eventKey="1">
            <Card.Body className="varer-box">
              <Row>
                <Col>
                  <Badge bg="danger">70%</Badge>
                </Col>

                <Col>
                  <p>Veldig høyt utslipp (10kg C02)</p>
                  <u>
                    <p>Vis varer</p>
                  </u>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge bg="warning">15%</Badge>
                </Col>

                <Col>
                  <p>Medium høyt utslipp (10kg C02)</p>
                  <u>
                    <p>Vis varer</p>
                  </u>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Badge bg="success">15%</Badge>
                </Col>

                <Col>
                  <p>Lavt utslipp (10kg C02)</p>
                  <u>
                    <p>Vis varer</p>
                  </u>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
      </Accordion>
    </Container>
  );
}

export default Klima;
