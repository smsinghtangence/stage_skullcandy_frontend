'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';
import { getDataWithQuery, geturl } from "@/utils/api"

function page() {
  const [data, setData] = useState();  
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/music-with-a-mission/?populate=*",
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
       <div className="breacrumb-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ol className="breadcrumbs">
                <li>
                  <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.867 10">
                    <path id="Path_325" data-name="Path 325" d="M6.243,3.05C5.931,2.2,8,0,4.2,0,.946,0,.641,3.215.5,3.463a2.828,2.828,0,0,0-.467.94c-.089.413,0,.872.267.872.4,0-.089-.8.4-.8.623,0,1.358,1.009,1.558,1.582-.334.6-.8.986-1.135.827a1.016,1.016,0,0,1-.69-.918c0-.369-.344-.357-.311.114a1.753,1.753,0,0,0,.8,1.354A4.342,4.342,0,0,1,2.148,8.967c.152.377.356.551.913.551s.133.482.512.482.156-.529.378-.529,0,.505.423.505c.645,0,.356-.8.557-.941S7.912,7.43,7.867,5.619C7.823,3.831,6.554,3.9,6.243,3.05ZM3.527,8.165A1.3,1.3,0,0,0,2.5,8.05c-.245.091-.489-.046-.289-.666a3.442,3.442,0,0,1,.4-.894A14.466,14.466,0,0,1,3.95,8.1C3.972,8.279,3.683,8.348,3.527,8.165ZM5.419,7.133A1.491,1.491,0,1,1,6.866,5.641,1.469,1.469,0,0,1,5.419,7.133Z" transform="translate(0)"></path>
                  </svg></Link>
                </li>
                <li>Music with a mission </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="music-with-mission">
        <img src={geturl(data?.attributes?.Top_Banner)} alt="" className='img-fluid' />
      </section>
      <section className="our-partner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-partner-heading">
                <h2>{data?.attributes?.Heading}</h2>
              </div>
            </div>
          </div>
        </div>
       <div className="our-partner-banner">
       <img src={geturl(data?.attributes?.Our_Partners_Banner)} alt=""  className='img-fluid'/>
       <div className="ipb-content">
        <img src={geturl(data?.attributes?.Our_Partners_Upper_Image  )} alt="" />
        <p>{data?.attributes?.Our_Partners_text}</p>
       </div>
       </div>

      </section>

      <div className="col-50-block">
        <div className="col-50-img">
          <img src={geturl(data?.attributes?.Left_Image  )} alt="" className='img-fluid'/>
        </div>
        <div className="col-50-content">
          <div className="col-50-content-inner">
          <p>{data?.attributes?.Right_Content}</p>
          </div>
        </div>
      </div>

      <div className="pow-blk">
      <picture>
        <source media="(max-width:540px)" srcset="https://www.skullcandy.com/cdn/shop/files/mobile_pow_update_2021.jpg" className="img-fluid" />
          <img src={geturl(data?.attributes?.Pow_Banner  )} alt="main image" width="100%" className="desktop-banner img-fluid" />

      </picture>
       
        <div className="pow-content">
          <img src={geturl(data?.attributes?.Pow_Image)} alt="" className='img-fluid'/>
          <p>{data?.attributes?.Pow_Text}</p>
        </div>
      </div>
      <div className="col-50-block">
        <div className="col-50-img">
          <img src={geturl(data?.attributes?.Last_Section_Left_Image  )} alt="" className='img-fluid'/>
        </div>
        <div className="col-50-content">
          <div className="col-50-content-inner">        
          <span dangerouslySetInnerHTML={{ __html: data?.attributes?.Last_Section_Right_Content }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page