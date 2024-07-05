'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';
import { getDataWithQuery, geturl } from "@/utils/api"
function Page() {
  const [data, setData] = useState();  
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/warranty",
     { 
        // pagesize: 1000, typeId: blogId 
    });
    setData(response.data)
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
                  <Link href="/support/">
                    Skullcandy Support
                  </Link>
                </li>
                <li>Warranty.</li>
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
                <h2>{data?.attributes?.Main_Heading}</h2>
                <p>{data?.attributes?.Heading_Below_Text}</p>
                <h5>{data?.attributes?.Heading}</h5>
                <p>Email :-   <Link href={`mailto:${data?.attributes?.Email}`}>
                  {data?.attributes?.Email} </Link></p>
                <p>Phone :- <Link href={`tel:${data?.attributes?.Phone}`}>{data?.attributes?.Phone}</Link></p>
                <p>{data?.attributes?.Date_Time}</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="support_items support_item_manage">
                <div className="skull_title_2 tab_fix_big">
                  <h2>
                    <a href="/categories/product-warranty/">
                      PRODUCT WARRANTY
                    </a>
                  </h2>
                </div>
                <ul>
                  <li>
                    <Link href="/warranty/warranty-policy">
                      {" "}
                      Warranty Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/warranty/submit-a-claim">
                      {" "}
                      Submit a Claim
                    </Link>
                  </li>
                  <li>
                    <Link href="/warranty/how-to-submit-a-warranty-claim">
                      {" "}
                      How to Submit a Warranty Claim
                    </Link>
                  </li>
                  <li>
                    <Link href="/warranty/checking-the-status-of-a-warranty-claim">
                      {" "}
                      Checking the Status of a Warranty Claim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Page