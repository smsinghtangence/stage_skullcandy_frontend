import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBilling, addShippingDetails, fetchState, saveAddress } from '../features/CheckOut/checkOutSlice'
import {
    MDBBtn,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
function ShippingForm() {

    const { users } = useSelector(state => state.auth)
    const [email, setEmail] = useState()
    const [addType, setAddType] = useState()

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [address1Error, setAddress1Error] = useState('');
    const [address2Error, setAddress2Error] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [postcodeError, setPostcodeError] = useState('')
    let billing = {
        "email": email
    }

    const [shipping, setShipping] = useState({
        first_name: '',
        last_name: '',
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
        phone: ""
    })



    const { first_name, last_name, address_1, address_2, city, state, postcode, country, phone } = shipping

    const dispatch = useDispatch()

    const { states, shipping: shippingDetails, isError, message } = useSelector(state => state.checkOut)

    const handleChange = (e) => {
        e.preventDefault()
        // console.log("target "+ e.target.name +" valye "+ e.target.value)
        setShipping({ ...shipping, [e.target.name]: e.target.value })
    
        // console.log(" shipping " + JSON.stringify(shipping))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // Validations
         
        let isValid = true;

        if (!first_name || first_name.length > 10) {
            setFirstNameError('First name is required and should be 10 characters or less');
            isValid = false;

        } else if (!/^[a-zA-Z]*$/.test(first_name)) {
            setFirstNameError('Name should only contain letters');
            isValid = false;
        } else {
            setFirstNameError('');
        }
       
        if (!last_name || last_name.length > 10) {
            setLastNameError('Last name is required and should be 10 characters or less');
            isValid = false;
        } else if (!/^[a-zA-Z]*$/.test(last_name)) {
            setLastNameError('Name should only contain letters');
            isValid = false;
        } else {
            setLastNameError('');
        }
        // if (!email || !/\S+@\S+\.\S+/.test(email)) {
        //     setEmailError('Enter a valid email address');
        //     isValid = false;
        // } else {
        //     setEmailError('');
        // }

        if (!address_1 || address_1.length > 30) {
            setAddress1Error('Address Line 1 is required and should be 30 characters or less');
            isValid = false;
        } else {
            setAddress1Error('');
        }
      
        if (address_2.length > 30) {
            setAddress2Error('Address Line 2 is required  nd should be 30 characters or less');
            isValid = false;
        } else {
            setAddress2Error('');
        }
        if (!phone || phone.length !== 10 || isNaN(phone)) {
            setPhoneError('Enter a valid 10-digit phone number');
            isValid = false;
        } else {
            setPhoneError('');
        }
        // console.log("isValid " + isValid)
        if (!city) {
            setCityError('City is required');
            isValid = false;
        } else {
            setCityError('');
        }
        
        if (!state) {
            setStateError('State is required');
            isValid = false;
        } else {
            setStateError('');
        }
        
        if (!country) {
            setCountryError('Country is required');
            isValid = false;
        } else {
            setCountryError('');
        }
       
        if (!postcode) {
            setPostcodeError('Postal code is required');
            isValid = false;
        } else {
            setPostcodeError('');
        }

        if (!isValid) {
            return;
        }
        if (!isValid) {
            return;
        }

        // console.log(shipping)
        dispatch(addBilling(billing))

        dispatch(addShippingDetails(shipping))

        if (users?.id) {

            // dispatch(saveAddress(addType))
            dispatch(saveAddress(shipping))

        }
        setShipping({
            first_name: '',
            last_name: '',
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            phone: ""
        })
        setEmail('')
        setAddType('')
        // toggleShow()

    }
    // useEffect(() => {
    //     dispatch(fetchState())

    // }, [])

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
    }, [isError])
    return (
        <>


            {/*  */}
            <div className="form-delivery">
                <h4>Delivery</h4>
                <div className="row">
                    <form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-lg-12">

                                <select 
                                required 
                                className='form-control' 
                                 
                                name='country' 
                                value={country} 
                                onChange={handleChange}
                               
                                >
                                    <option   >Country</option>
                                    <option value="IN">INDIA</option>
                                </select>
                                <span className="text-danger">{countryError}</span>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <input
                                    required
                                    type="text"
                                    placeholder='First name'
                                    className='form-control'
                                    name='first_name'
                                    value={first_name}
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{firstNameError}</span>
                            </div>

                            <div className="col-lg-6">
                                <input
                                    required
                                    type="text" placeholder='Last name' className='form-control'
                                    value={last_name} name='last_name' onChange={handleChange} />
                                <span className="text-danger">{lastNameError}</span>
                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    type="text"
                                    placeholder='Email'
                                    className='form-control'
                                    value={billing.email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                                <span className="text-danger">{emailError}</span>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    type="text" placeholder='Address' className='form-control'

                                    value={address_1} name='address_1' onChange={handleChange}

                                />
                                <span className="text-danger">{address1Error}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <input type="text" placeholder='Apartment, suite, etc. (optional)' className='form-control'
                                    value={address_2} name='address_2'
                                    onChange={handleChange} />
                                <span className="text-danger">{address2Error}</span>

                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-lg-12">
                                <input

                                    type="text" placeholder='Adddress Type' className='form-control'
                                    required value={addType} onChange={(e) => setAddType(e.target.value)} name='addressType' />
                                <span className="text-danger">{address2Error}</span>

                            </div>
                        </div> */}

                        <div className="row">
                            <div className="col-lg-4">
                                <input 
                                required
                                type="text" 
                                className='form-control' 
                                placeholder='City'  
                                name="city"
                                onChange={handleChange} />
                                <span className="text-danger">{cityError}</span>
                            </div>
                            <div className="col-lg-4">
                                {/* <select name="" id="" className="form-control">
                            <option value="option ">option</option>
                            <option value="option ">option</option>
                            <option value="option ">option</option>
                            <option value="option ">option</option>
                            <option value="option ">option</option>
                        </select> */}

                                <input
                                    required
                                    type='text'
                                    className='form-control'
                                    name="state" value={state}
                                    placeholder='State'
                                    onChange={handleChange} />
                                {/* <select required className='w-100 p-2 shipSelect' name='state' value={state} style={{ backgroundColor: 'var(--secondary)' }} onChange={handleChange}>
                                    <option>Select State</option>
                                    {
                                        states?.states?.map((item, index) => (
                                            <option value={item.code} key={index}>{item.name}</option>
                                        ))
                                    }
                                </select> */}
                                <span className="text-danger">{stateError}</span>
                            </div>
                            <div className="col-lg-4">
                                <input required type="text" className='form-control' placeholder='ZIP code'
                                    value={postcode} name='postcode' onChange={handleChange} />
                                <span className="text-danger">{postcodeError}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    className='form-control' placeholder='phone'
                                    type="number" value={phone} name='phone' onChange={handleChange} />
                                <span className="text-danger">{phoneError}</span>
                            </div>
                        </div>

                        {/*  */}
                        <div className="row">
                            <div className="col-lg-12">
                                <button className=' btn btn-dark mt-5' type='submit' >Add Address</button>
                            </div></div>
                        {/*  */}
                    </form>
                </div>

                {/*  */}



            </div>
        </>
    )
}
export default ShippingForm
