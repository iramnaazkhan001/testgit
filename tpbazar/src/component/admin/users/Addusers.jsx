// // import React, { useState } from 'react';
// // import { Col, Row, Form, Button, Container } from 'react-bootstrap';
// // import axios from 'axios';
// // import Form from 'react-bootstrap/Form';
// // import {
// //     FormControl,
// //     FormLabel,
// //     Input,
// // } from '@chakra-ui/react'
// // import * as yup from 'yup'

// // function Addusers() {

// //     const [user_name, setName] = useState()
// //     const [email, setEmail] = useState()
// //     const [mobile, setMobile] = useState()
// //     const [aadhar, setAadhar] = useState()
// //     const [DOJ, setDoj] = useState()
// //     const [DOB, setDob] = useState()
// //     const [Qualification, setQualification] = useState()
// //     const [address, setAddress] = useState()
// //     const [state, setState] = useState()
// //     const [city, setCity] = useState()
// //     const [PIN, setPin] = useState()
// //     const [status, setStatus] = useState()
// //     const [password, setPassword] = useState()
// //     const [photo, setPhoto] = useState()

// //     //validation from form 
// //     const userSchema = yup.object().shape({

// //         user_name: yup.string().required(),
// //         email: yup.string().email().required(),
// //         password: yup.string().min(8).required(),
// //         aadhar: yup.string().max(12).required(),
// //         mobile: yup.string(),
// //         DOJ: yup.number().required(),
// //         Qualification: yup.string().required(),
// //         address: yup.string().required(),
// //         state: yup.string().required(),
// //         city: yup.string().required(),
// //         PIN: yup.number().required(),
// //         status: yup.string().required(),
// //         DOB: yup.number().required(),
// //         photo: yup.string().required
// //     })

// //     async function validateForm() {
// //         let dataObject = {
// //             user_name: user_name,
// //             email: email,
// //             password: password,
// //             aadhar: aadhar,
// //             mobile: mobile,
// //             DOJ: DOJ,
// //             Qualification: Qualification,
// //             address: address,
// //             state: state,
// //             city: city,
// //             PIN: PIN,
// //             status: status,
// //             DOB: DOB,
// //             photo: photo
// //         }

// //         const isValid = await userSchema.isValid(dataObject)

// //         if (isValid) {
// //             alert('Form is Completed')
// //         } else {
// //             alert('Form is Incomplete')
// //         }
// //     }

// //     /////

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const formData = new FormData()
// //         formData.append('user_name', user_name)
// //         formData.append('email', email)
// //         formData.append('password', password)
// //         formData.append('mobile', mobile)
// //         formData.append('aadhar', aadhar)
// //         formData.append('DOJ', DOJ)
// //         formData.append('Qualification', Qualification)
// //         formData.append('DOB', DOB)
// //         formData.append('address', address)
// //         formData.append('state', state)
// //         formData.append('city', city)
// //         formData.append('PIN', PIN)
// //         formData.append('status', status)
// //         formData.append('photo', photo)

// //         axios.post('http://localhost:6767/api/admin/userregister', formData)

// //             .then(res => {
// //                 if (res.data === "Success") {
// //                     window.location.href = "/"
// //                 }
// //             })
// //             .catch(err => console.log(err));
// //     }

// //     return (
// //         <>
// //     <Form class='row g-3'>
// //         <div className='d-flex flex-column align-items-center pt-4 '>
// //             <h2>Add User Details</h2>
// //             <hr />
// //             <FormControl className="row g-3 w-50" onSubmit={handleSubmit}>

// //                 <div className="col-6">
// //                     <FormLabel for="InputName" className="form-label" >User Name</FormLabel>
// //                     <Input type="text" className="form-control" id="InputName" placeholder='Enter your Name' autoComplete='off'
// //                         onChange={e => setName(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputName" className="form-label" >Mobile</FormLabel>
// //                     <Input type="number" className="form-control" id="InputName" placeholder='Enter Mobile Number' autoComplete='off'
// //                         onChange={e => setMobile(e.target.value)} required />
// //                 </div>

// //                 <div className="col-6">
// //                     <FormLabel for="InputEmail4" className="form-label">Aadhar</FormLabel>
// //                     <Input type="number" className="form-control" id="InputEmail4" placeholder='Enter Aadhar Number' autoComplete='off'
// //                         onChange={e => setAadhar(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputEmail4" className="form-label">Email</FormLabel>
// //                     <Input type="email" className="form-control" id="InputEmail4" placeholder='Enter Your Email' autoComplete='off'
// //                         onChange={e => setEmail(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputNumber" className="form-label">DOJ</FormLabel>
// //                     <Input type="date" className="form-control" id="InputNumber" placeholder='Enter your DOJ'
// //                         onChange={e => setDoj(e.target.value)} required />
// //                 </div>

// //                 <div className="col-6">
// //                     <FormLabel for="InputSalary" className="form-label" >Status</FormLabel>
// //                     <Form.Select aria-label="Default select example" onChange={e => setStatus(e.target.value)}>
// //                         <option>Select...</option>
// //                         <option value="Active">Active</option>
// //                         <option value="InActive">InActive</option>
// //                     </Form.Select>
// //                 </div>


// //                 <div className="col-6">
// //                     <FormLabel for="InputAddress" className="form-label">DOB</FormLabel>
// //                     <Input type="date" className="form-control" id="InputAddress" placeholder="Enter Your DOB" autoComplete='off'
// //                         onChange={e => setDob(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputAddress" className="form-label">Qualification</FormLabel>
// //                     <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Qualification" autoComplete='off'
// //                         onChange={e => setQualification(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputAddress" className="form-label">Address</FormLabel>
// //                     <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Address" autoComplete='off'
// //                         onChange={e => setAddress(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputAddress" className="form-label">State</FormLabel>
// //                     <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your State" autoComplete='off'
// //                         onChange={e => setState(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputAddress" className="form-label">City</FormLabel>
// //                     <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your City" autoComplete='off'
// //                         onChange={e => setCity(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputAddress" className="form-label">PIN</FormLabel>
// //                     <Input type="number" className="form-control" id="InputAddress" placeholder="Enter Your PIN code" autoComplete='off'
// //                         onChange={e => setPin(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6">
// //                     <FormLabel for="InputAddress" className="form-label">Password</FormLabel>
// //                     <Input type="password" className="form-control" id="InputAddress" placeholder="Enter Your Password" autoComplete='off'
// //                         onChange={e => setPassword(e.target.value)} required />
// //                 </div>
// //                 <div className="col-6 ">
// //                     <FormLabel className="form-label" for="InputGroupFile01">Select Your Profile</FormLabel>
// //                     <Input type="file" className="form-control" id="InputGroupFile01"
// //                         onChange={e => setPhoto(e.target.files[0])} />
// //                 </div>

// //                 <div className="Col-12">
// //                     <button type="submit" className='col-12  btn btn-danger'  >Submit</button>
// //                     {/* onClick={() => {
// //     validateForm()
// //   }} */}
// //                 </div>
// //             </FormControl>
// //         </div>
// //     </Form>
// //         </>
// //     )
// // }

// // export default Addusers;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form } from 'react-bootstrap';
// import {
//     FormControl,
//     FormLabel,
//     Input,
// } from '@chakra-ui/react';
// import * as yup from 'yup';

// function Addusers() {
//     const [user_name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [aadhar, setAadhar] = useState('');
//     const [DOJ, setDoj] = useState('');
//     const [DOB, setDob] = useState('');
//     const [Qualification, setQualification] = useState('');
//     const [address, setAddress] = useState('');
//     const [state, setState] = useState('');
//     const [city, setCity] = useState('');
//     const [PIN, setPin] = useState('');
//     const [status, setStatus] = useState('');
//     const [password, setPassword] = useState('');
//     const [photo, setPhoto] = useState('');

//     // Validation schema
//     const userSchema = yup.object().shape({
//         user_name: yup.string().required('Name is required'),
//         email: yup.string().email().required('email is required'),
//         password: yup.string().min(8).required('password is required'),
//         aadhar: yup.string().max(12).required('aadhar no. is required'),
//         mobile: yup.string().required('mobile no. is required'),
//         DOJ: yup.string().required('date of joining is required'),
//         Qualification: yup.string().required('qualification is required'),
//         address: yup.string().required('address is required'),
//         state: yup.string().required('state is required'),
//         city: yup.string().required('city is required'),
//         PIN: yup.string().required('pin is required'),
//         status: yup.string().required('status is required'),
//         DOB: yup.string().required('date of birth is required'),
//         photo: yup.string().required('photo is required'),
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('user_name', user_name);
//         formData.append('email', email);
//         formData.append('password', password);
//         formData.append('mobile', mobile);
//         formData.append('aadhar', aadhar);
//         formData.append('DOJ', DOJ);
//         formData.append('Qualification', Qualification);
//         formData.append('DOB', DOB);
//         formData.append('address', address);
//         formData.append('state', state);
//         formData.append('city', city);
//         formData.append('PIN', PIN);
//         formData.append('status', status);
//         formData.append('photo', photo);

//         try {
//             await userSchema.validate(formData, { abortEarly: false });

//             axios.post('http://localhost:6767/api/admin/userregister', formData)
//                 .then((res) => {
//                     if (res.data === 'Success') {
//                         window.location.href = '/';
//                     }
//                 })
//                 .catch((err) => console.error(err));
//         } catch (errors) {
//             // Handle validation errors
//             console.error(errors);
//             alert('Form is Incomplete');
//         }
//     };

//     return (
//         <>
            // <Form class='row g-6'>
            //     <div className='d-flex flex-column align-items-center pt-4 '>
            //         <h2>Add User Details</h2>
            //         <hr />
            //         <FormControl className="row g-3 w-50" onSubmit={handleSubmit}>
            //             <div className="col-6">
            //                 <FormLabel for="InputName" className="form-label" >User Name</FormLabel>
            //                 <Input type="text" className="form-control" id="InputName" placeholder='Enter your Name' autoComplete='off'
            //                     onChange={e => setName(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputName" className="form-label" >Mobile</FormLabel>
            //                 <Input type="number" className="form-control" id="InputName" placeholder='Enter Mobile Number' autoComplete='off'
            //                     onChange={e => setMobile(e.target.value)} required />
            //             </div>

            //             <div className="col-6">
            //                 <FormLabel for="InputEmail4" className="form-label">Aadhar</FormLabel>
            //                 <Input type="number" className="form-control" id="InputEmail4" placeholder='Enter Aadhar Number' autoComplete='off'
            //                     onChange={e => setAadhar(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputEmail4" className="form-label">Email</FormLabel>
            //                 <Input type="email" className="form-control" id="InputEmail4" placeholder='Enter Your Email' autoComplete='off'
            //                     onChange={e => setEmail(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputNumber" className="form-label">DOJ</FormLabel>
            //                 <Input type="date" className="form-control" id="InputNumber" placeholder='Enter your DOJ'
            //                     onChange={e => setDoj(e.target.value)} required />
            //             </div>

            //             <div className="col-6">
            //                 <FormLabel for="InputSalary" className="form-label" >Status</FormLabel>
            //                 <Form.Select aria-label="Default select example" onChange={e => setStatus(e.target.value)}>
            //                     <option>Select...</option>
            //                     <option value="Active">Active</option>
            //                     <option value="InActive">InActive</option>
            //                 </Form.Select>
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputAddress" className="form-label">DOB</FormLabel>
            //                 <Input type="date" className="form-control" id="InputAddress" placeholder="Enter Your DOB" autoComplete='off'
            //                     onChange={e => setDob(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputAddress" className="form-label">Qualification</FormLabel>
            //                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Qualification" autoComplete='off'
            //                     onChange={e => setQualification(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputAddress" className="form-label">Address</FormLabel>
            //                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Address" autoComplete='off'
            //                     onChange={e => setAddress(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputAddress" className="form-label">State</FormLabel>
            //                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your State" autoComplete='off'
            //                     onChange={e => setState(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputAddress" className="form-label">City</FormLabel>
            //                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your City" autoComplete='off'
            //                     onChange={e => setCity(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputAddress" className="form-label">PIN</FormLabel>
            //                 <Input type="number" className="form-control" id="InputAddress" placeholder="Enter Your PIN code" autoComplete='off'
            //                     onChange={e => setPin(e.target.value)} required />
            //             </div>
            //             <div className="col-6">
            //                 <FormLabel for="InputAddress" className="form-label">Password</FormLabel>
            //                 <Input type="password" className="form-control" id="InputAddress" placeholder="Enter Your Password" autoComplete='off'
            //                     onChange={e => setPassword(e.target.value)} required />
            //             </div>
            //             <div className="col-6 ">
            //                 <FormLabel className="form-label" for="InputGroupFile01">Select Your Profile</FormLabel>
            //                 <Input type="file" className="form-control" id="InputGroupFile01"
            //                     onChange={e => setPhoto(e.target.files[0])} />
            //             </div>

            //             <div className="Col-12">
            //                 <button type="submit" className='col-12  btn btn-danger' onSubmit={() => {
            //                     handleSubmit()
            //                 }} >Submit</button>
            //             </div>
            //         </FormControl>
            //     </div>
            // </Form>
//         </>
//     );
// }
// export default Addusers;



import React, { useState } from 'react'
import axios from 'axios';
import{Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Addusers = () => {
    const [user_id, setUser_id] = useState('')
    const [user_name, setUser_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [photo, setPhoto] = useState('')
    const [aadhar, setAadhar] = useState('')
    const [DOJ, setDoj] = useState('')
    const [Qualification, setQualification] = useState('')
    const [DOB, setDOB] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [PIN, setPIN] = useState('')
    const [status, setStatus] = useState('')


    const handleImage = (e) => {
        setPhoto(e.target.files[0])
    }

    const submitData = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('user_id', user_id);
        formData.append('user_name', user_name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('mobile', mobile);
        formData.append('photo', photo);
        formData.append('aadhar', aadhar);
        formData.append('DOJ', DOJ);
        formData.append('Qualification', Qualification);
        formData.append('DOB', DOB);
        formData.append('address', address);
        formData.append('state', state);
        formData.append('city', city);
        formData.append('PIN', PIN);
        formData.append('status', status);
        // formData.append('gst', gst);
        const configs = {
            "content-Type": "multiple/form-data"
        }
        const apiData = await axios.post("http://localhost:6767/api/admin/userregister", formData, configs)
        console.log(apiData, 'apidata')
        setUser_id('')
        setUser_name('')
        setEmail('')
        setPassword('')
        setMobile('')
        setPhoto('')
        setAadhar('')
        setDoj('')
        setQualification('')
        setDOB('')
        setAddress('')
        setState('')
        setCity('')
        setPIN('')
        setStatus('')
        // setGst('')
    }
    return (
        <>
        <div style={{justifyContent:'center', border:'2px solid black', marginLeft:'20%', marginTop:'10%'}}>
            <h3 style={{textAlign:'center'}}>Add User Details</h3>
            <div>
                <div className='container'>

                    <Form onSubmit={submitData} >
                        <div className='d-flex'>
                            <div className='col-6'>
                                <Form.Group>
                                    <Form.Label htmlFor='user_id'>user_id</Form.Label>
                                    <Form.Control name='user_id' id='user_id' type='text' value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className='col-6'>
                                <Form.Group>
                                    <Form.Label htmlFor='name'>user_name</Form.Label>
                                    <Form.Control name='name' id='name' type='text' value={user_name} onChange={(e) => setUser_name(e.target.value)} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='email'>Email</Form.Label>
                                    <Form.Control name='email' id='category_name' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='password'>password</Form.Label>
                                    <Form.Control name='password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='mobile'>Mobile</Form.Label>
                                    <Form.Control name='mobile' id='mobile' type='number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='image'>Photos</Form.Label>
                                    <Form.Control name='image' id='image' type='file' defaultValue={photo} onChange={handleImage} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='aadhar'>aadhar</Form.Label>
                                    <Form.Control name='aadhar' id='aadhar' type='text' value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className='col-6'>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='doj'>DOJ</Form.Label>
                                    <Form.Control name='doj' id='doj' type='date' value={DOJ} onChange={(e) => setDoj(e.target.value)} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <div className='col-6'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='qualification'>Qualification</Form.Label>
                            <Form.Control name='qulalification' id='qulaification' type='text' value={Qualification} onChange={(e) => setQualification(e.target.value)} />
                        </Form.Group>
                        </div>
                        <div className='col-6'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='dob'>dob</Form.Label>
                            <Form.Control name='dob' id='dob' type='date' value={DOB} onChange={(e) => setDOB(e.target.value)} />
                        </Form.Group>
                        </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <div className='col-6'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='aadress'>Address</Form.Label>
                            <Form.Control name='aadress' id='aadress' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        </div>
                        <div className='col-6'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='state'>State</Form.Label>
                            <Form.Control name='state' id='state' type='text' value={state} onChange={(e) => setState(e.target.value)} />
                        </Form.Group>
                        </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <div className='col-6'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='city'>City</Form.Label>
                            <Form.Control name='city' id='category_name' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                        </Form.Group>
                        </div>
                        <div className='col-6'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='pin'>PIN</Form.Label>
                            <Form.Control name='pin' id='pin' type='number' value={PIN} onChange={(e) => setPIN(e.target.value)} />
                        </Form.Group>
                        </div>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='status'>status</Form.Label>
                            <Form.Control name='status' id='status' type='text' value={status} onChange={(e) => setStatus(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Addusers


