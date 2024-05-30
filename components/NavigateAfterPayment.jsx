import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'
import { payWithCardReset, resetAllState, reset } from '@/features/CheckOut/checkOutSlice';
import { deleteAllItemsFromCart, deleteFromCart, removeFromCart, resetCartAfterPaymentForGustUser } from '@/features/Cart/cartnWishSlice';
import ThankYou from '@/components/ThankYou';
import CryptoJS from "crypto-js"
function NavigateAfterPayment() {
    const { isLoading, isSuccess, message, razorpay, isPaymentWithCard, order } = useSelector(state => state.checkOut);
    const { cart, buyNow } = useSelector(state => state.cartWish);
    const {users} = useSelector(state=>state.auth)
    // const navigate = useNavigate();
    const router = useRouter();
    const dispatch = useDispatch();

    window.scroll(0,0)
    // Payment with razorpay after payment has successfully
    useEffect(() => {
        if (isSuccess && message === "success" && razorpay && isPaymentWithCard) {
            handleSuccess();
        }
    }, [isSuccess, order, message]);

    const handleSuccess = () => {
        // alert(order?.id)
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(order?.id), '').toString();
        var encrypt_orderid = ciphertext.replace(/\+/g,'p1L2u3S').replace(/\//g,'s1L2a3S4h').replace(/=/g,'e1Q2u3A4l');
        
    //  router.push('/success/'+order?.id);
     router.push('/success/'+encrypt_orderid);
    
        dispatch(payWithCardReset());
        dispatch(reset());
        dispatch(resetAllState());

        if (buyNow.length !== 0) {
            const product = cart?.filter((i) => i?.id === buyNow[0]?.id);
            if (users?.id) {
                dispatch(deleteFromCart(product[0]?.id)); // Delete only purchased product from cart
            } else {
                dispatch(removeFromCart(product[0]?.id));
            }
        } else {
            const product = cart?.filter((i) => i?.id === buyNow[0]?.id);
            if (users?.id) {
                dispatch(deleteAllItemsFromCart()); // Delete all products from cart
            } else {
                
                localStorage.removeItem('cart')
                dispatch(resetCartAfterPaymentForGustUser())
            }
            
           
           
        }
    };

    if (isLoading === 'updateOrderAfterPaymentPending') {
        return    <div className='px-4 d-flex align-items-center  justify-content-center flex-column'  style={{
            marginTop:'210px'
          }}>
        <p className='border border-danger p-3 mt-3 rounded-2'>Your payment is currently being processed, please wait while we secure your transaction. Do not refresh the page.</p>
        <Spinner/>
    </div>
    }

    return (
        <div>
            {/* <ThankYou /> */}
        </div>
        
       
    );
}

export default NavigateAfterPayment;
