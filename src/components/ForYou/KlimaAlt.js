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
                                <Card.Text>Renskjært, 600 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>139,00 kr</Card.Title>
                                <Card.Text>231,67 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning bytt-ut-btn">Bytt ut 
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat icon-for-you" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
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
                                <Card.Text>Kylling, 900 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>144,00 kr</Card.Title>
                                <Card.Text>160,00 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
{                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat icon-for-you" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>}
                                </Button>
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
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat icon-for-you" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
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
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat icon-for-you" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="px-1">
                    <Card className="vare">
                        <Card.Img variant="top" src={require(`../../img/Norveiga.jpg`)}>
                        </Card.Img>
                        <Card.Body className="vare-body">
                                <Row>
                                <Card.Title> Norvegia 26% </Card.Title>
                                <Card.Text>Skorpefri 500 g</Card.Text>
                                </Row>
                                <Row className="mt-4">
                                <Card.Title>81,00 kr</Card.Title>
                                <Card.Text>162,00 kr/kg</Card.Text>
                                </Row>
                                <Button className="btn-warning bytt-ut-btn">Bytt ut
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    fill="currentColor" 
                                    class="bi bi-repeat icon-for-you" 
                                    viewBox="0 0 16 16">
                                    <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                    </svg>
                                </Button>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Button className="klima-alt-btn btn-warning">
                Vis mer
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="25" 
                height="25" 
                fill="currentColor" 
                class="bi bi-arrow-down-circle-fill icon-for-you"
                viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                </svg>
            </Button>
            </Row>
        </Container>
    )
}

export default KlimaAlt;
