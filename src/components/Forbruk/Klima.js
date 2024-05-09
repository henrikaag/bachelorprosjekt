import { Col, Container, Row, Button } from "react-bootstrap";

import ProgressBar from 'react-bootstrap/ProgressBar';
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const GREY_NOTCLICKED = 'rgba(27, 27, 27, 0.54)';
const GREY_CLICKED = 'rgba(7, 7, 7, 0.76)';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? GREY_NOTCLICKED : GREY_CLICKED }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

function Klima() {

    return(
    <Container className="ditt-klimaavtrykk">
      <Container>
        <Row className="header">
          <h1>Ditt klimaavtrykk</h1>
        </Row>
      </Container>

      <Row className="klimaavtrykk-box">
        <Col>
          <div className="klimaavtrykk-content-left">
            <h4>image</h4>
          </div>
        </Col>
        <Col>
          <div className="klimaavtrykk-content-mid">
            <h4>Totalt klimautslipp denne måneden</h4>
            <Col>
            <p>9,5kg C02</p>
            <p>9,5kg C02</p>
            </Col>
          </div>
        </Col>
        <Col>
          <div className="klimaavtrykk-content-right">
            <h4>infoicon</h4>
          </div>
        </Col>
      </Row>

      <h4>Klimautslipp fra dine siste handleturer</h4>
      <p>Grafen viser omtrent hvor mye CO2 varene i bestillingene dine tilsvarer, og hvilke utslippskategorier varene er i</p>

      <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
            <p>21. Januar - 24 matvarer</p>
            <Row>
            <Col>
        <ProgressBar className="progressbar">
            <ProgressBar variant="danger" now={70} key={1} />
            <ProgressBar variant="warning" now={15} key={2} />
            <ProgressBar variant="success" now={15} key={3} />
        </ProgressBar>
        </Col>
        <Col>
            2,4kg C02/kg
        </Col>
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
                    <u><p>Vis varer</p></u>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Badge bg="warning">15%</Badge>
                    </Col>

                    <Col>
                    <p>Medium høyt utslipp (10kg C02)</p>
                    <u><p>Vis varer</p></u>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Badge bg="success">15%</Badge>
                    </Col>

                    <Col>
                    <p>Lavt utslipp (10kg C02)</p>
                    <u><p>Vis varer</p></u>
                    </Col>
                </Row>
            
            </Card.Body>
        </Accordion.Collapse>
      </Card>


      <Card>
        <Card.Header>
            <p>21. Januar - 24 matvarer</p>
            <Row>
            <Col>
        <ProgressBar className="progressbar">
            <ProgressBar variant="danger" now={70} key={1} />
            <ProgressBar variant="warning" now={15} key={2} />
            <ProgressBar variant="success" now={15} key={3} />
        </ProgressBar>
        </Col>
        <Col>
            2,4kg C02/kg
        </Col>
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
                    <u><p>Vis varer</p></u>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Badge bg="warning">15%</Badge>
                    </Col>

                    <Col>
                    <p>Medium høyt utslipp (10kg C02)</p>
                    <u><p>Vis varer</p></u>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Badge bg="success">15%</Badge>
                    </Col>

                    <Col>
                    <p>Lavt utslipp (10kg C02)</p>
                    <u><p>Vis varer</p></u>
                    </Col>
                </Row>
            
            </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
        
      </Container>

    )
}

export default Klima;