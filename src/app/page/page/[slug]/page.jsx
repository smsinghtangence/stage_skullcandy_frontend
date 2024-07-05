'use client'
import React from 'react'
import { useEffect, useState  } from 'react';
import { getDataWithQuery } from "@/utils/api"
function Page({ params }) {
    const slug = params.slug;
    console.log("hello" + slug)
    const [data, setData] = useState();  
    const getdata = async () =>{
      const response = await getDataWithQuery(`/api/pages?filters[slug][$eq]=${slug}`,
       { 
          // pagesize: 1000, typeId: blogId 
      });
      setData(response.data[0].attributes)
        console.log( JSON.stringify(response.data[0].attributes));
        return response;
  }
  useEffect(() => {  
      getdata();
    }, []);
  return (
    <>
          <section className="pages py-5">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <h1>{data?.Title}</h1>
                          <div
                              dangerouslySetInnerHTML={{ __html: data?.Content }}
                          />
                      </div>
                  </div>
              </div>
          </section>
       
    </>
  )
}

export default Page