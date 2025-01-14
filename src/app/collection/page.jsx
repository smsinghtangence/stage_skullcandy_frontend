'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { getDataWithQuery,geturl } from "@/utils/api"
function page() {

const [category, setCategory] = useState();
const getdata = async () =>{   
const response = await getDataWithQuery(`/api/product-categories?populate[1]=parent_category&populate=Product_Category_Img`,
{ 
});
setCategory(response?.data)
return response;
}
useEffect(() => {
getdata();
}, []);
return (
<>
<div className="breacrumb-blk">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <ol className="breadcrumbs">
               <li>
                  <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.867 10">
                     <path id="Path_325" data-name="Path 325" d="M6.243,3.05C5.931,2.2,8,0,4.2,0,.946,0,.641,3.215.5,3.463a2.828,2.828,0,0,0-.467.94c-.089.413,0,.872.267.872.4,0-.089-.8.4-.8.623,0,1.358,1.009,1.558,1.582-.334.6-.8.986-1.135.827a1.016,1.016,0,0,1-.69-.918c0-.369-.344-.357-.311.114a1.753,1.753,0,0,0,.8,1.354A4.342,4.342,0,0,1,2.148,8.967c.152.377.356.551.913.551s.133.482.512.482.156-.529.378-.529,0,.505.423.505c.645,0,.356-.8.557-.941S7.912,7.43,7.867,5.619C7.823,3.831,6.554,3.9,6.243,3.05ZM3.527,8.165A1.3,1.3,0,0,0,2.5,8.05c-.245.091-.489-.046-.289-.666a3.442,3.442,0,0,1,.4-.894A14.466,14.466,0,0,1,3.95,8.1C3.972,8.279,3.683,8.348,3.527,8.165ZM5.419,7.133A1.491,1.491,0,1,1,6.866,5.641,1.469,1.469,0,0,1,5.419,7.133Z" transform="translate(0)"></path>
                  </svg>
                  </Link>
               </li>
               <li>
                  Headphones
               </li>
            </ol>
         </div>
      </div>
   </div>
</div>
<section className="collection-categroy-blk">
   <div className="container">
      <h1>Collections</h1>
      <div className="row">
         <div className="cc-blk">

         {category?.map((item, i) => (
          <div className="cc-list">
          <div className="cc-img">
             {/* <img src="" alt="" /> */}
             <Link href={"collection/"+ item?.attributes?.Name}>
             <h2>{item?.attributes?.Name}</h2>
             </Link>
             <p>{item?.attributes?.Category_Description}  </p>
          </div>
          <div className="cc-content">
             <Link href="#">
             <h2>{item?.attributes?.Name}</h2>
             </Link> 
          </div>
       </div>
         ))}
            
            
         </div>
      </div>
   </div>
</section>
</>
)
}
export default page
