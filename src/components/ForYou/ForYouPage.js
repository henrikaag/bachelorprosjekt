import { Col, Container, Row } from "react-bootstrap";
import Sparemaal from "./Sparemaal";
import TipBox1 from "./TipBox1";
import Delmaal from "./Delmaal";
import TidSpart from "./TidSpart";
import Test from "./test";


function ForYouPage() {
    return(
         <Container>
            <Sparemaal/>
            <TipBox1/>
                <Row>
                    <Col>
                    <TidSpart/>
                    </Col>
                    <Col>
                    <Delmaal/>
                    </Col>
                </Row>
            <Test/>
        </Container>

    )
};

export default ForYouPage;
