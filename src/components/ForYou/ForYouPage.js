import { Col, Container, Row } from "react-bootstrap";
import Sparemaal from "./Sparemaal";
import TipBox1 from "./TipBox/TipBox1";
import Delmaal from "./Delmaal";
import TidSpart from "./TidSpart";
import Test from "./test";
import TipBox2 from "./TipBox/TipBox2";
import KlimaAlt from "./KlimaAlt";


function ForYouPage() {
    return(
         <Container>
            <Sparemaal/>
            <TipBox1/>
                <Row className="row-2">
                    <Col>
                    <TidSpart/>
                    </Col>
                    <Col className="delmaal-Col">
                    <Delmaal/>
                    </Col>
                </Row>
            <TipBox2/>
            <KlimaAlt/>
            <Test/>
        </Container>

    )
};

export default ForYouPage;
