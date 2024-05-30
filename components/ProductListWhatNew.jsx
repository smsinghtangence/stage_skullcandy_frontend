'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useRef, useState, useEffect } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs, A11y } from 'swiper/modules';
import Link from 'next/link';
import { getDataWithQuery, geturl } from "@/utils/api"
const API_URL = process.env.API_URL || '';
function ProductListWhatNew() {
  const [products, setProducts] = useState();
  const getdata = async () => {
    const response = await getDataWithQuery(`/api/products?populate=*`,
      {
      });
    setProducts(response?.data ? response?.data : "null")
    return response;
  }
  useEffect(() => {
    getdata();
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="whats-new py-50">
        <div className="container">
          <div className="heading text-center">
            <h4>WHAT'S HOT</h4>
          </div>
          <div className="row">
            <div className='col-lg-12'></div>
            <Swiper
              className='what-slider-blk'
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}

              breakpoints={{
                1200: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2.3,
                },
                320: {
                  slidesPerView: 1.2,
                }
              }}

            >




              <SwiperSlide>
                <div className="pr-list">
                  <div className="whats-new-list">
                    <div className="whats-new-img">
                                          {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}
  
                      <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoGreen_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoSlate_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoBlack_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_lightgrey_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_red_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_black_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_blue_1_400x.png" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="what-new-content">
                      <h4 className="wnc-heading">
                        <Link href="#">
                          titel</Link>
                      </h4>
                      <p>Product_Tag_Line_Heading</p>
                      <div className="wnc-price">
                        <h5>price <s>$199.99</s></h5>
                      </div>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={5}
                        slidesPerView={7.5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoGreen_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoSlate_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoBlack_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_lightgrey_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_red_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_black_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_blue_1_400x.png" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div >

              </SwiperSlide>












              <SwiperSlide>
                <div className="pr-list">
                  <div className="whats-new-list">
                    <div className="whats-new-img">
                                           {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}

                      <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoGreen_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoSlate_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoBlack_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_lightgrey_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_red_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_black_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_blue_1_400x.png" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="what-new-content">
                      <h4 className="wnc-heading">
                        <Link href="#">
                          titel</Link>
                      </h4>
                      <p>Product_Tag_Line_Heading</p>
                      <div className="wnc-price">
                        <h5>price <s>$199.99</s></h5>
                      </div>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={5}
                        slidesPerView={7.5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoGreen_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoSlate_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoBlack_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_lightgrey_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_red_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_black_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_blue_1_400x.png" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div >

              </SwiperSlide>















              <SwiperSlide>
                <div className="pr-list">
                  <div className="whats-new-list">
                    <div className="whats-new-img">
                                           {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}

                      <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoGreen_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoSlate_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoBlack_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_lightgrey_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_red_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_black_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_blue_1_400x.png" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="what-new-content">
                      <h4 className="wnc-heading">
                        <Link href="#">
                          titel</Link>
                      </h4>
                      <p>Product_Tag_Line_Heading</p>
                      <div className="wnc-price">
                        <h5>price <s>$199.99</s></h5>
                      </div>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={5}
                        slidesPerView={7.5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoMauve_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoGreen_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoSlate_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoBlack_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_lightgrey_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_red_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_black_1_400x.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_blue_1_400x.png" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div >

              </SwiperSlide>


            </Swiper>




          </div>

        </div>

      </section>


    </>
  )
}
export default ProductListWhatNew
