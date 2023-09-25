import * as React from 'react';
import { Link } from 'react-router-dom';

export default function StickyHeadTable() {
return (
<>
<div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employee List</h3>
      </div>
      <Link to="/" className='btn btn-success'>Add Employee</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           <tr>
                  <td></td>
                  {/* <td>
                    {
                    <img src={`http://localhost:5000/images/`+employee.image} alt="" className='employee_image'/>
                    }</td> */}
                  <td>name</td>
                  <td>data</td>
                  <td>salary</td>
                  <td>
                    {/* <Link to={`/employeeEdit/`+employee.id} className='btn btn-primary btn-sm me-2'>edit</Link> */}
                  
                  </td>
              </tr>
         
          </tbody>
        </table>
      </div>
    </div>
</>
)}

   
  
