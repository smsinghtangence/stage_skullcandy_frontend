import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';
import { getDataWithQuery } from "@/utils/api"
function Review({product}) {
   const API_URL = process.env.API_URL || "";
   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');


const [formData, setFormData] = useState({
   name:'',
   email:'',
   rating: '',
   comment: ''

 });


  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const validate = () => {
   const errors = {};
   if (!formData.name) errors.name = 'Full Name is required';
    if (!formData.rating) errors.rating = 'Please select a rating.';
    if (!formData.comment) errors.comment = 'Please enter a comment.';
    if (!formData.email) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email Address is invalid';
    }
    return errors;
  };

  const handleSubmit = async  (e) => {
   e.preventDefault();
   const response = await fetch(API_URL+'/api/ratings', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ data: formData })
   });

   const validationErrors = validate();
   setErrors(validationErrors);

   if (Object.keys(validationErrors).length === 0) {
     setSubmitted(true);
     // Form is valid, you can submit the form data here
     console.log('Form submitted successfully', formData);
  
   } else {
     setSubmitted(false);
     console.log('Form Error', formData);
   }
 };



 const [data, setData] = useState();  
 const getdata = async () =>{
   const response = await getDataWithQuery("/api/ratings",
    { 
   });
   setData(response.data)
     //console.log( JSON.stringify(response));
     return response;
}
useEffect(() => {  
   getdata();
 }, []);

  return (
    <>
    <section className="what-they-saying">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <div className="review-summary-blk">
               <h2>SEE WHAT THEY ARE SAYING</h2>
               <div className="rs-block">
                  <div className="rs-left">
                     <div className="rs-stat-text">
                        <div className="rs-text">
                           4.9
                        </div>
                        <div className="rs-content">
                           <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                              <defs>
                                 <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                    <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                 </linearGradient>
                              </defs>
                              <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                           </svg>
                           <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                              <defs>
                                 <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                    <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                 </linearGradient>
                              </defs>
                              <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                           </svg>
                           <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                              <defs>
                                 <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                    <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                 </linearGradient>
                              </defs>
                              <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                           </svg>
                           <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                              <defs>
                                 <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                    <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                 </linearGradient>
                              </defs>
                              <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                           </svg>
                           <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                              <defs>
                                 <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                    <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                    <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                 </linearGradient>
                              </defs>
                              <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                           </svg>
                           <span>Based on 314 reviews</span>
                        </div>
                     </div>
                     <Link href="#" className="srs-btn">
                     <svg data-v-ac74125e="" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="yotpo-button-icon">
                        <path d="M10.3896 0L11.2118 1.5415L12.7532 2.36364L11.2118 3.18578L10.3896 4.72727L9.56748 3.18578L8.02599 2.36364L9.56748 1.5415L10.3896 0ZM4.77922 1.94805L6.44155 5.06494L9.55844 6.72729L6.44155 8.38959L4.77922 11.5065L3.11688 8.38959L0 6.72729L3.11688 5.06494L4.77922 1.94805ZM12.0519 9.42857L11.013 7.48052L9.97404 9.42857L8.02599 10.4676L9.97404 11.5065L11.013 13.4545L12.0519 11.5065L14 10.4676L12.0519 9.42857Z" fill="#FFFFFF"></path>
                     </svg>
                     See reviews summary</Link>
                  </div>
                  <div className="rs-right">
                     <div className="start-rating-blk">
                        {/* start list */}
                        <div className="start-rating-list">
                           <div className="srl-index">
                              <span>5</span>
                              <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                                 <defs>
                                    <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                       <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                       <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                 </defs>
                                 <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                              </svg>
                           </div>
                           <div className="progress" >
                              <div className="progress-bar" style={{ width: "40%", height: 6 }} />
                           </div>
                           <div className="rs-value">
                              282
                           </div>
                        </div>
                       
                        <div className="start-rating-list">
                           <div className="srl-index">
                              <span>4</span>
                              <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                                 <defs>
                                    <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                       <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                       <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                 </defs>
                                 <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                              </svg>
                           </div>
                           <div className="progress" >
                              <div className="progress-bar" style={{ width: "40%", height: 6 }} />
                           </div>
                           <div className="rs-value">
                              30
                           </div>
                        </div>
                      
                        <div className="start-rating-list">
                           <div className="srl-index">
                              <span>3</span>
                              <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                                 <defs>
                                    <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                       <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                       <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                 </defs>
                                 <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                              </svg>
                           </div>
                           <div className="progress" >
                              <div className="progress-bar" style={{ width: "40%", height: 6 }} />
                           </div>
                           <div className="rs-value">
                              1
                           </div>
                        </div>
                       
                     
                        <div className="start-rating-list">
                           <div className="srl-index">
                              <span>2</span>
                              <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                                 <defs>
                                    <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                       <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                       <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                 </defs>
                                 <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                              </svg>
                           </div>
                           <div className="progress" >
                              <div className="progress-bar" style={{ width: "40%", height: 6 }} />
                           </div>
                           <div className="rs-value">
                              1
                           </div>
                        </div>
                   
                        <div className="start-rating-list">
                           <div className="srl-index">
                              <span>1</span>
                              <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                                 <defs>
                                    <linearGradient id="yotpo_stars_gradient_0.13923812364636412">
                                       <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                       <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                    </linearGradient>
                                 </defs>
                                 <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.13923812364636412)"></path>
                              </svg>
                           </div>
                           <div className="progress" >
                              <div className="progress-bar" style={{ width: "40%", height: 6 }} />
                           </div>
                           <div className="rs-value">
                              1
                           </div>
                        </div>
                       
                     </div>
                  </div>
               </div>
            </div>
         
            <div className="review-search-blk">
               <div className="review-search">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="yotpo-search-icon">
                     <path d="M10.2694 9.38563L12.9462 12.0619L12.0619 12.9462L9.38563 10.2694C8.38984 11.0676 7.15125 11.5018 5.875 11.5C2.77 11.5 0.25 8.98 0.25 5.875C0.25 2.77 2.77 0.25 5.875 0.25C8.98 0.25 11.5 2.77 11.5 5.875C11.5018 7.15125 11.0676 8.38984 10.2694 9.38563ZM9.01562 8.92188C9.80882 8.10618 10.2518 7.01277 10.25 5.875C10.25 3.4575 8.29187 1.5 5.875 1.5C3.4575 1.5 1.5 3.4575 1.5 5.875C1.5 8.29187 3.4575 10.25 5.875 10.25C7.01277 10.2518 8.10618 9.80882 8.92188 9.01562L9.01562 8.92188Z" fill="#373330"></path>
                  </svg>
                  <input type="search" placeholder='Search reviews' />
               </div>
            </div>

            {data?.map((item, index) => (
               //  let rating_vaule = item?.attributes?.rating
         <>
         
              <div className='review-list-panel-container'>
              <div className="review-list-panel">
                 <div className="rlp-left">
                    <div className="rlp-left-blk">
                       <div className="user-icon">
                          <span>
                             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="40" height="40" fill="#8D99B6" className="yotpo-anonymous-person-icon">
                                <title>Abstract user icon</title>
                                <defs>
                                   <clipPath id="circular-border-0.1676995356966141">
                                      <circle cx="300" cy="300" r="250"></circle>
                                   </clipPath>
                                </defs>
                                <circle cx="300" cy="300" r="280" fill="#CCD2E1"></circle>
                                <circle cx="300" cy="230" r="100"></circle>
                                <circle cx="300" cy="550" r="190" clip-path="url(#circular-border-0.1676995356966141)"></circle>
                             </svg>
                          </span>
                          <div className="user-verified">
                             <svg width="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="yotpo-verified-icon">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(0,0,0,1)"></circle>
                                <path d="M4 7.22222L6.72269 10L11.5 5.5" stroke="white" strokeWidth="1.5"></path>
                             </svg>
                          </div>
                       </div>
                       <div className="user-content">
                          <span className="rlp-user-name">{item?.attributes?.name}</span>
                          <span className="rlp-verified">Verified Buyer</span>
                       </div>
                    </div>
                 </div>
                 <div className="rlp-center">
                    <div className="rlp-center-blk">
                       <div className="rlp-review-star-rating">
                       {item?.attributes?.rating}
                          <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                             <defs>
                                <linearGradient id="yotpo_stars_gradient_0.9285845073874545">
                                   <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                   <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                </linearGradient>
                             </defs>
                             <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.9285845073874545)"></path>
                          </svg>

                          <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                             <defs>
                                <linearGradient id="yotpo_stars_gradient_0.9285845073874545">
                                   <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                   <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                </linearGradient>
                             </defs>
                             <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.9285845073874545)"></path>
                          </svg>
                          <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                             <defs>
                                <linearGradient id="yotpo_stars_gradient_0.9285845073874545">
                                   <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                   <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                </linearGradient>
                             </defs>
                             <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.9285845073874545)"></path>
                          </svg>
                          <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                             <defs>
                                <linearGradient id="yotpo_stars_gradient_0.9285845073874545">
                                   <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                   <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                </linearGradient>
                             </defs>
                             <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.9285845073874545)"></path>
                          </svg>
                          <svg className="yotpo-star-rating-icon yotpo-sr-star-full" width="18" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(1.2, 1.2)">
                             <defs>
                                <linearGradient id="yotpo_stars_gradient_0.9285845073874545">
                                   <stop offset="100%" stop-color="rgba(0,0,0,1)"></stop>
                                   <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                                </linearGradient>
                             </defs>
                             <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" stroke="rgba(0,0,0,1)" fill="url(#yotpo_stars_gradient_0.9285845073874545)"></path>
                          </svg>
                       </div>
                       <span className="rpl-text">{item?.attributes?.comment}</span>
                    </div>
                 </div>
                 <div className="rlp-right">
                    <div className="rlp-review-detail">
                       <svg
                          className="yotpo-shop-badge yotpo-shop-badge-desktop"
                          width={94}
                          height={20}
                          viewBox="0 0 94 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          >
                          <g clipPath="url(#clip0_2670_3706)">
                             <path
                                d="M0 4.44444C0 1.98984 1.94614 0 4.34682 0H89.507C91.9076 0 93.8538 1.98984 93.8538 4.44444V15.5556C93.8538 18.0102 91.9076 20 89.507 20H4.34681C1.94613 20 0 18.0102 0 15.5556V4.44444Z"
                                fill="#F2F2F2"
                                />
                             <path
                                d="M8.8911 13.8888H7.47838L4.68555 5.22212H6.00047L8.18474 12.511L10.369 5.22212H11.6731L8.8911 13.8888ZM14.2559 14.0666C12.5824 14.0666 11.4631 12.7888 11.4631 10.9888C11.4631 9.211 12.5498 7.93322 14.2559 7.93322C15.6361 7.93322 16.7988 9.011 16.7988 10.9221V11.3777H12.6802C12.7563 12.4221 13.267 13.0999 14.2559 13.0999C14.9732 13.0999 15.4622 12.6666 15.56 12.2554H16.7445C16.5706 13.2443 15.5817 14.0666 14.2559 14.0666ZM12.6911 10.5443H15.6035C15.5709 9.611 15.0166 8.97767 14.2233 8.97767C13.2996 8.97767 12.8215 9.58878 12.6911 10.5443ZM19.2526 13.8888H18.1115V8.111H19.2526V9.611C19.622 8.43322 20.3936 8.04433 21.5346 8.04433V9.19989C20.198 9.19989 19.2526 9.611 19.2526 11.0554V13.8888ZM23.007 6.87767C22.5288 6.87767 22.2028 6.54433 22.2028 6.05544C22.2028 5.56655 22.5288 5.24434 23.007 5.24434C23.496 5.24434 23.8111 5.56655 23.8111 6.05544C23.8111 6.54433 23.496 6.87767 23.007 6.87767ZM23.6047 13.8888H22.4201V8.111H23.6047V13.8888ZM27.0808 13.8888H25.8963V9.15544H24.6683V8.111H25.8963V7.45544C25.8963 5.84433 26.6027 5.02212 28.0588 5.11101L28.4718 5.12212V6.16656H28.2544C27.4177 6.16656 27.0917 6.47767 27.0808 7.32211V8.111H28.4827V9.15544H27.0808V13.8888ZM30.1597 6.87767C29.6815 6.87767 29.3555 6.54433 29.3555 6.05544C29.3555 5.56655 29.6815 5.24434 30.1597 5.24434C30.6487 5.24434 30.9638 5.56655 30.9638 6.05544C30.9638 6.54433 30.6487 6.87767 30.1597 6.87767ZM30.7573 13.8888H29.5728V8.111H30.7573V13.8888ZM34.9181 14.0666C33.2447 14.0666 32.1253 12.7888 32.1253 10.9888C32.1253 9.211 33.2121 7.93322 34.9181 7.93322C36.2982 7.93322 37.461 9.011 37.461 10.9221V11.3777H33.3425C33.4185 12.4221 33.9293 13.0999 34.9181 13.0999C35.6354 13.0999 36.1244 12.6666 36.2222 12.2554H37.4067C37.2328 13.2443 36.2439 14.0666 34.9181 14.0666ZM33.3533 10.5443H36.2656C36.233 9.611 35.6788 8.97767 34.8855 8.97767C33.9619 8.97767 33.4837 9.58878 33.3533 10.5443ZM41.12 14.0666C39.6095 14.0666 38.5989 12.8443 38.5989 10.9777C38.5989 9.13322 39.6095 7.93322 41.12 7.93322C41.8481 7.93322 42.674 8.35544 43.0652 9.02211V5.11101H44.2497V13.8888H43.0652V12.9666C42.6849 13.6443 41.8481 14.0666 41.12 14.0666ZM41.3699 13.0221C42.4023 13.0221 43.0978 12.2221 43.0978 10.9888C43.0978 9.76656 42.4023 8.97767 41.3699 8.97767C40.4245 8.97767 39.7942 9.76656 39.7942 10.9888C39.7942 12.2221 40.4245 13.0221 41.3699 13.0221ZM51.6559 14.0666C50.9278 14.0666 50.0911 13.6443 49.7107 12.9666V13.8888H48.5262V5.11101H49.7107V9.02211C50.102 8.35544 50.9278 7.93322 51.6559 7.93322C53.1665 7.93322 54.1771 9.13322 54.1771 10.9777C54.1771 12.8443 53.1665 14.0666 51.6559 14.0666ZM51.406 13.0221C52.3514 13.0221 52.9817 12.2221 52.9817 10.9888C52.9817 9.76656 52.3514 8.97767 51.406 8.97767C50.3736 8.97767 49.6781 9.76656 49.6781 10.9888C49.6781 12.2221 50.3736 13.0221 51.406 13.0221ZM55.1822 16.111V15.0554C55.9973 15.0554 56.3559 14.9221 56.6819 14.0443L54.6389 8.111H55.9212L57.3013 12.5443L58.6706 8.111H59.9311L57.8012 14.2666C57.2796 15.7777 56.6058 16.111 55.1822 16.111Z"
                                fill="black"
                                />
                             <mask
                             id="mask0_2670_3706"
                             style={{ maskType: "luminance" }}
                             maskUnits="userSpaceOnUse"
                             x={63}
                             y={5}
                             width={27}
                             height={12}
                             >
                             <path
                                d="M89.5069 5.11108H63.0288V16.2222H89.5069V5.11108Z"
                                fill="white"
                                />
                             </mask>
                             <g mask="url(#mask0_2670_3706)">
                                <path
                                   d="M66.1824 9.99784C65.1185 9.76223 64.6442 9.67001 64.6442 9.25146C64.6442 8.85773 64.9653 8.66162 65.6065 8.66162C66.171 8.66162 66.5834 8.91335 66.8872 9.40657C66.91 9.44462 66.9572 9.45779 66.9958 9.43729L68.1934 8.81968C68.2363 8.79773 68.2521 8.74212 68.2276 8.69968C67.7304 7.82012 66.8127 7.33862 65.6038 7.33862C64.0155 7.33862 63.0288 8.13768 63.0288 9.40801C63.0288 10.7574 64.2302 11.0984 65.2957 11.334C66.3617 11.5697 66.8372 11.6618 66.8372 12.0805C66.8372 12.499 66.4905 12.6966 65.7988 12.6966C65.1598 12.6966 64.686 12.398 64.3991 11.8185C64.378 11.776 64.328 11.7585 64.2861 11.7804L63.0918 12.3848C63.0505 12.4068 63.0332 12.458 63.0543 12.502C63.5287 13.4752 64.5013 14.0225 65.7999 14.0225C67.4544 14.0225 68.4536 13.2366 68.4536 11.9268C68.4536 10.6169 67.2463 10.2364 66.1824 10.0008V9.99784Z"
                                   fill="black"
                                   />
                                <path
                                   d="M72.5988 7.3386C71.9202 7.3386 71.3198 7.58443 70.8889 8.02205C70.8617 8.04838 70.8172 8.02938 70.8172 7.99132V5.19743C70.8172 5.14914 70.7802 5.11108 70.7329 5.11108H69.2349C69.1876 5.11108 69.1501 5.14914 69.1501 5.19743V13.8688C69.1501 13.9171 69.1876 13.9552 69.2349 13.9552H70.7329C70.7802 13.9552 70.8172 13.9171 70.8172 13.8688V10.0651C70.8172 9.33043 71.3687 8.76699 72.112 8.76699C72.8553 8.76699 73.3937 9.31871 73.3937 10.0651V13.8688C73.3937 13.9171 73.4312 13.9552 73.4785 13.9552H74.9765C75.0238 13.9552 75.0607 13.9171 75.0607 13.8688V10.0651C75.0607 8.46693 74.0354 7.3386 72.5988 7.3386Z"
                                   fill="black"
                                   />
                                <path
                                   d="M78.0997 7.08984C77.2863 7.08984 76.5245 7.34451 75.9773 7.71184C75.9398 7.73673 75.9273 7.78795 75.9502 7.82751L76.6103 8.97929C76.6348 9.02023 76.6864 9.0349 76.7261 9.01001C77.1417 8.7539 77.6172 8.62073 78.1024 8.62362C79.4102 8.62362 80.3714 9.56618 80.3714 10.8116C80.3714 11.8727 79.602 12.6586 78.6267 12.6586C77.8318 12.6586 77.2803 12.1858 77.2803 11.5185C77.2803 11.1365 77.4395 10.8233 77.8535 10.6023C77.8964 10.5789 77.9122 10.5248 77.8861 10.4823L77.2634 9.40518C77.2433 9.37007 77.2004 9.35396 77.1618 9.36857C76.3267 9.68468 75.741 10.4457 75.741 11.4673C75.741 13.0127 76.9456 14.166 78.6256 14.166C80.5877 14.166 81.9982 12.7771 81.9982 10.7853C81.9982 8.65001 80.3567 7.08984 78.0997 7.08984Z"
                                   fill="black"
                                   />
                                <path
                                   d="M86.3805 7.32544C85.6231 7.32544 84.9455 7.61227 84.4516 8.11572C84.4239 8.14355 84.3799 8.12305 84.3799 8.085V7.47911C84.3799 7.43083 84.3424 7.39277 84.2951 7.39277H82.8357C82.7884 7.39277 82.7515 7.43083 82.7515 7.47911V16.1373C82.7515 16.1856 82.7884 16.2237 82.8357 16.2237H84.3337C84.381 16.2237 84.4185 16.1856 84.4185 16.1373V13.2981C84.4185 13.2601 84.463 13.241 84.4902 13.2659C84.9825 13.7342 85.6345 14.0079 86.3805 14.0079C88.1377 14.0079 89.5086 12.5546 89.5086 10.6667C89.5086 8.77872 88.1366 7.32544 86.3805 7.32544ZM86.0969 12.5414C85.0971 12.5414 84.3397 11.7292 84.3397 10.6549C84.3397 9.58072 85.096 8.7685 86.0969 8.7685C87.0983 8.7685 87.853 9.56755 87.853 10.6549C87.853 11.7424 87.1081 12.5414 86.0953 12.5414H86.0969Z"
                                   fill="black"
                                   />
                             </g>
                          </g>
                          <defs>
                             <clipPath id="clip0_2670_3706">
                                <rect width={94} height={20} fill="white" />
                             </clipPath>
                          </defs>
                       </svg>
                       <span className="review-date">04/09/24</span>
                    </div>
                 </div>
              </div>
              <div className="review-vote">
                 <span>Was this review helpful?</span>
                 <div className="like-dislike">
                    <span className='like'>
                       <svg className="yotpo-review-votes-icon-up" xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13">
                          <path d="M8.65454 4.68473H12.7273C13.0648 4.68473 13.3885 4.81882 13.6272 5.0575C13.8659 5.29619 14 5.61991 14 5.95746V7.29637C14.0002 7.46269 13.9677 7.62743 13.9045 7.78128L11.935 12.5635C11.887 12.6801 11.8054 12.7798 11.7005 12.85C11.5957 12.9201 11.4725 12.9575 11.3464 12.9575H0.636364C0.467589 12.9575 0.305728 12.8904 0.186387 12.7711C0.0670452 12.6517 0 12.4899 0 12.3211V5.95746C0 5.78868 0.0670452 5.62682 0.186387 5.50748C0.305728 5.38814 0.467589 5.32109 0.636364 5.32109H2.85218C2.95406 5.32112 3.05446 5.29668 3.14493 5.24984C3.2354 5.203 3.31331 5.13512 3.37209 5.05191L6.84218 0.134731C6.88605 0.0725664 6.95074 0.0281786 7.02452 0.00961572C7.09831 -0.00894717 7.1763 -0.000456173 7.24436 0.0335492L8.39873 0.610731C8.72359 0.773107 8.98312 1.04175 9.13419 1.37202C9.28526 1.7023 9.31878 2.07432 9.22918 2.42628L8.65454 4.68473ZM3.81818 6.33164V11.6847H10.92L12.7273 7.29637V5.95746H8.65454C8.46071 5.95743 8.26944 5.91313 8.09533 5.82793C7.92122 5.74273 7.76887 5.61889 7.6499 5.46586C7.53093 5.31282 7.4485 5.13464 7.40887 4.94489C7.36925 4.75515 7.37349 4.55886 7.42127 4.371L7.99591 2.11319C8.01389 2.04276 8.00722 1.96829 7.977 1.90219C7.94678 1.83608 7.89484 1.78231 7.82982 1.74982L7.40918 1.53982L4.41191 5.78564C4.25282 6.01091 4.04918 6.19546 3.81818 6.33164ZM2.54545 6.59382H1.27273V11.6847H2.54545V6.59382Z" fill="#2c2c2c"></path>
                       </svg>
                       1
                    </span>
                    <span className='dislike'>
                       <svg className="yotpo-review-votes-icon-down" xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13">
                          <path d="M5.34545 8.27273H1.27273C0.93518 8.27273 0.611456 8.13864 0.372774 7.89995C0.134091 7.66127 6.77279e-07 7.33755 6.77279e-07 7V5.66109C-0.000170899 5.49477 0.0322586 5.33003 0.0954552 5.17618L2.06564 0.394545C2.11354 0.277934 2.19501 0.178179 2.29969 0.107935C2.40438 0.0376913 2.52757 0.00012439 2.65364 0H13.3636C13.5324 0 13.6943 0.0670452 13.8136 0.186387C13.933 0.305728 14 0.467589 14 0.636364V7C14 7.16877 13.933 7.33063 13.8136 7.44998C13.6943 7.56932 13.5324 7.63636 13.3636 7.63636H11.1478C11.0459 7.63634 10.9455 7.66077 10.8551 7.70761C10.7646 7.75446 10.6867 7.82234 10.6279 7.90554L7.15782 12.8221C7.11395 12.8843 7.04926 12.9286 6.97548 12.9472C6.90169 12.9658 6.8237 12.9573 6.75564 12.9233L5.60127 12.3455C5.27641 12.1831 5.01688 11.9144 4.86581 11.5842C4.71474 11.2539 4.68122 10.8819 4.77082 10.5299L5.34545 8.27273ZM10.1818 6.62582V1.27273H3.08L1.27273 5.66109V7H5.34545C5.53929 7.00003 5.73056 7.04433 5.90467 7.12953C6.07878 7.21472 6.23113 7.33856 6.3501 7.4916C6.46906 7.64463 6.5515 7.82282 6.59113 8.01257C6.63075 8.20231 6.62651 8.3986 6.57873 8.58645L6.00409 10.8443C5.98611 10.9147 5.99278 10.9892 6.023 11.0553C6.05321 11.1214 6.10516 11.1751 6.17018 11.2076L6.59082 11.4176L9.58809 7.17182C9.74718 6.94655 9.95082 6.762 10.1818 6.62582ZM11.4545 6.36364H12.7273V1.27273H11.4545V6.36364Z" fill="#2c2c2c"></path>
                       </svg>
                       0
                    </span>
                 </div>
              </div>
           </div>
           </>
              ))}

          
         

           
            <div className="product-pagination">
               <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                     <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1"><i className='fa fa-angle-left'></i></a>
                     </li>
                     <li className="page-item active"><a className="page-link" href="#">1</a></li>
                     <li className="page-item"><a className="page-link" href="#">2</a></li>
                     <li className="page-item"><a className="page-link" href="#">3</a></li>
                     <li className="page-item"><a className="page-link" href="#">4</a></li>
                     <li className="page-item"><a className="page-link" href="#">5</a></li>
                     <li className="page-item">
                        <a className="page-link" href="#"><i className='fa fa-angle-right'></i></a>
                     </li>
                  </ul>
               </nav>
            </div>


            <div className="review-form pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <button className="write-review-btn" onClick={toggleFormVisibility}>
                Write a Review
              </button>
            </div>
            {isFormVisible && (
              <div className="review-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                     <div className="col-lg-4">
                     <div className="form-group">
                  <label htmlFor="rating">Name</label>
                  <input
                     type="text"
                     name="name"
                     className="form-control"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Enter  Name"
                  />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>
                     </div>

                     <div className="col-lg-4">
                     <div className="form-group">
                  <label htmlFor="rating">Email</label>
                  <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                     </div>

                     <div className="col-lg-4">
                     <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select
                      name="rating"
                      id="rating"
                      className="form-control"
                      value={formData.rating}
                      onChange={handleChange} 
                    >
                      <option value="">Select Rating</option>
                      <option value="1">Star 1 (worst)</option>
                      <option value="2">2 Stars</option>
                      <option value="3">3 Stars (average)</option>
                      <option value="4">4 Stars</option>
                      <option value="5">5 Stars (best)</option>
                    </select>
                    {errors.rating && <p className="error-text">{errors.rating}</p>}
                  </div>
                     </div>
                  </div>
              
                 
                 
                  <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      name="comment"
                      id="comment"
                      className="form-control"
                      value={formData.comment}
                      onChange={handleChange}
                    ></textarea>
                    {errors.comment && <p className="error-text">{errors.comment}</p>}
                  </div>
                  <button type="submit" className="review-submit blue-btn border-0">
                    Review Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>


         </div>
      </div>
   </div>
</section>


    </>
  )
}

export default Review