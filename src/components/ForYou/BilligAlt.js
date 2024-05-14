import { Card, Container, Row, Col, Button } from "react-bootstrap";
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
                        <Card.Img variant="top" src={require(`../../img/cola1.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Coca-Cola </Card.Title>
                                <Card.Text>Boks, 0,33 l</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>19,90 kr</Card.Title>
                                <Card.Text>60,30 kr/l</Card.Text>
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
                                <Card.Title> Jasminris </Card.Title>
                                <Card.Text>8 poser, 960 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>24,90 kr </Card.Title>
                                <Card.Text>25,94 pr/kg </Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/Kjøttdeig.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Kjøttdeig </Card.Title>
                                <Card.Text>Gilde, 400g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>67,60 kr</Card.Title>
                                <Card.Text>169,00 pr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/Egg.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Prior Egg</Card.Title>
                                <Card.Text>Strl M, 12 Stk</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>46,90 kr</Card.Title>
                                <Card.Text>64,25 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning">Bytt ut</Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/Melk.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Tine Lettmelk </Card.Title>
                                <Card.Text>1% fett, 1 l, Tine</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>21,30 kr</Card.Title>
                                <Card.Text>21,30 pr/l</Card.Text>
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
}

export default BilligAlt; 
