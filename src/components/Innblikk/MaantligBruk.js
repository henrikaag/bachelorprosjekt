
import { Bar, Doughnut, Line } from "react-chartjs-2";
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
                            labels: ["A", "B", "C"],
                            datasets: [
                                {
                                    label: "Revenue",
                                    data: [200, 300, 400]
                                }
                            ],
                        }}
                    
                    />
                </div>
            </div>
        </Container>
    )

}

export default MaantligBruk;