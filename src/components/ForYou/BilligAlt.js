import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import BilligModal from "./Modals/BilligModal";

function BilligAlt() {
    return(
        <Container className="billig-alt-container">
            <Row>
            <h1>VARER MED BILLIGERE ALTERNATIVER</h1>
            <p>Varer du ofte handler, som har et billigere alternativ</p>
            </Row>
            <Row className="billig-alt-row">
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/boil-in-bag.jpeg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Jasminris </Card.Title>
                                <Card.Text>8 poser, 960 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>24, </Card.Title>
                                <Card.Text>25 </Card.Text>
                                </Row>
                                <BilligModal/>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/boil-in-bag.jpeg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Vare </Card.Title>
                                <Card.Text>Info</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>Pris</Card.Title>
                                <Card.Text>Kilo</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/boil-in-bag.jpeg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Vare </Card.Title>
                                <Card.Text>Info</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>Pris</Card.Title>
                                <Card.Text>Kilo</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/boil-in-bag.jpeg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Vare </Card.Title>
                                <Card.Text>Info</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>Pris</Card.Title>
                                <Card.Text>Kilo</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/boil-in-bag.jpeg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Vare </Card.Title>
                                <Card.Text>Info</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>Pris</Card.Title>
                                <Card.Text>Kilo</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/boil-in-bag.jpeg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Vare </Card.Title>
                                <Card.Text>Info</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>Pris</Card.Title>
                                <Card.Text>Kilo</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Button className="billig-alt-btn btn-warning">
                Vis mer
            </Button>
            </Row>
        </Container> 
    )
    

    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
}

export default BilligAlt; 
