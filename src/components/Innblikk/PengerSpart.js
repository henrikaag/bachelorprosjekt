import { Container, Row, Col, Button } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PengerSpart() {
    return(
        <Container>
            <h1>Penger Spart</h1>
            <div className="penger-spart-container">
                <Row classname="filter-row">
                    <Col xs={1}>
                        <Button className="filter-btn">1 MND</Button>
                    </Col>
                    <Col xs={1}>
                        <Button className="filter-btn"> 3 MND </Button>
                    </Col>
                    <Col xs={1}>
                        <Button className="filter-btn"> 6 MND </Button>
                    </Col>
                    <Col xs={1}>
                        <Button className="filter-btn"> 1 ÅR </Button>
                    </Col>
                    <Col xs={1}>
                        <Button className="filter-btn"> ALLE </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} className="doughnut-chart-col">
                        
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
                                    <div>Kylling og kjøtt</div>
                                </Col>
                                <Col xs={3} className="kategori-bruk-col" >
                                    <div>1500kr</div>
                                </Col>
                                <Col xs={2} className="kategori-bruk-col" >
                                    <div>60%</div>
                                </Col>
                            </Row>
                            <Row className="item-row">
                                <Col xs={1} className="kategori-bruk-col">
                                <div className="dot-blue"></div>
                                </Col>
                                <Col className="kategori-bruk-col">
                                    <div>Sjømat</div>
                                </Col>
                                <Col xs={3} className="kategori-bruk-col">
                                    <div>Tall</div>
                                </Col>
                                <Col xs={2} className="kategori-bruk-col">
                                    <div>Prosent</div>
                                </Col>
                            </Row>
                            <Row className="item-row">
                                <Col xs={1} className="kategori-bruk-col">
                                    <div className="dot-red"></div>
                                </Col>
                                <Col className="kategori-bruk-col">
                                    <div>Snacks og godteri</div>
                                </Col>
                                <Col xs={3} className="kategori-bruk-col">
                                    <div>Tall</div>
                                </Col>
                                <Col xs={2} className="kategori-bruk-col">
                                    <div>Prosent</div>
                                </Col>
                            </Row>
                            <Row className="item-row">
                                <Col xs={1} className="kategori-bruk-col">
                                    <div className="dot-green"></div>
                                </Col>
                                <Col className="kategori-bruk-col">
                                    <div>Snacks og godteri</div>
                                </Col>
                                <Col xs={3} className="kategori-bruk-col">
                                    <div>Tall</div>
                                </Col>
                                <Col xs={2} className="kategori-bruk-col">
                                    <div>Prosent</div>
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
