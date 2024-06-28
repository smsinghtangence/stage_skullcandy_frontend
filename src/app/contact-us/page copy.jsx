'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';
import { getDataWithQuery, geturl } from "@/utils/api"

function page() {
  const [data, setData] = useState();  
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/contact-us",
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
 
  <section className="full_center_section title_top_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="skull_title big text-center">
            <h2>{data?.attributes?.Heading}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section light_grey_bg skull_space">
    <div className="container max_container">
      <div className="row">
        <div className="col-md-4">
          <div className="cnt_page_list">
            <ul>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact-us">CONTACT US</Link>
              </li>
              <li>
                <Link href="/warranty/warranty-policy/">WARRANTY</Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy/">PRIVACY POLICY</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="contact_box">
            <h5>{data?.attributes?.Heading}</h5>
            <ul>
              <li>
              
                <Link href={`mailto:${data?.attributes?.Email}`}>
                  <b>{data?.attributes?.Email}</b>
                </Link>
              </li>
              <li>
               
                <a href="#">
                  <b>
                    <Link href={`tel:${data?.attributes?.Phone}`}>{data?.attributes?.Phone}</Link>
                    <br />
                    {data?.attributes?.Days}
                    <br />
                    {data?.attributes?.Time} to   {data?.attributes?.Time2}
                  </b>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>


  )
}

export default page