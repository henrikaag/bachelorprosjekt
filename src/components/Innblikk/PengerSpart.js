import { Container, Row, Col } from "react-bootstrap";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function PengerSpart() {
    return(
        <Container>
            <h1>Penger spart</h1>
            <div className="penger-spart-container">
                <Row>
                    <Col xs={4} className="doughnut-chart-col">
                        
                            <div className="doughnut-chart"> 
                                <Doughnut 
                                    data={{
                                        labels: [],
                                        datasets: [
                                            {
                                                data: [50, 30, 20],
                                                backgroundColor: [
                                                    "rgba(230,168,0)",
                                                    "rgba(77, 140, 184",
                                                    "rgba(43, 118, 16"
                                                ],
                                            },
                                        ],
                                    }}
                                />
                            </div>
                        
                    </Col>
                    <Col className="doughnut-info-col">
                        <div className="width-div">
                            <Row className="item-row">
                                <Col xs={1} className="kategori-bruk-col">
                                    <div className="dot-yellow"></div>
                                </Col>
                                <Col>
                                    <div>Tilbud fra Oda</div>
                                </Col>
                                <Col xs={3} className="kategori-bruk-col" >
                                    <div>50%</div>
                                </Col>
                                <Col xs={2} className="kategori-bruk-col" >
                                    <div>40 kr</div>
                                </Col>
                            </Row>
                            <Row className="item-row">
                                <Col xs={1} className="kategori-bruk-col">
                                <div className="dot-blue"></div>
                                </Col>
                                <Col className="kategori-bruk-col">
                                    <div>Andre Tilbud</div>
                                </Col>
                                <Col xs={3} className="kategori-bruk-col">
                                    <div>30%</div>
                                </Col>
                                <Col xs={2} className="kategori-bruk-col">
                                    <div>27 kr</div>
                                </Col>
                            </Row>
                            <Row className="item-row">
                                <Col xs={1} className="kategori-bruk-col">
                                    <div className="dot-red"></div>
                                </Col>
                                <Col className="kategori-bruk-col">
                                    <div>Pant</div>
                                </Col>
                                <Col xs={3} className="kategori-bruk-col">
                                    <div>20%</div>
                                </Col>
                                <Col xs={2} className="kategori-bruk-col">
                                    <div>30 kr</div>
                                </Col>
                            </Row>
                            <Row>
                            <div className="divider-div"></div>
                        </Row>
                        <Row className="kategori-bruk-text">
                            <h6>Dette tilsvarer</h6>
                            <h3>84 KR</h3>
                            <h6>denne måneden</h6>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default PengerSpart;
