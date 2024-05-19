import { Card, Container, Row, Col, Button } from "react-bootstrap";

function KlimaAlt() {
    return(
        <Container className="klima-alt-container">
            <Row>
            <h1>Klimavennlige alternativer</h1>
            <p>Varer du ofte handler, som har et mer klimavennlig alternativ</p>
            </Row>
            <Row className="klima-alt-row">
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/Indrefilet.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title>Indrefilet Svin </Card.Title>
                                <Card.Text>renskjært, 600 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>139,00 kr</Card.Title>
                                <Card.Text>231,67 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/kyllingfilet.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Kyllingfilet naturell </Card.Title>
                                <Card.Text>kylling, 900 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>144,00 kr</Card.Title>
                                <Card.Text>160,00 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/roastbiff.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Roastbeef </Card.Title>
                                <Card.Text>100 g, REMA 1000</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>32,70 kr</Card.Title>
                                <Card.Text>327,00 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/leverpostei.png`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Leverpostei </Card.Title>
                                <Card.Text>100 g Stabburet</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>13,50 kr</Card.Title>
                                <Card.Text>135,00 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/Norveiga.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Norveiga 26% </Card.Title>
                                <Card.Text>Skorpefri 500 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>81,00 kr</Card.Title>
                                <Card.Text>162,00 kr/kg</Card.Text>
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
