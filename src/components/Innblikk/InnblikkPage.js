import { Container } from "react-bootstrap";
import KategoriBruk from "./KategoriBruk";
import MaantligBruk from "./MaantligBruk";
import PengerSpart from "./PengerSpart";

function InnblikkPage() {
    return(
        <Container>
            <KategoriBruk/>
            <MaantligBruk/>
            <PengerSpart/>
        </Container>
    )
}

export default InnblikkPage;
