import React, { useEffect, useState } from 'react'
import loginuserimg from '@/images/Login.svg'
import delivery from '@/images/Delivery Address.svg'
import check from '@/images/Group 2061.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addShippingDetails, getAddress, reset, updateAddress } from '@/features/CheckOut/checkOutSlice'
import { MDBModal, MDBModalDialog } from 'mdb-react-ui-kit'
import ShippingForm from '@/components/ShippingForm'
// import ContentLoader from 'react-content-loader'
import Spinner from '@/components/Spinner'

function AddressSection() {

    const dispatch = useDispatch()

    // const [basicModal, setBasicModal] = useState(false);

    // const toggleShow = () => setBasicModal(!basicModal);

    const { address, isSuccess, updatedAddress, isSaveAddress, isLoading } = useSelector(state => state.checkOut)

    const { users } = useSelector(state => state.auth)

    const handleClick = (item) => {

        document.getElementById('userAddress').checked = true

        const { first_name, last_name, phone, address_1, address_2, country, postcode, state, city } = item

        const shipping = {
            first_name,
            last_name,
            address_1,
            address_2,
            city,
            state,
            postcode,
            country,
            phone,
        }
        dispatch(addShippingDetails(shipping))
        // dispatch(updateAddress(item.id))
    }
    const addDEfaultAddress = () => {

        if(address){
        const defaultAddress = address?.filter((item) => {
            return item.is_default_address == "1";
        }).map(({ id, email, address_type, is_default_address, ...rest }) => rest);

        //console.log(defaultAddress,'default')
        dispatch(addShippingDetails(defaultAddress[0]))
    }
    }


    useEffect(() => {
        dispatch(getAddress())
    }, [updatedAddress]) // for when someone change default address

    useEffect(() => {
        if (address?.length !== 0 && isSuccess) {
            // console.log('from default address')
            addDEfaultAddress()

        }
        dispatch(reset())
    }, [isSuccess])

    useEffect(() => {
        dispatch(getAddress())
    }, [isSaveAddress])
    return (
        <>
            {/* start */}
            <div className="" >
                <div className="row px-2">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 py-3 px-4 d-flex align-item-center justify-content-between" style={{ backgroundColor: "#FFF" }}>
                        <div className="login-part d-flex gap-3">
                            {/* <div className="img-cart bg-danger d-flex align-item-center justify-content-center p-1" style={{ width: '50px', height: "50px", borderRadius: "50%" }}>
                                <img src={loginuserimg} alt="" width={"50%"} />
                            </div> */}

                            <p className='mt-3 fs-6 text-capitalize'>{users?.first_name}</p>
                            <img src={check} alt="" />

                        </div>
                        {/* <button className='btn btn-outline-dark btn-sm px-4 h-75  bg-white text-dark'>Login</button> */}

                    </div>

                </div>

                <div className='' >
                    <div className="row  py-2 px-2">
                      

                        {
                            isLoading == 'addressPending' ? <>
                            
                                <Spinner />
                            </> : <>

                                {
                                    address && <>
                                        {
                                            address?.map((item, index) => (
                                               
                    
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-5 bg-light mt-1 py-2" style={{ overflowX: 'auto' }} 
                                                    key={index}>
                                                        <div className="items w-75  d-flex gap-4 align-items-start justify-content-start ">

                                                            <div className='mt-2'>                                                           
                                                                 <input type="radio" name="address" id="userAddress" className='' checked={item.is_default_address === "1" ? true : false} onChange={() => { handleClick(item) }} />
                                                            
                                                            </div>
                                                            <div className='d-flex flex-column'>

                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <p className='text-center mt-2 fs-6 text-capitalize'>{item.first_name}&nbsp;{item.last_name}</p>
                                                                    <button className='btn btn-light btn btn-default text-capitalize border border-1 ' style={{ backgroundColor: '#F0F0F0' }}>{item.address_type}</button>
                                                                    <p className='mt-2 fs-6'>{item.phone}</p>
                                                                </div>

                                                                <div className=''>
                                                                    <label className='mt-2 text-capitalize'>{item.address_1}, {item.address_2}</label><br />
                                                                    <label className='m-0  p-0 text-capitalize'>{item.city}, {item?.state}, {item?.country}</label>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                 

                                            ))
                                        }
                                    </>
                                }

                            </>
                        }

                        
                        





                    </div>
                </div>




            </div>
            {/* end */}
            {/* <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <ShippingForm toggleShow={toggleShow} />
                </MDBModalDialog>
            </MDBModal> */}

            {/*  */}
            {address?.length !==0 ?
                 <ShippingForm  />
            
                                :""}
            {/*  */}
        </>
    )
}

export default AddressSection
