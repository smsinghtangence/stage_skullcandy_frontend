import React, { useEffect, useState } from "react";
import loginuserimg from "@/images/Login.svg";
import delivery from "@/images/Delivery Address.svg";
import check from "@/images/Group 2061.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addShippingDetails,
  addBilling,
  getAddress,
  reset,
  updateAddress,
} from "@/features/CheckOut/checkOutSlice";
import { MDBModal, MDBModalDialog } from "mdb-react-ui-kit";
import ShippingForm from "@/components/ShippingForm";
// import ContentLoader from 'react-content-loader'
import Spinner from "@/components/Spinner";

function AddressSection() {
  const dispatch = useDispatch();

  // const [basicModal, setBasicModal] = useState(false);

  // const toggleShow = () => setBasicModal(!basicModal);

  const { address, isSuccess, updatedAddress, isSaveAddress, isLoading } =
    useSelector((state) => state.checkOut);

  const { users } = useSelector((state) => state.auth);

  const handleClick = (item) => {
    // document.getElementById('userAddress').checked = true

    const {
      first_name,
      last_name,
      phone,
      address_1,
      address_2,
      country,
      postcode,
      state,
      city,
    } = item;

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
    };
    dispatch(addShippingDetails(shipping));
    dispatch(addBilling(shipping));

    // dispatch(updateAddress(item.id))
  };
  const addDEfaultAddress = () => {
    if (address) {
      const defaultAddress = address
        ?.filter((item) => {
          return item.is_default_address == "1";
        })
        .map(({ id, email, is_default_address, ...rest }) => rest);

      //console.log(defaultAddress,'default')
      dispatch(addShippingDetails(defaultAddress[0]));
    }
  };

  useEffect(() => {
    if (users?.id) {
      dispatch(getAddress());
    }
  }, [updatedAddress]); // for when someone change default address

  // useEffect(() => {
  //     if (address?.length !== 0 && isSuccess) {
  //         // console.log('from default address')
  //         addDEfaultAddress()

  //     }
  //     dispatch(reset())
  // }, [isSuccess])

  useEffect(() => {
    if (users?.id) {
      dispatch(getAddress());
    }
  }, [isSaveAddress]);
  return (
    <>
      {/* start */}
      <div className="">
        {/* <div className="row px-2">
          <div
            className="col-lg-12 col-md-12 col-sm-12 col-12 py-3 px-4 d-flex align-item-center justify-content-between"
            style={{ backgroundColor: "#FFF" }}
          >
            <div className="login-part d-flex gap-3">
              <div className="img-cart bg-danger d-flex align-item-center justify-content-center p-1" style={{ width: '50px', height: "50px", borderRadius: "50%" }}>
                                <img src={loginuserimg} alt="" width={"50%"} />
                            </div>

              <p className="mt-3 fs-6 text-capitalize">{users?.first_name}</p>
              <img src={check} alt="" />
            </div>
            <button className='btn btn-outline-dark btn-sm px-4 h-75  bg-white text-dark'>Login</button>
          </div>
        </div> */}
        {/* {address?.length > 0 && (
          <div className="table-responsive">
            <div className="row ">
              <div className="col-lg-12">
                <div className="address_card">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                      </tr>
                    </thead>

                    {isLoading == "addressPending" ? (
                      <>
                        <Spinner />
                      </>
                    ) : (
                      <>
                        {address && (
                          <>
                            {address?.map((item, index) => (
                              <>
                                <tbody>
                                  <tr key={index}>
                                    <td>
                                      checked={item?.is_default_address === "1" ? true : false}
                                      <div className="form-check">
                                        <label class="form-check-label">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="address"
                                            id="userAddress"
                                            value={"add" + index}
                                            onChange={() => {
                                              handleClick(item);
                                            }}
                                          />
                                        </label>
                                      </div>
                                    </td>
                                    <td>
                                      {" "}
                                      {item.first_name}&nbsp;{item.last_name}
                                    </td>
                                    <td>{item?.phone}</td>
                                    <td>
                                      {" "}
                                      {item.address_1}, {item.address_2}{" "}
                                      {item.city}, {item?.state},{" "}
                                      {item?.country}
                                    </td>
                                  </tr>
                                </tbody>
                              </>
                            ))}
                          </>
                        )}
                      </>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
      {/* end */}
      {/* <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <ShippingForm toggleShow={toggleShow} />
                </MDBModalDialog>
            </MDBModal> */}

      {/*  */}
      <ShippingForm />
      {/* {address?.length !==0 ?
                 <ShippingForm  />
            
                                :""} */}
      {/*  */}
    </>
  );
}

export default AddressSection;
