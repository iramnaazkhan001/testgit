import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
function Update() {
  const { offer_id } = useParams()
  const [offer_name, setOffer] = useState('')
  const [percentage_discount, setPercentage] = useState('')
  const [flat_discount, setFlat] = useState('')
  const [upto_discount, setUpto] = useState('')
  const [validfrom, setValidfrom] = useState('')
  const [validto, setValidto] = useState('')
  const [terms_and_condition, setTerms] = useState('')


  const navigate = useNavigate()

  const handleUpdate = () => {
    const formData = new FormData()
    formData.append('offer_id', offer_id)
    formData.append('offer_name', offer_name)
    formData.append('percentage_discount', percentage_discount)
    formData.append('flat_discount', flat_discount)
    formData.append('upto_discount', upto_discount)
    formData.append('validfrom', validfrom)
    formData.append('validto', validto)
    formData.append('terms_and_condition', terms_and_condition)
    axios.patch('http://localhost:6767/offers/api/admin/offers/updateoffers' + offer_id, formData)
      .then(res => {
        if (res.data === "Success") {
          navigate("/")
        }
      })
      .catch(err => console.log("err"));
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

  return (
    <>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Update Offers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Update form*/}
          <form className="row g-3 w-50" onSubmit={handleUpdate}>
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
          {/*Update form*/}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Update;



