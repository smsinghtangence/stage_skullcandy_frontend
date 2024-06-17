'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs, A11y } from 'swiper/modules';
import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getDataWithQuery, geturl } from "@/utils/api"
const API_URL = process.env.API_URL || '';
function page() {
    useEffect(() => {
        $(".get-started").click(function () {

            $("#intro").css("display", "none");
            $("#step-1").css("display", "block");
            $(".stepbar1").addClass("active")
        });

        $("#step-1 .product-guide-content").click(function () {
            $("#step-1").css("display", "none");
            $("#step-2").css("display", "block");
            $(".stepbar2").addClass("active")
        });

        $("#step-2 .product-guide-content").click(function () {
            $("#step-2").css("display", "none");
            $("#result").css("display", "block");
            $(".result").addClass("active")
        });

    }, []);
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
            <section className="product-guide py-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="step-count-bar">
                                <li className='active'>
                                    <div className="circle"></div>
                                    <p>Intro</p>
                                </li>
                                <li className='stepbar1'>
                                    <div className="circle"></div>
                                    <p>Step 1</p>
                                </li>
                                <li className='stepbar2'>
                                    <div className="circle"></div>
                                    <p>Step 2</p>
                                </li>
                                <li className='result'>
                                    <div className="circle"></div>
                                    <p>Result</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="intro">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-left-step1-left">
                                <h2>Product Guide</h2>
                                <p>So many choices! Don’t worry — we got you. Just answer a couple not-very-personal questions, and we’ll help you pick the perfect earbud, headphone or speaker for you.</p>
                                <Link href="#" className="blue-btn get-started">Get Started</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="/images/product-guide.webp" alt="" className='img-fluid ' />
                            </div>
                        </div>
                    </div>

                    <div id="step-1">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>STEP 1:</p>
                                <h2>HOW DO YOU LISTEN?</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-guide-card-wrapper">

                                    <div className="product-guide-content">
                                        <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                        <div className="product-guide-title">Feel the Bass</div>
                                    </div>

                                    <div className="product-guide-content">
                                        <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                        <div className="product-guide-title">Feel the Bass</div>
                                    </div>

                                    <div className="product-guide-content">
                                        <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                        <div className="product-guide-title">Feel the Bass</div>
                                    </div>

                                    <div className="product-guide-content">
                                        <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                        <div className="product-guide-title">Feel the Bass</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="step-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>STEP 2:</p>
                                <h2>WHAT IS MOST IMPORTANT TO YOU?</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-guide-card-wrapper column-2">

                                    <div className="product-guide-content">
                                        <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                        <div className="product-guide-title">Feel the Bass</div>
                                    </div>

                                    <div className="product-guide-content">
                                        <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                        <div className="product-guide-title">Feel the Bass</div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

<div id="result">
<div className="text-center">
<p>RESULTS (2):</p>
<h2>CHECK OUT OUR SUGGESTIONS:</h2>
</div>
<div className="row">
<div className="col-lg-12">
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
        if (i <= 2) {
            let val = thumbsSwiper0;
            let setVal = setThumbsSwiper0;
            if (i == 1) { val = thumbsSwiper1; setVal = setThumbsSwiper1; }
            if (i == 2) { val = thumbsSwiper2; setVal = setThumbsSwiper2; }
            if (i == 3) { val = thumbsSwiper3; setVal = setThumbsSwiper3; }
            if (i == 4) { val = thumbsSwiper4; setVal = setThumbsSwiper4; }
            if (i == 5) { val = thumbsSwiper5; setVal = setThumbsSwiper5; }

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
                                        {item?.attributes?.Variation_Sliders[0]?.Sales_price ? item?.attributes?.Variation_Sliders[0]?.Sales_price : item?.attributes?.Variation_Sliders[0]?.Variations_Price}



                                        {item?.attributes?.Variation_Sliders[0]?.Sales_price && <s><i className="fa fa-rupee"></i> {item?.attributes?.Variation_Sliders[0]?.Variations_Price}</s>}



                                    </h5>
                                </div>

                                <div className="product_guide_spec">
                                    <div className="guide-spec-info travel-stay-aware-mode active">
                                        <div className="guide-spec-title">Battery Life</div>
                                        <div className="guide-spec-bar ">
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                        </div>
                                    </div>

                                    <div className="guide-spec-info travel-stay-aware-mode active">
                                        <div className="guide-spec-title"> Active Noise Canceling </div>
                                        <div className="guide-spec-bar ">
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                        </div>
                                    </div>

                                    <div className="guide-spec-info travel-stay-aware-mode active">
                                        <div className="guide-spec-title"> Audio Customization </div>
                                        <div className="guide-spec-bar ">
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                            <div className="guide-spec-bar-content"></div>
                                        </div>
                                    </div>

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
                                                <img src={geturl(variation?.Variant_Image)} alt={item?.attributes?.title} />
                                            </SwiperSlide>
                                        </>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div >
                </SwiperSlide>
            )
        }
    }
    )}
</Swiper>
</div>
</div>
</div>


                </div>
            </section>
        </>
    )
}

export default page