import { Container } from "react-bootstrap";
import KategoriBruk from "./KategoriBruk";
import MaantligBruk from "./MaantligBruk";
import PengerSpart from "./PengerSpart";
import Filter from "./Filter";

function InnblikkPage() {
    return(
        <Container>
            <Filter/>
            <KategoriBruk/>
            <MaantligBruk/>
            <PengerSpart/>
        </Container>
    )
}

export default InnblikkPage;
