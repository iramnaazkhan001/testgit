import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Input, InputGroup } from '@chakra-ui/react'
import { Button, Modal, DropdownButton } from 'react-bootstrap';
import { useParams, Navigate, Link } from 'react-router-dom';
import { EditIcon } from '@chakra-ui/icons';
import { InputRightAddon } from '@chakra-ui/react';
import { disallow } from 'joi';
export default function AddOffer() {
    const [st, setSt] = useState('Status Is InActive')
    const [cl, setCl] = useState('')
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [values, setValues] = useState({
        offer_id: '',
        offer_name: '',
        percentage_discount: '',
        flat_discount: '',
        upto_discount: '',
        validfrom: '',
        validto: '',
        terms_and_condition: '',
        status: 'InActive'

    })
    const { offer_id } = useParams()
    const [offer_name, setOffer] = useState('')
    const [percentage_discount, setPercentage] = useState('')
    const [flat_discount, setFlat] = useState('')
    const [upto_discount, setUpto] = useState('')
    const [validfrom, setValidfrom] = useState('')
    const [validto, setValidto] = useState('')
    const [terms_and_condition, setTerms] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (id) => {

        axios.patch("http://localhost:6767/offers/api/admin/offers/updateoffers/" + id,{
        
            offer_name, percentage_discount,flat_discount,upto_discount,validfrom,validto,terms_and_condition
        })
            .then(res => {
                console.log(res.data)
                handleClose()
                if (res.data === "Success") {
                    Navigate("/")
                }
            })
            .catch(err => console.log("err", err));
    }

    useEffect((offer_id) => {
        axios.post(`http://localhost:6767/offers/api/admin/offers/view`)
            .then(result => {
                setOffer(result.data.offer_name)
                setPercentage(result.data.percentage_discount)
                setFlat(result.data.flat_discount)
                setValidfrom(result.data.validfrom)
                setValidto(result.data.validto)
                setUpto(result.data.upto_discount)
                setTerms(result.data.terms_and_condition)
            })
            .catch(err => console.log(err));
    }, [])

    const switchClick = () => {
        if (values.status === 'InActive') {
            setValues({ ...values, status: "Active" })
            setSt("Status Is Now Active")
            setCl('success')
        } else {
            setValues({ ...values, status: "InActive" })
            setSt("Status Is InActive")
        }
    }
    const handelSave = () => {
        axios.post('http://localhost:6767/offers/api/admin/offers/add', values)
            .then(result => {
                // console.log(result);
                if (result.data.affectedRows === 1) {
                    alert("Data Added Successfully")
                }
                else {
                    alert(result)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        axios.post('http://localhost:6767/offers/api/admin/offers/view')
            .then(result => {
                setData(result.data)
            })
            .catch(err => {
                alert(err)
            })
    }, [])
    const handleSearch = () => {
        axios
            .get(`http://localhost:6767/offers/api/admin/offers/${search}`)
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    console.log("not search")
                }
            });

        console.log(search);
    };
    return (
        <>
            <div className='d-flex'>
                <div class="card mx-5 mt-5" style={{ width: '50%' }}>
                    <h3 className='text-center mt-2'>Add Categories</h3>
                    <div class="card-body justify-content-center">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Offer ID</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, offer_id: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Offer Id" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Offer Name</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, offer_name: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Offer Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Percentage Discount</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, percentage_discount: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Discount In %" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Flat Discount</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, flat_discount: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Flat Discount e.g 500$" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Upto Discount</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, upto_discount: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Upto Discount " />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Valid From</label>
                            <input type="date" class="form-control" onChange={(e) => setValues({ ...values, validfrom: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Valid from" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Valid To</label>
                            <input type="date" class="form-control" onChange={(e) => setValues({ ...values, validto: e.target.value })} id="exampleFormControlInput1" placeholder="Enter valid to" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Terms & Conditions</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, terms_and_condition: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Terms & Conditions" />
                        </div>
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Status<p className=''>*{st}</p></label>
                            <input class="form-check-input" onClick={switchClick} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <button type="button" onClick={handelSave} class="btn col-12 btn-outline-danger">Save</button>
                    </div>
                </div>
                <div>
                    <h3 className='mt-2 text-center'>All Category List</h3>
                    <hr />
                    <Input
                        type="text"
                        placeholder="Search"
                        style={{ marginLeft: '30%',borderRight:'0px' }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                   <button style={{border:'1.5px solid black', borderLeft:'0px'}}>%</button> 
                    <button className="btn btn-outline-danger" onClick={handleSearch}>
                        Search
                    </button>
                    <table class="table table-hover border m-3 "  style={{ width: '50%' }}>
                        <thead >
                            <tr className=' table-light bg-blackbg-gradient'>

                                <th scope="col">sr no.</th>
                                <th scope="col">Offer Name</th>
                                <th scope="col">Discoint In %</th>
                                <th scope="col">Flat Discount</th>
                                <th scope="col">Upto Discount</th>
                                <th scope="col">Valid From</th>
                                <th scope="col">Valid To</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>{item.offer_name}</td>
                                                <td>{item.percentage_discount}%</td>
                                                <td>{item.flat_discount}</td>
                                                <td>₹{item.upto_discount}</td>
                                                <td>{item.validfrom}</td>
                                                <td>{item.validto}</td>
                                                <td>{item.status}</td>
                                                <td>
                                                    <DropdownButton id="dropdown-basic-button" title="&#8942;" variant='Secondary' >
                                                        <Button variant="danger" onClick={handleShow}>
                                                           Update
                                                        </Button>
                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Update Data</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                            <form >
                                                                    <div className="col-6">
                                                                        <label for="inputName" className="form-label">Offer name</label>
                                                                        <input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                                                                            onChange={e => setOffer(e.target.value)} />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <label for="inputName" className="form-label">Percentage discount</label>
                                                                        <input type="text" className="form-control" id="inputName" placeholder='' autoComplete='off'
                                                                            onChange={e => setPercentage(e.target.value)} />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <label for="inputName" className="form-label">Flat discount</label>
                                                                        <input type="text" className="form-control" id="inputName" placeholder='' autoComplete='off'
                                                                            onChange={e => setFlat(e.target.value)} />
                                                                    </div>

                                                                    <div className="col-6">
                                                                        <label for="inputNumber" className="form-label">Upto discount</label>
                                                                        <input type="number" className="form-control" id="inputNumber" placeholder=''
                                                                            onChange={e => setUpto(e.target.value)} />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <label for="inputDate" className="form-label">Valid from</label>
                                                                        <input type="date" className="form-control" id="inputNumber" placeholder=''
                                                                            onChange={e => setValidfrom(e.target.value)} />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <label for="inputDate" className="form-label">Valid to</label>
                                                                        <input type="date" className="form-control" id="inputNumber" placeholder=''
                                                                            onChange={e => setValidto(e.target.value)} />
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <label for="inputName" className="form-label">Terms and Conditions</label>
                                                                        <input type="text" className="form-control" id="inputName" placeholder=''
                                                                            onChange={e => setTerms(e.target.value)} />
                                                                    </div>
                                                                </form>
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" onClick={handleClose}>
                                                                    Close
                                                                </Button>
                                                                <Button variant="danger" onClick={e=>handleUpdate(item.offer_id)}>
                                                                    Update
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>


                                                    </DropdownButton>
                                                </td>
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
