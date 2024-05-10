import { Container } from "react-bootstrap";
import KategoriBruk from "./KategoriBruk";
import MaantligBruk from "./MaantligBruk";
import PengerSpart from "./PengerSpart";
import Filter from "./Filter";

function InnblikkPage() {
    return(
        <Container>
            <Filter/>
            <PengerSpart/>
            <KategoriBruk/>
            <MaantligBruk/>
        </Container>
    )
}

export default InnblikkPage;
