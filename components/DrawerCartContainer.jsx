'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartforLogin, updateCartforLogin,deleteAllItemsFromCart, deleteFromCart, increment , decrement} from '@/features/Cart/cartnWishSlice'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Link from 'next/link'
import { useEffect } from 'react';
import { fetchCurrency } from '@/features/Currency/currencySlice';
import { htmlToText } from 'html-to-text';
import { getDataWithQuery,geturl } from "@/utils/api"
function DrawerCartContainer({ i }) {


    const dispatch = useDispatch()
   
    let sku = i?.SKU
    
    // let activeSlide = (i?.Variation_Sliders)?.find(product => product?.SKU == sku)
    // console.log(JSON.stringify(activeSlide))
    // let quantity = i?.quantity
    // let price = activeSlide?.Sales_price ? activeSlide?.Sales_price :activeSlide?.Variations_Price;

    let quantity = i?.quantity
    let price = i?.Sales_price ? i?.Sales_price : i?.Variations_Price;


    const { users } = useDispatch(state => state.auth)
   
    // const handleInc = () => {

    //     const obj = {
    //         SKU: i.SKU, quantity: quantity + 1
    //     }
    //     dispatch(updateCartforLogin(obj))
    //     //console.log(obj)
    // }

    // const handleDec = () => {

    //     const obj = {
    //         SKU: i.SKU, quantity: quantity == 1 ? 1 : (quantity - 1)
    //     }
    //     dispatch(updateCartforLogin(obj))
    // }


    const handleInc = () => {


        dispatch(increment(i))

        
        dispatch(updateCartforLogin())

    }

    const handleDec = () => {
        // dispatch(decrement(i))
        // dispatch(updateCartforLogin())
        if (quantity === 1) {
          // Perform delete function when quantity is one
          handleRemove(i?.SKU);
        } else {
          dispatch(decrement(i))
           dispatch(updateCartforLogin())
        }


    }



    const handleRemove = (SKU) => {
        confirmAlert({
            message: 'Are you sure You Want To Delete This Item..?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(deleteFromCart(SKU))
                },
                {
                    label: 'No',
                    onClick: () => <></>
                }
            ],
        });

    }
   
    return (

        <>
            {/* login */}

{/* ////////////////////////////////////////// */}

            <div className="drawer-product-list user">
              <div className="dpl-img">
                {/* <img src={geturl(i?.image)} alt="" /> */}
                <img src={i?.Variant_Image_url} alt={i?.Variations_Color_Name} />
              </div>
              <div className="dpl-title">
                <Link href={`/shop/${i?.slug}`} >{i.name}</Link>
                <span className="product-option"> {i?.Variations_Color_Name} | {i?.SKU}  </span>
                <div className="quantity-wrapper">
                  <span className="quantity-dec"  onClick={() => handleDec()}>--</span>
                  <input type="text" value={quantity} />
                  <span className="quantity-inc" onClick={() => handleInc()}>+</span>
                </div>
              </div>
              <div className="dpl-price">
                {/* <h4>{i.price * i.quantity}</h4> */}
                <h4><i className="fa fa-rupee"></i>{price * quantity}</h4>
                <Link href="#" onClick={() => handleRemove(i?.SKU)}  className='drawer-product-remove'> Remove</Link>
              </div>
            </div>


        </>
    )
}

export default DrawerCartContainer
