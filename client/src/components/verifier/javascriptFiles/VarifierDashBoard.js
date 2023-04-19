import React from "react";
import '../cssFiles/varifierDashBoard.css';  
import { Link } from "react-router-dom";

const data = [
  { name: "Yash Agarwal", branch: "Information Technology", scholarno: "20u03054",year:"3rd"},
]
  
export default function VarifierDashBoard() {
  return (
    <div className="varifierDashboard">
      <table>
        <tr>
          <th>Name</th>
          <th>Branch</th>
          <th>Scholar NO.</th>
          <th>Year</th>
          <th>View Details</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.branch}</td>
              <td>{val.scholarno}</td>
              <td>{val.year}</td>
              <td>
               <div className="viewDetails">
                <Link to="/fullDetails">View</Link>
               </div>
            </td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
