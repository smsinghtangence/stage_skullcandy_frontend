import { useState, useEffect } from 'react';

const useCart = () => {
  
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // localStorage.setItem('Drawer',"true")
  let isCartOpen = localStorage?.getItem('Drawer')
   

 

  

  const toggleCart = () => {
    // alert("hi"+isCartOpen)
    // setIsCartOpen(!isCartOpen);
    localStorage.setItem('Drawer',!isCartOpen)
  };
  const openCart = () => {
    // alert("hi"+isCartOpen)
    // setIsCartOpen(!isCartOpen);
    localStorage.setItem('Drawer',"true")
  };

  const closeCart = () => {
    // alert("hi"+isCartOpen)
    localStorage.setItem('Drawer',"false")  
  };

  return {
    
    isCartOpen,
    openCart,
    toggleCart,
    closeCart,
  };
};

export default useCart;
