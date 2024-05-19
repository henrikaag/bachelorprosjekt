import { Card, Container, Row, Col, Button } from "react-bootstrap";
import BilligModal from "./Modals/BilligModal";

function BilligAlt() {
    return(
        <Container className="billig-alt-container">
            <Row>
            <h1>Varer med billigere alternativer</h1>
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
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
                                    <svg className="icon-for-you"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
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
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
                                    <svg className="icon-for-you"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
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
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
                                    <svg className="icon-for-you"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
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
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
                                    <svg className="icon-for-you"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Button className="billig-alt-btn btn-warning">
                Vis mer
                <svg 
                className="icon-for-you"
                xmlns="http://www.w3.org/2000/svg" 
                width="25" 
                height="25" 
                fill="currentColor" 
                class="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                </svg>
            </Button>
            </Row>
        </Container> 
    )
}

export default BilligAlt; 
