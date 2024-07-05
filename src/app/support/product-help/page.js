'use client'
import React from 'react'
import Link from 'next/link'  
import { useEffect, useState } from 'react';
import { getDataWithQuery } from "@/utils/api"
function Page() {

  const [data, setData] = useState();  
  const getdata = async () =>{

    const response = await getDataWithQuery("/api/product-helps",
     { 
        // pagesize: 1000, typeId: blogId 
    });
    setData(response.data)
      // console.log( JSON.stringify(response.data));
      return response;
}
useEffect(() => {  
    getdata();
  }, []);

  return (
    <>
    <div className="container-fluid">
      <div className="container max_container">
        <div className="row">
          <div className="col-md-12">
            <div className="skull_breadcrumbs">
              <ul>
                <li>
                  <a href="#">Skullcandy Support</a>
                </li>
                <li>Product Help.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="full_center_section skull_space_xtra pb-5">
      <div className="container-fluid">
        <div className="container max_container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_search_bar">
                <form
                  role="search"
                  method="get"
                  action="/"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input_box_v2 search">
                        <input
                          type="search"
                          name="s"
                          id="s"
                          defaultValue=""
                          placeholder="Search the Skullcandy Help Center"
                        />
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
                        <input
                          type="hidden"
                          placeholder="Search"
                          name="page"
                          id="page"
                          defaultValue="page"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="full_center_section skull_space pt-5 support_item_section">
      <div className="container-fluid">
        <div className="container max_container">
          <div className="row">
            <div className="col-md-12">
              <div className="skull_title big big_text mb-5 pb-3">
                <h2>Product Help.</h2>
                <p>Setup videos, user guides, and troubleshooting information.</p>
              </div>
            </div>
            
           {/* <h2>{"hello" +  JSON.stringify(data[0]?.attributes?.Heading)}</h2> */}
            {data?.map((item, i) => (
           

            <div className="col-lg-6 col-sm-12">
              <div className="support_items support_item_manage">
                <div className="skull_title_2 tab_fix_big">
                  <h2>
                    <a href="/categories-list/true-wireless-earbuds/">
                     {item?.attributes?.Help_Category}
                    </a>
                  </h2>
                </div>
                <ul>
                  <li>
                    <a href="/product_help/skullcandy-dime-2/">
                     
                    {item?.attributes?.Heading}
                    </a>
                  </li>
                
                  <li className="remain_item_num">
                    <a href="/categories-list/true-wireless-earbuds/">
                      See all 13 articles
                    </a>
                  </li>
                </ul>
              </div>
            </div>

))}




{/* 
            <div className="col-lg-6 col-sm-12">
              <div className="support_items support_item_manage">
                <div className="skull_title_2 tab_fix_big">
                  <h2>
                    <a href="/categories-list/wired-earbuds/">
                      WIRED EARBUDS
                    </a>
                  </h2>
                </div>
                <ul>
                  <li>
                    <a href="/product_help/vert-wireless/">
                      {" "}
                      VERT WIRELESS
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/set-in-ear-sport-earbuds/">
                      {" "}
                      Set In-Ear Sport Earbuds
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/method-sport/">
                      {" "}
                      Method Sport
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/smokin-buds-2/">
                      {" "}
                      Smokin’ Buds 2
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/inkd-2/">
                      {" "}
                      Ink’d 2
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/jib-earbuds/">
                      {" "}
                      Jib Earbuds
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/chops-flex-sport/">
                      {" "}
                      Chops Flex Sport
                    </a>
                  </li>
                  <li className="remain_item_num">
                    <a href="/categories-list/wired-earbuds/">
                      See all 7 articles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="support_items support_item_manage">
                <div className="skull_title_2 tab_fix_big">
                  <h2>
                    <a href="/categories-list/wired-headphones/">
                      WIRED HEADPHONES
                    </a>
                  </h2>
                </div>
                <ul>
                  <li>
                    <a href="/product_help/riff-on-ear/">
                      {" "}
                      Riff On-Ear
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/crusher/">
                      {" "}
                      Crusher
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/stim-on-ear/">
                      {" "}
                      Stim On-Ear
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="support_items support_item_manage">
                <div className="skull_title_2 tab_fix_big">
                  <h2>
                    <a href="/categories-list/wireless-earbuds/">
                      WIRELESS EARBUDS
                    </a>
                  </h2>
                </div>
                <ul>
                  <li>
                    <a href="/product_help/method-anc-wireless/">
                      {" "}
                      Method ANC Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/method-wireless-sport-earbud/">
                      {" "}
                      Method Wireless Sport Earbud
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/smokin-buds-2-wireless/">
                      {" "}
                      Smokin’ Buds 2 Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/inkd-wireless/">
                      {" "}
                      Ink’d Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/jib-wireless/">
                      {" "}
                      Jib Wireless
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="support_items support_item_manage">
                <div className="skull_title_2 tab_fix_big">
                  <h2>
                    <a href="/categories-list/wireless-headphones/">
                      WIRELESS HEADPHONES
                    </a>
                  </h2>
                </div>
                <ul>
                  <li>
                    <a href="/product_help/crusher-anc-wireless/">
                      {" "}
                      Crusher ANC Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/venue-noise-canceling-wireless/">
                      {" "}
                      Venue Noise Canceling Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/hesh-anc/">
                      {" "}
                      Hesh ANC
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/hesh-evo/">
                      {" "}
                      Hesh Evo
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/crusher-evo/">
                      {" "}
                      Crusher Evo
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/riff-wireless/">
                      {" "}
                      Riff Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/icon-wireless/">
                      {" "}
                      Icon Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/crusher-wireless/">
                      {" "}
                      Crusher Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/hesh-3-wireless/">
                      {" "}
                      Hesh 3 Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/hesh-2-wireless/">
                      {" "}
                      Hesh 2 Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/grind-wireless/">
                      {" "}
                      Grind Wireless
                    </a>
                  </li>
                  <li>
                    <a href="/product_help/uproar-wireless/">
                      {" "}
                      Uproar Wireless
                    </a>
                  </li>
                  <li className="remain_item_num">
                    <a href="/categories-list/wireless-headphones/">
                      See all 12 articles
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}



          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Page