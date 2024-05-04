
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Container } from "react-bootstrap";


function MaantligBruk() {
    return(

        <Container>
            <h1>Måntlig pengebruk</h1>
            <div className="line-chart-container">
                <div className="line-chart"> 
                    <Line 
                    
                        data={{
                            labels: ["1", "5", "10", "15","20", "25", "30"],
                            datasets: [
                                {
                                    label: "Måntlig bruk ",
                                    data: [0, 500, 1200, 1650, 2000, 2600, 3100],
                                    backgroundColor: [
                                        "rgba(230,168,0)"
                                    ],
                                },
                            ],
                        }}
                    
                    />
                </div>
            </div>
        </Container>
    )

}

export default MaantligBruk;