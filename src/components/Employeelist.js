import React from 'react'

export default function Employeelist() {
    return (
        <div className="card bg-grey" id="tab" >
        <div className="card bg-secondary" style={{height:'300px',width:'900px',margin:'auto'}} >
              <table >
              <tr className="bg-success" >
              <th>Employee ID</th>
              <th>Name </th>
              <th>Designation </th>
              <th>Salary </th>
              </tr>
              <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              </tr>
              <tr>
              <td>rahul</td>
              <td>asok</td>
              <td>srinu</td>
              <td>arun</td>
              </tr>
              <tr>
              <td>DEV</td>
              <td>DEV</td>
              <td>TESTER</td>
              <td>CEO</td>
              </tr>
              <tr>
              <td>23K</td>
              <td>25K</td>
              <td>30K</td>
              <td>10L</td>
              </tr>
                
              </table>
        </div>
        </div>

    )
}
