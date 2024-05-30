import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Feed from './feeds'

// import './instaFeeds.css'

const InstaFeeds = ({token, ...props}) => {
    // 
    const ArrowButton = ({ direction, onClick }) => (
        <div className={`slider-arrow slider-${direction} ${direction === 'prev' ? "fa fa-long-arrow-left" : "fa fa-long-arrow-right" } slick-arrow`} onClick={onClick}></div>
       
      );
    const settings = {
        // arrows: true, 
    
        dots: false,
        prevArrow: <ArrowButton direction="prev" />,
        nextArrow: <ArrowButton direction="next" />,
        infinite: false,
        speed: 500,
        slidesToShow:7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false,
              arrows: true, // Enable arrows for screens with width >= 1024px
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
              arrows: true, // Enable arrows for screens with width >= 600px
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: true, // Enable arrows for screens with width >= 480px
              dots: false,
            },
          },
        ],
      };
    //

    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${12}&access_token=${process.env.VITE_INS_TOKEN}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
    
      
          
             <>
    <section className="instagrame-blk py-50 bg-custom-secondary">
        <div className="container">
            <h2 className="heading text-center mb-4">Pegasus On Instagram</h2>
            <div className="row">
                <div className="col-lg-12">
                <Slider {...settings}>
                
                {/*  */}
              
                {feeds.map((feed) => (
                
                <div>
                <Link><Feed key={feed.id} feed={feed} /></Link>
            </div>
            ))}
                 {/*  */}
                </Slider>
                </div>
            </div>
        </div>
    </section>
      
    </>
        

    );
}

export default InstaFeeds;