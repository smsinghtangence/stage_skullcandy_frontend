'use client'
import React from 'react'
import Link from 'next/link'  
import { useEffect, useState } from 'react';
import { getDataWithQuery, geturl } from "@/utils/api"
function Page() {
  const [data, setData] = useState();  
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/press-releases/?populate=Press_Release.Pdf",
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
            <h2 />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="skull_space pt-0">
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="press_relaeses-blk">
              <ul>


          
          
              {data?.attributes?.Press_Release?.map((item, i) => (
                <li>
                <span>{item?.Date} -</span> 
                
                <Link
                  href={geturl(item?.Pdf)}
                  target="_blank"
                >
                  {item?.Title}
                </Link>
                </li>
                ))}
            
                


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