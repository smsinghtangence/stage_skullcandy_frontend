'use client'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, deleteAllItemsFromCart, increment, removeFromCart } from "@/features/Cart/cartnWishSlice"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Link from 'next/link'
import { useEffect } from "react";
import { fetchCurrency } from "@/features/Currency/currencySlice";
import { htmlToText } from "html-to-text";
import { getDataWithQuery,geturl } from "@/utils/api"

function DrawerCartContainer2({ i }) {


  let sku = i?.SKU
              
  // let activeSlide = (i?.Variation_Sliders)?.find(product => product?.SKU == sku)
   
  //   let quantity = i?.quantity

  //   let price = activeSlide?.Sales_price ? activeSlide?.Sales_price :activeSlide?.Variations_Price;


  let quantity = i?.quantity
  let price = i?.Sales_price ? i?.Sales_price :i?.Variations_Price;


    const [val, setVal] = useState(quantity)

    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch(increment(i))
    }

    const handleDec = () => {
      if (quantity === 1) {
        // Perform delete function when quantity is one
        Remove(i?.SKU);
      } else {
        dispatch(decrement(i))
      }
         
    }
    const Remove = (SKU) => {
        confirmAlert({
            message: 'Are you sure You Want To Delete This Item..?',
            buttons: [
              {
                label: 'Yes',
                onClick: () =>  dispatch(removeFromCart(SKU))
              },
              {
                label: 'No',
                onClick: () =><></>
              }
            ],
          });
        
    }

    
    return (

        <>
            
 {/* Guest */}
            <div className="drawer-product-list Guest">
              <div className="dpl-img">
                {/* <img src={geturl(i?.image)} alt="" /> */}
                {/* <img src={geturl(activeSlide?.Variant_Image)} alt="" /> */}
                <img src={i?.Variant_Image_url} alt="" />
                
              </div>
              <div className="dpl-title">
                <Link href={`/shop/${i?.slug}`} >{i.name}</Link>
                <span className="product-option"> {i?.Variations_Color_Name} | {i?.SKU} </span>
                <div className="quantity-wrapper">
                  <span className="quantity-dec"   onClick={() => handleDec(val === 1 ? setVal(1) : setVal(val - 1))}>--</span>
                  <input type="text" value={quantity} />
                  <span className="quantity-inc" onClick={() => handleInc(setVal(val + 1))}>+</span>
                </div>
              </div>
              <div className="dpl-price">
                {/* <h4>{i.price * i.quantity}</h4> */}
                <h4><i className="fa fa-rupee"></i>{price * quantity}</h4>
                <Link href="#" onClick={() => Remove(i?.SKU)}  className='drawer-product-remove'> Remove</Link>
              </div>
            </div>



        </>
    )
}

export default DrawerCartContainer2
