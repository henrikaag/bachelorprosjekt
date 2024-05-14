import { Row, Col, Button, Container } from "react-bootstrap";

import "../../css/Innblikk/Innblikk.css";

function Filter() {

    return(
        <Container className="filter-row">
            <Row>
            <Col>
                <Button className="filter-btn-2 btn-warning">1 MND</Button>
            </Col>
            <Col>
                <Button className="filter-btn-2 btn-warning"> 3 MND </Button>
            </Col>
            <Col>
                <Button className="filter-btn-2 btn-warning"> 6 MND </Button>
            </Col>
            <Col>
                <Button className="filter-btn-2 btn-warning"> 1 ÅR </Button>
            </Col>
            <Col>
                <Button className="filter-btn-2 btn-warning"> ALLE </Button>
            </Col>
        </Row>
    </Container>
    )
}

export default Filter;