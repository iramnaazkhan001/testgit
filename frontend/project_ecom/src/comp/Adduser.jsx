import React, { useState } from 'react';
// import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import * as yup from 'yup'

function Adduser() {

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

    //validation from form 
    const userSchema = yup.object().shape({

        user_name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        aadhar: yup.string().max(12).required(),
        mobile: yup.string(),
        DOJ: yup.number().required(),
        Qualification:yup.string().required(),
        address: yup.string().required(),
        state: yup.string().required(),
        city: yup.string().required(),
        PIN: yup.number().required(),
        status: yup.string().required(),
        DOB: yup.number().required(),
      })
    
    
    
      async function validateForm() {
     let dataObject = {
       user_name:user_name,
       email: email,
       password: password,
       aadhar: aadhar,
       mobile: mobile,
       DOJ: DOJ,
       Qualification: Qualification,
       address: address,
       state: state,
       city: city,
       PIN: PIN,
       status: status,
       DOB:DOB
        }
    
        const isValid = await userSchema.isValid(dataObject)
    
        if (isValid) {
          alert('Form is Valid')
        } else {
          alert('Form is Invalid')
        }
      }
    
    /////

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('user_name', user_name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('mobile', mobile)
        formData.append('aadhar', aadhar)
        formData.append('DOJ', DOJ)
        formData.append('Qualification', Qualification)
        formData.append('DOB', DOB)
        formData.append('address', address)
        formData.append('state', state)
        formData.append('city', city)
        formData.append('PIN', PIN)
        formData.append('status', status)

        axios.post('http://localhost:6767/api/admin/userregister', formData)

            .then(res => {
                if (res.data === "Success") {
                    window.location.href = "/"
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Form class='row g-3'>
                <div className='d-flex flex-column align-items-center pt-4 '>
                    <h2>Add User Details</h2>
                    <hr />
                    <FormControl className="row g-3 w-50" onSubmit={handleSubmit}>
                      
                        <div className="col-6">
                            <FormLabel for="InputName" className="form-label" >User Name</FormLabel>
                            <Input type="text" className="form-control" id="InputName" placeholder='Enter your Name' autoComplete='off'
                                onChange={e => setName(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputName" className="form-label" >Mobile</FormLabel>
                            <Input type="number" className="form-control" id="InputName" placeholder='Enter Mobile Number' autoComplete='off'
                                onChange={e => setMobile(e.target.value)} required/>
                        </div>

                        <div className="col-6">
                            <FormLabel for="InputEmail4" className="form-label">Aadhar</FormLabel>
                            <Input type="number" className="form-control" id="InputEmail4" placeholder='Enter Aadhar Number' autoComplete='off'
                                onChange={e => setAadhar(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputEmail4" className="form-label">Email</FormLabel>
                            <Input type="email" className="form-control" id="InputEmail4" placeholder='Enter Your Email' autoComplete='off'
                                onChange={e => setEmail(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputNumber" className="form-label">DOJ</FormLabel>
                            <Input type="date" className="form-control" id="InputNumber" placeholder='Enter your DOJ'
                                onChange={e => setDoj(e.target.value)} required/>
                        </div>

                        <div className="col-6">
                            <FormLabel for="InputSalary" className="form-label" >Status</FormLabel>
                            <Form.Select aria-label="Default select example" onChange={e => setStatus(e.target.value)}>
                                <option>Select...</option>
                                <option value="Active">Active</option>
                                <option value="InActive">InActive</option>
                            </Form.Select>
                        </div>


                        <div className="col-6">
                            <FormLabel for="InputAddress" className="form-label">DOB</FormLabel>
                            <Input type="date" className="form-control" id="InputAddress" placeholder="Enter Your DOB" autoComplete='off'
                                onChange={e => setDob(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputAddress" className="form-label">Qualification</FormLabel>
                            <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Qualification" autoComplete='off'
                                onChange={e => setQualification(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputAddress" className="form-label">Address</FormLabel>
                            <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Address" autoComplete='off'
                                onChange={e => setAddress(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputAddress" className="form-label">State</FormLabel>
                            <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your State" autoComplete='off'
                                onChange={e => setState(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputAddress" className="form-label">City</FormLabel>
                            <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your City" autoComplete='off'
                                onChange={e => setCity(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputAddress" className="form-label">PIN</FormLabel>
                            <Input type="number" className="form-control" id="InputAddress" placeholder="Enter Your PIN code" autoComplete='off'
                                onChange={e => setPin(e.target.value)} required/>
                        </div>
                        <div className="col-6">
                            <FormLabel for="InputAddress" className="form-label">Password</FormLabel>
                            <Input type="password" className="form-control" id="InputAddress" placeholder="Enter Your Password" autoComplete='off'
                                onChange={e => setPassword(e.target.value)} required/>
                        </div>
                        {/* <div className="col-6 ">
              <FormLabel className="form-label" for="InputGroupFile01">Select Your Profile</FormLabel>
              <Input type="file" className="form-control" id="InputGroupFile01"
                onChange={e => setProfile(e.target.files[0])} />
            </div> */}

                        <div className="Col-12">
                            <button type="submit" className='col-12  btn btn-danger' onClick={() => {
            validateForm()
          }} >Submit</button>
                           
                        </div>
                    </FormControl>
                </div>
            </Form>
        </>
    )
}

export default Adduser;