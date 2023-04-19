import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./PlacementStatistics.css";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function PlacementStatistics() {
  const data = {
    labels: ["CSE", "IT", "ECE"],
    datasets: [
      {
        label: "2019-20",
        data: [78, 88, 72],
        backgroundColor: "rgb(255, 153, 0)",
        borderColor: "white",
        // borderWidth: 0.5,
        // barThickness: 40,
        // yAxisId: "percentage",
      },
      {
        label: "2021-22",
        data: [98, 85, 70],
        backgroundColor: "rgb(220, 57, 18)",
        borderColor: "white",
        // borderWidth: 0.5,
        // barThickness: 40,
        // yAxisId: "percentage",
      },
     
      {
        label: "2022-23",
        data: [75, 76,66 ],
        backgroundColor: "rgb(51, 102, 204)",
        borderColor: "white",
        // borderWidth: 0.5,
        // barThickness: 40,
        //    barPercentage:0.25
        // yAxisId: "percentage",
       
      },
     
    ],
  };
  const options = {
    indexAxis: "x",
    maintainAspectRatio: false,
    
    scales: {
      y: {
        title: {
          display: true,
          text: "Placement Precentage",
        },
      },
      x: {
        title: {
          display: true,
          text: "Department",
        },
      },
    },
  };

  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <FontAwesomeIcon icon={faChartSimple} />
        TNP STATISTICS
      </div>
      <div className="placementDetailsContainer">
        <div className="placementDetails">
          <table className="PlacementStatTable">
            <tr>
              <th className="branchDetails">Branch</th>
              <th>2022-23</th>
              <th>2021-22</th>
              <th>2020-21</th>
            </tr>
            <tr>
              <td className="branchDetails">
                Computer Science Engineering (CSE)
              </td>
              <td>75.47%</td>
              <td>98.00%</td>
              <td>78.94%</td>
            </tr>
            <tr>
              <td className="branchDetails">
                Information Technology (IT)
              </td>
              <td>76.59%</td>
              <td>85.29%</td>
              <td>88.88%</td>
            </tr>
            <tr>
              <td className="branchDetails">
               Electronic And Communication Engineering (ECE)
              </td>
              <td>66.6%</td>
              <td>70.97%</td>
              <td>72.00%</td>
            </tr>
          </table>
        </div>

        <div className="placementBranchWiseBar">
          <Bar data={data} options={options}></Bar>
        </div>

        <div className="PlacementOverall"></div>
      </div>
    </div>
  );
}

export default PlacementStatistics;
