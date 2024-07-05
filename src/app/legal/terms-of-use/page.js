'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { getDataWithQuery } from "@/utils/api"
import Link from 'next/link';

function Page() {
  const [data, setData] = useState();
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/terms-of-use",
     { 
        // pagesize: 1000, typeId: blogId 
    });
    setData(response.data)
      // console.log( JSON.stringify(response));
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
              <li>
                <Link href="/support/legal/">LEGAL.</Link>
              </li>
              <li>Terms of Use</li>
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
  <section className="full_center_section skull_space_xtra pt-5">
    <div className="container-fluid">
      <div className="container max_container">
        <div className="row m-0">
          <div className="col-md-12">
            <div className="skull_title big big_text mb-5 pb-3">
            <h2>{data?.attributes?.heading}</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="support_content">
            <div
                dangerouslySetInnerHTML={{__html: data?.attributes?.content}}
              /> 
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