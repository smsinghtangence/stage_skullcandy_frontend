'use client'
import React,{ useEffect, useState} from 'react'
import ProductDetailSlider from './ProductDetailSlider'
import { getDataWithQuery,geturl } from "../../../utils/api"

function ProductDetail({slug}) {

//   const slug = params.product;
  const [product, setProduct] = useState();

  ///
  const [isActive, setIsActive] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleClick = event => {

    setIsActive(current => !current);
    setDisplay(!display);
  }
  ////
 
  const getdata = async () =>{
    // const response = await getDataWithQuery("api/products/1?populate=*",
    // const response = await getDataWithQuery("/api/products/3?populate[1]=image,Feature_List.Icons,Variation_Sliders.Desktop_Image,Variation_Sliders.Mobile_Image,Extra_Features,Video_Section.Video_Desktop_Image,Video_Section.Video_Tab_Image,Content_Section.Desktop_Image,Logo_Background_content.Skull_Logo,Logo_Background_content.Quotes_Hash_Tag_Sign,Left_Image_Content,Left_Right_Image_Section&populate[0]=image,Feature_List,Variation_Sliders,Extra_Features,Video_Section,Content_Section,Logo_Background_content,Left_Image_Content.Desktop_Image,Left_Image_Content.Image_Icon,Left_Right_Image_Section.Left_Image,Left_Right_Image_Section.Right_Image",
    const response = await getDataWithQuery(`/api/products/?filters[slug][$eq]=${slug}&populate[1]=image,Feature_List.Icons,Variation_Sliders.Desktop_Image,Variation_Sliders.Mobile_Image,Extra_Features,Video_Section.Video_Desktop_Image,Video_Section.Video_Tab_Image,Content_Section.Desktop_Image,Logo_Background_content.Skull_Logo,Logo_Background_content.Quotes_Hash_Tag_Sign,Left_Image_Content,Left_Right_Image_Section&populate[0]=image,Feature_List,Variation_Sliders,Extra_Features,Video_Section,Content_Section,Logo_Background_content,Left_Image_Content.Desktop_Image,Left_Image_Content.Image_Icon,Left_Right_Image_Section.Left_Image,Left_Right_Image_Section.Right_Image`,
     
    
    { 
        // pagesize: 1000, typeId: blogId 
    });
    setProduct(response?.data[0]?.attributes)
      // console.log('# product ' + JSON.stringify(response?.data?.attributes));
     
      return response;
}
useEffect(() => {
  
    
    getdata();


  }, []);



  return (
    <>
    <div className="sticky-add-to-cart show">
      <div className="container  max_container">
        <div className="row">
          <div className="col-md-12">
            <label>
              <span className="product_name">{product?.title}</span>
              <span className="product_price">
                <strike /> <ins><span className="woocommerce-Price-currencySymbol">₹</span>{product?.price}</ins>
              </span>
            </label>
            <button type="button" className="theme_btn bottom_cart_ad">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>




    <ProductDetailSlider data={product}/>
  


 {/* Video_Section */}
{product?.Video_Section?.map((video, index) => {
 
 return (
    <section className="video_section" id="product-setup-video">
 
      <div className="full_bg video_btn" data-id={video?.Video_YouTube_Id}>
        <picture>
          {/* mobile */}
          <source
            media="(max-width:768px)"
            srcSet={geturl(video?.Video_Desktop_Image)}
          />
          {/* desktop */}
          <img
            src={geturl(video?.Video_Desktop_Image)}
            alt="main image"
            width="100%"
          />
        </picture>
        {/*  */}
        <span className="video_icon" onClick={handleClick}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 229.9 229.9"
            style={{ enableBackground: "new 0 0 229.9 229.9" }}
            xmlSpace="preserve"
            className="video-play-icon video-play-icon-white js-inline-svg loaded"
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                            .shadow {\n                                fill: rgba(0, 0, 0, .25)\n                            }\n\n                            .video-play-icon-white .fill_light {\n                                fill: #FFFFFF;\n                            }\n\n                            .video-play-icon-white .fill_dark {\n                                fill: url(#fill_light_gradient);\n                            }\n\n                            .fill_light {\n                                fill: #222;\n                            }\n\n                            .fill_dark {\n                                fill: url(#fill_dark_gradient);\n                            }\n                        "
              }}
            />
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation={5} />
            </filter>
            <path
              className="shadow"
              d="M113.8,8.6c-19.2,0-38.1,5.2-54.6,15c-50.5,30.1-67,95.5-36.9,146.1c28.5,47.9,89.2,65.6,139,40.8l0,0
      c36.1-18,59-54.9,59-95.3C220.3,56.3,172.6,8.6,113.8,8.6z M182.3,117.9c-0.4,0.8-1.1,1.5-1.9,1.9l-49.6,28.5l-2.6,1.5l0,0l-46.9,27c-2.4,1.4-5.4,0.6-6.9-1.8c-0.5-0.8-0.7-1.7-0.7-2.6l0.1-57.2V58c0-1.6,0.8-3.1,2-4c1.6-1.2,3.8-1.3,5.6-0.3l99,57.3
      C182.8,112.4,183.6,115.5,182.3,117.9z"
              filter="url(#blur)"
            />
            <g>
              <path
                className="fill_light"
                d="M215.3,107.6c0-58.8-47.7-106.5-106.5-106.5c-19.2,0-38.1,5.2-54.6,15l16.7,30.5c1.6-1.2,3.8-1.3,5.5-0.3l49.5,28.6l49.5,28.6c2.4,1.4,3.3,4.4,1.9,6.8c-0.4,0.8-1.1,1.5-1.9,1.9l-49.6,28.6l-2.6,1.5l33.1,60.6C192.5,184.9,215.3,148,215.3,107.6z"
              />
              <linearGradient
                id="fill_light_gradient"
                gradientUnits="userSpaceOnUse"
                x1="204.9047"
                y1="328.8061"
                x2="57.3213"
                y2="86.4174"
              >
                <stop offset={0} style={{ stopColor: "#FFFFFF" }} />
                <stop offset={1} style={{ stopColor: "#EEE" }} />
              </linearGradient>
              <linearGradient
                id="fill_dark_gradient"
                gradientUnits="userSpaceOnUse"
                x1="204.9047"
                y1="328.8061"
                x2="57.3213"
                y2="86.4174"
              >
                <stop offset={0} style={{ stopColor: "#111" }} />
                <stop offset={1} style={{ stopColor: "#000" }} />
              </linearGradient>
              <path
                className="fill_dark"
                d="M76.3,169.3c-2.4,1.4-5.4,0.6-6.8-1.8c-0.5-0.8-0.7-1.7-0.7-2.6l0.1-57.2V50.5c0-1.6,0.8-3.1,2.1-4L54.4,16c-50.5,30.1-67,95.5-36.9,146.1c28.6,47.9,89.2,65.6,139,40.8l-33.1-60.6L76.3,169.3z"
              />
            </g>
          </svg>
        </span>
      {/*  */}

      {display &&
        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video?.Video_YouTube_Id}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        }
      </div>
    </section>
 )
})}
 {/* Video_Section */}



{/*  Content_Section */}
{product?.Content_Section?.map((content, index) => {
 
 return (
    <section className="full_center_section product_content">
      {/* For Bg Section*/}
      <div className="full_bg">
        <picture>
          <source
            media="(max-width:768px)"
            srcSet={geturl(content?.Desktop_Image)}
          />
          <img
            src={geturl(content?.Desktop_Image)}
            alt="main image"
            width="100%"
          />
        </picture>
      </div>
      {/* For Bg Section*/}
      <div className="container-fluid  middle_fix_content ">
        <div className="row">
          <div className={"col-md-12 p-0 " + (content?.Content_Alignment == 'Left Align' ? " left_content_align " : " right_content_align ")}>
            <div className="content_box v2 text2  ">
              <h3 style={{ color: content?.Color }}> {content?.Content_Heading}</h3>
               {content?.Content_Description}
            </div>
          </div>
        </div>
      </div>
      {/*Verticle Features*/}
    </section>
  
 
  )
})}
{/*  Content_Section */}
 
 
{/*  Logo_Background_content */}
 {product?.Logo_Background_content?.Section_Visibility &&
    <section
      className="skull_space grey_bg"
      style={{ backgroundColor: product?.Logo_Background_content?.Section_Bg_Color }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="center_contnet">
              <img
                src={geturl(product?.Logo_Background_content?.Skull_Logo)}
                alt="skull"
                className="skull"
              />
              <h3>
                {product?.Logo_Background_content?.Quotes_Content}
              </h3>
              <img
                src={geturl(product?.Logo_Background_content?.Quotes_Hash_Tag_Sign)}
                alt="skull"
                className="sign"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  }
{/*  Logo_Background_content */}


{/* Left_Image_Content */}
    <section className="full_center_section tab_still_center">
      <div className="full_bg">
        <picture>
          <source
            media="(max-width:800px)"
            srcSet={geturl(product?.Left_Image_Content?.Desktop_Image)}
          />
          <img
            src={geturl(product?.Left_Image_Content?.Desktop_Image)}
            alt="main image"
            width="100%"
          />
        </picture>
      </div>
      <div className="container-fluid middle_fix_content left_image_section">
        <div className="row">
          <div className="col-md-12 p-0 left_content_align">
            <div className="content_box v2 with_img">
              { product?.Left_Image_Content?.Image_Icon?.data!==null && 
              <img
                src={geturl(product?.Left_Image_Content?.Image_Icon)}
                alt="logo"
              /> }
                {product?.Left_Image_Content?.Content}
            </div>
          </div>
        </div>
      </div>
    </section>
{/* Left_Image_Content */}



{/* Left_Right_Image_Section */}
    <section className="full_center_section">
      <div className="full_bg">
        <div className="row m-0">
          <div className="col-lg-6 col-sm-12 p-0">
            <picture>
              <source
                media="(max-width:800px)"
                srcSet={geturl(product?.Left_Right_Image_Section?.Left_Image)}
              />
              <img
                src={geturl(product?.Left_Right_Image_Section?.Left_Image)}
                alt="main image"
                width="100%"
              />
            </picture>
          </div>
          <div className="col-lg-6 col-sm-12 p-0">
            <picture>
              <source
                media="(max-width:800px)"
                srcSet={geturl(product?.Left_Right_Image_Section?.Right_Image)}
              />
              <img
                src={geturl(product?.Left_Right_Image_Section?.Right_Image)}
                alt="main image"
                width="100%"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>


{/* Left_Right_Image_Section */}



    <section
      className="full_center_section black_bg end_cart_sticky"
      id="productInTheBox"
    ></section>






    {/* <section
      className="full_center_section black_bg skull_space review_section"
      id="product-reviews"
    >
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="skull_title text-center">
                <h2>REVIEWS</h2>
                <button
                  type="button"
                  className="theme_btn v2 dark skull_popup_btn"
                  data="review"
                >
                  WRITE A REVIEW
                </button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="single_reivew">
                <span className="product_rating" data-rating={5}>
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                </span>
                <h5>No</h5>
                <p>Good</p>
                <span className="date_name">Krishna chand. January 23, 2024</span>
              </div>
              <div className="single_reivew">
                <span className="product_rating" data-rating={5}>
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                </span>
                <h5>SKULLCANDY DOES IT AGAIN!!</h5>
                <p>Like the Dime 2 earbuds, which are awesome, only better</p>
                <span className="date_name">Sunny Yadav. January 16, 2024</span>
              </div>
              <div className="single_reivew">
                <span className="product_rating" data-rating={5}>
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                </span>
                <h5>GREAT BUDS</h5>
                <p>
                  Great earbuds, 10/10. Fits in the ear nicely and the sound
                  quality is optimal. Overall solid Earbuds.
                </p>
                <span className="date_name">Ragani Sethi. January 16, 2024</span>
              </div>
              <div className="single_reivew">
                <span className="product_rating" data-rating={5}>
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                  <i className="fa fa-star-o fill" />
                </span>
                <h5>GREAT</h5>
                <p>Nice fit loud enough good bass I recommend it highly</p>
                <span className="date_name">
                  Surender SIngh. January 16, 2024
                </span>
              </div>
              <div className="skull_pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section> */}



    <section className="full_center_section black_bg skull_space">
      <div className="container-fluid">
        <div className="container max_container">
          <div className="row">
            <div className="col-md-12">
              <div className="skull_title text-center">
                <h2 />
                <p />
              </div>
            </div>
            <div className="col-md-12 text-center mt-5">
              <a href="#" className="outline_btn">
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default ProductDetail