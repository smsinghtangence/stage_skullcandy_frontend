'use client'
import React, { useState } from 'react'
import Account from '@/components/Account';
import { MDBModal, MDBModalDialog } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckOutUserType } from '@/features/CheckOut/checkOutSlice';

function LoginBtnForGuest() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const {checkoutUserType} = useSelector(state => state.checkOut)
  const dispatch = useDispatch()
  const loginShow = ()=>{
    toggleShow()
    dispatch(setCheckOutUserType('login'))
  }
  return (
    <>
      <button className={checkoutUserType == 'login'? `btn  btn-dark   text-light px-5`:'btn btn-outline-dark px-5'} onClick={()=>{
        loginShow()
      }}>Login</button>
      <MDBModal id="accountToggle" show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <Account toggleShow={toggleShow} />
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default LoginBtnForGuest
