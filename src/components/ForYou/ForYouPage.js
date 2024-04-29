import { Col, Container, Row } from "react-bootstrap";
import Sparemaal from "./Sparemaal";
import TipBox1 from "./TipBox/TipBox1";
import Delmaal from "./Delmaal";
import TidSpart from "./TidSpart";
import TipBox2 from "./TipBox/TipBox2";
import KlimaAlt from "./KlimaAlt";
import TipBox3 from "./TipBox/TipBox3";
import BilligAlt from "./BilligAlt";


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
            <TipBox3/>
            <BilligAlt/>
        </Container>

    )
};

export default ForYouPage;
