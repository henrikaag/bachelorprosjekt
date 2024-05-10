import { Card, Container, Row, Col, Button } from "react-bootstrap";

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
                                <Card.Title> Vare </Card.Title>
                                <Card.Text>Info</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>Pris</Card.Title>
                                <Card.Text>Kilo</Card.Text>
                                </Row>
                                <Button className="bytt-ut-btn">Bytt ut</Button>
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
                                <Button className="bytt-ut-btn">Bytt ut</Button>
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
                                <Button className="bytt-ut-btn">Bytt ut</Button>
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
                                <Button className="bytt-ut-btn">Bytt ut</Button>
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
                                <Button className="bytt-ut-btn">Bytt ut</Button>
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
                                <Button className="bytt-ut-btn">Bytt ut</Button>
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
}

export default BilligAlt;
