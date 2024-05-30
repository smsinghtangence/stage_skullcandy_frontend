'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState, useRef  } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { getDataWithQuery, geturl } from "@/utils/api"
import ReactPlayer from 'react-player'
import Link from 'next/link';

function ProductVideoGallery({product}) {


  const video1 = product?.Product_Video_Section?.video1?.data!=null ? geturl(product?.Product_Video_Section?.video1) : "null";
const video2 = product?.Product_Video_Section?.video2?.data!=null ? geturl(product?.Product_Video_Section?.video2) : "null";
const video3 = product?.Product_Video_Section?.video3?.data!=null ? geturl(product?.Product_Video_Section?.video3) : "null";
const video4 = product?.Product_Video_Section?.video4?.data!=null ? geturl(product?.Product_Video_Section?.video4) : "null";
const video5 = product?.Product_Video_Section?.video5?.data!=null ? geturl(product?.Product_Video_Section?.video5) : "null";
const [isActive, setIsActive] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [videoUrl, setVideoUrl] = useState(product?.Product_Video_Section?.video1 ? geturl(product?.Product_Video_Section?.video1) : "null");

const playerRef = useRef(null);

const playBtn = (source) => {
  setIsPlaying(!isPlaying);
   setIsActive(!isActive);
   setVideoUrl(source);
};

const pauseBtn=()=>{
   setIsPlaying(!isPlaying);
   setIsActive(!isActive);
}
let er =null;



  return (
    <>
      <section className="extra-gallery">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <div className="extra-gallery-wrapper extra-desktop">
               <div className={`complete-video-container ${isActive ? 'active' : ''}`}>
              
               {isActive &&  (
                  <>
        <span className="gallery-pause-btn extra-gallery-btn" onClick={pauseBtn}>
        <svg
           className="pause-icon"
           xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           version="1.1"
           id="Capa_1"
           viewBox="0 0 512 512"
           xmlSpace="preserve"
           >
           <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320  c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320  c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z" />
        </svg>
     </span>
     
            <ReactPlayer 
            url={videoUrl}
            controls={false} 
            playing={isPlaying}
            loop={true}    
            />
            </>
        )}
    
               </div>

               
               <div className="extra-gallery-left">
                  <div className="extra-image extra-image1">
                          
                {video1 !="null" &&
                  <button onClick={()=>playBtn(video1)}>                
                     <span className="gallery-play-btn extra-gallery-btn">
                        <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        style={{ enableBackground: "new 0 0 64 64" }}
                        xmlSpace="preserve"
                        >
                        <g id="Group_4017" transform="translate(-272 -2813.035)">
                           <circle
                           id="Ellipse_4"
                           className="st0"
                           style={{ fill: "#0081FF" }}
                           cx={304}
                           cy={2845}
                           r={32}
                           />
                           <path
                           id="Polygon_2"
                           className="st1"
                           style={{ fill: "#FFFFFF" }}
                           d="M323.1,2845.3l-30,19.3V2826L323.1,2845.3z"
                           />
                        </g>
                        </svg>
                     </span>             
                  </button>
               }
                     <img
                        src={geturl(product?.Product_Video_Section?.image1)}
                        alt="Gallery Image"
                        loading="lazy"
                        />
                  </div>
                  <div className="extra-image">                                  
                  {video2 !="null" &&
                     <button onClick={()=>playBtn(video2)}>                
                     <span className="gallery-play-btn extra-gallery-btn">
                        <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        style={{ enableBackground: "new 0 0 64 64" }}
                        xmlSpace="preserve"
                        >
                        <g id="Group_4017" transform="translate(-272 -2813.035)">
                           <circle
                           id="Ellipse_4"
                           className="st0"
                           style={{ fill: "#0081FF" }}
                           cx={304}
                           cy={2845}
                           r={32}
                           />
                           <path
                           id="Polygon_2"
                           className="st1"
                           style={{ fill: "#FFFFFF" }}
                           d="M323.1,2845.3l-30,19.3V2826L323.1,2845.3z"
                           />
                        </g>
                        </svg>
                     </span>             
                     </button>
                 }
                   <img
                        src={geturl(product?.Product_Video_Section?.image2)}
                        alt="Gallery Image"
                        loading="lazy"
                        />
                  </div>

                  <div className="extra-image">
                     {video3 !="null" &&
                     <>                    
                     <button onClick={()=>playBtn(video3)}>                
                     <span className="gallery-play-btn extra-gallery-btn">
                        <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        style={{ enableBackground: "new 0 0 64 64" }}
                        xmlSpace="preserve"
                        >
                        <g id="Group_4017" transform="translate(-272 -2813.035)">
                           <circle
                           id="Ellipse_4"
                           className="st0"
                           style={{ fill: "#0081FF" }}
                           cx={304}
                           cy={2845}
                           r={32}
                           />
                           <path
                           id="Polygon_2"
                           className="st1"
                           style={{ fill: "#FFFFFF" }}
                           d="M323.1,2845.3l-30,19.3V2826L323.1,2845.3z"
                           />
                        </g>
                        </svg>
                     </span>             
                     </button>
                     </>
                     }
                     <img
                         src={geturl(product?.Product_Video_Section?.image3)}
                        alt="Gallery Image"
                        loading="lazy"
                        />
                  </div>
                  <div className="extra-image extra-image4">
                  {video4 !="null" &&
                     <>                    
                     <button onClick={()=>playBtn(video3)}>                
                     <span className="gallery-play-btn extra-gallery-btn">
                        <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        style={{ enableBackground: "new 0 0 64 64" }}
                        xmlSpace="preserve"
                        >
                        <g id="Group_4017" transform="translate(-272 -2813.035)">
                           <circle
                           id="Ellipse_4"
                           className="st0"
                           style={{ fill: "#0081FF" }}
                           cx={304}
                           cy={2845}
                           r={32}
                           />
                           <path
                           id="Polygon_2"
                           className="st1"
                           style={{ fill: "#FFFFFF" }}
                           d="M323.1,2845.3l-30,19.3V2826L323.1,2845.3z"
                           />
                        </g>
                        </svg>
                     </span>             
                     </button>
                     </>
                     }
                     <img
                         src={geturl(product?.Product_Video_Section?.image4)}
                        alt="Gallery Image"
                        loading="lazy"
                        />
                  </div>
               </div>
               <div className="extra-gallery-right">
                  <div className="extra-image-right">
                   {video5 !="null" &&
                     <>                    
                     <button onClick={()=>playBtn(video3)}>                
                     <span className="gallery-play-btn extra-gallery-btn">
                        <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        style={{ enableBackground: "new 0 0 64 64" }}
                        xmlSpace="preserve"
                        >
                        <g id="Group_4017" transform="translate(-272 -2813.035)">
                           <circle
                           id="Ellipse_4"
                           className="st0"
                           style={{ fill: "#0081FF" }}
                           cx={304}
                           cy={2845}
                           r={32}
                           />
                           <path
                           id="Polygon_2"
                           className="st1"
                           style={{ fill: "#FFFFFF" }}
                           d="M323.1,2845.3l-30,19.3V2826L323.1,2845.3z"
                           />
                        </g>
                        </svg>
                     </span>             
                     </button>
                     </>
                     }
                     <img
                         src={geturl(product?.Product_Video_Section?.image5)}alt="Gallery Image"
                         loading="lazy" 
                         />
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

export default ProductVideoGallery