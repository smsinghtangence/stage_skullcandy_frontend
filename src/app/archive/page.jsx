'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { getDataWithQuery, geturl } from "@/utils/api"
function page() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
const [products, setProducts] = useState();
  const getdata = async () => {
    const response = await getDataWithQuery(`/api/products/?populate[1]=image,Feature_List.Icons,Variation_Sliders.Desktop_Image,Variation_Sliders.Mobile_Image,Variation_Sliders.Variant_Image,Extra_Features,Video_Section.Video_Desktop_Image,Video_Section.Video_Tab_Image,Content_Section.Desktop_Image,Logo_Background_content.Skull_Logo,Logo_Background_content.Quotes_Hash_Tag_Sign,Left_Image_Content,Left_Right_Image_Section&populate[0]=image,Feature_List,Variation_Sliders,Extra_Features,Video_Section,Content_Section,Logo_Background_content,Left_Image_Content.Desktop_Image,Left_Image_Content.Image_Icon,Left_Right_Image_Section.Left_Image,Left_Right_Image_Section.Right_Image,Product_Usp.Icon,Product_Detail_Slider.Image,Product_Detail_Slider_2.Image,Product_Slider.Product_Slider,Product_Accordion,Product_Hover_Image`,

      {
        // pagesize: 1000, typeId: blogId 
      });
      setProducts(response?.data)
    // console.log('# category ' + JSON.stringify(response?.data[0]));

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
                <li>
                  Archive
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
<div className='archive'>
<div className="container">
    <div className="row">
        <div className="col-lg-12">
       <div className="arcive-prouct">
       
{/* {JSON.stringify(products)} */}

{products?.map((item, index) => {
    
      const product = item?.attributes;
      return (
      <div className="pr-list">
                  <Link href={"/shop/" + product?.slug}>

                    <div className="whats-new-list">
                      <div className="whats-new-img">
                                             {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}

                        <Link href={"/shop/" + product?.slug}>
                          <Swiper
                            style={{
                              '--swiper-navigation-color': '#fff',
                              '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={false}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                          >
                            {product?.Variation_Sliders?.map((variation, i) => (
                              <>
                                <SwiperSlide key={i.id}>
                                  <img src={geturl(variation?.Variant_Image)} />
                                </SwiperSlide>
                              </>
                            ))}
                            {/* {product?.Variation_Sliders?.map((variation, i) => (
                              <>

                                {variation?.Desktop_Image?.data?.map((variation_images, i) => (
                                  <>

                                    <SwiperSlide>
                                      <img src={API_URL + variation_images?.attributes?.url} />
                                    </SwiperSlide>
                                  </>
                                ))}
                              </>
                            ))} */}

                          </Swiper>
                        </Link>
                      </div>
                      <div className="what-new-content">
                        <h4 className="wnc-heading"><Link href="#">{product?.title}</Link></h4>
                        <p>{product?.Product_Tag_Line_Heading}</p>
                        <div className="wnc-price">
                          <h5>{product?.price} <s>$199.99</s></h5>
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


                          {product?.Variation_Sliders?.map((variation, i) => (
                            <>
                              <SwiperSlide  key={i.id}>
                                <img src={geturl(variation?.Variant_Image)} />
                              </SwiperSlide>
                            </>
                          ))}
                          {/* {product?.Variation_Sliders?.map((variation, i) => (
                            <>

                              {variation?.Desktop_Image?.data?.map((variation_images, i) => (
                                <>

                                  <SwiperSlide>
                                    <img src={API_URL + variation_images?.attributes?.url} />
                                  </SwiperSlide>
                                </>
                              ))}
                            </>
                          ))} */}

                        </Swiper>
                      </div>

                      <div className="pr-list-hover-info">
                      <img src={geturl(product?.Product_Hover_Image)} alt="" />
                      <div className="pr-list-hover-content">
                        <h4>{product?.title} <i className='fa fa-chevron-right'></i></h4>
                        <div className="stars">
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <span>4.9</span>
                        </div>
                      </div>
                    </div>

                    </div>

                   
                  </Link>
                </div>
      )
})}
 </div>
    </div>
</div>
</div>
</div>
    </>
  )
}

export default page