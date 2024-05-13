import { useState } from "react";
import { Button, Modal, Card, Container, Row, Col } from "react-bootstrap";

function BilligModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Bytt ut
            </Button>

            <Modal show={show} onHide={handleClose}
                  {...props}
                  size="xl"
                  
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
            >
                <Modal.Header>
                    <Modal.Title>Bytt til et billigere alternativ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container className="billig-alt-container">

            <Row className="billig-alt-row">
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../../img/boil-in-bag.jpeg`)}>
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
                        <Card.Img variant="top" src={require(`../../../img/boil-in-bag.jpeg`)}>
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
                        <Card.Img variant="top" src={require(`../../../img/boil-in-bag.jpeg`)}>
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
                        <Card.Img variant="top" src={require(`../../../img/boil-in-bag.jpeg`)}>
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
                        <Card.Img variant="top" src={require(`../../../img/boil-in-bag.jpeg`)}>
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
        </Container> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Lukk
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default BilligModal;