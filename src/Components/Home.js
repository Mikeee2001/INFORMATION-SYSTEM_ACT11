// import React, { Fragment } from "react";
// import {Button, Table} from 'react-bootstrap';
// import Employees from './Employees';
// import ReactBootstrapComponent from 'react-bootstrap';
// import './Home.css';

// function Home(){
//         return(
//             <Fragment>
//                 <div>
//                 <Table class="table table-dark table-striped">
                
//                         <thead className="head">
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Age</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 Employees && Employees.length > 0
//                                 ?
//                                 Employees.map((item)=>{
//                                     return(
//                                         <tr>
//                                             <td>
//                                             {item.Name}
//                                             </td>
//                                             <td>
//                                             {item.Age}
//                                             </td>
//                                             <td><Button onClick={()=>alert(item.id)}>Edit</Button>
//                                             &nbsp;
//                                             <Button onClick={()=>alert(item.id)}>Delete</Button></td>
//                                         </tr>
//                                     )
//                                 })
//                                 :
//                                 "No Data Available"
//                             }
//                         </tbody> 
//                 </Table>
//                 </div>
//             </Fragment>
//         )
// };
// export default Home;
