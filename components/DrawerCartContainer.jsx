'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartforLogin, deleteAllItemsFromCart, deleteFromCart } from '@/features/Cart/cartnWishSlice'
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
              
    let activeSlide = (i?.Variation_Sliders)?.find(product => product?.SKU === sku)
    // console.log(JSON.stringify(activeSlide))
    let quantity = i?.quantity
    let price = activeSlide?.sales_price ? activeSlide?.sales_price :activeSlide?.Variations_Price;

    const { users } = useDispatch(state => state.auth)
   
    const handleInc = () => {

        const obj = {
            SKU: i.SKU, quantity: quantity + 1
        }
        dispatch(addToCartforLogin(obj))
        //console.log(obj)
    }

    const handleDec = () => {

        const obj = {
            SKU: i.SKU, quantity: quantity == 1 ? 1 : (quantity - 1)
        }
        dispatch(addToCartforLogin(obj))
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
            {/* <tr className=''>
            <td ><svg style={{ "color": "var(--danger)" }} onClick={() => handleRemove(i.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-3 bi bi-trash3-fill cursorClass" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg></td>
                <td className='w-25'>{geturl(i?.image) === null ? 'Not Available' : <img className='img-fluid' height="30%" width="30%" src={geturl(i?.image)} />}</td>
                <td className='w-25'><Link href={`/productDetail/${i.id}`} className="fw-bold text-decoration-none text-dark">{i.title}</Link></td>
                <td>
                    <i>Rs</i>&nbsp;&nbsp;{i.price}</td>
                <td className='w-25'>
                    <span className="input-group border-0 quantity d-flex align-items-center justify-content-center">
                        <span className="input-group-text cursorClass " onClick={() => handleDec()}>-</span>
                        <input type="text" className="input-group-text w_50"   value={quantity} />

                        <span className="input-group-text cursorClass" onClick={() => handleInc()}>+</span>
                    </span>
                </td>
                <td>
                    <i>Rs</i>&nbsp;&nbsp;{i.price * i.quantity}
                </td>
              
            </tr> */}

{/* ////////////////////////////////////////// */}

            <div className="drawer-product-list">
              <div className="dpl-img">
                {/* <img src={geturl(i?.image)} alt="" /> */}
                <img src={geturl(activeSlide?.Variant_Image)} alt="" />
              </div>
              <div className="dpl-title">
                <Link href={`/productDetail/${i?.id}`} >{i.title}</Link>
                <span className="product-option"> {activeSlide?.Variations_Color_Name} | {activeSlide?.SKU}  </span>
                <div className="quantity-wrapper">
                  <span className="quantity-dec"  onClick={() => handleDec()}>--</span>
                  <input type="text" value={quantity} />
                  <span className="quantity-inc" onClick={() => handleInc()}>+</span>
                </div>
              </div>
              <div className="dpl-price">
                {/* <h4>{i.price * i.quantity}</h4> */}
                <h4>{price * quantity}</h4>
                <Link href="#" onClick={() => handleRemove(i?.SKU)}  className='drawer-product-remove'> Remove</Link>
              </div>
            </div>


        </>
    )
}

export default DrawerCartContainer
