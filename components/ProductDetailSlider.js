'use client'
import React,{useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import { getDataWithQuery,geturl } from "../../../utils/api"


const API_BASE =  process.env.API_BASE || '';

function ProductDetailSlider(product) {
    // console.log("sam "+ JSON.stringify(product?.data?.Variation_Sliders[0]?.Desktop_Image?.url))
    // console.log("sam "+ JSON.stringify(product))
 
const [isActive, setIsActive] = useState(false);
const [display, setDisplay] = useState(false);

const handleClick = event => {

  setIsActive(current => !current);
  setDisplay(!display);
}

const [activeSlide, setActiveSlide] = useState(product?.data?.Variation_Sliders[0]);

useEffect(()=>{
    setActiveSlide(product?.data?.Variation_Sliders[0]);
},[product]);

// console.log("activeSlide " + activeSlide?.id)

const changeVariant = (selecteColor) => {

    // console.log("selecteColor id "+ selecteColor)
    let sliders = product?.data?.Variation_Sliders

    // console.log("sliders "+ JSON.stringify(sliders))

  const variant =  sliders.filter((slider) => {
        return slider?.id == selecteColor;
      })
    //   console.log("variant "+ JSON.stringify(variant))
   
    setActiveSlide(variant[0])
}



    return (
        <>
         

 {activeSlide &&
   <>
            <section className="main_product_section product_type_2">
                <div className="skullcandy_product_type2">
                    <div className="row m-0">
                        <div className="col-md-12 p-0">
                            <div className="color_variation_slider right_slide_btn">
                                <div
                                    className="single_variation_slider active_slider"
                                   
                                    style={{ backgroundColor: "#101010" }}
                                >
                                    <div
                                        className="skullcandy_product_type2_bg"
                                        style={{ background: "#101010" }}
                                    />
                                    <div className="swiper-container variation_slider swiper-container-initialized swiper-container-horizontal">
                                        <Swiper
                                            modules={[Navigation, Pagination, A11y]}
                                            spaceBetween={0}
                                            navigation
                                            loop= "true"
                                            pagination={{ clickable: true }}
                                            scrollbar={{ draggable: true }}
                                            breakpoints={{
                                                1200: {
                                                    slidesPerView: 1,
                                                    
                                                },
                                                576: {
                                                    slidesPerView: 1,
                                                }
                                            }}

                                        >
{/* {product?.data?.Variation_Sliders?.map((slide, pindex) => {
    return ( */}

        <>
   {/* { console.log("testing "+ API_BASE + slide?.Desktop_Image?.data[0]?.attributes?.url)} */}

  
   {/* {slide?.Desktop_Image?.data?.map((item, index) => { */}
    {activeSlide?.Desktop_Image?.data?.map((item, index) => {
    return (
        
    <SwiperSlide>
    <div
        className="swiper-slide swiper-slide-active"
        data-swiper-slide-index={index}
        style={{ width: 1349 }}
    >
        <div className="varaition_imgs">
            <picture>
                <source
                    media="(max-width:820px)"
                    srcSet={API_BASE + item?.attributes?.url}
                />
                <img
                    src={API_BASE + item?.attributes?.url}
                    alt="main image"
                    width="100%"
                />
            </picture>
        </div>
    </div>
</SwiperSlide>
    )
})
}


</>

{/*      )})
   } */}

                                          

                                        </Swiper>
                                     
                                    </div>

                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>



{/*  */}
                <div
                    className="container-fluid product_detail_adjust"
                    style={{ backgroundColor: "#101010" }}
                >
                    <div className="container max_container">
                        <div id="wc-custom-notices"></div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-sm-12 product_desp_up">
                                <div className="product_descprition">
                                    <h2>{product?.data?.Product_Tag_Line_Heading}</h2>
                                    <h1>{product?.data?.title}</h1>
                                    <h4 className="product_price">
                                        {" "}
                                        <ins><span className="woocommerce-Price-currencySymbol">₹</span>{product?.data?.price}</ins>
                                    </h4>
                                    {/* <span
                                        className="product_rating anchor_btn"
                                        data="product-reviews"
                                        data-rating={5.0}
                                    >
                                        <i className="fa fa-star-o fill" />
                                        <i className="fa fa-star-o fill" />
                                        <i className="fa fa-star-o fill" />
                                        <i className="fa fa-star-o fill" />
                                        <i className="fa fa-star-o fill" />
                                        <span>4 Reviews</span>
                                    </span> */}
                                    {/* Added Today --------*/}
                                    {/*<h4 className="product_price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#8377;</span>9,999.00</bdi></span></h4>*/}
                                </div>




{/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}






                               
                         
        {/* form start */}
        {/* <form
        className="variations_form cart"
        action=""
        method="post"
        encType="multipart/form-data"

        > */}
        <form className='woocommerce-product-details__short-description'>
        <div
        className="woovr-variations woovr-variations-default"

        >
        <div className="all_colors">



        {product?.data?.Variation_Sliders?.map((slide, pindex) => {
    return ( 
<>  
        {/* color box start */}
        <div
        className="woovr-variation woovr-variation-radio woovr-variation-activate"
        onClick={() =>changeVariant(slide?.id)}
        index={pindex}
        >
        <div className="color_row woovr-variation-selector">
            <input
                type="radio"
                name="woovr_variation_73115580"
                defaultChecked=""
            />
            <div className="img_box">
                <div className="woovr-variation-image111">
                    <span
                        className="variation_type_colour"
                        style={{ backgroundColor: slide?.Variations_Color }}
                    />
                </div>
            </div>
            <div className="woovr-variation-info">
                <div className="img_box">
                    <div className="woovr-variation-name">{slide?.Variations_Color_Name}</div>
                </div>
                <div className="woovr-variation-price b">
                    <span className="woocommerce-Price-amount amount">
                        <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                                ₹
                            </span>
                            {slide?.Variations_Price}
                        </bdi>
                    </span>
                </div>
            </div>
            
        </div>
        </div>
        {/* color box end */}

        </>
    )})}
        </div>
        </div>
        
        {/* /woovr-variations */}


        {/* ////////////// */}




        <div className="single_variation_wrap">
        <div
        className="woocommerce-variation single_variation"
        style={{ display: "block" }}
        >
        <div className="woocommerce-variation-description" />
        <div className="woocommerce-variation-price" />
        <div className="woocommerce-variation-availability">
        <p className="stock in-stock">4964 in stock</p>
        </div>
        </div>
        <div className="cart_function">
        <div className="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
        <div className="quantity" style={{ display: "block" }}>
            <label
                className="screen-reader-text"
                htmlFor="quantity_65b8bee66712c"
            >
                Dime® 3 True Wireless Earbuds quantity
            </label>
            <input
                type="number"
                id="quantity_65b8bee66712c"
                className="input-text qty text"
                step={1}
                min={1}
                max={4964}
                name="quantity"
                defaultValue={1}
                title="Qty"
                size={4}
                placeholder=""
                inputMode="numeric"
                autoComplete="off"
            />
        </div>
        <button
            type="submit"
            className="single_add_to_cart_button button alt"
        >
            Add to cart
        </button>
        <input
            type="hidden"
            name="gtm4wp_id"
            defaultValue={73115580}
        />
        <input
            type="hidden"
            name="gtm4wp_name"
            defaultValue="Dime® 3 True Wireless Earbuds"
        />
        <input
            type="hidden"
            name="gtm4wp_sku"
            defaultValue={73115580}
        />
        <input
            type="hidden"
            name="gtm4wp_category"
            defaultValue="Truly wireless earbuds"
        />
        <input
            type="hidden"
            name="gtm4wp_price"
            defaultValue={9999}
        />
        <input
            type="hidden"
            name="gtm4wp_stocklevel"
            defaultValue=""
        />
        <input
            type="hidden"
            id="product_type"
            defaultValue="variable"
        />
        <button
            type=""
            className="custom_single_add_to_cart_button button alt"
        >
            Add to cart
        </button>
        <input
            type="hidden"
            name="add-to-cart"
            defaultValue={73115580}
        />
        <input
            type="hidden"
            name="product_id"
            defaultValue={73115580}
        />
        <input
            type="hidden"
            name="variation_id"
            className="variation_id"
            defaultValue={73115631}
        />
        </div>
        </div>
        <div className="product_video_review">
        <div
        className="icon_text anchor_btn video_target"
        data-id="hLujHhOFTmM"
        data="product-setup-video"
        >
        <img
            src="/wp-content/themes/skullcandy/images/product_box.png"
            alt="video"
        />
        <span>Product Video</span>
        </div>
        <div className="icon_text anchor_btn" data="product-reviews">
        <img
            src="/wp-content/themes/skullcandy/images/review.png"
            alt="review"
        />
        <span>Reviews</span>
        </div>
        </div>
        </div>
        </form>
        {/* </form> */}
        {/* form end */}







{/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

                                <div className="alert_container" style={{ display: "none" }}>
                                    <h6
                                        style={{ color: "fbfbfb" }}
                                        className="subscribe_for_interest_text"
                                    >
                                        Notify Me
                                    </h6>
                                    <input
                                        type="text"
                                        className="stock_alert_email"
                                        name="alert_email"
                                        defaultValue=""
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        style={{
                                            background: "fbfbfb",
                                            color: "fbfbfb",
                                            borderColor: "fbfbfb",
                                            fontSize: ""
                                        }}
                                        className="stock_alert_button alert_button_hover"
                                        name="alert_button"
                                    >
                                        Get an alert
                                    </button>
                                    <input
                                        type="hidden"
                                        className="current_product_id"
                                        defaultValue={73115580}
                                    />
                                    <input
                                        type="hidden"
                                        className="current_product_name"
                                        defaultValue="Dime® 3 True Wireless Earbuds"
                                    />
                                </div>
                                <span className="anchor_btn" data="product-reviews">
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                </span>
                                <div className="product_type_best_review">
                                    <h2 />
                                    <p />
                                </div>
                                <div className="features_list">
                                    <ul>

                                    {product?.data?.Feature_List?.map((item, index) => {
    return (
                                        <li>
                                            <img src={geturl(item?.Icons)} />
                                            {item?.Heading}{" "}
                                        </li>
    )})}  
                                    </ul>
                                </div>
                                <div className="skull_accordian sticky_cart_start ">
                                    <div className="single_block">
                                        <div className={isActive ? 'acc_btn open' : 'acc_btn'} onClick={handleClick}>{product?.data?.Extra_Features?.Heading}</div>
                                        {display &&
                                        <div className="acc_body" dangerouslySetInnerHTML={{__html:product?.data?.Extra_Features?.Content}}>

                                             
                                             
                                        </div>
                                            }   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
                                    }
        </>
    )
}
 
export default ProductDetailSlider