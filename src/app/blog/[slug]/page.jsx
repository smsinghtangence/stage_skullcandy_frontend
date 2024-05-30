'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { getDataWithQuery } from "@/utils/api"
function page({ params }) {
  const slug = params.slug;

  const [data, setData] = useState();  
  const getdata = async () =>{
    const response = await getDataWithQuery(`/api/blogs?filters[slug][$eq]=${slug}`,
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
  <section>
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="prev_next_blog">
              «{" "}
              <a href="#" rel="prev">
                Tile Technology
              </a>
              <a href="#" rel="next">
                Resolve Your WFH Burnout with This Creative Solution.
              </a>{" "}
              »
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="skull_space">
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="skull_title medium text-center">
              <h2>{data?.title}</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="blog_content">
            <div
      dangerouslySetInnerHTML={{__html: data?.content}}
    />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="skull_space pt-0" id="respond">
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog_share_block">
              <div className="row">
                <div className="col-md-6">
                  <p>Share This Story, Choose Your Platform!</p>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/sharer.php?u=/wireless-charging-and-tws/"
                        target="_blank"
                        data-tooltip="Facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/share?text=/wireless-charging-and-tws/"
                        target="_blank"
                        data-tooltip="Twiiter"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/shareArticle?mini=true&url=/wireless-charging-and-tws/"
                        target="_blank"
                        data-tooltip="Linkedin"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://reddit.com/submit?url=/wireless-charging-and-tws/&title=Wireless charging and TWS"
                        target="_blank"
                        data-tooltip="Reddit"
                      >
                        <i className="fa fa-reddit" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
  </section>
</>


  )
}

export default page