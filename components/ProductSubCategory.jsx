'use client'
import React from 'react'
import Link from 'next/link'
import ProductList from '@/components/ProductList'
import Filter from '@/components/Filter'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { getDataWithQuery,geturl } from "@/utils/api"

function ProductSubCategory({slug,catname}) {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };



  /////
  const [category, setCategory] = useState();

 
  const getdata = async () =>{

        const response = await getDataWithQuery(`/api/product-categories?filters\[parent_category\][slug][$eq]=${slug}&populate[1]=parent_category&populate=Product_Category_Img`,  
    
    { 
        // pagesize: 1000, typeId: blogId 
    });
    setCategory(response?.data)
      // console.log('# category ' + JSON.stringify(response?.data[0]));
     
      return response;
}
useEffect(() => {     
    getdata();
  }, []);



  return (
    <>
      

      <section className="category-list-blk">
        <div className="container ">
          <h2 className='cat-heading'>{catname}</h2>
         <div className="row">
          <div className="col-lg-12">
          <div className="cbl-wrapper  cat-desktop">
          {category?.map((item, i) => (
            <div className="clb-list" key={"pro"+i}>
             
            <Link href={`/collection/${item?.attributes?.slug}`}>
            {/* {console.log(item?.attributes?.Product_Category_Img?.data)} */}
              {item?.attributes?.Product_Category_Img?.data != null ?
              <img src={geturl(item?.attributes?.Product_Category_Img)} alt={item?.attributes?.Name} />
              :
              <img src="/images/default_cat.jpg" alt={item?.attributes?.Name} />
              }
              <div className="clb-upper-content"><h3>{item?.attributes?.Name}</h3></div>
            </Link>
          </div>
          ))}



           </div>
          </div>
         </div>
        </div>
      </section>

    

    </>
  )
}

export default ProductSubCategory