'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function HomeSlider() {
  return (
    <>
 <section className="trending_slider_blk">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
        <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}   
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
       breakpoints={{
        1200: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 1,
        }
      }}
     
    >
      
      <SwiperSlide>
      <div className="hover_box">
                  <picture>
                    <source
                      media="(max-width:480px)"
                      srcSet="/images/049897b6-2ac9-4d61-ad8d-f56f8d184e41_4_mobile_Dime-2.jpg"
                    />
                    <img
                      src="/images/cb6d1e80-7ac0-4420-935f-8dcb0ea7e241_4_desktop_Dime-2_11.jpg"
                      alt="main image"
                      width="100%"
                    />
                  </picture>
                  <div className="hover_content">
                    <a href="#">
                      <img
                        src="/images/cb6d1e80-7ac0-4420-935f-8dcb0ea7e241_4_desktop_Dime-2__11.jpg"
                        alt=""
                         title="hover"
                      />
                      <button type="button" className="theme_btn">
                        Shop Now
                      </button>
                    </a>
                  </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hover_box">
                  <picture>
                    <source
                      media="(max-width:480px)"
                      srcSet="/images/049897b6-2ac9-4d61-ad8d-f56f8d184e41_4_mobile_Jib-True-2.jpg"
                    />
                    <img
                      src="/images/cb6d1e80-7ac0-4420-935f-8dcb0ea7e241_4_desktop_Jib-True-2_11.jpg"
                      alt="main image"
                      width="100%"
                    />
                  </picture>
                  <div className="hover_content">
                    <a href="#">
                      <img
                        src="/images/cb6d1e80-7ac0-4420-935f-8dcb0ea7e241_4_desktop_Jib-True-2__11.jpg"
                        alt=""
                         title="hover"
                      />
                      <button type="button" className="theme_btn">
                        Shop Now
                      </button>
                    </a>
                  </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hover_box">
                  <picture>
                    <source
                      media="(max-width:480px)"
                      srcSet="/images/049897b6-2ac9-4d61-ad8d-f56f8d184e41_4_mobile_Mod.jpg"
                    />
                    <img
                      src="/images/cb6d1e80-7ac0-4420-935f-8dcb0ea7e241_4_desktop_Mod_11.jpg"
                      alt="main image"
                      width="100%"
                    />
                  </picture>
                  <div className="hover_content">
                    <a href="#">
                      <img
                        src="/images/cb6d1e80-7ac0-4420-935f-8dcb0ea7e241_4_desktop_Mod__11.jpg"
                        alt=""
                         title="hover"
                      />
                      <button type="button" className="theme_btn">
                        Shop Now
                      </button>
                    </a>
                  </div>
                </div>
      </SwiperSlide>
    
    </Swiper>

      
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default HomeSlider