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
function WhatsHot() {
const [products, setProducts] = useState();
const getdata = async () => {
const response = await getDataWithQuery(`/api/products/?populate[1]=image,Feature_List.Icons,Variation_Sliders.Desktop_Image,Variation_Sliders.Mobile_Image,Extra_Features,Video_Section.Video_Desktop_Image,Video_Section.Video_Tab_Image,Content_Section.Desktop_Image,Logo_Background_content.Skull_Logo,Logo_Background_content.Quotes_Hash_Tag_Sign,Left_Image_Content,Left_Right_Image_Section&populate[0]=image,Feature_List,Variation_Sliders.Variant_Image,Extra_Features,Video_Section,Content_Section,Logo_Background_content,Left_Image_Content.Desktop_Image,Left_Image_Content.Image_Icon,Left_Right_Image_Section.Left_Image,Left_Right_Image_Section.Right_Image&filters[WhatsHot][$eq]=true`,
{
});
setProducts(response?.data ? response?.data : "null")
return response;
}
useEffect(() => {
getdata();
}, []);
const no_slider = products?.length;
const [thumbsSwiper0, setThumbsSwiper0] = useState();
const [thumbsSwiper1, setThumbsSwiper1] = useState();
const [thumbsSwiper2, setThumbsSwiper2] = useState();
const [thumbsSwiper3, setThumbsSwiper3] = useState();
const [thumbsSwiper4, setThumbsSwiper4] = useState();
const [thumbsSwiper5, setThumbsSwiper5] = useState();
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
         {/* {item?.attributes?.title} */}
         {products?.map((item, i) => {
          if(i<=2){
         let val = thumbsSwiper0;
         let setVal = setThumbsSwiper0 ;
         if(i==1){val = thumbsSwiper1; setVal = setThumbsSwiper1 ;}
         if(i==2){val = thumbsSwiper2; setVal = setThumbsSwiper2 ;}
         if(i==3){val = thumbsSwiper3; setVal = setThumbsSwiper3 ;}
         if(i==4){val = thumbsSwiper4; setVal = setThumbsSwiper4 ;}
         if(i==5){val = thumbsSwiper5; setVal = setThumbsSwiper5 ;}
       
         return (
         <SwiperSlide>
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
                     thumbs={{ swiper: val }}
                     modules={[FreeMode, Navigation, Thumbs]}
                     className="mySwiper2"
                     >
                 
                     {item?.attributes?.Variation_Sliders?.map((variation, i) => (
                     <>
                     <SwiperSlide>
                        <img src={geturl(variation?.Variant_Image)} alt={item?.attributes?.title} />
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
                        <h5>
                           <i class="fa fa-rupee"></i>
                           {item?.attributes?.Variation_Sliders[0]?.sales_price ? item?.attributes?.Variation_Sliders[0]?.sales_price :item?.attributes?.Variation_Sliders[0]?.Variations_Price}



                           {item?.attributes?.Variation_Sliders[0]?.sales_price && <s><i className="fa fa-rupee"></i> {item?.attributes?.Variation_Sliders[0]?.Variations_Price}</s>}
                          
                            
                           
                           </h5>
                     </div>
                     <Swiper
                     onSwiper={setVal}
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
                        <img src={geturl(variation?.Variant_Image)} alt={item?.attributes?.title}/>
                     </SwiperSlide>
                     </>
                     ))}
                     </Swiper>
                  </div>
               </div>
            </div >
         </SwiperSlide>
         )} }
         )}
         </Swiper>
      </div>
   </div>
</section>
</>
)
}
export default WhatsHot
