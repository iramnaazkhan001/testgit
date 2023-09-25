import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button, Table, Col, Row, Form, DropdownButton, Modal} from 'react-bootstrap';
import {Input} from '@chakra-ui/react'

function User() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:6767/api/userlist')
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    setData(res.data);

                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, []);


    const [show1, setShow1] = useState(false);    // Modal For Delete
    const [show2, setShow2] = useState(false);    // Modal for View
    const [show3, setShow3] = useState(false);    // Modal for Update

    const handleClose1 = () => setShow1(false);   // Modal For Delete
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);   // Modal for View
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);   // Modal for Update
    const handleShow3 = () => setShow3(true);

    return (
        <div>
            <h2 className='d-flex justify-content-center'>List of All Users</h2>
            <Form inline>
                <Row>
                    <Col>
                        <Link to='/adduser'><Button className='btn-danger'>+ ADD USER</Button></Link>
                        <Input
                            type="text"
                            placeholder="Search"
                            style={{marginLeft:'70%'}}
                        />
                        <Button className="btn btn-danger">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>DOB</th>
                        <th>DOJ</th>
                        {/* <th>Photo</th> */}
                        <th>Adhar Card</th>
                        <th>Qualification</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pin</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.DOB}</td>
                            <td>{user.DOJ}</td>
                            {/* <td>{user.photo}</td> */}
                            <td>{user.aadhar}</td>
                            <td>{user.Qualification}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            <td>{user.PIN}</td>
                            <td>{user.address}</td>
                            <td>{user.status}</td>
                            <td>{user.action}
                                <DropdownButton id="dropdown-basic-button" title="&#8942;" variant='Secondary'>
                                    <Link onClick={handleShow3} style={{ backgroundColor: 'white', color: 'black', marginLeft: '15px' }} > Update</Link>
                                    <Modal show={show3} onHide={handleClose3}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update the Data</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>User_Id:</Form.Label>
                                                    <Form.Control type="number" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Name:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Email:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>AdharCard:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Qualification:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Address:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Mobile:</Form.Label>
                                                    <Form.Control type="number" />
                                                </Form.Group>
                                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label> Photo:</Form.Label>
                                                    <Form.Control type="file" />
                                                </Form.Group> */}
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>DOB:</Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>DOJ:</Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>State:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>City:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Pin:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Status:</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose3}> Update</Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <br />
                                    <Link onClick={handleShow2} style={{ backgroundColor: 'white', color: 'black', marginLeft: '15px' }} >View</Link>
                                    <Modal show={show2} onHide={handleClose2}>
                                        <Modal.Header>
                                            <Modal.Title className='m-auto'>USER DETAILS</Modal.Title>
                                        </Modal.Header>
                                        {/* <Modal.Body className="text-center">
                                            Name: {user.name}         <br />
                                            Email: {user.email}       <br />
                                            Mobile: {user.mobile}     <br />
                                            Status: {user.status}     <br />
                                            Location: {user.location}
                                        </Modal.Body> */}
                                        <Button variant="secondary" size="sm" onClick={handleClose2}>Close</Button>
                                    </Modal>
                                    <br />

                                    <Link onClick={handleShow1} style={{ backgroundColor: 'white', color: 'black', marginLeft: '15px' }} > Delete</Link>
                                    <Modal show={show1} onHide={handleClose1}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>DELETE DATA</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Are you sure wants to Delete this Data ?</Modal.Body>
                                        <Modal.Footer>
                                            {/* <Button variant="danger" onClick={(e) => handleDelete(user.U_id)}> Confirm </Button> */}
                                            <Button variant="secondary" onClick={handleClose1}> Cancel</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </DropdownButton>
                            </td>
                            {/* <td>
                    <Link to={`/edituser/`+user.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={e => handleDelete(user.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td> */}
                        </tr>
                    })}
                </tbody>

            </Table >
        </div >
    )
};

export default User;