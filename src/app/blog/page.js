'use client'
import React from 'react'
import Link from 'next/link'  
import { useEffect, useState } from 'react';
import { getDataWithQuery } from "../../../utils/api"

function page() {

  const [data, setData] = useState();  
  const getdata = async () =>{
    const response = await getDataWithQuery("/api/blogs",
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
    <section className="skull_space">
  <div className="container-fluid search_page_product">
    <div className="container max_container">
      <div className="row">
        <div className="col-md-12">
          <div className="skull_title_2 big_text text-center mb-5">
            <h2>Blogs</h2>
          </div>

          <div className="blog_lisitng_section">

          {data?.map((item, i) => (
            <>
               <div className="single_blog_list">
              <div className="date_blog">
                <div className="date">
                  <b>07</b>09, 2022
                </div>
                <div className="icon_bg">
                  <img src="/images/pencil_icon.jpg" alt="pencil_icon" />
                </div>
              </div>
              <div className="blog_content_snipt">
                <h3>
                  <a href={"blog/" + item?.attributes?.slug}>{item?.attributes?.title}</a>
                </h3>
                <p className="meta_box">
                  September 7, 2022 {item?.attributes?.blogDate} | Categories:{" "}
                  <a href="/blogs/">{item?.attributes?.category}</a> |{" "}
                  <a href="http://www.cyberworx.co.in/skullcandybetaold/the-work-from-home-toolbox/#respond">
                    0 Comments
                  </a>
                </p>
                <p> [...]</p>
              </div>
              <Link
                href={"blog/" + item?.attributes?.slug}
                className="detail_link"
              >
                Read More
              </Link>
            </div>
            </>
              ))}
           




            <div className="pagination"></div>
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