import { MDBModalContent } from 'mdb-react-ui-kit'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/navigation'
import { loginWithGoogle, reset, userLogin, userRegister, loginWithFacebook as facebookLogin } from '@/features/authSlice'
// import { GoogleLogin } from '@react-oauth/google';
// import { FacebookLoginButton } from "react-social-login-buttons";
// import { LoginSocialFacebook } from "reactjs-social-login";
// import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { htmlToText } from 'html-to-text'
import { addToCartforGuestafterLogin, getCartData, getWishlist } from '@/features/Cart/cartnWishSlice'
import $ from "jquery";

function Account({ toggleShow ,Active}) {

    const { users, isError, isSuccess, message, isLoading } = useSelector(state => state.auth)

    //google login
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentialResponse, setCredentialResponse] = useState(null);

    // // Refrences
    const tabRef = useRef(null)


     
    useEffect(() => {
        const storedCredentialResponse = JSON.parse(localStorage.getItem('googleCredentialResponse'));
        if (storedCredentialResponse) {
            setIsAuthenticated(true);
            setCredentialResponse(storedCredentialResponse);
        }
    }, []);

    const [resdirectURL, setRedirectURL] = useState(false)

    const [active, setActive] = useState(false)

    const [pop, setPop] = useState(true)

    const [pswdIcon, setPswdIcon] = useState(true)

    const [cpswdIcon, setCPswdType] = useState(true)

    const [loginPswdIcon, setLoginPswdIcon] = useState(true)

    const [phoneError, setPhoneError] = useState('')

    const [passwordError, setPasswordError] = useState('')

    const [notMatch, setNotMatch] = useState('')

    const [inputType, setInputType] = useState('password')

    const [conType, setConType] = useState('password')

    const [loginPswdType, setLoginPswdType] = useState('password')

    const [msgError, setMsgError] = useState('')

    const [UserNameError, setUserNameError] = useState('')
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [resetBtn, setResetBtn] = useState('')
    const [error, setError] = useState('')

    const handleSignup = () => {
        setActive(true)
        setPop(false)
    }

    const handlelogin = () => {
        setPop(true)
        setActive(false)
    }

    const dispatch = useDispatch()

    // const navigate = useNavigate()
    const router = useRouter();
    const [formData, setFormData] = useState({

        "first_name": '',
        "last_name": '',
        "username": '',
        "email": '',
        "password": '',
        "confirmPswd": '',

    })

    const [phone, setPhone] = useState()

    const [loginData, setLoginData] = useState({
        "username": '', "password": ''
    })

    const { email, first_name, last_name, username: userName, password, confirmPswd, mobile } = formData
    const { username, password: lpswd } = loginData

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[a-zA-Z\d!@#$%^&]{5,}$/;

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
        if (!userName || userName.length > 10) {
            setUserNameError('User name is required and should be 10 characters or less');
            isValid = false;
        } else {
            setUserNameError('');
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!phone || phone.length !== 10 || isNaN(phone) || !/[6-9]/.test(phone.charAt(0))) {
            setPhoneError('Enter a valid 10-digit phone number');
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (password !== confirmPswd) {
            setNotMatch('Password and Confirm Password Do Not Match');
            // console.log(passwordError)
            isValid = false;
        }
        else {
            setNotMatch('')
            if (!password.match(passwordPattern)) {
                setPasswordError("Password should be at least 5 characters long and include at least one special character,one lowercase letter , one uppercase letter and one number .");
                isValid = false;
            } else {
                setPasswordError('');
            }
        }


        if (!isValid) {
            return;
        }

        const data = { ...formData, billing: { phone: phone } }
        dispatch(userRegister(data))
    }

    const Login = (e) => {
        e.preventDefault()
        dispatch(userLogin(loginData))

    }
    const handleForgot = (e) => {
        e.preventDefault()
       router.push('/forgot-email')
        toggleShow()
    }

    //show and hide password
    const showLoginPassword = () => {

        if (loginPswdType === "password") {
            setLoginPswdIcon(false)
            setLoginPswdType('text')
        }
        else {
            setLoginPswdIcon(true)
            setLoginPswdType('password')

        }
    }

    const showPassword = (e, pswdId) => {

        if (inputType === "password") {
            setPswdIcon(false)
            setInputType('text')
        }
        else {
            setPswdIcon(true)
            setInputType('password')

        }
    }

    const showConfirmPassword = (e, pswdId) => {
        if (conType === "password") {
            setCPswdType(false)
            setConType('text')
        }
        else {
            setCPswdType(true)
            setConType('password')
        }
    }

    // login with google
    const responseGoogle = (response) => {
        // console.log(response)
        dispatch(loginWithGoogle(response.credential))
    }

const hidePop =()=>{
   
    $("#accountToggle").css("display", "none");
    $(".modal-backdrop").css("display", "none");
    // const div =  document.querySelector('accountToggle') 
    //   div.classList.remove('show') 
}
    //for login and register after success
    useEffect(() => {
        if (isSuccess)
        {
            setPop(false)
            setActive(false)
            setError(' ')
            setMsgError(' ')   
            hidePop()
            
             
        }
        if (isSuccess && users?.success === true && users?.id) {
            // console.log('from')
            //router.push('/')
            // alert("hello");
        
            setActive(false)
            setRedirectURL(true)
            dispatch(getCartData())
            dispatch(getWishlist())
            const Cart = JSON.parse(localStorage?.getItem('cart'))
            const lineItems = Cart?.map((item) => {
                return {  
                    "product_id": item?.id,
                    "quantity": item?.quantity,
                    "SKU": item?.SKU,
                    "name": item?.name,
                    "Variations_Color_Name": item?.Variations_Color_Name,
                    "Variations_Price": item?.Variations_Price,
                    "Variant_Image_url": item?.Variant_Image_url,
                    "Sales_price": item?.Sales_price 
                }
            })
            if (Cart?.length !== 0) {
                dispatch(addToCartforGuestafterLogin(lineItems))
            }

        }
        if (isError) {
            // setMsgError('abc')
            if (message) {
                if (htmlToText(message).includes("Lost")) {
                    const passwordIndex = htmlToText(message).indexOf('Lost');
                    const trimmedMessage = htmlToText(message).substring(0, passwordIndex);
                    setMsgError(htmlToText(trimmedMessage))
                    //setResetBtn("Reset Your Password")
                }
                else { setError(htmlToText(message)) }
            }

            else {
                // const passwordIndex = message.indexOf('<a');
                // //console.log(passwordIndex)
                // const trimmedMessage = message.substring(0, passwordIndex);
                // console.log(trimmedMessage)
                // setError(trimmedMessage)
                //toast.error(message)
            }

        }
        dispatch(reset())
        // console.log('from login section')
    }, [users, isError,isSuccess])


    //focus on tab press
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPswdRef = useRef(null);

    const handleTabKeyDown = (e) => {
        //console.log('e', e)
        if (e.key === 'Tab') {
            e.preventDefault();
            // Define an array of refs to your input fields in the desired tab order
            const inputRefs = [
                firstNameRef,
                lastNameRef,
                userNameRef,
                emailRef,
                mobileRef,
                passwordRef,
                confirmPswdRef
            ];

            // Find the currently focused input field
            const focusedIndex = inputRefs.findIndex(ref => ref.current === document.activeElement);

            // Determine the next input field to focus on
            const nextIndex = (focusedIndex + 1) % inputRefs.length;

            // Focus on the next input field
            inputRefs[nextIndex].current.focus();
        }
    };


    //for facebook login
    const loginWithFacebook = () => {
        FB.login(function (response) {
            if (response.authResponse) {
                // localStorage.setItem('facebook', JSON.stringify(response))
                const access_token = response?.authResponse?.accessToken
                // console.log(response?.authResponse?.accessToken)
                handleFacebookLogin(access_token);

                //dispatch(loginWithFacebook(response?.authResponse?.accessToken))
                // console.log('Logged in with Facebook', response);
            } else {
                // console.log('Facebook login cancelled.');
            }
        }, { scope: 'email' });
    };
    //fb init
    window.fbAsyncInit = function () {
        FB.init({
            appId: process.env.VITE_FACEBOOK_APPID,
            cookie: false,
            xfbml: true,
            version: 'v12.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    const handleFacebookLogin = (access_token) => {
        // Pass the 'access_token' when calling the 'loginWithFacebook' action
        dispatch(facebookLogin(access_token))
    };


    //redierct to same page after login and register
    // if (isSuccess && users?.success === true && users?.id && resdirectURL) {
    //    router.push(window.location.href)
    // }


    return (
        <>
            <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
                <MDBModalContent  >
                    <div className='d-flex justify-content-end p-1'><span className='btn-close' onClick={toggleShow} color='none' ></span>
                    </div>
                    <section>
                        <p className='fs-6 px-3 mb-1'>Get access to your Orders, Wishlist and Recommendations</p>
                        {
                            active ?
                                <>
                                    <form className="px-3 formBorder" onSubmit={handleSubmit} onKeyDown={(e) => { handleTabKeyDown(e) }}>
                                        <div className="mb-3">
                                            <input type="text" id='tabInput'
                                                required name="first_name" placeholder="First Name*" className="form-control" value={first_name} onChange={handleChange} ref={firstNameRef}
                                                tabIndex="1" />
                                            <span className='text-danger'>{firstNameError}</span>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text"
                                                required name="last_name" placeholder="Last Name*" className="form-control" value={last_name} onChange={handleChange} ref={lastNameRef} tabIndex='2' />
                                            <span className='text-danger'>{lastNameError}</span>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" required name="username" placeholder="User Name*" className="form-control" value={userName} onChange={handleChange} ref={userNameRef} tabIndex='3' />
                                            <span className='text-danger'>{UserNameError}</span>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" required name="email" placeholder="Email Id*" className="form-control" value={email} onChange={handleChange}
                                                ref={emailRef} tabIndex='4' />
                                            <span className='text-danger'>{emailError}</span>
                                        </div>
                                        <div className="mb-3">
                                            <input type="number" required placeholder="Mobile*" className="form-control" onChange={(e) => { setPhone(e.target.value) }} ref={mobileRef} tabIndex='5'
                                            />
                                            <span className='text-danger'>{phoneError}</span>
                                        </div>
                                        <div className="input-group mb-3">

                                            <input type={inputType} id="pswd" required name="password" placeholder="Password*" className="form-control" value={password} onChange={handleChange} ref={passwordRef} tabIndex='6' />
                                            <span className="input-group-text bg-light border border-start-0" id="basic-addon2"><i onClick={(e) => showPassword(e, "pswd")} className={pswdIcon ? "fa fa-light fa-eye" : "fa fa-sharp fa-light fa-eye-slash"} style={{ "color": "#030303" }}></i></span>
                                        </div>
                                        <div className="mb-3 input-group">


                                            <input type={conType} id="conPswd" required name="confirmPswd" placeholder="Confirm Password*" className="form-control" value={confirmPswd} onChange={handleChange} aria-describedby="emailHelp" ref={confirmPswdRef} tabIndex='7' />
                                            <span className="input-group-text bg-light border border-start-0" id="basic-addon2"><i onClick={(e) => showConfirmPassword(e, "conPswd")} className={cpswdIcon ? "fa fa-light fa-eye" : "fa fa-sharp fa-light fa-eye-slash"} style={{ "color": "#030303" }}></i></span>


                                        </div>
                                        <span className='text-danger'>{notMatch}</span>
                                        <span className='text-danger'>{passwordError}</span>


                                        <div className="mb-3  ">
                                            {
                                                isLoading == true ? <><button className="buttonload btn btn-dark">
                                                    <i className="fa fa-spinner fa-spin me-3"></i>Loading
                                                </button></> : <>
                                                    <button type="submit" className="btn register-btn w-100" >Register sa</button>
                                                </>
                                            }
                                            <span className='text-danger'>{error}</span>
                                        </div>

                                        <div>
                                            <p >Already Have An Account?<span className='ms-2 text-decoration-underline cursor-poniter' style={{ cursor: "pointer", "color": "#13769B", letterSpacing: '1px' }} onClick={handlelogin}>SignIn</span></p>

                                        </div>
                                    </form>

                                </> :
                                <>
                                    <form className="px-3 py-2 formBorder" onSubmit={Login}>

                                        <div className="mb-3">


                                            <input required type="text" name="username" placeholder="User Name or Email Address*" className="form-control" aria-describedby="emailHelp" value={username} onChange={handleLogin} />

                                        </div>
                                        <div className="mb-3 input-group">

                                            <input required type={loginPswdType} name="password" placeholder="Password*" className="form-control" id="pswd" value={lpswd} onChange={handleLogin} />
                                            <span className="input-group-text bg-light border border-start-0" ><i onClick={(e) => showLoginPassword(e, "pswd")} className={loginPswdIcon ? "fa fa-light fa-eye" : "fa fa-sharp fa-light fa-eye-slash"} style={{ "color": "#030303" }}></i></span>

                                        </div>
                                        {
                                            isLoading == true ? <><button className=" btn btn-dark w-100">
                                                <i className="fa fa-spinner fa-spin me-3"></i>Loading
                                            </button></> : <>
                                                <button className="mb-3  btn w-100 register-btn" type='submit' 
                                                // onClick={(e) => { Login(e) }}
                                                 >Login</button>
                                            </>
                                            
                                        }
                                          <span className='text-danger'>{msgError}</span><br />
                                    </form>
                                  
                                   <div className='px-3 py-2 formBorder'>
                                   <span className=''>
                                        <button className='border-0 p-0 forgot-btn btn btn-default' onClick={(e) => handleForgot(e)}>Forgot Password?</button>
                                    </span>
                                    <div className="line-container">
                                        <div className="line"></div>
                                        <div className="or">OR</div>
                                        <div className="line"></div>
                                    </div>

                                    <div className='p-1'>

                                        <div style={{ width: '100%', maxWidth: '1000px' }}>

                                            {/* <GoogleLogin
                                                clientId={process.env.VITE_GOOGLE_CLIENT_ID}
                                                render={renderProps => (
                                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                                                )}
                                                buttonText="Login"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            /> */}

                                        </div>
                                    </div>
                                    {/* <div className=''>

                                        <FacebookLoginButton onClick={loginWithFacebook} />
                                    </div> */}
                                    <div className="mb-1">
                                        <p>Dont't Have An Account?<span className='ms-2 text-decoration-underline cursor-poniter' style={{ cursor: "pointer", "color": "#13769B", letterSpacing: '1px' }} onClick={handleSignup}>SignUp</span></p>
                                    </div>
                                   </div>

                                </>
                        }

                    </section>
                </MDBModalContent>
            </GoogleOAuthProvider >
        </>
    )
}

export default Account