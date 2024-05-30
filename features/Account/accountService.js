import axios from "axios"
const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}

const fetchOrderDetails = async (user_id) => {
    const data = {
        user_id: user_id
    }
    const response = await axios.post(API_URL + `/custom/v1/customer_orders`, data, config)
    return response.data
}

const changePassword = async (user_id, data) => {

    const response = await axios.post(API_URL + `/custom/v1/change_password?user_id=${user_id}`, data, config)
    return response.data

}

const addKidsBirthday = async (user_id, data) => {
    const response = await axios.post(API_URL + `/custom/v1/add-child/${user_id}`, data, config)
    // console.log(response.data)
    return response.data
}

const getKidsBirthday = async (user_id) => {
    const response = await axios.get(API_URL + `/custom/v1/all-kids/${user_id}`, config)
    return response.data
}
const deleteKidsBirthday = async (kidsId) => {
    await axios.delete( API_URL + `/custom/v1/delete/child/${kidsId}`, config)
    return kidsId
}

const getCustomerDetail = async (user_id) => {
    const response = await axios.get(API_URL + `/wc/v3/customers/${user_id}`)
    return response.data
}
const updateKidsBirthday = async (user_id, kidsdata) => {
    const {child_name , child_birthday,kidId} = kidsdata
    const data = {
        user_id: user_id,
        child_name: child_name,
        child_birthday: child_birthday
    }
    const response = await axios.put(API_URL + `/custom/v1/update/child/${kidId}`, data, config)
    // console.log(response.data)
    return kidId
}
const updateCustomerDetails = async (user_id, data) => {
    const response = await axios.put(API_URL + `/wc/v3/customers/${user_id}`, data, config)
    // console.log(response.data)
    return response.data
}

const changeAvatar = async (user_id, data) => {
    const response = await axios.post(API_URL + `/custom/v1/change-avatar?user_id=${user_id}`, data, config)
    // console.log('change avatar',response.data)
    return response.data
}
const getAvatar = async (user_id) => {
    const response = await axios.post(API_URL + `/custom/v1/get/avatar?user_id=${user_id}`,  config)
    // console.log('get-avatar',response.data)
    return response.data
}
const accountService = {
    fetchOrderDetails,
    changePassword,
    addKidsBirthday,
    getKidsBirthday,
    getCustomerDetail,
    updateKidsBirthday,
    updateCustomerDetails,
    deleteKidsBirthday,
    changeAvatar,
    getAvatar
}

export default accountService