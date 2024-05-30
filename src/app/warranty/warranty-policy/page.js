'use client'
import React from 'react'
import InnerPageSearch from '@/components/InnerPageSearch'
import { useEffect, useState  } from 'react';
import { getDataWithQuery } from "../../../../utils/api"
function page() {
  
  const [data, setData] = useState();  
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/warranty-policy",
     { 
        // pagesize: 1000, typeId: blogId 
    });
    setData(response.data)
      console.log( JSON.stringify(response));
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
                  <a href="/support/">
                    Skullcandy Support
                  </a>
                </li>
                <li>
                  <a href="/support/warranty/">
                    Warranty.
                  </a>
                </li>
                <li>Warranty Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
<InnerPageSearch />

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

export default page