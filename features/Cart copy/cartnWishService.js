import axios from "axios"

const API_URL = process.env.API_URL

let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}

const addToCartforLogin = async (cartObj, user) => {
    const { id, quantity } = cartObj


    const input = {
        products: [
            {
                "product_id": id,
                "quantity": quantity
            }
        ]
    }

    if (user?.id) {
        // const res = await axios.post(API_URL + `/custom/v1/users/${user.id}/cart`, input, config)
        // return res.data.response
        return products;
    }
}

const addToCartforGuestafterLogin = async (lineItems, user) => {

    const input = {
        products: lineItems
    }
    // console.log('input',input)


    const res = await axios.post(API_URL + `/custom/v1/users/${user.id}/cart`, input, config)
    localStorage.removeItem('cart')
    return res.data.response

}
const getCartData = async (user) => {

    const response = await axios.get(API_URL + `/custom/v1/users/${user.id}/cart`, config)

    return response.data
}


const deleteFromCart = async (id, user) => {

    let config = {

        headers: {
            // "consumer-secret": process.env.VITE_SECRET,
            // "consumer-key": process.env.VITE_KEY,
        },
        data: {
            "product_id": id
        }
    }
    const response = await axios.delete(API_URL + `/custom/v1/users/${user.id}/cart`, config)
    return response.data
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
    addToCartforGuestafterLogin
}

export default cartnWishService
