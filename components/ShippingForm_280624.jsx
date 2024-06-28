import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBilling, addShippingDetails, fetchState, saveAddress,createGuestCheckout } from '../features/CheckOut/checkOutSlice'
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
    const [CompanyNameError, setCompanyNameError] = useState('')
    const [GSTINError, setGSTINError] = useState('')
    const [otp, setOtp] = useState("");
    const [isOtpSend, setIsOtpSend] = useState(true);
    const [isOtpVerify, setIsOtpVerify] = useState(false);
        
    // let billing = {
    //     "email": email
    // }

    
    const [shipping, setShipping] = useState({
        first_name: '',
        last_name: '',
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postcode: "",
        country: "INDIA",
        phone: "",
        Company_Name:users?.Company_Name?users?.Company_Name:"",
        GSTIN:users?.GSTIN?users?.GSTIN:""

    })
    const [billing, setBilling] = useState({
        first_name: '',
        last_name: '',
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postcode: "",
        country: "INDIA",
        phone: "",
        Company_Name:users?.Company_Name?users?.Company_Name:"",
        GSTIN:users?.GSTIN?users?.GSTIN:""

    })

    const [billingSame, setBillingSame] = useState(true);
    const [errors, setErrors] = useState({});

    const { first_name, last_name, address_1, address_2, city, state, postcode, country, phone,Company_Name,GSTIN } = shipping

    const dispatch = useDispatch()

    const { states, shipping: shippingDetails, isError, message } = useSelector(state => state.checkOut)

    const handleChange = (e) => {
        e.preventDefault()
        // console.log("target "+ e.target.name +" valye "+ e.target.value)
        setShipping({ ...shipping, [e.target.name]: e.target.value })
    
        console.log(" s " + JSON.stringify(shipping)) 

        //////////
        setShipping({ ...shipping, [e.target.name]: e.target.value })

        ////////
    }

    const handleBillingChange = (e) => {
        e.preventDefault()
        // console.log("target "+ e.target.name +" valye "+ e.target.value)
        setBilling({ ...billing, [e.target.name]: e.target.value })
    
        // console.log(" shipping " + JSON.stringify(shipping))
    }

    const handleBillingCheckboxChange = (e) => {
        setBillingSame(e.target.checked);
      };


    const handleSubmit = (e) => {
        e.preventDefault()
        // Validations
         
        let isValid = true;
        const newErrors = {};

        console.log(" shipping " + JSON.stringify(shipping["first_name"]))

         ///////////

         if (!shipping["first_name"] || shipping["first_name"].length > 10) {
            newErrors[`shippingfirst_name`] = 'First name is required and should be 10 characters or less';
        
            isValid = false;
        
        } else if (!/^[a-zA-Z]*$/.test(shipping["first_name"])) {
            newErrors[`shippingfirst_name`] = 'Name should  only contain letters';
            isValid = false;
        } else {
            newErrors[`shippingfirst_name`] = '';
        }
        
        // ////////last_name////
        if (!shipping["last_name"] || shipping["last_name"].length > 10) {
            newErrors[`shippinglast_name`] = 'Last name is required and should be 10 characters or less';
        
            isValid = false;
        
        } else if (!/^[a-zA-Z]*$/.test(shipping["last_name"])) {
            newErrors[`shippinglast_name`] = 'Name should  only contain letters';
            isValid = false;
        } else {
            newErrors[`shippinglast_name`] = '';
        }
        
        // //////////
        
        // if (!email || !/\S+@\S+\.\S+/.test(email)) {
        //     setEmailError('Enter a valid email address');
        //     isValid = false;
        // } else {
        //     setEmailError('');
        // }
        
        if (!shipping["address_1"] || shipping["address_1"].length > 30) {
        
            newErrors[`shippingaddress_1`] = 'Address Line 1 is required and should be 30 characters or less';
            isValid = false;
        } else {
            newErrors[`shippingaddress_1`] = '';
        }
        
        if (shipping["address_2"].length > 30) {
            newErrors[`shippingaddress_2`] = 'Address Line 2 is required  and should be 30 characters or less';
            isValid = false;
        } else {
            newErrors[`shippingaddress_2`] = '';
        }
        
        if (!shipping["phone"] || shipping["phone"].length !== 10 || isNaN(shipping["phone"])) {
            newErrors[`shippingphone`] = 'Enter a valid 10-digit phone number';
            isValid = false;
        } else {
            newErrors[`shippingphone`] = '';
        }
        // console.log("isValid " + isValid)
        if (!shipping["city"]) {
            newErrors[`shippingcity`] = 'City is required';
            isValid = false;
        }
        else if (!/^[a-zA-Z]*$/.test(shipping["city"])) {
            newErrors[`shippingcity`] = 'City should  only contain letters';
            isValid = false;
        }  
        else  if (shipping["city"].length < 2) {
            newErrors[`shippingcity`] = 'Atleast contain two letters';
            isValid = false;
        } 
        else {
            newErrors[`shippingcity`] = '';
        }
        
        if (!shipping["state"]) {
            newErrors[`shippingstate`] = 'State is required';
            isValid = false;
        } 
        else if (!/^[a-zA-Z]*$/.test(shipping["state"])) {
            newErrors[`shippingstate`] = 'City should  only contain letters';
            isValid = false;
        }  
        else  if (shipping["state"].length < 2) {
            newErrors[`shippingstate`] = 'Atleast contain two letters';
            isValid = false;
        } 
        else {
            newErrors[`shippingstate`] = '';
        }
        
        if (!shipping["country"]) {
            newErrors[`shippingcountry`] = 'Country is required';
            isValid = false;
        } else {
            newErrors[`shippingcountry`] = '';
        }
        
        if (!shipping["postcode"]) {
            newErrors[`shippingpostcode`] = 'Postal code is required';
            isValid = false;
        } else {
            newErrors[`shippingpostcode`] = '';
        }
        ////////////

        /////billing validation start//////
         
        if(!billingSame){

        if (!billing["first_name"] || billing["first_name"].length > 10) {
            newErrors[`billingfirst_name`] = 'First name is required and should be 10 characters or less';

            isValid = false;

        } else if (!/^[a-zA-Z]*$/.test(billing["first_name"])) {
            newErrors[`billingfirst_name`] = 'Name should  only contain letters';
            isValid = false;
        } else {
            newErrors[`billingfirst_name`] = '';
        }

        // ////////last_name////
        if (!billing["last_name"] || billing["last_name"].length > 10) {
            newErrors[`billinglast_name`] = 'Last name is required and should be 10 characters or less';

            isValid = false;

        } else if (!/^[a-zA-Z]*$/.test(billing["last_name"])) {
            newErrors[`billinglast_name`] = 'Name should  only contain letters';
            isValid = false;
        } else {
            newErrors[`billinglast_name`] = '';
        }

        // //////////

        // if (!email || !/\S+@\S+\.\S+/.test(email)) {
        //     setEmailError('Enter a valid email address');
        //     isValid = false;
        // } else {
        //     setEmailError('');
        // }

        if (!billing["address_1"] || billing["address_1"].length > 30) {

            newErrors[`billingaddress_1`] = 'Address Line 1 is required and should be 30 characters or less';
            isValid = false;
        } else {
            newErrors[`billingaddress_1`] = '';
        }

        if (billing["address_2"].length > 30) {
            newErrors[`billingaddress_2`] = 'Address Line 2 is required  and should be 30 characters or less';
            isValid = false;
        } else {
            newErrors[`billingaddress_2`] = '';
        }

        if (!billing["phone"] || billing["phone"].length !== 10 || isNaN(billing["phone"])) {
            newErrors[`billingphone`] = 'Enter a valid 10-digit phone number';
            isValid = false;
        } else {
            newErrors[`billingphone`] = '';
        }
        // console.log("isValid " + isValid)
        if (!billing["city"]) {
            newErrors[`billingcity`] = 'City is required';
            isValid = false;
        }
        else if (!/^[a-zA-Z]*$/.test(billing["city"])) {
            newErrors[`billingcity`] = 'City should  only contain letters';
            isValid = false;
        }  
        else  if (billing["city"].length < 2) {
            newErrors[`billingcity`] = 'Atleast contain two letters';
            isValid = false;
        }  
        else {
            newErrors[`billingcity`] = '';
        }

        if (!billing["state"]) {
            newErrors[`billingstate`] = 'State is required';
            isValid = false;
        }
        else if (!/^[a-zA-Z]*$/.test(billing["state"])) {
            newErrors[`billingstate`] = 'State should  only contain letters';
            isValid = false;
        }  
        else  if (billing["state"].length < 2) {
            newErrors[`billingstate`] = 'Atleast contain two letters';
            isValid = false;
        }   
        else {
            newErrors[`billingstate`] = '';
        }

        if (!billing["country"]) {
            newErrors[`billingcountry`] = 'Country is required';
            isValid = false;
        } else {
            newErrors[`billingcountry`] = '';
        }

        if (!billing["postcode"]) {
            newErrors[`billingpostcode`] = 'Postal code is required';
            isValid = false;
        } else {
            newErrors[`billingpostcode`] = '';
        }

                
        /////billing validation end///////
    }
        setErrors(newErrors);
        

        if (!isValid) {
            return;
        }
        if (!isValid) {
            return;
        }

        // console.log(shipping)
        // dispatch(addBilling(billing))

        // dispatch(addShippingDetails(shipping))

        if (users?.id) {

          
            // dispatch(saveAddress(shipping))


            // .then(()=>dispatch(addBilling(shipping)))
            // .then(()=>dispatch(addShippingDetails(shipping)))

             if(!billingSame)
                {
                    dispatch(saveAddress(billing,shipping))
                    dispatch(addBilling(billing))
                    dispatch(addShippingDetails(shipping))
                }
            else{
                dispatch(saveAddress(shipping,shipping))
            }

        }

        if(!billingSame)
            {
                //register and login 
                dispatch(createGuestCheckout(shipping))
                .then(() => dispatch(addBilling(billing)))
                .then(() => dispatch(addShippingDetails(shipping)));
          
            }
        else{
            dispatch(createGuestCheckout(shipping))
                .then(() => dispatch(addBilling(shipping)))
                .then(() => dispatch(addShippingDetails(shipping)));
        }
      

        setShipping({
            first_name: '',
            last_name: '',
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "INDIA",
            phone: "",  
            Company_Name:"",
            GSTIN:""
            
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
                <p>{users?.email}</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="row">
                            <div className="col-lg-12">

                                <select
                                    required
                                    className='form-control'

                                    name='country'
                                    value={shipping["country"]}
                                    onChange={handleChange}

                                >

                                    <option value="INDIA" selected disabled>INDIA</option>
                                </select>
                                <span className="text-danger">{errors[`shippingcountry`]}</span>

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
                                    value={shipping["first_name"]}
                                    onChange={handleChange}
                                />
                                <span className="text-danger">
                                {errors[`shippingfirst_name`]}
                                
                                 </span>
                            </div>
                 
                            <div className="col-lg-6">
                                <input
                                    required
                                    type="text" placeholder='Last name' className='form-control'
                                    value={shipping["last_name"]}  name='last_name' onChange={handleChange} />
                                <span className="text-danger"> {errors[`shippinglast_name`]} </span>
                            </div>
                        </div>

                        
                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    type="text" placeholder='Address' className='form-control'

                                    value={shipping["address_1"]} name='address_1' onChange={handleChange}

                                />
                                <span className="text-danger">{errors[`shippingaddress_1`]}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <input type="text" placeholder='Apartment, suite, etc. (optional)' className='form-control'
                                    value={shipping["address_2"]}  name='address_2'
                                    onChange={handleChange} />
                                <span className="text-danger">{errors[`shippingaddress_2`]}</span>

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
                                <span className="text-danger">{errors[`shippingcity`]}</span>
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
                                    name="state" value={shipping["state"]} 
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
                                <span className="text-danger">{errors[`shippingstate`]}</span>
                            </div>
                            <div className="col-lg-4">
                                <input required type="text" className='form-control' placeholder='ZIP code'
                                    value={shipping["postcode"]}  name='postcode' onChange={handleChange} />
                                <span className="text-danger">{errors[`shippingpostcode`]}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    className='form-control' placeholder='Phone'
                                    type="number" value={shipping["phone"]} name='phone' 
                                    maxLength={10}
                                     onChange={handleChange} />
                                <span className="text-danger">{errors[`shippingphone`]}</span>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    type="text"
                                    placeholder='Email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                                <span className="text-danger">{emailError}</span>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                     
                                    type="text"
                                    placeholder='Company Name (Optional)'
                                    className='form-control'
                                    name='Company_Name'
                                    value={shipping["Company_Name"]} 
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{errors[`shippingCompany_Name`]}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                     
                                    type="text"
                                    placeholder='GSTIN (Use Capital Letter) (Optional)'
                                    className='form-control'
                                    name='GSTIN'
                                    value={shipping["GSTIN"]} 
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{errors[`shippingGSTIN`]}</span>
                            </div>
                        </div>
                        {/*  */}
                        {/* <div className="row">
                            <div className="col-lg-12">
                                <button className=' btn btn-dark mt-2' type='submit' >Add Address</button>
                            </div></div> */}
                        {/*  */}
                    {/* </form>
                </div> */}

                {/*  */}
        {/* -------------------------------------------------------------------- */}

        <div className="row">
                            <div className="col-lg-12">
                               <input
                                     
                                    type="checkbox"
                                    id="billingSame"
                                    checked={billingSame}
                                    onChange={handleBillingCheckboxChange}

                                />
                                <span>Use shipping address as billing address</span>
                             
                            </div>
                        </div>

           {!billingSame &&    <>
            {/* Billing start*/}
            <h4>Billing</h4>
            {/* <div>
                    <form onSubmit={handleSubmit}> */}
                        
                        <div className="row">
                            <div className="col-lg-12">

                                <select 
                                required 
                                className='form-control' 
                                 
                                name='country' 
                                value={billing["country"]}
                                onChange={handleBillingChange}
                               
                                >
                                     
                                    <option value="INDIA" selected disabled>INDIA</option>
                                </select>
                                <span className="text-danger">{errors[`billingcountry`]}</span>
                                
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
                                    value={billing["first_name"]}
                                    onChange={handleBillingChange}
                                />
                                <span className="text-danger">
                                {errors[`billingfirst_name`]}
                                
                                 </span>
                            </div>
                 
                            <div className="col-lg-6">
                                <input
                                    required
                                    type="text" placeholder='Last name' className='form-control'
                                    value={billing["last_name"]}  name='last_name' onChange={handleBillingChange} />
                                <span className="text-danger"> {errors[`billinglast_name`]} </span>
                            </div>
                        </div>

                        
                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    type="text" placeholder='Address' className='form-control'

                                    value={billing["address_1"]} name='address_1' onChange={handleBillingChange}

                                />
                                <span className="text-danger">{errors[`billingaddress_1`]}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <input type="text" placeholder='Apartment, suite, etc. (optional)' className='form-control'
                                    value={billing["address_2"]}  name='address_2'
                                    onChange={handleBillingChange} />
                                <span className="text-danger">{errors[`billingaddress_2`]}</span>

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
                                onChange={handleBillingChange} />
                                <span className="text-danger">{errors[`billingcity`]}</span>
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
                                    name="state" value={billing["state"]} 
                                    placeholder='State'
                                    onChange={handleBillingChange} />
                                {/* <select required className='w-100 p-2 shipSelect' name='state' value={state} style={{ backgroundColor: 'var(--secondary)' }} onChange={handleBillingChange}>
                                    <option>Select State</option>
                                    {
                                        states?.states?.map((item, index) => (
                                            <option value={item.code} key={index}>{item.name}</option>
                                        ))
                                    }
                                </select> */}
                                <span className="text-danger">{errors[`billingstate`]}</span>
                            </div>
                            <div className="col-lg-4">
                                <input required type="text" className='form-control' placeholder='ZIP code'
                                    value={billing["postcode"]}  name='postcode' onChange={handleBillingChange} />
                                <span className="text-danger">{errors[`billingpostcode`]}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    className='form-control' placeholder='Phone'
                                    type="number" value={billing["phone"]} name='phone' 
                                    maxLength={10}
                                     onChange={handleBillingChange} />
                                <span className="text-danger">{errors[`billingphone`]}</span>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-12">
                                <input
                                    required
                                    type="text"
                                    placeholder='Email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                                <span className="text-danger">{emailError}</span>
                            </div>
                        </div> */}
                         
                    

             
        </>}
            
            {/*  */}
            <div className="row">
                <div className="col-lg-12">
                    <button className=' btn btn-dark mt-2' type='submit' >Add Address</button>
                </div>
            </div>
            {/*  */}
        </form >
                </div >
                </div>
                </>
    )
}
export default ShippingForm
