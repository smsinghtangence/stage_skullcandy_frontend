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
function CartContainer({ i }) {


    const dispatch = useDispatch()
   
    let sku = i?.SKU
    
    

    let quantity = i?.quantity
    let price = i?.Sales_price ? i?.Sales_price :i?.Variations_Price;


    const { users } = useDispatch(state => state.auth)
   
   


    const handleInc = () => {


        dispatch(increment(i))

        
        dispatch(updateCartforLogin())
    }

    const handleDec = () => {
        

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
            

{/* ////////////////////////////////////////// */}

            

            <tr>
                            <td>
                            <div className="cart-proudct-detail">
                            <div className="cpd-img">
                            <img src={i?.Variant_Image_url} alt={i?.Variations_Color_Name} className='cart-product-img' />
                            </div>
                            <div className="cpd-content">
                            <Link href={`/shop/${i?.slug}`}>{i.name}</Link>
                            <p className='cart-price'><i class="fa fa-rupee"></i>{price} </p>
                            <p><span>Color:</span>{i?.Variations_Color_Name} | {i?.SKU} </p>
                            </div>
                            </div>

                            </td>

                            <td>
                            <div className="cart-item-quantity">
                            <div className="ciq-blk">
                            <button className="ciq-dec" onClick={() => handleDec()}>--</button>
                            <input type="text" value={quantity} />
                            <button className="ciq-Inc" onClick={() => handleInc()}>+</button>
                            </div>
                            <div className="ciq-delete">
                            <Link href="#" onClick={() => handleRemove(i?.SKU)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove">
                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                            </svg>
                            </Link>
                            </div>
                            </div>

                            </td>
                            <td>
                            <i className="fa fa-rupee"></i>{price * quantity}
                            </td>
                            </tr>
        </>
    )
}

export default CartContainer
