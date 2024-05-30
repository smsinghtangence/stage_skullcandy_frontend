'use client'
import React from 'react'
import $ from 'jquery'
import {useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
         
import { getDataWithQuery, geturl } from "@/utils/api"


function MobileMenu({menu}) {
  
  {JSON.stringify(menu)}
/////////////////////////
var parent_category,sub_category;
parent_category = menu?.filter(function (item) { return  item?.attributes?.parent_category?.data == null ; });
 



const submenu = (cat) =>{

   sub_category = menu?.filter(function (item) { return  item?.attributes?.parent_category?.data?.attributes?.Name == cat ; });



  return sub_category.map((c,i)=>(

     
    <li>
      <Link href={"/collection/" + c?.attributes?.slug}>{c?.attributes?.Name} </Link>
    </li>
     
  )

)

}

//////////////////////////////////


  return (
    <>
       <div className="col-md-7 tab_hide">
          <div className="logo">
            <a href="/">
              <img
                src="images/skullcandy_logo.svg"
                alt="logo"
                title="Skullcandy"
              />
            </a>
          </div>
          
          
          <div className="navigation main_menu">
            <div className="skull_menu">
              <ul id="menu-main-menu" className="menu">
                <li className="megamenu menu-item-has-children">
                  <a href="#">SHOP</a>



                  <ul className="sub-menu">


    {/* Product Category menu  */}

    {parent_category?.map((m,mi)=>(<>
                    <li className="menu-item-has-children">
                    <Link href={"/collection/"+m?.attributes?.slug} >
                        <h5>{m?.attributes?.Name}</h5>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">New TWS</a>
                        </li>
                        <li>
                          <a href="#">Skull-IQ</a>
                        </li>
                        <li>
                          <a href="#">Corporate Sales</a>
                        </li>
                        <li className="red">
                          <a href="#">
                            <strong>Budget Tws</strong>
                          </a>
                        </li>
                        <li className="red">
                          <a href="#">
                            <strong>ANC TWS</strong>
                          </a>
                        </li>
                        <li className="red">
                          <a href="#">
                            <strong>Best Sellers</strong>
                          </a>
                        </li>
                      </ul>
                    </li>

     </>))}


        {/*  */}

                 
                  </ul>
                </li>





              
              </ul>
            </div>
          </div>
        </div>



        {/* ////////////////////////////// */}
        <div className="col-md-5 tab_hide">
          <div className="header-right-menu">
            <div className="skull_menu">
              <ul id="menu-right-menu" className="menu">
                <li className="light megamenu single_menu menu-item-has-children">
                  <a href="#">Support</a>
                  <ul className="sub-menu">
                    <li className="heading hide_menu ">
                      <a href="#">Support Menu</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <h5>Support Menu</h5>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h5>Product Help</h5>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h5>Warranty</h5>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h5>Order Status</h5>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="megamenu menu-item-has-children ">
                  <a href="#">
                    <img src="images/IN_EN_FLAG.png" /> <span>LOCATION</span>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children ">
                      <a href="#">North America</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Canada</a>
                        </li>
                        <li>
                          <a href="#">Mexico</a>
                        </li>
                        <li>
                          <a href="#">United States</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Europe / Middle East</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">United Kingdom</a>
                        </li>
                        <li>
                          <a href="#">Europe (EN)</a>
                        </li>
                      </ul>
                    </li>
                    <li className=" menu-item-has-children ">
                      <a href="#">Asia</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Japan | 日本</a>
                        </li>
                        <li>
                          <a href="#">China | 中国</a>
                        </li>
                        <li>
                          <a href="#">South Korea | 대한민국</a>
                        </li>
                        <li>
                          <a href="#">Taiwan | 臺灣</a>
                        </li>
                        <li>
                          <a href="#" aria-current="page">
                            India
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" menu-item-has-children">
                      <a href="#">South America</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Chile</a>
                        </li>
                        <li>
                          <a href="#">Peru</a>
                        </li>
                        <li>
                          <a href="#">Other Middle Eastern Countries</a>
                        </li>
                      </ul>
                    </li>
                    <li className=" menu-item-has-children ">
                      <a href="#">Africa</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">South Africa</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pacific</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Australia</a>
                        </li>
                        <li>
                          <a href="#">New Zealand</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="no_hover mobile_text_menu ">
                  <a href="#">
                    <svg
                      viewBox="0 0 22.975 23.2"
                      id="account"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <g
                        id="Group_763"
                        data-name="Group 763"
                        transform="translate(-1120.915 -1360.5)"
                      >
                        {" "}
                        <path
                          id="Path_417"
                          data-name="Path 417"
                          className="cls-1"
                          d="M32.9,20.094H54.715S53.56,9.7,44.192,9.7,32.9,20.094,32.9,20.094Z"
                          transform="translate(1088.616 1363.106)"
                        />{" "}
                        <circle
                          id="Ellipse_175"
                          data-name="Ellipse 175"
                          className="cls-1"
                          cx="4.748"
                          cy="4.748"
                          r="4.748"
                          transform="translate(1127.676 1361)"
                        />{" "}
                      </g>{" "}
                    </svg>
                    <span>Account</span>
                  </a>
                </li>
                <li className="no_hover search_btn mobile_text_menu ">
                  <a href="#">
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
                  </a>
                </li>
                <li className="no_hover cart_btn ajax_hit_cart_button ">
                  <a href="#">
                    <svg
                      viewBox="0 0 20.762 23.072"
                      id="bag"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <g
                        id="Group_761"
                        data-name="Group 761"
                        transform="translate(-1159.898 -1360.5)"
                      >
                        {" "}
                        <rect
                          id="Rectangle_574"
                          data-name="Rectangle 574"
                          className="cls-1"
                          width="19.762"
                          height="15.142"
                          transform="translate(1160.398 1367.929)"
                        />{" "}
                        <path
                          id="Path_418"
                          data-name="Path 418"
                          className="cls-1"
                          d="M72.076.5c4.748,0,4.363,6.929,4.363,6.929H67.2C67.328,7.429,67.328.5,72.076.5Z"
                          transform="translate(1098.331 1360.5)"
                        />{" "}
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

    </>
  )
}

export default MobileMenu