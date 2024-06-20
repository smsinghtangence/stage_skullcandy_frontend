'use client'
import React from 'react'
import Link from 'next/link'
 
 
import { useEffect, useState, useRef  } from 'react'
import $ from 'jquery';
import { getDataWithQuery, geturl } from "@/utils/api"
import { useDispatch, useSelector } from 'react-redux'
 function page({ params }) {
const slug = params.product;
const dispatch = useDispatch()
const [cartItems, setCartItems] = useState([]);
const { users, isSuccess: isuserSuccess } = useSelector(state => state.auth)
const [wishlistItem, setWishListItem] = useState([])
const { cart, wishlist, isSuccess, isBuyNow, isLoading: CartWishLoading } = useSelector(state => state.cartWish)
const handleCart = (e, product) => {
e.preventDefault()
 
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
const cartItems = cart?.map(item => item.id);
setCartItems(cartItems);
 
}, [cart]);
 
const [product, setProduct] = useState();
 
const getdata = async () => {
const response = await getDataWithQuery(`/api/products/?filters[slug][$eq]=${slug}&populate[1]=image,Feature_List.Icons,Variation_Sliders.Desktop_Image,Variation_Sliders.Mobile_Image,Variation_Sliders.Variant_Image,Extra_Features,Video_Section.Video_Desktop_Image,Video_Section.Video_Tab_Image,Content_Section.Desktop_Image,Logo_Background_content.Skull_Logo,Logo_Background_content.Quotes_Hash_Tag_Sign,Left_Image_Content,Left_Right_Image_Section&populate[0]=image,product_categories,Feature_List,Variation_Sliders,Extra_Features,Video_Section,Content_Section,Logo_Background_content,Left_Image_Content.Desktop_Image,Left_Image_Content.Image_Icon,Left_Right_Image_Section.Left_Image,Left_Right_Image_Section.Right_Image,Product_Usp.Icon,Product_Detail_Slider.Image,Product_Detail_Slider_2.Image,Product_Slider.Product_Slider,Product_Accordion,Product_Hover_Image,Product_Video_Section.video1,Product_Video_Section.video2,Product_Video_Section.video3,,Product_Video_Section.video4,Product_Video_Section.video5,Product_Video_Section.image1,Product_Video_Section.image2,Product_Video_Section.image3,Product_Video_Section.image4,Product_Video_Section.image5`,
{
// pagesize: 1000, typeId: blogId 
});
setProduct({ ...response?.data[0]?.attributes, "id": response?.data[0]?.id })
 
return response;
}
useEffect(() => {
getdata();
}, []);


useEffect(() => {
$(document).ready(function () {
$(".accordion").on("click", function (e) {
e.preventDefault();
$(this).parent().addClass("active").siblings().removeClass("active");
});
});
}, []);


 



return (
<>
<div className="breacrumb-blk">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <ol className="breadcrumbs">
               <li>
                  <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.867 10">
                     <path id="Path_325" data-name="Path 325" d="M6.243,3.05C5.931,2.2,8,0,4.2,0,.946,0,.641,3.215.5,3.463a2.828,2.828,0,0,0-.467.94c-.089.413,0,.872.267.872.4,0-.089-.8.4-.8.623,0,1.358,1.009,1.558,1.582-.334.6-.8.986-1.135.827a1.016,1.016,0,0,1-.69-.918c0-.369-.344-.357-.311.114a1.753,1.753,0,0,0,.8,1.354A4.342,4.342,0,0,1,2.148,8.967c.152.377.356.551.913.551s.133.482.512.482.156-.529.378-.529,0,.505.423.505c.645,0,.356-.8.557-.941S7.912,7.43,7.867,5.619C7.823,3.831,6.554,3.9,6.243,3.05ZM3.527,8.165A1.3,1.3,0,0,0,2.5,8.05c-.245.091-.489-.046-.289-.666a3.442,3.442,0,0,1,.4-.894A14.466,14.466,0,0,1,3.95,8.1C3.972,8.279,3.683,8.348,3.527,8.165ZM5.419,7.133A1.491,1.491,0,1,1,6.866,5.641,1.469,1.469,0,0,1,5.419,7.133Z" transform="translate(0)"></path>
                  </svg>
                  </Link>
               </li>
               <li>
                  {product?.title}
               </li>
            </ol>
         </div>
      </div>
   </div>
</div>

 
      <section className="pages py-5">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <h1>{product?.Title}</h1>
                  <div
                     dangerouslySetInnerHTML={{ __html: product?.Product_Help }}
                  />
               </div>
            </div>
         </div>
      </section>
 
</>
)
}
export default page