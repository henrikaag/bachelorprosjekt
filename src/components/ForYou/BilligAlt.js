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
                        <Card.Img variant="top" src={require(`../../img/boil-in-bag.jpeg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Jasminris Boil In Bag </Card.Title>
                                <Card.Text>8 poser, 960 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>24,90 kr </Card.Title>
                                <Card.Text>25,94 pr/kg </Card.Text>
                                </Row>
                                <BilligModal/>
                            </Card.Body>
                    </Card>
                </Col>
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
}

export default BilligAlt; 
