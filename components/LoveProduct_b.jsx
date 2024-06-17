import ProductList from '@/components/ProductList'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FreeMode, Navigation, Pagination, Thumbs, A11y } from 'swiper/modules';
import React, { useRef, useState, useEffect } from 'react';
import { getDataWithQuery, geturl } from "@/utils/api"
const API_URL = process.env.API_URL || '';
function LoveProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [products, setProducts] = useState();
  const getdata = async () => {
    const response = await getDataWithQuery(`/api/products/?populate[1]=image,Feature_List.Icons,Variation_Sliders.Desktop_Image,Variation_Sliders.Mobile_Image,Variation_Sliders.Variant_Image,Extra_Features,Video_Section.Video_Desktop_Image,Video_Section.Video_Tab_Image,Content_Section.Desktop_Image,Logo_Background_content.Skull_Logo,Logo_Background_content.Quotes_Hash_Tag_Sign,Left_Image_Content,Left_Right_Image_Section&populate[0]=image,Feature_List,Variation_Sliders,Extra_Features,Video_Section,Content_Section,Logo_Background_content,Left_Image_Content.Desktop_Image,Left_Image_Content.Image_Icon,Left_Right_Image_Section.Left_Image,Left_Right_Image_Section.Right_Image,Product_Usp.Icon,Product_Detail_Slider.Image,Product_Detail_Slider_2.Image,Product_Slider.Product_Slider,Product_Accordion,Product_Hover_Image`,
      {
      });
    setProducts(response?.data)
    return response;

  }
  useEffect(() => {
    getdata();
  
  }, []);
  return (
    <>

      <section className="yml-blk">
        <div className="container">
          <div className="heading">
            <h4 className=' text-center'>You Might Also Love... </h4>
            
          </div>
          <div className="row">

        
             
              {/* <Swiper
                className='what-slider-blk'
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}

                breakpoints={{
                  1200: {
                    slidesPerView: 2,
                  },
                  767: {
                    slidesPerView: 2.3,
                  },
                  320: {
                    slidesPerView: 1.2,
                  }
                }}

              >
                 */}

                {(products?.reverse())?.map((item, i) => (

                   ( i<=2 &&
                      
                 
                  <div className='col-lg-4'>
                    <div className="pr-list" key={i}>
                      <div className="whats-new-list">
                      <Link href={"/shop/" + item?.attributes?.slug}>
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
                           {item?.attributes?.Variation_Sliders?.map((variation, i) => (
                            <>
                              <SwiperSlide>
                                <img src={geturl(variation?.Variant_Image)} />
                              </SwiperSlide>
                            </>
                          ))}


                          </Swiper>
                        </div>
                        </Link>
                        <div className="what-new-content">
                          <h4 className="wnc-heading">
                            <Link href={"/shop/" + item?.attributes?.slug}>{item?.attributes?.title} </Link>
                          </h4>
                          <p>{item?.attributes?.Product_Tag_Line_Heading}</p>
                          <div className="wnc-price">
                          <h5> <i className="fa fa-rupee"></i>
                           {item?.attributes?.Variation_Sliders[0]?.Sales_price ? item?.attributes?.Variation_Sliders[0]?.Sales_price :item?.attributes?.Variation_Sliders[0]?.Variations_Price}



                           {item?.attributes?.Variation_Sliders[0]?.Sales_price && <s><i className="fa fa-rupee"></i> {item?.attributes?.Variation_Sliders[0]?.Variations_Price}</s>}
                        </h5>
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
                           {item?.attributes?.Variation_Sliders?.map((variation, i) => (
                            <>
                              <SwiperSlide>
                                <img src={geturl(variation?.Variant_Image)} />
                              </SwiperSlide>
                            </>
                          ))}
                          </Swiper>
                        </div>
                      </div>
                    </div >
 </div>
                )


                ))}



              {/* </Swiper> */}



             
           
          </div>
        </div>
      </section>
    </>
  )
}

export default LoveProduct