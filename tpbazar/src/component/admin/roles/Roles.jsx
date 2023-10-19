import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { Button, Modal, DropdownButton } from 'react-bootstrap';
import { EditIcon } from '@chakra-ui/icons';
function Category() {
    const [data, setData] = useState([])
    const [role_id, setRoleId] = useState('')
    const [role_name, setRoleName] = useState('')
    const [show3, setShow3] = useState(false);    // Modal for Update

    const handleClose3 = () => setShow3(false);   // Modal for Update
    const handleShow3 = () => setShow3(true);
    const [roleid, setRoleid] = useState()
    const [rolename, setRolename] = useState()


    const handleUpdate = () => {
        const formData = new FormData()
        formData.append('role_id', roleid)
        formData.append('role_name', rolename)

        axios.patch('http://localhost:6767/role/api/admin/roles/update_role/' + roleid, formData)
            .then(res => {
                if (res.data === "Success") {
                    // window.location.href("/");

                    Navigate("/")
                }
            })
            .catch(err => console.log("err"))
    }


    const handelSave = () => {
        axios.post('http://localhost:6767/role/api/admin/roles/add', { role_id, role_name })
            .then(result => {
                if (result.data.status === "Successfully enter") {
                    alert("role Added Successfully")
                }
                else {
                    alert(result.data.status)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios.post('http://localhost:6767/role/api/admin/roles/view')
            .then(result => {
                setData(result.data)
                // console.log(result.data)

            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div class="card mx-5 mt-5" style={{ width: '30rem', border: '2px solid black' }}>
                    <h3 className='text-center mt-2'>Add Roles</h3>
                    <div class="card-body justify-content-center">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Role ID</label>
                            <input type="email" class="form-control" onChange={(e) => setRoleid(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Role Id" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Role Name</label>
                            <input type="email" class="form-control" onChange={(e) => setRolename(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Role Name" />
                        </div>
                        <button type="button" onClick={handelSave} class="btn col-12 btn-outline-success">Save</button>
                    </div>
                </div>

                <div className='mx-5 mt-5' style={{ border: '2px solid black' }}>
                    <h3 className='mt-2 text-center'>All Roles List</h3>
                    <table class="table table-hover" style={{ width: '30rem', border: '1px solid black' }}>
                        <thead >
                            <tr>

                                <th scope="col">sr no.</th>
                                <th scope="col">Role Id</th>
                                <th scope="col">Role Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (<>
                                        <tr key={index}>
                                            <th >{index + 1}</th>
                                            <td>{item.role_id}</td>
                                            <td>{item.role_name}</td>
                                            <td>
                                                <DropdownButton id="dropdown-basic-button" title="&#8942;" variant='Secondary'>
                                                    <Link onClick={handleShow3} style={{ backgroundColor: 'white', color: 'black', marginLeft: '15px', textDecorationLine: 'none' }}> <EditIcon style={{ color: 'blue' }} />Update</Link>
                                                    <Modal show={show3} onHide={handleClose3}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Update the Data</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body onClick={handleUpdate}>
                                                            <form className="row g-3 w-50">

                                                                <div className="col-12">
                                                                    <label for="inputName" className="form-label">Role Id</label>
                                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Role Id' autoComplete='off'
                                                                        onChange={e => setRoleId(e.target.value)} />
                                                                </div>
                                                                <div className="col-12">
                                                                    <label for="inputName" className="form-label">Role Name</label>
                                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Role Name' autoComplete='off'
                                                                        onChange={e => setRoleName(e.target.value)} />
                                                                </div>
                                                            </form>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="danger" onSubmit={handleUpdate}>  Update</Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </DropdownButton></td>
                                        </tr>
                                    </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Category
