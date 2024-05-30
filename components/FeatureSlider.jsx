'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState } from 'react';
import Link from 'next/link';
import { getDataWithQuery, geturl } from "@/utils/api"
function FeatureSlider({product}) {
  //console.log("hellog" + JSON.stringify(product))
  return (
    <>
      <section className="feature-slider">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
  
    navigation={true}
    pagination={{
        clickable: true,
      }}
     breakpoints={{
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >
     {product?.Product_Detail_Slider?.map((item, i) => (
    <SwiperSlide>
      <div className="feature-card" >
        <div className="feature-img">  
           <img src={geturl(item?.Image)} alt=""   />
        </div>
        <div className="feature-content">
            <h4>{item.Heading}</h4>
            <p>{item.Description}</p>
        </div>
      
      </div>    
    </SwiperSlide>
 ))}
    

  </Swiper>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default FeatureSlider