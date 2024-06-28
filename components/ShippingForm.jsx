import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBilling,
  addShippingDetails,
  fetchState,
  saveAddress,
  createGuestCheckout,
  updateOrderAfterPayment,
  setPyamentRazorpayStatus,
} from "../features/CheckOut/checkOutSlice";
import {
  MDBBtn,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { deleteFromCart } from "@/features/Cart/cartnWishSlice"
import { guestRegister } from "@/features/authSlice";
import { toast } from "react-toastify";
import axios from "axios";
import Script from "next/script";
import PayWithRazorPay from "./PayWithRazorPay";

function ShippingForm() {
  const { users } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cartWish);
  const [addType, setAddType] = useState();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address1Error, setAddress1Error] = useState("");
  const [address2Error, setAddress2Error] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [postcodeError, setPostcodeError] = useState("");
  const [CompanyNameError, setCompanyNameError] = useState("");
  const [GSTINError, setGSTINError] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(true);
  const [isOtpVerify, setIsOtpVerify] = useState(false);

  console.log("users????????????????????????????????????", users);

  const API_URL = process.env.API_URL;

  const [shipping, setShipping] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "INDIA",
    mobile: "",
    Company_Name: "",
    GSTIN: "",
  });

  const {
    username,
    email,
    firstname,
    lastname,
    address1,
    address2,
    city,
    state,
    zipcode,
    country,
    mobile,
    Company_Name,
    GSTIN,
  } = shipping;

  const dispatch = useDispatch();

  const {
    states,
    shipping: shippingDetails,
    isError,
    message,
  } = useSelector((state) => state.checkOut);

  const total = cart?.reduce((totalPrice, i) => {
    let sku = i?.SKU;
    let quantity = i?.quantity;
    let price = i?.Sales_price ? i?.Sales_price : i?.Variations_Price;
    return parseFloat(totalPrice + price * quantity);
  }, 0);


  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setShipping({ ...shipping, [name]: value });

    if (name === "zipcode" && value.length === 6) {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${value}`
        );
        if (response.data && response.data.length > 0) {
          const { District, State } = response.data[0].PostOffice[0];
          setShipping((prevShipping) => ({
            ...prevShipping,
            city: District,
            state: State,
          }));
        } else {
          console.log("No data found for the zipcode");
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    // Validate the input fields
    if (!shipping.firstname || shipping.firstname.length > 10) {
      newErrors.firstNameError =
        "First name is required and should be 10 characters or less";
      isValid = false;
    } else if (!/^[a-zA-Z]*$/.test(shipping.firstname)) {
      newErrors.firstNameError = "Name should only contain letters";
      isValid = false;
    }

    if (!shipping.lastname || shipping.lastname.length > 10) {
      newErrors.lastNameError =
        "Last name is required and should be 10 characters or less";
      isValid = false;
    } else if (!/^[a-zA-Z]*$/.test(shipping.lastname)) {
      newErrors.lastNameError = "Name should only contain letters";
      isValid = false;
    }

    if (!shipping.address1 || shipping.address1.length > 30) {
      newErrors.address1Error =
        "Address Line 1 is required and should be 30 characters or less";
      isValid = false;
    }

    if (shipping.address2.length > 30) {
      newErrors.address2Error =
        "Address Line 2 should be 30 characters or less";
      isValid = false;
    }

    if (
      !shipping.mobile ||
      shipping.mobile.length !== 10 ||
      isNaN(shipping.mobile)
    ) {
      newErrors.phoneError = "Enter a valid 10-digit mobile number";
      isValid = false;
    }

    if (!shipping.city) {
      newErrors.cityError = "City is required";
      isValid = false;
    }

    if (!shipping.state) {
      newErrors.stateError = "State is required";
      isValid = false;
    }

    if (!shipping.country) {
      newErrors.countryError = "Country is required";
      isValid = false;
    }

    if (!shipping.zipcode) {
      newErrors.postcodeError = "Postal code is required";
      isValid = false;
    }

    // Set error messages
    setFirstNameError(newErrors.firstNameError || "");
    setLastNameError(newErrors.lastNameError || "");
    setAddress1Error(newErrors.address1Error || "");
    setAddress2Error(newErrors.address2Error || "");
    setPhoneError(newErrors.phoneError || "");
    setCityError(newErrors.cityError || "");
    setStateError(newErrors.stateError || "");
    setCountryError(newErrors.countryError || "");
    setPostcodeError(newErrors.postcodeError || "");

    if (!isValid) return;

    // Register the user
    const loginItems = {
      username: email,
      email,
      firstname,
      lastname,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      mobile,
      Company_Name,
      GSTIN,
      otp,
    };

    // try {
    //   // const response = await dispatch(guestRegister(loginItems)).unwrap();

      // Check if the registration was successful
      // if (response.status === 200) {
      //   setIsOtpVerify(true);

        // Initiate payment after user is registered

        try {
          const paymentResponse = await axios.post(
            `http://localhost:1337/api/razorpay`,
            {
              amount: total,
              currency: "INR",
              loginItems
            }
          );

          const options = {
            key: "rzp_test_hTSzc7KeSl5FzN",
            name: "SkullCandy",
            currency: paymentResponse.data.order.currency,
            amount: paymentResponse.data.order.amount,
            order_id: paymentResponse.data.order.id,
            description: "Test Transaction",
            handler: function (response) {
              const update_object = {
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
                customer_id: users?.id,
              };
              dispatch(updateOrderAfterPayment(update_object));
              dispatch(setPyamentRazorpayStatus());
              toast.success("Payment Successful");
              localStorage.removeItem("cart");
              // dispatch(deleteFromCart(cart));
              
            },
            prefill: {
              name: `${shipping.firstname} ${shipping.lastname}`,
              email: shipping.email,
              contact: shipping.mobile,
            },
          };

          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        } catch (error) {
          console.error("Error initiating payment:", error);
          toast.error("Payment Failed");
        }
      // } else {
      //   toast.error(response.data.error.message);
      // }
    // } catch (error) {
    //   console.error("Error registering user:", error);
    //   toast.error("User already exists");
    // }

    setShipping({
      email: "",
      firstname: "",
      lastname: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      country: "INDIA",
      mobile: "",
      Company_Name: "",
      GSTIN: "",
    });
    setAddType("");
  };

  useEffect(() => {
    if (users?.id) {
      // alert(users.id);
      setShipping({
        email: users.email,
        firstname: users.firstname,
        lastname: users.lastname,
        address1: users.address1,
        address2: users.address2,
        city: users.city,
        state: users.state,
        zipcode: users.zipcode,
        country: "INDIA",
        mobile: users.mobile,
        Company_Name: users.Company_Name,
        GSTIN: users.GSTIN,
      });
      console.log(shipping,"kasuijlvblksgsjlkbvjhksuyvhsdfgjhsiuvfhbsdm,jkgscmnvb sjkyvgbsmnkfthsdb fjhsdtyusb jksdtfu");
    }
  }, [users]);

  // const handleSendOtp = async (e) => {
  //   // Prevent the form from submitting if required
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:1337/api/guest/checkouts",
  //       {
  //         username: shipping.email,
  //         email: shipping.email,
  //         firstname: shipping.firstname,
  //         lastname: shipping.lastname,
  //         address1: shipping.address1,
  //         address2: shipping.address2,
  //         city: shipping.city,
  //         state: shipping.state,
  //         zipcode: shipping.zipcode,
  //         country: shipping.country,
  //         mobile: shipping.mobile,
  //         Company_Name: shipping.Company_Name,
  //         GSTIN: shipping.GSTIN,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     toast.success("OTP sent successfully");
  //     // Set the mobile number from the response if needed
  //     // setTest(JSON.parse(response.config.data).mobile);
  //   } catch (error) {
  //     toast.error(eror);
  //     console.error("OTP sending error:", error);
  //   } finally {
  //     setIsOtpSend(false);
  //   }
  // };

  // const handleResendOtp = async () => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:1337/api/guest/resend-otp",
  //       { mobile },
  //       { headers: { "Content-Type": "application/json" } }
  //     );
  //     toast.success("OTP Resend Successfully");
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //     console.error("OTP sending error:", error);
  //   }
  // };

  // const handleVerifyOtp = async (e) => {
  // e.preventDefault();

  // let isValid = true;
  // const newErrors = {};

  // if (!shipping.firstname || shipping.firstname.length > 10) {
  //   newErrors.firstNameError =
  //     "First name is required and should be 10 characters or less";
  //   isValid = false;
  // } else if (!/^[a-zA-Z]*$/.test(shipping.firstname)) {
  //   newErrors.firstNameError = "Name should only contain letters";
  //   isValid = false;
  // }

  // if (!shipping.lastname || shipping.lastname.length > 10) {
  //   newErrors.lastNameError =
  //     "Last name is required and should be 10 characters or less";
  //   isValid = false;
  // } else if (!/^[a-zA-Z]*$/.test(shipping.lastname)) {
  //   newErrors.lastNameError = "Name should only contain letters";
  //   isValid = false;
  // }

  // if (!shipping.address1 || shipping.address1.length > 30) {
  //   newErrors.address1Error =
  //     "Address Line 1 is required and should be 30 characters or less";
  //   isValid = false;
  // }

  // if (shipping.address2.length > 30) {
  //   newErrors.address2Error =
  //     "Address Line 2 should be 30 characters or less";
  //   isValid = false;
  // }

  // if (
  //   !shipping.mobile ||
  //   shipping.mobile.length !== 10 ||
  //   isNaN(shipping.mobile)
  // ) {
  //   newErrors.phoneError = "Enter a valid 10-digit mobile number";
  //   isValid = false;
  // }

  // if (!shipping.city) {
  //   newErrors.cityError = "City is required";
  //   isValid = false;
  // }

  // if (!shipping.state) {
  //   newErrors.stateError = "State is required";
  //   isValid = false;
  // }

  // if (!shipping.country) {
  //   newErrors.countryError = "Country is required";
  //   isValid = false;
  // }

  // if (!shipping.zipcode) {
  //   newErrors.postcodeError = "Postal code is required";
  //   isValid = false;
  // }

  // // Set error messages
  // setFirstNameError(newErrors.firstNameError || "");
  // setLastNameError(newErrors.lastNameError || "");
  // setAddress1Error(newErrors.address1Error || "");
  // setAddress2Error(newErrors.address2Error || "");
  // setPhoneError(newErrors.phoneError || "");
  // setCityError(newErrors.cityError || "");
  // setStateError(newErrors.stateError || "");
  // setCountryError(newErrors.countryError || "");
  // setPostcodeError(newErrors.postcodeError || "");

  // if (!isValid) return;

  // // Don't reset the entire shipping state here.
  // // Just ensure the OTP verification process continues as expected.
  // const loginItems = { mobile, otp };
  // dispatch(guestRegister(loginItems));
  // setIsOtpVerify(true);
  // console.log("user", users);
  // };

  // //   const handleSubmit = async (e) => {
  // //     e.preventDefault();

  // //     let isValid = true;

  // //     if (!firstname || firstname.length > 10) {
  // //       setFirstNameError(
  // //         "First name is required and should be 10 characters or less"
  // //       );
  // //       isValid = false;
  // //     } else if (!/^[a-zA-Z]*$/.test(firstname)) {
  // //       setFirstNameError("Name should only contain letters");
  // //       isValid = false;
  // //     } else {
  // //       setFirstNameError("");
  // //     }

  // //     if (!lastname || lastname.length > 10) {
  // //       setLastNameError(
  // //         "Last name is required and should be 10 characters or less"
  // //       );
  // //       isValid = false;
  // //     } else if (!/^[a-zA-Z]*$/.test(lastname)) {
  // //       setLastNameError("Name should only contain letters");
  // //       isValid = false;
  // //     } else {
  // //       setLastNameError("");
  // //     }

  // //     if (!address1 || address1.length > 30) {
  // //       setAddress1Error(
  // //         "Address Line 1 is required and should be 30 characters or less"
  // //       );
  // //       isValid = false;
  // //     } else {
  // //       setAddress1Error("");
  // //     }

  // //     if (address2.length > 30) {
  // //       setAddress2Error(
  // //         "Address Line 2 is required and should be 30 characters or less"
  // //       );
  // //       isValid = false;
  // //     } else {
  // //       setAddress2Error("");
  // //     }

  // //     if (!mobile || mobile.length !== 10 || isNaN(mobile)) {
  // //       setPhoneError("Enter a valid 10-digit mobile number");
  // //       isValid = false;
  // //     } else {
  // //       setPhoneError("");
  // //     }

  // //     if (!city) {
  // //       setCityError("City is required");
  // //       isValid = false;
  // //     } else {
  // //       setCityError("");
  // //     }

  // //     if (!state) {
  // //       setStateError("State is required");
  // //       isValid = false;
  // //     } else {
  // //       setStateError("");
  // //     }

  // //     if (!country) {
  // //       setCountryError("Country is required");
  // //       isValid = false;
  // //     } else {
  // //       setCountryError("");
  // //     }

  // //     if (!zipcode) {
  // //       setPostcodeError("Postal code is required");
  // //       isValid = false;
  // //     } else {
  // //       setPostcodeError("");
  // //     }

  // //     if (!isValid) {
  // //       return;
  // //     }

  // //     if (users?.id) {
  // //       await dispatch(saveAddress(shipping));
  // //     }

  // //     try {
  // //       const response = await axios.post(
  // //         API_URL + "/api/razorpay",
  // //         {
  // //           amount: 1000, // Use the actual amount here
  // //           currency: "INR",
  // //         }
  // //       );

  // //       const options = {
  // //         key: "rzp_test_hTSzc7KeSl5FzN", // Enter the Key ID generated from the Dashboard
  // //         name: "Your App Name",
  // //         currency: response.data.currency,
  // //         amount: response.data.amount,
  // //         order_id: response.data.id,
  // //         description: "Test Transaction",
  // //         handler: function (response) {
  // //           const update_object = {
  // //             payment_id: response.razorpay_payment_id,
  // //             order_id: response.razorpay_order_id,
  // //             signature: response.razorpay_signature,
  // //             customer_id: users?.id,
  // //           };
  // //           dispatch(updateOrderAfterPayment(update_object));
  // //           dispatch(setPyamentRazorpayStatus());
  // //           toast.success("Payment Successful");
  // //         },
  // //         prefill: {
  // //           name: `${firstname} ${lastname}`,
  // //           email: email,
  // //           contact: mobile,
  // //         },
  // //       };

  // //       const paymentObject = new window.Razorpay(options);
  // //       paymentObject.open();
  // //     } catch (error) {
  // //       console.error("Error initiating payment:", error);
  // //       toast.error("Payment Failed");
  // //     }

  // //     setShipping({
  // //       email: "",
  // //       firstname: "",
  // //       lastname: "",
  // //       address1: "",
  // //       address2: "",
  // //       city: "",
  // //       state: "",
  // //       zipcode: "",
  // //       country: "INDIA",
  // //       mobile: "",
  // //       Company_Name: "",
  // //       GSTIN: "",
  // //     });
  // //     setAddType("");
  // //   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(`http://localhost:1337/api/razorpay`, {
  //       amount: total, // Use the actual amount here
  //       currency: "INR",
  //     });

  //     const options = {
  //       key: "rzp_test_8FGr7gQUWFoJ94", // Enter the Key ID generated from the Dashboard
  //       name: "SkullCandy",
  //       currency: response.data.currency,
  //       amount: response.data.amount,
  //       order_id: response.data.id,
  //       description: "Test Transaction",
  //       handler: function (response) {
  //         const update_object = {
  //           payment_id: response.razorpay_payment_id,
  //           order_id: response.razorpay_order_id,
  //           signature: response.razorpay_signature,
  //           customer_id: users?.id,
  //         };
  //         dispatch(updateOrderAfterPayment(update_object));
  //         dispatch(setPyamentRazorpayStatus());
  //         toast.success("Payment Successful");
  //       },
  //       prefill: {
  //         name: `${shipping.firstname} ${shipping.lastname}`,
  //         email: shipping.email,
  //         contact: shipping.mobile,
  //       },
  //     };

  //     const paymentObject = new window.Razorpay(options);
  //     paymentObject.open();
  //   } catch (error) {
  //     console.error("Error initiating payment:", error);
  //     toast.error("Payment Failed");
  //   }

  //   setShipping({
  //     email: "",
  //     firstname: "",
  //     lastname: "",
  //     address1: "",
  //     address2: "",
  //     city: "",
  //     state: "",
  //     zipcode: "",
  //     country: "INDIA",
  //     mobile: "",
  //     Company_Name: "",
  //     GSTIN: "",
  //   });
  //   setAddType("");
  // };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* <div className="form-delivery">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <input
                required
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                name="email"
                onChange={handleChange}
              />
              <span className="text-danger">{emailError}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Email me with news and offers
                </label>
              </div>
            </div>
          </div>
          <h4>Delivery</h4>
          <div>
            <div className="row">
              <div className="col-lg-12">
                <select
                  required
                  className="form-control"
                  name="country"
                  value={country}
                  onChange={handleChange}
                >
                  <option value="INDIA" disabled>
                    INDIA
                  </option>
                </select>
                <span className="text-danger">{countryError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  className="form-control"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                />
                <span className="text-danger">{firstNameError}</span>
              </div>
              <div className="col-lg-6">
                <input
                  required
                  type="text"
                  placeholder="Last name"
                  className="form-control"
                  value={lastname}
                  name="lastname"
                  onChange={handleChange}
                />
                <span className="text-danger">{lastNameError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  required
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  value={address1}
                  name="address1"
                  onChange={handleChange}
                />
                <span className="text-danger">{address1Error}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="form-control"
                  value={address2}
                  name="address2"
                  onChange={handleChange}
                />
                <span className="text-danger">{address2Error}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
                <span className="text-danger">{cityError}</span>
              </div>
              <div className="col-lg-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  name="state"
                  value={state}
                  placeholder="State"
                  onChange={handleChange}
                />
                <span className="text-danger">{stateError}</span>
              </div>
              <div className="col-lg-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="ZIP code"
                  value={zipcode}
                  name="zipcode"
                  onChange={handleChange}
                />
                <span className="text-danger">{postcodeError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  required
                  className="form-control"
                  placeholder="mobile"
                  type="number"
                  value={mobile}
                  name="mobile"
                  maxLength={10}
                  onChange={handleChange}
                />
                <span className="text-danger">{phoneError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="form-control"
                  name="Company_Name"
                  value={Company_Name}
                  onChange={handleChange}
                />
                <span className="text-danger">{CompanyNameError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="GSTIN (Use Capital Letter) (Optional)"
                  className="form-control"
                  name="GSTIN"
                  value={GSTIN}
                  onChange={handleChange}
                />
                <span className="text-danger">{GSTINError}</span>
              </div>
            </div>
            {isOtpSend ? (
              ""
            ) : (
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="otp">
                  OTP&nbsp;<span className="required">*</span>
                </label>
                <span className="password-input">
                  <input
                    type="number"
                    name="otp"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <span className="show-password-input" />
                </span>
              </p>
            )}
            {isOtpVerify ? (
              <div className="row">
                <div className="col-lg-12">
                  <button className="btn btn-dark mt-2" type="submit">
                    Pay Now
                  </button>
                </div>
              </div>
            ) : (
              <>
                {isOtpSend ? (
                  <button
                    type="submit"
                    className="woocommerce-Button button woocommerce-form-login__submit"
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </button>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="woocommerce-Button button woocommerce-form-login__submit"
                      onClick={handleVerifyOtp}
                    >
                      Verify OTP
                    </button>
                    <span onClick={handleResendOtp}>Resend OTP?</span>
                  </>
                )}
              </>
            )}
          </div>
        </form>
      </div> */}
      <div className="form-delivery">
        <form onSubmit={handleSubmit}>
          <h4>Delivery</h4>
          <div>
            <div className="row">
              <div className="col-lg-12">
                <select
                  required
                  className="form-control"
                  name="country"
                  value={country}
                  onChange={handleChange}
                >
                  <option value="INDIA" disabled>
                    INDIA
                  </option>
                </select>
                <span className="text-danger">{countryError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  className="form-control"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                />
                <span className="text-danger">{firstNameError}</span>
              </div>
              <div className="col-lg-6">
                <input
                  required
                  type="text"
                  placeholder="Last name"
                  className="form-control"
                  value={lastname}
                  name="lastname"
                  onChange={handleChange}
                />
                <span className="text-danger">{lastNameError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  required
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  value={address1}
                  name="address1"
                  onChange={handleChange}
                />
                <span className="text-danger">{address1Error}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="form-control"
                  value={address2}
                  name="address2"
                  onChange={handleChange}
                />
                <span className="text-danger">{address2Error}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
                <span className="text-danger">{cityError}</span>
              </div>
              <div className="col-lg-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  name="state"
                  value={state}
                  placeholder="State"
                  onChange={handleChange}
                />
                <span className="text-danger">{stateError}</span>
              </div>
              <div className="col-lg-4">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="ZIP code"
                  value={zipcode}
                  name="zipcode"
                  onChange={handleChange}
                />
                <span className="text-danger">{postcodeError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  required
                  className="form-control"
                  placeholder="mobile"
                  type="tel"
                  value={mobile}
                  name="mobile"
                  maxLength={10}
                  onChange={handleChange}
                />
                <span className="text-danger">{phoneError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
                <span className="text-danger">{emailError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="form-control"
                  name="Company_Name"
                  value={Company_Name}
                  onChange={handleChange}
                />
                <span className="text-danger">{CompanyNameError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="GSTIN (Use Capital Letter) (Optional)"
                  className="form-control"
                  name="GSTIN"
                  value={GSTIN}
                  onChange={handleChange}
                />
                <span className="text-danger">{GSTINError}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <button className="btn btn-dark mt-2" type="submit">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ShippingForm;
