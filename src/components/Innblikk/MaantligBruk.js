
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Container } from "react-bootstrap";



function MaantligBruk() {
    return(

        <Container>
            <h1>Månedlig pengebruk</h1>
            <div className="line-chart-container">
                <div className="line-chart"> 
                    <Line 
                    
                        data={{
                            labels: ["1", "5", "10", "15","20", "25", "30"],
                            datasets: [
                                {
                                    label: "Månedlig bruk ",
                                    data: [0, 500, 1200, 1650, 2000, 2600, 3100],
                                    backgroundColor: [
                                        "rgba(230,168,0)"
                                    ],
                                    borderColor: [
                                        "rgba(230,168,0)"
                                    ],
                                    
                                },
                            ],
                        }}
                    
                    />
                </div>
                <p>Denne grafen illustrerer hvordan pengeforbruket ditt har utviklet seg gjennom en måned. Den viser dine totalbeløp i utgifter, med markerte punkter på datoene du handlet hos Oda. Dette er tatt utgangspunkt i ditt nåværende matbudsjett.</p>
                <h5>Du handler i gjennomsnitt 1.3 ganger i uken</h5>
                <p>Prøv å redusere handleturene til en gang i uken. Dette vil på sikt redusere impulskjøp og gi bedre oversikt over hvilke matvarer en trenger</p>
            </div>
        </Container>
    )

}

export default MaantligBruk;