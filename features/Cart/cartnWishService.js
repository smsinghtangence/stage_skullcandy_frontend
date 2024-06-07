import axios from "axios"

const API_URL = process.env.API_URL

let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}

const addToCartforLogin = async (cartObj,cart, users) => {
    const { 
        product_id, 
        quantity ,
        SKU ,
        name ,
        Variations_Color_Name ,
        Variations_Price ,
        Variant_Image_url ,
        Sales_price ,
        slug ,
        Variant_Image  } = cartObj
     
   

    const cartItem = {
        "id": users?.id,
        "Cart": [
             ...cart,
            {
            "product_id":product_id,
            "quantity":quantity,
            "SKU":SKU,
            "name":name,
            "Variations_Color_Name":Variations_Color_Name,
            "Variations_Price":Variations_Price,
            "Variant_Image_url":Variant_Image_url,
            "Sales_price":Sales_price,
            "slug":slug,
            "Variant_Image":Variant_Image,
            }
        ]
    }
  
    if (users?.id) {
      
        
        const res = await axios.put(API_URL + `/api/users/${users.id}`, {...cartItem}, {headers:{
            "Authorization": `Bearer ${users?.token}`
        }})
        //

        if(res.status == 200) {
            const response = await  getuserData(users)
            return response.Cart
        }
        else
        return res.data
    }
}
const getuserData = async (users) => {
    const response = await axios.get(API_URL + `/api/users/me?populate=*`, {headers:{
       "Authorization": `Bearer ${users?.token}`
    }})
    return response.data
 }
const addToCartforGuestafterLogin = async (lineItems, users) => {

    const cartItem = {
        "id": users?.id,
        "Cart": [
            ...users?.Cart,
            ... lineItems 
            
        ]
    }

    if (users?.id) {
    const res = await axios.put(API_URL + `/api/users/${users.id}`, {...cartItem}, {headers:{
        "Authorization": `Bearer ${users?.token}`
    }})

    
    localStorage.removeItem('cart')  
    if(res.status == 200) {
        
        const response = await  getuserData(users)
        return response.Cart
    }
    else
    return res.data
} 
     

}
const getCartData = async (users) => {

    const response =  await axios.get(API_URL + `/api/users/me?populate=*`, {headers:{
        "Authorization": `Bearer ${users?.token}`
     }})

    return response.data.Cart
}
const updateCartforLogin = async (cart, users) => {

    const cartItem = {
        "id": users?.id,
        "Cart": [
            ...cart 
            
        ]
    }

    if (users?.id) {
    const res = await axios.put(API_URL + `/api/users/${users.id}`, {...cartItem}, {headers:{
        "Authorization": `Bearer ${users?.token}`
    }})

    
    localStorage.removeItem('cart')  
    if(res.status == 200) {
        
        const response = await  getuserData(users)
        return response.Cart
    }
    else
    return res.data
} 
     

}

const deleteFromCart = async (SKU,cart, users ) => {

     

/////////

const newcart = cart.filter(item => item.SKU !== SKU)
 


const cartItem = {
    "id": users?.id,
    "Cart": [
         ...newcart,
        
    ]
}
  
if (users?.id) {
    
    
    const res = await axios.put(API_URL + `/api/users/${users.id}`, {...cartItem}, {headers:{
        "Authorization": `Bearer ${users?.token}`
    }})

    if(res.status == 200) {
        // const response = await  getuserData(users)
        // return response.Cart
    return {"SKU":SKU};
    }
    else
    return res.data



///////////
    
}
}

const deleteAllItemsFromCart = async (user) => {
    // console.log("user", user)
    const response = await axios.delete(API_URL + `/custom/v1/users/${user.id}/delete-all/cart`, config)
    // console.log(response.data)
}
const addToWishlist = async (user, id) => {


    const data = {
        "product_id": id
    }

    if (user?.id) {
        const res = await axios.post(API_URL + `/custom/v1/wishlist/${user.id}`, data, config)
        // console.log(res.data)
        return res.data.response
    }
}

const getWishlist = async (user) => {

    const response = await axios.get(API_URL + `/custom/v1/wishlist/${user.id}/products/`, config)
    // console.log(response.data)
    return response.data
}

const deleteWishlist = async (user, id) => {
    let config = {
        headers: {
            "consumer-secret": process.env.VITE_SECRET,
            "consumer-key": process.env.VITE_KEY,
        },
        data: {
            "product_id": id
        }
    }

    if (user?.id) {
        const res = await axios.delete(API_URL + `/custom/v1/wishlist/${user.id}`, config)

        return res.data
    }
}

const cartnWishService = {
    addToCartforLogin,
    getCartData,
    deleteFromCart,
    deleteAllItemsFromCart,
    addToWishlist,
    getWishlist,
    deleteWishlist,
    addToCartforGuestafterLogin,
    updateCartforLogin
}

export default cartnWishService
