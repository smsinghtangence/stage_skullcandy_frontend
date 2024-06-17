'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Homeslider from '@/components/HomeSlider'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import { getDataWithQuery, geturl } from '@/utils/api';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import WhatsHot from '@/components/WhatsHot'
import JoinCommunity from '@/components/JoinCommunity'
import ProductListWhatNew from '@/components/ProductListWhatNew'
import ReactPlayer from 'react-player'
import Link from 'next/link';

const API_URL = process.env.API_URL || '';

export default function Home() {



  const [data, setData] = useState();
  const getdata = async () => {
    const response = await getDataWithQuery("/api/home?populate[0]=HomeBanner,HomeMobileBanner,HomeCollection.CollectionImg,HomeAds.AdsImg,Home_Video,",
      {
      });
    setData(response.data)

    // console.log(JSON.stringify(response));
    return response;

  }
  useEffect(() => {
    getdata();
  }, []);




  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  const togglePlayPause = () => {
     setIsPlaying(!isPlaying);
  };
  // const video_url = geturl(data?.attributes?.Home_Video);

  return (

    <>

      <section className="home-banner">
        <picture>
          <source
            media="(max-width:540px)"
            srcSet={geturl(data?.attributes?.HomeMobileBanner)}
            className='img-fluid'
            alt={data?.attributes?.HomeMobileBanner?.data?.attributes?.alternativeText}
          />
          <img
            src={geturl(data?.attributes?.HomeBanner)}
            alt={data?.attributes?.HomeBanner?.data?.attributes?.alternativeText}
            width="100%"
            className="desktop-banner img-fluid"
          />
        </picture>


        <div className="container">
          <div className="banner-content">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content-inner ">
                 
                  <h1 style={{ color: data?.attributes?.Top_Banner_Color }}
                    dangerouslySetInnerHTML={{ __html: data?.attributes?.Heading }}
                  />
                  {/* <p>{JSON.stringify(data?.attributes?.HomeBanner)}</p> */}
                  <p style={{ color: data?.attributes?.Sub_Heading_Color }}>{data?.attributes?.SubHeading}</p>
                  <a href={data?.attributes?.url} className='banner-btn' >{data?.attributes?.ButtonText}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="two-cloumn-media ">
        <div className="two-cloumn-media-wrapper">

          {data?.attributes?.HomeAds?.map((item, i) => (
            <div className="two-cloumn-content">
              <Link href={item?.url} >
                <img src={geturl(item?.AdsImg)} loading="lazy" width={950} height={948} className="dt" alt={item?.Heading} />

                <div className="two-column-info media_Gjwp8U">
                  <h3 style={{ color: item?.Text_Color }}
                    dangerouslySetInnerHTML={{ __html: item?.Heading }}
                  />

                  <span  className="two-cloumn-btn button button--inverted dt  column-simple-btn" style={{ color: item?.Text_Color }}>{item?.ButtonText} </span>

                </div>
              </Link>
            </div>
          ))}


        </div>
      </section>
      <WhatsHot />
      {/* <WhatsHot1/>   */}

      <section className="collection py-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading text-center">
                <h4>COLLECTIONS</h4>
              </div>
              <div className="custom-collection-list-wrapper">

                {data?.attributes?.HomeCollection?.map((item, i) => (
                 
                  <div className="custom-collection-list-content" key={item.id}>
                  
                  
                    <a href="#">
                      <div className="custom-collection-list-img">

                        <img src={geturl(item?.CollectionImg)} alt={item?.CollectionImg?.data?.attributes?.alternativeText} loading="lazy" width={465} height={465} />
                      </div>
                      <div className="custom-collection-list-title">

                        <h3
                          dangerouslySetInnerHTML={{ __html: item.Heading }}
                        />

                      </div>
                    </a>
                  </div>
                ))}





              </div>
            </div>
          </div>
        </div>
      </section>


       
          
          
      <section className="video-blk">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">


        
              <div className="video-banner section-template--16446116724793__image_video_banner_pNFVzb" id="section-template--16446116724793__image_video_banner_pNFVzb">
                <div className="image-video-banner-container">
                  <div className="desktop">
                  <ReactPlayer 
       url={geturl(data?.attributes?.Home_Video)}
       controls={false}
       playing={isPlaying}
       loop={true}
    
       />
 

                    <button className="desktop-pause-btn" aria-label="pause" onClick={togglePlayPause}>
                      {isPlaying ? (

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="#fff"
                        >
                          <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="#fff"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}

                    </button> 

                  </div>

                  {/* <div className="mobile">
                    <video autoPlay loop muted playsInline preload="none" poster="//www.skullcandy.com/cdn/shop/files/preview_images/c0f96d739d97493eb905e444e96d208a.thumbnail.0000000000_1500x.jpg?v=1709836799" className="video-banner-mobile">
                      <source id="mp4" src="https://cdn.shopify.com/videos/c/vp/c0f96d739d97493eb905e444e96d208a/c0f96d739d97493eb905e444e96d208a.HD-1080p-2.5Mbps-25587357.mp4" data-src="VideoDrop" type="video/mp4" />
                      <p>Your user agent does not support the HTML5 Video element.</p>
                    </video>
                    <button className="mobile-pause-btn" aria-label="pause"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 37">
                      <g data-name="Group 3482" transform="translate(6625 19047.896)" opacity="0.275">
                        <rect data-name="Rectangle 2591" width={13} height={48} transform="translate(-6625 -19047.896)" fill="#fff" />
                        <rect data-name="Rectangle 2592" width={13} height={48} transform="translate(-6603 -19047.896)" fill="#fff" />
                      </g>
                    </svg> </button>
                  </div> */}

                  <div className="page-width">
                    <div className="video-banner-content">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
             

      <JoinCommunity />


    </>
  )
}
