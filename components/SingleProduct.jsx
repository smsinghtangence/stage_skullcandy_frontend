'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useRef, useState, useEffect  } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Link from 'next/link';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDataWithQuery, geturl } from "@/utils/api"
import { useDispatch, useSelector } from 'react-redux'
import { adddToBuyNow, addToCart, compareCartState, addToCartforLogin, addToWishlist, deleteWishlist, setBuyNowStatus, resetBuyNowStatus, } from '@/features/Cart/cartnWishSlice'

gsap.registerPlugin(ScrollTrigger);
const API_URL =  process.env.API_URL || '';
function SingleProduct({product}) {



   //
  const dispatch = useDispatch()
  const [cartItems, setCartItems] = useState([]);
  const { users, isSuccess: isuserSuccess } = useSelector(state => state.auth)
  const [wishlistItem, setWishListItem] = useState([])
  const { cart, wishlist, isSuccess, isBuyNow, isLoading: CartWishLoading } = useSelector(state => state.cartWish)
  const handleCart = (e, product) => {
    e.preventDefault()
    //console.log(product.id)
    const obj = {
        id: product?.id, quantity: 1
    }
    if (users) {
        // dispatch(addToCartforLogin(obj))
        dispatch(addToCartforLogin(product))
    }
    else {
        dispatch(addToCart(product))
    }

}
useEffect(() => {
    // Fetch cart items from the cart state
    const cartItems = cart?.map(item => item?.SKU);
    setCartItems(cartItems);
   //  console.log(cartItems)
}, [cart]);
  //
//   const slug = params.product;
//   const [product, setProduct] = useState();

  ///
  const [isActive, setIsActive] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleClick = event => {

    setIsActive(current => !current);
    setDisplay(!display);
  }
  ////

  ////////////////////////////////////////////////////////////////////
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
       //  let mm = gsap.matchMedia();
       //  mm.add("(min-width: 800px)", () => {
       //    gsap.to(".sps-container", {
       //      scrollTrigger: {
       //        trigger: ".single-product-content",
       //         pin: ".sps-container",
       //       start: "top",
       //       end: "+=650",
       //      scrub: true,
       //      markers: false,
       //      }
       //    });
       //  });
     
     
    //     let steppers = document.querySelector(".single-product-content");
    // let pinTarget = document.querySelector(".sps-container");
     
    // ScrollTrigger.create({
    //   trigger: 'sps-container',
    //   start: '-50px top',
    // //   end: () => `+=${steppers.offsetHeight}`,
    //   end: 'bottom center',
    //   pin: '.sps-container',
    //   markers: true,
    //   invalidateOnRefresh: true
    // })
     
     
        if (window.matchMedia("(min-width: 768px)").matches) {
     
          let steppers = document.querySelector(".sps-container ");
          let pinTarget = document.querySelector(".feature-slider");
          ScrollTrigger.create({
          trigger: '.single-product-content',
          start: '0px 0px',
          end: 'bottom 70%',
          pin: '.sps-container',
          markers: false,
          invalidateOnRefresh: true
          });
          }
     
    }, [])

        

const [activeSlide, setActiveSlide] = useState(product?.Variation_Sliders ? product?.Variation_Sliders[0]:"");

useEffect(()=>{
      product?.Variation_Sliders ?
    setActiveSlide(product?.Variation_Sliders[0])
    :"";
   //  console.log(product?.id)
},[product]);


const changeVariant = (selecteColor) => {

//   console.log("selecteColor id "+ selecteColor)
  let sliders = product?.Variation_Sliders

//   console.log("sliders "+ JSON.stringify(sliders))

const variant =  sliders.filter((slider) => {
      return slider?.id == selecteColor;
    })
   //  console.log("variant "+ JSON.stringify(variant))
 
  setActiveSlide(variant[0])
}

let slideNo = activeSlide?.Desktop_Image?.data?.length - 3;
  return (
    <>

    
  <section className='single-product-detail'>
   <div className='container'>
   <div className='row'>
      <div className='col-lg-7'>
      <div className='sps-container' >
     <div className='single-product-slider'>
        <div className="single-product-big">
     <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        
     {activeSlide?.Desktop_Image?.data?.map((item, i) => (
        <SwiperSlide>
          <div className={i > slideNo ? "gallery-img ls" : "gallery-img "}>
          <img src={API_URL + item?.attributes?.url} alt=""   />
          </div>
        </SwiperSlide>
       ))}
        
      
      </Swiper>
      </div>
         
          <div className="single-product-thumbnail">
         
          
            <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={7.5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
           {activeSlide?.Desktop_Image?.data?.map((item, i) => (
        <SwiperSlide>
          <div className="gallery-img">
          <img src={API_URL + item?.attributes?.url} alt=""   />
          </div>
        </SwiperSlide>
       ))}
 
      </Swiper>
     </div>
     </div>
     </div>
      </div>
      <div className="col-lg-5">
         <div className='single-product-content'>
            <p className="product-text">{product?.Product_Tag_Line_Heading}</p>
            <h1 className='sp-heading'>{product?.title}</h1>
            
            
            <div className="sp-price">
               <span>
               {activeSlide?.Variations_Price && <i className="fa fa-rupee"></i>} 
               {activeSlide?.sales_price ? activeSlide?.sales_price :activeSlide?.Variations_Price}
               </span>
               {/* price */}
              {activeSlide?.sales_price && <s><i className="fa fa-rupee"></i> {activeSlide?.Variations_Price}</s>}
               {/*  */}
            </div>


            {/* <div className="interest-free-installment">
               <span>4 interest-free installments with</span>
               <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="shop-pay-logo" viewBox="0 0 341 81" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M227.297 0C220.448 0 214.896 5.47237 214.896 12.2229V67.8125C214.896 74.563 220.448 80.0354 227.297 80.0354H328.357C335.206 80.0354 340.758 74.563 340.758 67.8125V12.2229C340.758 5.47237 335.206 0 328.357 0H227.297ZM244.999 55.8917V41.8012H253.993C262.21 41.8012 266.579 37.2604 266.579 30.379C266.579 23.4976 262.21 19.3782 253.993 19.3782H239.205V55.8917H244.999ZM244.999 24.8084H252.663C257.982 24.8084 260.595 26.9617 260.595 30.5663C260.595 34.1708 258.077 36.3242 252.9 36.3242H244.999V24.8084ZM276.795 56.6407C281.212 56.6407 284.109 54.7214 285.439 51.4445C285.819 55.0959 288.052 56.9684 292.896 55.7044L292.944 51.819C290.996 52.0063 290.616 51.3041 290.616 49.2912V39.7415C290.616 34.124 286.864 30.8003 279.93 30.8003C273.09 30.8003 269.148 34.1708 269.148 39.8819H274.468C274.468 37.1668 276.415 35.5284 279.835 35.5284C283.444 35.5284 285.107 37.0732 285.059 39.7415V40.9586L278.932 41.614C272.045 42.3629 268.246 44.9376 268.246 49.4316C268.246 53.1298 270.905 56.6407 276.795 56.6407ZM277.982 52.4276C274.99 52.4276 273.803 50.836 273.803 49.2443C273.803 47.091 276.273 46.1079 281.117 45.5462L284.917 45.1249C284.679 49.2443 281.877 52.4276 277.982 52.4276ZM310.537 57.7174C308.115 63.5221 304.22 65.2541 298.141 65.2541H295.528V60.4793H298.331C301.655 60.4793 303.27 59.4494 305.028 56.5002L294.246 31.5493H300.23L307.925 49.7593L314.764 31.5493H320.606L310.537 57.7174Z" fill="rgb(90, 49, 244)"></path>
                  <path d="M29.5136 35.1798C21.5797 33.4835 18.0451 32.8197 18.0451 29.8064C18.0451 26.9722 20.4371 25.5604 25.221 25.5604C29.4282 25.5604 32.5036 27.3726 34.7674 30.9232C34.9382 31.1972 35.2906 31.292 35.5789 31.1445L44.506 26.6983C44.8263 26.5402 44.9438 26.1399 44.7623 25.8343C41.0569 19.5022 34.2121 16.0358 25.1996 16.0358C13.3574 16.0358 6 21.7885 6 30.9338C6 40.648 14.9591 43.1029 22.9038 44.7992C30.8484 46.4955 34.3936 47.1592 34.3936 50.1725C34.3936 53.1858 31.8095 54.6082 26.6518 54.6082C21.8893 54.6082 18.3548 52.4589 16.2191 48.2866C16.059 47.981 15.6852 47.8546 15.3756 48.0127L6.46985 52.364C6.16017 52.5221 6.03203 52.8908 6.19221 53.2069C9.72673 60.2134 16.9773 64.1538 26.6625 64.1538C38.996 64.1538 46.4494 58.496 46.4494 49.0663C46.4494 39.6365 37.4476 36.8972 29.5136 35.2009V35.1798Z" fill="rgb(90, 49, 244)"></path>
                  <path d="M77.3525 16.0358C72.291 16.0358 67.8168 17.8059 64.6026 20.9561C64.3997 21.1458 64.0687 21.0088 64.0687 20.7349V0.621625C64.0687 0.273937 63.791 0 63.4387 0H52.2692C51.9168 0 51.6391 0.273937 51.6391 0.621625V63.0476C51.6391 63.3952 51.9168 63.6692 52.2692 63.6692H63.4387C63.791 63.6692 64.0687 63.3952 64.0687 63.0476V35.6644C64.0687 30.3754 68.1798 26.319 73.7219 26.319C79.2639 26.319 83.279 30.2911 83.279 35.6644V63.0476C83.279 63.3952 83.5566 63.6692 83.909 63.6692H95.0785C95.4309 63.6692 95.7085 63.3952 95.7085 63.0476V35.6644C95.7085 24.1591 88.0628 16.0464 77.3525 16.0464V16.0358Z" fill="rgb(90, 49, 244)"></path>
                  <path d="M118.389 14.2552C112.324 14.2552 106.622 16.0779 102.542 18.7224C102.265 18.9016 102.169 19.2703 102.34 19.5548L107.262 27.8466C107.444 28.1416 107.828 28.247 108.127 28.0679C111.224 26.2241 114.769 25.2653 118.389 25.2864C128.138 25.2864 135.303 32.0716 135.303 41.0377C135.303 48.6763 129.569 54.3342 122.297 54.3342C116.371 54.3342 112.26 50.9311 112.26 46.1266C112.26 43.3767 113.445 41.122 116.531 39.5311C116.851 39.3625 116.969 38.9727 116.777 38.6671L112.132 30.9126C111.982 30.6598 111.662 30.5439 111.373 30.6492C105.148 32.925 100.78 38.4037 100.78 45.7579C100.78 56.8839 109.761 65.1863 122.287 65.1863C136.916 65.1863 147.434 55.1876 147.434 40.8481C147.434 25.476 135.197 14.2446 118.368 14.2446L118.389 14.2552Z" fill="rgb(90, 49, 244)"></path>
                  <path d="M180.098 15.9515C174.449 15.9515 169.409 18.006 165.725 21.6304C165.522 21.8306 165.191 21.6831 165.191 21.4092V17.0473C165.191 16.6996 164.914 16.4256 164.561 16.4256H153.68C153.328 16.4256 153.05 16.6996 153.05 17.0473V79.3784C153.05 79.7261 153.328 80 153.68 80H164.849C165.202 80 165.48 79.7261 165.48 79.3784V58.9385C165.48 58.6645 165.811 58.5276 166.013 58.7067C169.687 62.0782 174.545 64.0485 180.109 64.0485C193.211 64.0485 203.43 53.5862 203.43 39.9947C203.43 26.4032 193.2 15.941 180.109 15.941L180.098 15.9515ZM177.995 53.4914C170.541 53.4914 164.892 47.6439 164.892 39.9104C164.892 32.177 170.53 26.3295 177.995 26.3295C185.459 26.3295 191.086 32.0822 191.086 39.9104C191.086 47.7387 185.533 53.4914 177.984 53.4914H177.995Z" fill="rgb(90, 49, 244)"></path>
               </svg>
            </div> */}
            <div className="sp-start-blk">
               <div className="stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><span>4.9</span></div>
               <div className="review-summary">
                  <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                     <path d="M12.616 0L13.6143 1.94771L15.4861 2.9865L13.6143 4.02527L12.616 5.97298L11.6177 4.02527L9.74584 2.9865L11.6177 1.94771L12.616 0ZM5.80334 2.4614L7.82189 6.39963L11.6067 8.50004L7.82189 10.6004L5.80334 14.5386L3.78479 10.6004L0 8.50004L3.78479 6.39963L5.80334 2.4614ZM14.6345 11.9131L13.373 9.45175L12.1113 11.9131L9.74584 13.2259L12.1113 14.5386L13.373 17L14.6345 14.5386L17 13.2259L14.6345 11.9131Z" fill="#FFC700"></path>
                  </svg>
                  <Link href="#">
                  See Reviews Summary </Link>
               </div>
            </div>
            <div className="product-color-variant">
            {activeSlide?.Variations_Color_Name &&
               <p>
                  <strong>Color: </strong> <span>
                  {activeSlide?.Variations_Color_Name}</span>
                  </p>
               }
               <div className="product-color-img-blk-variant" >
               {/*  */}
               
        {product?.Variation_Sliders?.map((slide, pindex) => {
    return ( 
  
     
      
      <div className="product-color-img-list"  onClick={() =>changeVariant(slide?.id)}>
         <img src={geturl(slide?.Variant_Image)} alt="" />
      </div>

  
        
        

        
    )})}
         </div>    
            {/*  */}

            </div>
            {/* <div className="limited-edition">
               <p> Limited Editions </p>
               <div className="product-color-img-list">
                  <img src="https://www.skullcandy.com/cdn/shop/files/NewBurtonCrusherRender.png" alt="" />
               </div>
            </div> */}
           
            {/* add to cart */}
            {/* 
            <Link href="#" className='sold-btn' disabled="disabled">
            SOLD OUT</Link> */}
            {/* {product?.stock_status !== 'instock' */}
            
             {activeSlide?.Quantity == null || 
             activeSlide?.Quantity == 0 
            ?
            <>
            <button type="button" class="btn btn-primary w-100 mt-2" data-toggle="modal" data-target="#notify-modal">
               NOTIFY ME WHEN AVAILABLE
            </button>
            <Link href="#" className="sold-btn my-2" disabled="disabled">
            SOLD OUT</Link>


</>
            :
            <div className='d-flex gap-3 product-btn'>
               {
                  CartWishLoading == true ? <>
                  <button className=" btn btn-dark">
                  <i className="fa fa-spinner fa-spin me-3"></i>Loading
                  </button>
                  </> : <>
                  <button
                     className="notify-btn"
                     type="button"
                     id="cart-btn"
                     onClick={(e) => {
                  // 
                  // if (!cartItems?.some(item => item?.SKU === activeSlide?.SKU)){
                     if (!cartItems?.includes(activeSlide?.SKU)) {
                  handleCart(e, {...product,"SKU":activeSlide?.SKU})
                  }
               }
               }
               // disabled={product?.stock_status !== 'instock'}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <rect id="Rectangle_2502" data-name="Rectangle 2502" width="24" height="24" fill="none"></rect>
    <g id="Icon_material-add-shopping-cart" data-name="Icon material-add-shopping-cart" transform="translate(4 3.333)">
      <path id="Icon_material-add-shopping-cart-2" data-name="Icon material-add-shopping-cart" d="M9.437,7.849h1.587V5.468H13.4V3.881H11.024V1.5H9.437V3.881H7.056V5.468H9.437ZM6.262,14.992a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,6.262,14.992Zm7.937,0a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,14.2,14.992ZM6.4,12.413l.024-.1.714-1.294h5.913a1.58,1.58,0,0,0,1.389-.817L17.5,4.643l-1.381-.762h-.008l-.873,1.587-2.19,3.968H7.476l-.1-.214L5.6,5.468,4.841,3.881,4.1,2.294H1.5V3.881H3.087L5.944,9.9,4.873,11.849a1.534,1.534,0,0,0-.2.762A1.592,1.592,0,0,0,6.262,14.2h9.524V12.611H6.6A.2.2,0,0,1,6.4,12.413Z" transform="translate(-1.5 -1.5)"></path>
    </g>
  </svg>
   
               {/* {cartItems?.includes(activeSlide?.SKU) ? 'Added' : 'Add to Cart'} */}

               { cartItems?.includes(activeSlide?.SKU) ? 'Added' : 'Add to Cart'}  
               </button>
               </>
               }
            </div>
            }
            {/* end add to cart */}




            {product?.Product_Usp?.length>0 &&
            <div className="sp-container">
               <div className="sp-wrapper">
                  {product?.Product_Usp?.map((item, i) => (
                  <div className="sp-row sp-row-one">
                     <div className="sp-row-svg">
                        <img src={geturl(item?.Icon)} loading="lazy" alt="" />
                     </div>
                     <div className="sp-row-text">
                        <p>{item.Heading}</p>
                     </div>
                  </div>
                  ))}
               </div>
            </div>
}
            <div className="product-description">
               <p><strong>  {product?.Product_description_Heading}</strong></p>
               <p>{product?.Product_Description} </p>
            </div>
            {product?.Feature_List?.length >0 &&
            <div className="features-metafield">
               <h2 className="fm-heading">
                  Features
               </h2>
               <div className="tab-content tab-featured">
                  <div className="tab-featured-wrapper">
                     {product?.Feature_List?.map((item, i) => (
                     <div className="tab-featured-inner">
                        <div className="tab-featured-icon">
                           <img src={geturl(item?.Icons)} alt="icon" loading="lazy" width="200" height="200" />
                        </div>
                        <div className="tab-featured-text">
                           {item?.Heading}
                        </div>
                     </div>
                     ))}
                  </div>
               </div>
            </div>
            }
            <div className="product-accordion">
               <div id="accordion" className="accordion">
                  <div className="card mb-0">
                     {product?.Product_Accordion?.map((item, i) => (
                     <>
                     <div
                        className="card-header collapsed"
                        data-toggle="collapse"
                        href={"#collapseOne" + i}
                        >
                        <a className="card-title">{item.Accordion_Heading}</a>
                     </div>
                     <div
                        id={"collapseOne" + i}
                        className="card-body collapse"
                        data-parent="#accordion"
                        >
                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                        </>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

 {/* The Modal */}
 <div className="modal" id="notify-modal">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title text-uppercase">Notify me when available</h4>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>        
        </div>
        
        {/* Modal body */}
        <div className="modal-body">
        <small>We'll notify you when this product is back in stock.</small>
         <h4>Smokin' Buds</h4>
         <form action="">
            <div className="form-group">
            <div className="select-container">
               <select name="" id="" className="form-control">
                  <option value="True Black">True Black</option>
                  <option value="True Black">--</option>
               </select>
            </div>
            </div>

            <div className="form-group">
               <input type="email" className='form-control' placeholder='Email address'/>
            </div>

            <div className="form-group">
               <Link href="#" className='product-available-btn'>Notify me when available</Link>
              
            </div>
            <small>we don't share your information with other</small>


         </form>
        </div>
    
      </div>
    </div>
  </div>

    </>
  )
}

export default SingleProduct