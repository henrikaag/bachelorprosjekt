
import { Bar } from "react-chartjs-2";

function MaantligBruk() {
    return(
        <div>
            <Bar 
            
                data={{
                    labels: ["A", "B", "C"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [200, 300, 400]
                        }
                    ]
                }}
            
            />

        </div>
    )

}

export default MaantligBruk;