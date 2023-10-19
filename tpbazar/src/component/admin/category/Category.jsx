import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Category() {
    const [data, setData] = useState([])
    const [pcategory_id, setcatId] = useState('')
    const [category_name, setcatName] = useState('')
    const handelSave = () => {
        axios.post('http://localhost:6767/category/api/admin/category/add', { pcategory_id, category_name })
            .then(result => {
                if (result.data.status === "Successfully enter") {
                    alert("Category Added Successfully")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios.post('http://localhost:6767/category/api/admin/category/view')
            .then(result => {
                setData(result.data)               
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
        <div className="container d-flex justify-content-center">
            <div class="card mx-5 mt-5" style={{ width: '30rem', border:'2px solid black' }}>
                <h3 className='text-center mt-2'>Add Categories</h3>
                <div class="card-body justify-content-center">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Category ID</label>
                        <input type="number" class="form-control" onChange={(e) => setcatId(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Catgory Id" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Category Name</label>
                        <input type="text" class="form-control" onChange={(e) => setcatName(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Catgory Name" />
                    </div>
                    <button type="button" onClick={handelSave} class="btn col-12 btn-outline-success">Save</button>
                </div>
            </div>

            <div className='mx-5 mt-5' style={{border:'2px solid black'}}>
                <h3 className='mt-2 text-center'>All Category List</h3>
                <table class="table table-hover " style={{ width: '30rem', border:'1px solid black' }}>
                    <thead >
                        <tr className=' table-light bg-blackbg-gradient'>
                            
                            <th scope="col">sr no.</th>
                            <th scope="col">Category Id</th>
                            <th scope="col">Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (<><tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{item.pcategory_id}</td>
                                    <td>{item.category_name}</td>
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