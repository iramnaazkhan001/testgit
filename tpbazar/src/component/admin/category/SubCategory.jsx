import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { Form, Modal, Button } from 'react-bootstrap';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import moment from 'moment';

const columns = [
  { id: 'id', label: 'Sr.no.', minWidth: 100 },
  { id: 'Id', label: 'ID', minWidth: 100 },
  {
    id: 'sub category',
    label: 'Name',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'Photo',
    label: 'Photo',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'Added On',
    label: 'Added On',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'Action',
    label: 'Action',
    minWidth: 100,
    align: 'right',
  },
];

function Subcategory() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Sub Category start here
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [subcategory_id, setSubcategory_id] = useState('');
  const [subcategory_name, setSubcategory_name] = useState('');
  const [product, setProduct] = useState([])
  const [photo, setPhoto] = useState('');
  const [pid, setPid] = useState('');

  const handelSave = (id) => {
    const formData = new FormData()
    formData.append('subcategory_id', subcategory_id)
    formData.append('subcategory_name', subcategory_name)
    formData.append('photo', photo)
    console.log(id)
    axios.post('http://localhost:6767/subcat/api/admin/subcategory/addsubcat/' + id, formData)
      .then((result) => {
        if (result.data.status === 'Successfully enter') {
          alert('subCategory Added Successfully');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("Hello")
  };

  useEffect(() => {
    axios.post('http://localhost:6767/category/api/admin/category/view')
      .then((result) => {
        setProduct(result.data);
        console.log(product)
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  // const test = (id) =>{
  //   const formData = new FormData()
  //   formData.append('subcategory_id', subcategory_id)
  //   formData.append('subcategory_name', subcategory_name)
  //   formData.append('photo', photo)
  //   axios.post('http://localhost:6767/subcat/api/admin/subcategory/addsubcat/'+id, formData)
  //   .then((result) => {
  //     console.log(result)
  //     if (result.data.status === 'Successfully enter') {
  //       alert('subCategory Added Successfully');
  //     }
  //     else{
  //       alert(result.data)
  //     }
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     alert(err)
  //   });
  // }

  // sub category end here


  useEffect(() => {
    axios.post('http://localhost:6767/subcat/api/admin/subcategory/viewsubcat')
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container d-flex justify-content-center">
        {/* <Link to='/addSubcategory'><button className='btn btn-danger' style={{marginTop:'10%'}} >Add SubCategory</button></Link>  */}
        {/* Sub category Start Here */}

        <form >
          <div class="card mx-5 mt-5" style={{ width: '20rem', border:'2px solid black' }}>
            <h3 className='text-center mt-2'>Add Sub categories</h3>
            <div class="card-body justify-content-center">
              {/* select  */}
              <Form.Select onChange={(e) => setPid(e.target.value)}>
                <option value="">Select Product category</option>
                {product.map((procat) => {
                  return (
                    <>
                      <option value={procat.pcategory_id}>{procat.category_name}</option>
                    </>
                  )
                })}
              </Form.Select>
              {/* select */}
              <div class="mb-3">
                <label class="form-label">Sub category ID</label>
                <input type="number" class="form-control" onChange={(e) => setSubcategory_id(e.target.value)} placeholder="Enter sub Catgory Id" />
              </div>
              <div class="mb-3">
                <label class="form-label">Sub category Name</label>
                <input type="text" class="form-control" onChange={(e) => setSubcategory_name(e.target.value)} placeholder="Enter sub Catgory Name" />
              </div>
              <div class="mb-3">
                <label class="form-label">Sub category Photo</label>
                <input type="file" class="form-control" onChange={(e) => setPhoto(e.target.files[0])} />
              </div>
              {/* <button onClick={e => handelSave(pcategory_id)} class="btn col-12 btn-outline-success">Save</button> */}
              <button onClick={(e) => handelSave(pid)} class="btn col-12 btn-outline-success">Save</button>
            </div>
          </div>
        </form>

        {/* Sub Category End Here */}
        <div className="mx-5 mt-5" style={{border:'2px solid black'}}>
          <h3 className="mt-2 text-center">All Subcategory List</h3>
          <TableContainer component={Paper} style={{border:'1px solid black'}}>
            <Table aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentUsers.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.subcategory_id}</TableCell>
                    <TableCell>{user.subcategory_name}</TableCell>
                    <TableCell><img src={user.photo} alt={user.name} height={50} width={50} /></TableCell>
                    <TableCell>{moment(user.added_on).format('DD/MM/YYYY')}</TableCell>
                    <TableCell>
                      <Button variant="danger" onClick={handleShow}>
                        update
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update Sub Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form action="">
                            <label htmlFor="" aria-readonly>Subcategory Id</label>
                            <input type="text" value={user.subcategory_id} /><br />
                            <label htmlFor="" aria-readonly>Subcategory Name</label>
                            <input type="text" value={user.subcategory_name} />
                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, pageNumber) => (
            <button
              key={pageNumber}
              className={`btn ${pageNumber + 1 === currentPage ? 'btn-dark' : 'btn-outline-dark'
                }`}
              onClick={() => paginate(pageNumber + 1)}
            >
              {pageNumber + 1}
            </button>
          )
        )}
      </div>

    </>
  );
}

export default Subcategory;
