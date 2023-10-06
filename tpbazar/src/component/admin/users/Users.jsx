import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button, Table, Col, Row, Modal, DropdownButton } from 'react-bootstrap';
import { Input } from '@chakra-ui/react'
import { ViewIcon, EditIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import moment from 'moment'


function User() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //update state

    const [user_name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [aadhar, setAadhar] = useState()
    const [DOJ, setDoj] = useState()
    const [DOB, setDob] = useState()
    const [Qualification, setQualification] = useState()
    const [address, setAddress] = useState()
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [PIN, setPin] = useState()
    const [status, setStatus] = useState()
    const [password, setPassword] = useState()
    const [photo, setPhoto] = useState()
    const [search, setSearch] = useState('')
    const [assignRole, setAssignRole]  = useState([])

    //update state
const roleAssign=(id)=>{
    handleShow()
    axios.get('http://localhost:6767/assign/api/admin/role/assign/checkrole/'+id)
    .then(res=>{
        // console.log(res.data[0].role_name)
        setAssignRole(res.data)
    })
    .catch(err=>console.log(err))
}

    const navigate = useNavigate()
    const value = new FormData()
    
    value.append('user_name', user_name)
    value.append('email', email)
    value.append('password', password)
    value.append('mobile', mobile)
    value.append('aadhar', aadhar)
    value.append('DOB', DOB)
    value.append('DOJ', DOJ)
    value.append('address', address)
    value.append('state', state)
    value.append('status', status)
    value.append('city', city)
    value.append('PIN', PIN)
    value.append('Qualification', Qualification)
    value.append('photo', photo)


    const handleUpdate = (id) => {
        axios.patch('http://localhost:6767/api/admin/userupdate/' + id, value)
            .then(res => {
                if (res.data.message === "Success") {
                    // window.location.href("/");
                    navigate("/")
                }
            })
            .catch(err => console.log("err"));
    }
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
    // updateuser

    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);
    //search Api 
    const handleSearch = () => {
        axios
            .get(`http://localhost:6767/api/admin/userfind/${search}`)
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    console.log("not search")
                }
            });
    };
    return (
        <div>
            <h2 className='d-flex justify-content-center'>List of All Users</h2>
            <Row>
                <Col>
                    <Link to='/adduser'><Button className='btn-danger' style={{boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>+ ADD USER</Button></Link>
                </Col>
                <Col>
                    <Input
                        type="text"
                        placeholder="Search"
                        // style={{ marginLeft: '50%' }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button className="btn btn-danger" onClick={handleSearch} style={{boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
                        Search
                    </Button>
                </Col>
            </Row>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        {/* <th>DOB</th>
                        <th>DOJ</th> */}
                        <th>Photo</th>
                        {/* <th>Adhar Card</th>
                        <th>Qualification</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pin</th>
                        <th>Address</th> */}
                        <th>Status</th>
                        <th>View Roles</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            {/* <td>{moment(user.DOB).format("DD/MM/YYYY")}</td>
                            <td>{moment(user.DOJ).format("DD/MM/YYYY")}</td> */}
                            <td><img src={user.photo} alt={user.name} style={{ height: 50, width: 50, borderRadius: '100%' }} /></td>
                            {/* <td>{user.aadhar}</td>
                            <td>{user.Qualification}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            <td>{user.PIN}</td>
                            <td>{user.address}</td> */}
                            <td>{user.status}</td>
                            <td>
                                <Button variant="danger" style={{boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} onClick={e=>roleAssign(user.user_id)}>
                                    Assign Role
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Assign Role</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Sr.no</th>
                                                <th>
                                                    Assign Role
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {assignRole.map((role,index)=>{
                                                return(
                                                    <tr key={index+1}>
                                                        <td>{index+1}</td>
                                                        <td>{role.role_name}</td>
                                                        <td>revoke</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="danger" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </td>
                            <td>
                                <DropdownButton id="dropdown-basic-button" title="&#8942;" variant='Secondary'>
                                    {/* update modals */}
                                    <Link variant="primary" onClick={handleShow} style={{ backgroundColor: 'white', color: 'black', marginLeft: '15px', textDecorationLine: 'none' }}>
                                        <EditIcon style={{ color: 'blue' }} />Update
                                    </Link>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update User</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form className="row g-3 w-50">
                                                <div className="col-12">
                                                    <label for="inputName" className="form-label">User_name</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                                                        onChange={e => setName(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputName" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="inputName" placeholder='Enter Your Email' autoComplete='off'
                                                        onChange={e => setEmail(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputEmail4" className="form-label">Mobile Number</label>
                                                    <input type="number" className="form-control" id="inputEmail4" placeholder='Enter Your Mobile Number' autoComplete='off'
                                                        onChange={e => setMobile(e.target.value)} />
                                                </div>

                                                <div className="col-12">
                                                    <label for="inputNumber" className="form-label">Aadhar Number</label>
                                                    <input type="number" className="form-control" id="inputNumber" placeholder='Enter Your Aadhar Number'
                                                        onChange={e => setAadhar(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputDate" className="form-label">Date of Joining</label>
                                                    <input type="date" className="form-control" id="inputNumber" placeholder='Enter date of joining'
                                                        onChange={e => setDoj(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputDate" className="form-label">Date of Birth</label>
                                                    <input type="date" className="form-control" id="inputNumber" placeholder='Enter date of birth'
                                                        onChange={e => setDob(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputName" className="form-label">Qualification</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Your Qualification'
                                                        onChange={e => setQualification(e.target.value)} />
                                                </div>

                                                <div className="col-12">
                                                    <label for="inputName" className="form-label">Address</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Your Address'
                                                        onChange={e => setAddress(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputName" className="form-label">State</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter State Name' autoComplete='off'
                                                        onChange={e => setState(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputName" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter City Name' autoComplete='off'
                                                        onChange={e => setCity(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputNumber" className="form-label">PIN</label>
                                                    <input type="number" className="form-control" id="inputnumber" placeholder='Enter Pin number' autoComplete='off'
                                                        onChange={e => setPin(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputNumber" className="form-label">Password</label>
                                                    <input type="number" className="form-control" id="inputNumber" placeholder='Enter password' autoComplete='off'
                                                        onChange={e => setPassword(e.target.value)} />
                                                </div>
                                                <div className="col-12">
                                                    <label for="inputSalary" className="form-label">Status</label>
                                                    <Form.Select aria-label="Default select example" onChange={e => setStatus(e.target.value)}>
                                                        <option>Select Your Status</option>
                                                        <option value="Active">Active</option>
                                                        <option value="InActive">InActive</option>
                                                    </Form.Select>
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label" for="inputGroupFile01">Select Image</label>
                                                    <input type="file" class="form-control" id="inputGroupFile01"
                                                        onChange={e => setPhoto(e.target.files[0])} />
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={e => handleUpdate(user.user_id)}>
                                                Update
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* update modals */}
                                    <br />
                                    <Link onClick={handleShow2} style={{ backgroundColor: 'white', color: 'black', marginLeft: '15px', textDecorationLine: 'none' }}><ViewIcon style={{ color: 'green' }} />  View</Link>
                                    <Modal show={show2} onHide={handleClose2}>
                                        <Modal.Header>
                                            <Modal.Title className='m-auto'>USER DETAILS</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="text-center">
                                            <Row>
                                                <Col></Col>
                                                <Col>
                                                    <Table size='sm'>
                                                        <tbody>
                                                            <tr>
                                                                <td colSpan={2}><img src={user.photo} alt='' height={80} width={80} style={{ borderRadius: '100%' }} /></td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>User Name</td>
                                                                <td>{user.user_name}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>Email</td>
                                                                <td>{user.email}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>Mobile</td>
                                                                <td>{user.mobile}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>Aadhar</td>
                                                                <td>{user.aadhar}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>DOJ</td>
                                                                <td>{moment(user.DOJ).format("DD/MM/YYYY")}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>Qualification</td>
                                                                <td>{user.Qualification}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>Address</td>
                                                                <td>{user.address}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>State</td>
                                                                <td>{user.state}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>City</td>
                                                                <td>{user.city}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>PIN</td>
                                                                <td>{user.PIN}</td>
                                                            </tr>
                                                            <tr style={{ textAlign: 'left' }}>
                                                                <td>Status</td>
                                                                <td>{user.status}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                                <Col></Col>
                                            </Row>
                                        </Modal.Body>
                                        <Button variant="danger" size="sm" onClick={handleClose2}>Close</Button>
                                    </Modal>
                                </DropdownButton>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table >
        </div >
    )
}
export default User;

