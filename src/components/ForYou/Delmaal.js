import { Button, Col, Container, Row } from "react-bootstrap";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


function Delmaal() {
    return(
        <Container className="delmaal-container">
            <Row className="delmaal-text">
                <h1>Delmål</h1>
                <p>Delmål du har gitt deg selv, eller du har valgt fra Oda</p>
            </Row>
            <Row className="delmaal-content-1">
                <Col>
                    <h4>Handle mer grønt</h4>
                    <p>Kjøp fem varer fra Frukt og Grønt kategorien denne uken</p>
                    <h5>3 Varer</h5>
                    <h6>av 5 handlet</h6>
                </Col>
                <Col>
                    <div className="doughnut-chart-delmaal"> 
                            <Doughnut 
                                data={{
                                    labels: [],
                                        datasets: [
                                        {
                                            data: [80, 20],
                                            backgroundColor: [
                                                "rgba(230,168,0)",
                                                "rgba(32, 32, 32",
                                            ],
                                        },
                                    ],
                                }}
                            />
                        </div>
                </Col>
            </Row>
            <Row className="delmaal-content-2">
                <Col>
                    <h4>Årsbruk på mathandel</h4>
                    <p>Hold deg innenfor dette budsjettet i løpet av året</p>
                    <h5>15 300 kr</h5>
                    <h6>av 102 000 kr</h6>
                </Col>
                <Col>
                    <div className="doughnut-chart-delmaal"> 
                        <Doughnut 
                            data={{
                                labels: [],
                                    datasets: [
                                    {
                                        data: [25, 75],
                                        backgroundColor: [
                                            "rgba(230,168,0)",
                                            "rgba(32, 32, 32",
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>
                </Col>
            </Row>
            <Button className="delmaal-vis-mer btn-warning">
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
        </Container>
    )
}

export default Delmaal;
