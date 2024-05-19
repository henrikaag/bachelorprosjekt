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
                        <Card.Img variant="top" src={require(`../../../img/Cola4pk.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Coca-Cola Regular </Card.Title>
                                <Card.Text>4 x 0,25 l</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>44,90 kr</Card.Title>
                                <Card.Text>99,99 kr/l</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../../img/Cola10pk.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Coca-Cola </Card.Title>
                                <Card.Text>10 x 0,33 l</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>99,99 kr</Card.Title>
                                <Card.Text>99,99 kr/l</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../../img/Cola1.5.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Coca-Coca </Card.Title>
                                <Card.Text>4 x 1,5 l</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>80,10 kr</Card.Title>
                                <Card.Text>13,35 kr/l</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                </Col>
                <Col className="px-1">
                </Col>
            </Row>
            <Row>
                <div className="partivare">
                    <h4> Partivarer fra Oda XL </h4>
                </div>
            </Row>
            <Row>
            <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../../img/Pepsi.avif`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Pepsi Max Brett </Card.Title>
                                <Card.Text>20 x 0,33 l</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>169,90 kr</Card.Title>
                                <Card.Text>25,74 kr/l</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                </Col>
                <Col className="px-1">
                </Col>
                <Col className="px-1">
                </Col>
                <Col className="px-1">
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