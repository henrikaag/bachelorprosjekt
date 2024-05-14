import { Card, Container, Row, Col, Button } from "react-bootstrap";

function KlimaAlt() {
    return(
        <Container className="klima-alt-container">
            <Row>
            <h1>Klimavennlige alternativer</h1>
            <p>Varer du ofte hanler, som har et mer klimavennlig alternativ</p>
            </Row>
            <Row className="klima-alt-row">
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
            <Button className="klima-alt-btn btn-warning">
                Vis mer
            </Button>
            </Row>
        </Container>
    )
}

export default KlimaAlt;
