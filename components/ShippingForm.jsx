import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBilling,
  addShippingDetails,
  fetchState,
  saveAddress,
  createGuestCheckout,
} from "../features/CheckOut/checkOutSlice";
import {
  MDBBtn,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";

function ShippingForm() {
  const { users } = useSelector((state) => state.auth);
  // const [email, setEmail] = useState();
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

  const [shipping, setShipping] = useState({
    email: "",
    first_name: "",
    last_name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    postcode: "",
    country: "INDIA",
    phone: "",
    Company_Name: users?.Company_Name ? users?.Company_Name : "",
    GSTIN: users?.GSTIN ? users?.GSTIN : "",
  });

  const {
    email,
    first_name,
    last_name,
    address_1,
    address_2,
    city,
    state,
    postcode,
    country,
    phone,
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

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setShipping({ ...shipping, [name]: value });

    if (name === "postcode" && value.length === 6) {
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
          // Handle case where no data is found for the postcode
          console.log("No data found for the postcode");
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
        // Handle error, show error message, etc.
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validations

    let isValid = true;

    if (!first_name || first_name.length > 10) {
      setFirstNameError(
        "First name is required and should be 10 characters or less"
      );
      isValid = false;
    } else if (!/^[a-zA-Z]*$/.test(first_name)) {
      setFirstNameError("Name should only contain letters");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!last_name || last_name.length > 10) {
      setLastNameError(
        "Last name is required and should be 10 characters or less"
      );
      isValid = false;
    } else if (!/^[a-zA-Z]*$/.test(last_name)) {
      setLastNameError("Name should only contain letters");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (!address_1 || address_1.length > 30) {
      setAddress1Error(
        "Address Line 1 is required and should be 30 characters or less"
      );
      isValid = false;
    } else {
      setAddress1Error("");
    }

    if (address_2.length > 30) {
      setAddress2Error(
        "Address Line 2 is required  nd should be 30 characters or less"
      );
      isValid = false;
    } else {
      setAddress2Error("");
    }
    if (!phone || phone.length !== 10 || isNaN(phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!city) {
      setCityError("City is required");
      isValid = false;
    } else {
      setCityError("");
    }

    if (!state) {
      setStateError("State is required");
      isValid = false;
    } else {
      setStateError("");
    }

    if (!country) {
      setCountryError("Country is required");
      isValid = false;
    } else {
      setCountryError("");
    }

    if (!postcode) {
      setPostcodeError("Postal code is required");
      isValid = false;
    } else {
      setPostcodeError("");
    }

    if (!isValid) {
      return;
    }

    if (users?.id) {
      dispatch(saveAddress(shipping));
    }
    dispatch(createGuestCheckout(shipping))
      .then(() => dispatch(addBilling(shipping)))
      .then(() => dispatch(addShippingDetails(shipping)));

    setShipping({
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "INDIA",
      phone: "",
      Company_Name: "",
      GSTIN: "",
    });
    setAddType("");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError]);

  return (
    <>
      <div className="form-delivery">
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
              <span className="text-danger">{email}</span>
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
          <p>{users?.email}</p>
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
                  name="first_name"
                  value={first_name}
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
                  value={last_name}
                  name="last_name"
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
                  value={address_1}
                  name="address_1"
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
                  value={address_2}
                  name="address_2"
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
                  value={postcode}
                  name="postcode"
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
                  placeholder="Phone"
                  type="number"
                  value={phone}
                  name="phone"
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
