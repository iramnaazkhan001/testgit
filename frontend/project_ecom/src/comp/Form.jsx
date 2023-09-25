import { useState } from 'react'
import * as yup from 'yup'

function Form() {
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

  return (
    <div className="main">
      <form>
        {/* Input Field to insert First Name */}
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* Input Field to insert Last Name */}
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Input Field to insert Mobile Number */}
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        {/* Input Field to insert Age */}
        <input placeholder="aadhar" onChange={(e) => setAadhar(e.target.value)} />
        {/* Input Field to insert Email Address of the user */}
        <input placeholder="DOJ" onChange={(e) => setDoj(e.target.value)} />
        {/* Input Field to insert Password */}
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input placeholder="DOB" onChange={(e) => setDob(e.target.value)} />
        <input placeholder="qualification" onChange={(e) => setQualification(e.target.value)} />
        <input placeholder="address" onChange={(e) => setAddress(e.target.value)} />
        <input placeholder="state" onChange={(e) => setState(e.target.value)} />
        <input placeholder="status" onChange={(e) => setStatus(e.target.value)} />
        <input placeholder="city" onChange={(e) => setCity(e.target.value)} />
        <input placeholder="PIN" onChange={(e) => setPin(e.target.value)} />

        <button
          type="submit"
          onClick={() => {
            validateForm()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
