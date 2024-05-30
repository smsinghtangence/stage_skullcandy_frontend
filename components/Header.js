'use client'
import React from 'react'
import $ from 'jquery'
import {useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@/components/Drawer";
import { getDataWithQuery, geturl } from "@/utils/api"
import MobileMenu from '@/components/MobileMenu'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
function header() {

  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
useSelector((state) => state.auth);
const { cart, wishlist } = useSelector((state) => state.cartWish);
  useEffect(() => {
   
    $(".cart_btn").click(function(){
      $(".drawer").addClass("active")
    })
 $(".drawer-close").click(function(){
  $(".drawer").removeClass("active")
 });

  }, [])

/////////////////////////

   
const [isVisible, setIsVisible] = useState(false);

// Function to show the div
const showDiv = () => {
  setIsVisible(true);
};

// Function to hide the div
const hideDiv = () => {
  setIsVisible(false);
};


const [menu, setMenu] = useState();
  const getdata = async () => {
    const response = await getDataWithQuery(`/api/product-categories?populate[1]=parent_category&populate=Product_Category_Img`,
      {
      });
      setMenu( response?.data)
    return response;
  }
  useEffect(() => {
    getdata();
  }, []);

  var parent_category,sub_category;
 

//   useEffect(() => {
//     console.log("menu  "+JSON.stringify(menu));
//     // const parent_category = menu?.filter(item => item?.attributes?.parent_category.some(it => it?.data === "null"));


//       parent_category = menu?.filter(function (item) { return  item?.attributes?.parent_category?.data == null ; });
// console.log("parent_category "+JSON.stringify(parent_category));

    
//   }, [menu]);

  // console.log("menu  "+JSON.stringify(menu));
  // const parent_category = menu?.filter(item => item?.attributes?.parent_category.some(it => it?.data === "null"));


    parent_category = menu?.filter(function (item) { return  item?.attributes?.parent_category?.data == null ; });
// console.log("parent_category "+JSON.stringify(parent_category));



const submenu = (cat) =>{

   sub_category = menu?.filter(function (item) { return  item?.attributes?.parent_category?.data?.attributes?.Name == cat ; });



  return sub_category.map((c,i)=>(

     
    <li>
      <Link href={"/collection/" + c?.attributes?.slug}>{c?.attributes?.Name} </Link>
    </li>
     
  )

)

}

const [isMenuVisible, setMenuIsVisible] = useState(false);

const handleShow = () => {
  setMenuIsVisible(!isMenuVisible);
};
const handleHide = () => {
  setMenuIsVisible(false);
};
//////////////////////////////////

  return (

    <>
      <div className="skull_popup_bg" />
      <header>
      {isMenuVisible && (
        <div className="mobile-search-blk"  >
          <form>
            <input type="text" className='mobile-input' placeholder='Search' />
            <img src="images/close.png" alt="" className='mobile-close' onClick={handleHide} />
          </form>
        </div>
      )}
        <div className="container-fluid top_header">
          <div className="container">
            <div className="row">
              <div className='mobile-menu'>
                {/* <MobileMenu  /> */}
              </div>
              <div className="col-lg-12">
                <div className="header-blk">

                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/images/skullcandy_logo.svg"
                        alt="logo"
                        title="Skullcandy"
                      />
                    </Link>
                  </div>

                  <div className="header-nav">
                    <div className="navigation main_menu">
                      <div className="skull_menu">
                        <ul id="menu-main-menu" className="menu">
          
                          {parent_category?.map((m,mi)=>(<>
                          


                          {/*  */}
                          <li className="megamenu menu-item-has-children">
                            <Link href={"/collection/"+m?.attributes?.slug} >{m?.attributes?.Name}</Link>

                            <ul className="sub-menu">
                              <li className="menu-item-has-children menu-left-blk">
                                <Link href={"/collection/"+m?.attributes?.slug}>
                                  <h5>{m?.attributes?.Name}</h5>
                                </Link>
                                <ul key={mi}>
                                  
                                  {submenu(m?.attributes?.Name)}
                                   
                                </ul>
                              </li>

                              <li className='menu-right-blk'>
                                <ul className="menu-img-list">
                                  <li><Link href="#"><img src="/images/menu-img1.png" alt="" /><h5>Product Guide</h5></Link></li>
                                  <li><Link href="#"><img src="/images/menu-img1.png" alt="" /><h5>Product Guide</h5></Link></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          {/*  */}
                          </>))}
                         
                          {/* menu li */}

                     

                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className="header-right-blk">
                    <div className="tab_hide">
                      <div className="header-right-menu">
                        <div className="skull_menu">
                          <ul id="menu-right-menu" className="menu">
                            <li className='nav-search'>
                              <input type="search" className='search' />
                              <img src="images/search.png" alt="" className='search-icon' />
                            </li>
                         
                            <li className="megamenu menu-item-has-children locations_menu mobile_text_menu ">
                              <Link href="#">
                             
                                <img src="/images/IN_EN_FLAG.png" /> <span>LOCATION</span>
                              </Link>
                              <ul className="sub-menu">
                                <li className="menu-item-has-children ">
                                  <Link href="#">North America</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Canada</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Mexico</Link>
                                    </li>
                                    <li>
                                      <Link href="#">United States</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item-has-children">
                                  <Link href="#">Europe / Middle East</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">United Kingdom</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Europe (EN)</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children ">
                                  <Link href="#">Asia</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Japan | 日本</Link>
                                    </li>
                                    <li>
                                      <Link href="#">China | 中国</Link>
                                    </li>
                                    <li>
                                      <Link href="#">South Korea | 대한민국</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Taiwan | 臺灣</Link>
                                    </li>
                                    <li>
                                      <Link href="#" aria-current="page">
                                        India
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children">
                                  <Link href="#">South America</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Chile</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Peru</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Other Middle Eastern Countries</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children ">
                                  <Link href="#">Africa</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">South Africa</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item-has-children">
                                  <Link href="#">Pacific</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Australia</Link>
                                    </li>
                                    <li>
                                      <Link href="#">New Zealand</Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="no_hover mobile_text_menu ">
                              <Link href="/my-account/">
                                <img src="/images/user.png" alt="" />
                                <span>Account</span>
                              </Link>
                            </li>
                            {/* <li className="no_hover search_btn mobile_text_menu ">
                   <Link href="#">
                      <svg
                        viewBox="0 0 22.922 22.158"
                        id="search"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <g
                          id="Group_762"
                          data-name="Group 762"
                          transform="translate(-1079.439 -1360.5)"
                        >
                          {" "}
                          <circle
                            id="Ellipse_174"
                            data-name="Ellipse 174"
                            className="cls-1"
                            cx="8.084"
                            cy="8.084"
                            r="8.084"
                            transform="translate(1079.939 1361)"
                          />{" "}
                          <line
                            id="Line_224"
                            data-name="Line 224"
                            className="cls-1"
                            x2="7.571"
                            y2="7.443"
                            transform="translate(1094.44 1374.859)"
                          />{" "}
                        </g>{" "}
                      </svg>
                      <span>Search</span>
                    </Link>
                  </li> */}
                            <li className="no_hover cart_btn header-cart">
                              <Link href="#">
                                <img src="/images/store.png" alt="" />
                                <span className='badges'>{cart?.length}</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>




           
              <div className="col-md-12 tab_header">
              {/* <div className="mobile-search-blk">
                <input type="search" />
                <i className='fa fa-close'></i>
               </div> */}
                <div className="row">
                  <div className="col-md-3 col-3">
                    <div className="skull_nav_button"  onClick={showDiv}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="col-md-6 col-6 text-center">
                    <div className="logo_box">
                      <Link href="/">
                        <img
                          src="/images/skullcandy_logo.svg"
                          alt="logo"
                          title="Skullcandy"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3 col-3 text-right">
                    <div className="mobile-right-blk">
                      <div className="mobile-search">
                        <img src="/images/search.png" alt="" onClick={handleShow} />
                      </div>
                      <div className="tab_cart_btn cart_btn ">
                        <img src="/images/store.png" alt="" className='mobile-store' />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skull_mobile_menu" />
          <div className="menu_bg">
            <svg
              id="skull-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 38"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g transform="translate(-348.000000, -8.000000)" fill="#FEFEFE">
                  <g transform="translate(348.000000, 8.000000)">
                    <g>
                      <path d="M20.6616311,27.1038396 C17.6180284,27.1038396 15.1460028,24.5702667 15.1460028,21.4383393 C15.1460028,18.3100057 17.6180284,15.7746359 20.6616311,15.7746359 C23.7088399,15.7746359 26.1826686,18.3100057 26.1826686,21.4383393 C26.1826686,24.5702667 23.7088399,27.1038396 20.6616311,27.1038396 M13.4493025,31.0281823 C12.8560885,30.3310006 10.4796263,30.2411576 9.54562973,30.5915453 C8.61163318,30.9365425 7.67943972,30.4172499 8.44394654,28.0615661 C9.2048472,25.7112729 9.97115711,24.6637034 9.97115711,24.6637034 C9.97115711,24.6637034 14.9783162,30.068659 15.0630611,30.7676376 C15.1460028,31.4630225 14.0425166,31.7235672 13.4493025,31.0281823 M23.8044032,11.5897484 C22.6161721,8.3661812 30.5064595,0 15.9970576,0 C3.60627718,0 2.44328921,12.2168527 1.9095769,13.1584074 C1.31636287,14.2041801 0.49235434,15.0307358 0.126328667,16.7341593 C-0.210847691,18.3046151 0.126328667,20.0439758 1.14507007,20.0439758 C2.67408372,20.0439758 0.804287549,16.994704 2.67047756,16.994704 C5.04693981,16.994704 7.85073252,20.8310006 8.61163318,23.0087952 C7.3386572,25.2746359 5.55901513,26.7570456 4.28423606,26.1497068 C3.01126008,25.5351806 1.65353923,24.5774541 1.65353923,22.6584074 C1.65353923,21.2550596 0.339092359,21.3017779 0.46711119,23.0932476 C0.638403993,25.5351806 1.82483204,26.9295442 3.52153232,28.2376584 C5.19479254,29.527804 7.3386572,31.9877057 8.18790888,34.0756573 C8.76850133,35.5077549 9.54562973,36.1707963 11.6696605,36.1707963 C13.788282,36.1707963 12.1763266,38 13.6205953,38 C15.0630611,38 14.2156124,35.9911103 15.0630611,35.9911103 C15.9123127,35.9911103 15.061258,37.9119538 16.6768196,37.9119538 C19.1344205,37.9119538 18.0327373,34.8608852 18.7990472,34.336202 C19.561751,33.8151125 30.1674801,28.2340647 29.9979904,21.35209 C29.8285006,14.5581615 24.9926344,14.8151125 23.8044032,11.5897484" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="search_box header_action">
          <div className="form_box">
            <form
              role="search"
              method="get"
              id="searchform"
              className="searchform"
              action="/"
            >
              <input
                type="search"
                placeholder="Search"
                name="s"
                id="s"
                autoComplete="off"
                defaultValue=""
              />
              <input
                type="hidden"
                placeholder="Search"
                name="page"
                id="page"
                defaultValue="head"
              />
            </form>
            <span className="close_btn" />
          </div>
        </div>
        <div className="cart_box header_action ">
          <div className="form_box">
            <form>
              <h4>SHOPPING BAG</h4>
              <p className="cart_empty_msg">Your bag is empty</p>
              <div className="header_cart_box">
                <div id="cart_item_area" className="cart_item_area"></div>
              </div>
              <div className="cart_action">
                <Link href="#" className="theme_btn dark">
                  CHECKOUT
                </Link>
                <Link href="#" className="theme_btn no_effect sml">
                  View Full Bag
                </Link>
              </div>
            </form>
            <span className="close_btn" />
          </div>
        </div>
      </header>
      {/* <div
    id="latest-offer"
    style={{
      width: "100%",
      textAlign: "center",
      color: "#fff",
      padding: "1em",
      backgroundColor: "#fff",
      marginBottom: "-5px",
      borderTop: "1px solid #2c2c2d"
    }}
  >
   <Link href="#">
      Use Coupon Code <b>MRP65</b> Get Flat{" "}
      <b style={{ fontSize: 22, color: "#f47c35" }}>65% OFF</b> on MRP{" "}
      <b>SHOP NOW &gt;</b>
    </Link>
  </div> */}
      {/* <div style={{ width: "100%", height: "auto", mergin: "auto" }} className='ads-banner-top'>
   <Link href="#">
      <img
        style={{ width: "100%" }}
        src="/images/Deal-of-the-day-Smokin-Buds_Skullcandy_new_year.gif"
      />
    </Link>
  </div> */}
      {/* <marquee

    style={{ color: "#fff", marginBottom: 0, padding: "-2px" }}
  >
    <span
      style={{
        backgroundColor: "#000",
        fontSize: 17,
        padding: "11px 41px 0px 41px",
        fontWeight: 500,
        color: "#fff",
        lineHeight: 1
      }}
    >
      Get Additional 5% off upto ₹500 on all prepaid orders
    </span>
  </marquee> */}

      {/* <section className="drawer">
        <div className="drawer-content">
         
          <div className="drawer-header">
          <h2>Your Bag</h2>
          <span className="drawer-close">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 30 30">
              <g data-name="Ellipse 40" fill="#000" stroke="#000" stroke-width="2">
                <circle cx="15" cy="15" r="15" stroke="none"></circle>
                <circle cx="15" cy="15" r="14" fill="none"></circle>
              </g>
              <line data-name="Line 92" y2="20" transform="translate(22.57 8.429) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
              <line data-name="Line 93" x2="20" transform="translate(8.43 8.429) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
            </svg>
          </span>
          </div>

          <div className="drawer-body">

            <div className="drawer-product-list">
              <div className="dpl-img">
                <img src="https://cdn.shopify.com/s/files/1/0635/5114/3993/files/Hesh_ANC_buy_box_black_1.png" alt="" />
              </div>
              <div className="dpl-title">
                <Link href="#">Hesh® ANC</Link>
                <span className="product-option"> True Black </span>
                <div className="quantity-wrapper">
                  <span className="quantity-dec">--</span>
                  <input type="text" value="1" />
                  <span className="quantity-inc">+</span>
                </div>
              </div>
              <div className="dpl-price">
                <h4>$79.99</h4>
                <Link href="#" className='drawer-product-remove'> Remove</Link>
              </div>
            </div>

            <div className="drawer-product-list">
              <div className="dpl-img">
                <img src="https://cdn.shopify.com/s/files/1/0635/5114/3993/files/Hesh_ANC_buy_box_black_1.png" alt="" />
              </div>
              <div className="dpl-title">
                <Link href="#">Hesh® ANC</Link>
                <span className="product-option"> True Black </span>
                <div className="quantity-wrapper">
                  <span className="quantity-dec">--</span>
                  <input type="text" value="1" />
                  <span className="quantity-inc">+</span>
                </div>
              </div>
              <div className="dpl-price">
                <h4>$79.99</h4>
                <Link href="#" className='drawer-product-remove'> Remove</Link>
              </div>
            </div>

          </div>

          <div className="drawer-footer">
            <div className="sub-total">
              <h4>Subtotal</h4>
              <span className="subtotal-value">$219.8</span>
            </div>
            <p>Taxes and <Link href="#">shipping</Link> calculated at checkout </p>
            <Link href="#" className='CartDrawer-Checkout'>Checkout</Link>
          </div>


        </div>
      </section> */}


      <Drawer />





    
    

    {isVisible && (
        <div className='mmenu' >
         
          <div className='menu-close' onClick={hideDiv}><i className='fa fa-close' ></i></div>
         <div className="accordion" id="menu-blk">
  <div className="card">
    <div
      className="card-header collapsed"
      data-toggle="collapse"
      data-target="#collapseOne"
      aria-expanded="true"
    >
      <span className="title">Earbuds </span>
 
    </div>
    <div
      id="collapseOne"
      className="collapse "
      data-parent="#menu-blk"
    >
      <div className="card-body">
         <ul className='menu-blk-list'>
         <li><Link href="#">Wireless Earbuds</Link></li>
         </ul>
      </div>
    </div>
  </div>
  <div className="card">
    <div
      className="card-header collapsed"
      data-toggle="collapse"
      data-target="#collapseTwo"
      aria-expanded="false"
      aria-controls="collapseTwo"
    >
      <span className="title">Headphones</span>
 
    </div>
    <div id="collapseTwo" className="collapse" data-parent="#menu-blk">
      <div className="card-body">
      <ul className='menu-blk-list'>
            <li><Link href="#">Wireless Earbuds</Link></li>
            <li><Link href="#">Wireless Headphones</Link></li>
            <li><Link href="#">CRUSHER BASS</Link></li>
            <li><Link href="#">NEW ARRIVALS</Link></li>
         </ul>
      </div>
    </div>
  </div>
  <div className="card">
    <div
      className="card-header collapsed"
      data-toggle="collapse"
      data-target="#collapseThree"
      aria-expanded="false"
    >
      <span className="title">Others</span>
 
    </div>
    <div
      id="collapseThree"
      className="collapse"
      data-parent="#menu-blk"
    >
      <div className="card-body">
      <ul className='menu-blk-list'>
            <li><Link href="#">Wireless Earbuds</Link></li>
            <li><Link href="#">Wireless Headphones</Link></li>
            <li><Link href="#">CRUSHER BASS</Link></li>
            <li><Link href="#">NEW ARRIVALS</Link></li>
         </ul>
      </div>
    </div>
  </div>
</div>



        </div>
      )}





    </>


  )
}

export default header