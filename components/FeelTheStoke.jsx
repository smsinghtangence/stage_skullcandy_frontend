'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { getDataWithQuery, geturl } from "@/utils/api"
import { useState } from 'react';
import Link from 'next/link';

function FeelTheStoke({product}) {
  return (
    <>
      <section className="feel-the-stoke">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <div className="feel-the-stoke-left">
                <div className="ftsl-content">
                <h2>FEEL THE STOKE.</h2>
                <p>Don't take our word for it.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="feel-the-stoke-right">
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
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
    }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >

{product?.Product_Detail_Slider_2?.map((item, i) => (
    <SwiperSlide>
      <div className="fs-card" >
        <div className="fs-img">  
        <img src={geturl(item?.Image)} alt=""   />
        </div>
        <div className="fs-content">
           <div className="fs-heading"><h3>{item.Heading}</h3></div>
           <div className="fs-title">
            <p>{item.Description}</p>
           </div>
        </div>
      
      </div>    
    </SwiperSlide>
 ))}
    


    
  </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>


   
    </>
  )
}

export default FeelTheStoke