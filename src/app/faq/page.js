'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { getDataWithQuery } from "@/utils/api"
function Page() {
  const [data, setData] = useState();
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/faq/?populate[0]=faq",
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
  <section className="title_section">
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{data?.attributes?.Main_Heading}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="container max_container pb-3">
        <h2>{data?.attributes?.Heading}</h2>
        {data?.attributes?.faq?.map((item, i) => (
          <p>
          <strong>{item?.Heading}</strong>
          <br />
          <div
      dangerouslySetInnerHTML={{__html: item?.Content}}
    />
          
          </p>
        ))}
       
       
      
      </div>
    </div>
  </section>
</>

  )
}

export default Page