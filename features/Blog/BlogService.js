import axios from "axios"
let config ={
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    //   },
}

const API_URL = process.env.API_URL
const fecthBlog = async()=>{

    const response = await axios.get(API_URL + `/custom/v1/get-blog/`,config)
   return response.data
}

const fetchblogCategory = async()=>{
    const response = await axios.get(API_URL + "/custom/v1/get/blog-cat")
    return response.data
}

const fetchAllBlogByCategories = async(slug)=>{
    if (slug =='all'){
        const response = await axios.get(API_URL + "/custom/v1/get-blog/")
        // console.log('all',response.data)
        return response.data
    }
    else{
    const response = await axios.get(API_URL + `/custom/v1/get-blog/?cat=${slug}`)
    // console.log(cat,response.data)
    return response.data
    }
  
    // return response.data
}

const addBlogComment = async(data)=>{
    const response = await axios.post(API_URL + '/custom/v1/comments',data)
    return response.data
}
const blogService = {
    fecthBlog,
    fetchblogCategory,
    fetchAllBlogByCategories,
    addBlogComment
}

export default blogService