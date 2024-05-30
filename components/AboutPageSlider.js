'use client'
import { Swiper, SwiperSlide, SlideItem } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useState, useEffect } from "react";

function AboutPageSlider() {

  const images = [
    {
      src: "https://picsum.photos/320/240?v1"
    },
    {
      src: "https://picsum.photos/320/240?v2"
    },
    {
      src: "https://picsum.photos/320/240?v3"
    },
    {
      src: "https://picsum.photos/320/240?v4"
    }
  ];
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  // Params definition
  let params = {
    modules: [ Pagination, Navigation],
    preloadImages: false,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: false,
    spaceBetween: 30,
    getSwiper: updateSwiper // Get swiper instance callback
  };
  let thumbsParams = {
   
    slideToClickedSlide: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs, // Get swiper instance callback
    style: {
      width: "100px"
    }
  };

  // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);

  return (
    <>
       <section className="full_center_section">
    <div className="swiper-container inside_skull_slider box_pagination swiper-container-initialized swiper-container-horizontal">
      <div
        className="swiper-wrapper"
        style={{
          transform: "translate3d(-4047px, 0px, 0px)",
          transitionDuration: "0ms"
        }}
      >
        <div
          className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
          data-swiper-slide-index={3}
          style={{ width: 1349 }}
        >
          <a href="/inside-skullcandy/athletes/">
            <div className="full_bg">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide4_tab.jpg"
                />
                <img
                  src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide4_desk.jpg"
                  alt="main image"
                  width="100%"
                />
                <span
                  className="pagination_image"
                  data-src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide4_tab_thumb.jpg"
                />
              </picture>
            </div>
            <div className="container-fluid middle_fix_content">
              <div className="row">
                <div className="col-md-12 p-0 left_content_align v2">
                  <div className="content_box v2 winc">
                    <h4>
                      Meet the <br />
                      boundary <br />
                      Breakers.
                    </h4>
                    <p>
                      Our friends who rip the mountains, oceans and streets.
                    </p>
                    <button type="button" className="theme_btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div
          className="swiper-slide"
          data-swiper-slide-index={0}
          style={{ width: 1349 }}
        >
          <a href="/inside-skullcandy/values/">
            <div className="full_bg">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide1_tab.jpg"
                />
                <img
                  src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide1_desk.jpg"
                  alt="main image"
                  width="100%"
                />
                <span
                  className="pagination_image"
                  data-src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide1_tab_thumb.jpg"
                />
              </picture>
            </div>
            <div className="container-fluid middle_fix_content">
              <div className="row">
                <div className="col-md-12 p-0 left_content_align v2">
                  <div className="content_box v2 winc">
                    <h4>
                      To unleash <br />
                      the visceral power <br />
                      of music for all.
                    </h4>
                    <p>Understand our Mission, Vision and Values.</p>
                    <button type="button" className="theme_btn">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div
          className="swiper-slide swiper-slide-prev"
          data-swiper-slide-index={1}
          style={{ width: 1349 }}
        >
          <a href="/inside-skullcandy/culture/">
            <div className="full_bg">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide2_tab.jpg"
                />
                <img
                  src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide2_desk.jpg"
                  alt="main image"
                  width="100%"
                />
                <span
                  className="pagination_image"
                  data-src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide2_tab_thumb.jpg"
                />
              </picture>
            </div>
            <div className="container-fluid middle_fix_content">
              <div className="row">
                <div className="col-md-12 p-0 left_content_align v2">
                  <div className="content_box v2 winc">
                    <h4>Working at 6,434 feet.</h4>
                    <p>Get a peek at our office culture in Park City, Utah.</p>
                    <button type="button" className="theme_btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div
          className="swiper-slide swiper-slide-active"
          data-swiper-slide-index={2}
          style={{ width: 1349 }}
        >
          <a href="/inside-skullcandy/partnerships/">
            <div className="full_bg">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide3_tab.jpg"
                />
                <img
                  src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide3_desk.jpg"
                  alt="main image"
                  width="100%"
                />
                <span
                  className="pagination_image"
                  data-src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide3_tab_thumb.jpg"
                />
              </picture>
            </div>
            <div className="container-fluid middle_fix_content">
              <div className="row">
                <div className="col-md-12 p-0 left_content_align v2">
                  <div className="content_box v2 winc">
                    <h4>
                      Doing well <br />
                      by doing good.
                    </h4>
                    <p>See our dedication to charitable partnerships.</p>
                    <button type="button" className="theme_btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div
          className="swiper-slide swiper-slide-next"
          data-swiper-slide-index={3}
          style={{ width: 1349 }}
        >
          <a href="/inside-skullcandy/athletes/">
            <div className="full_bg">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide4_tab.jpg"
                />
                <img
                  src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide4_desk.jpg"
                  alt="main image"
                  width="100%"
                />
                <span
                  className="pagination_image"
                  data-src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide4_tab_thumb.jpg"
                />
              </picture>
            </div>
            <div className="container-fluid middle_fix_content">
              <div className="row">
                <div className="col-md-12 p-0 left_content_align v2">
                  <div className="content_box v2 winc">
                    <h4>
                      Meet the <br />
                      boundary <br />
                      Breakers.
                    </h4>
                    <p>
                      Our friends who rip the mountains, oceans and streets.
                    </p>
                    <button type="button" className="theme_btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div
          className="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index={0}
          style={{ width: 1349 }}
        >
          <a href="/inside-skullcandy/values/">
            <div className="full_bg">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide1_tab.jpg"
                />
                <img
                  src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide1_desk.jpg"
                  alt="main image"
                  width="100%"
                />
                <span
                  className="pagination_image"
                  data-src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide1_tab_thumb.jpg"
                />
              </picture>
            </div>
            <div className="container-fluid middle_fix_content">
              <div className="row">
                <div className="col-md-12 p-0 left_content_align v2">
                  <div className="content_box v2 winc">
                    <h4>
                      To unleash <br />
                      the visceral power <br />
                      of music for all.
                    </h4>
                    <p>Understand our Mission, Vision and Values.</p>
                    <button type="button" className="theme_btn">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
        <div
          className="img_box wow fadeInLeft swiper-pagination-bullet"
          data-wow-delay="0.1s"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 1"
        >
          <img src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide1_tab_thumb.jpg" />
        </div>
        <div
          className="img_box wow fadeInLeft swiper-pagination-bullet"
          data-wow-delay="0.1s"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 2"
        >
          <img src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide2_tab_thumb.jpg" />
        </div>
        <div
          className="img_box wow fadeInLeft swiper-pagination-bullet swiper-pagination-bullet-active"
          data-wow-delay="0.1s"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 3"
        >
          <img src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide3_tab_thumb.jpg" />
        </div>
        <div
          className="img_box wow fadeInLeft swiper-pagination-bullet"
          data-wow-delay="0.1s"
          tabIndex={0}
          role="button"
          aria-label="Go to slide 4"
        >
          <img src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/inside_slide4_tab_thumb.jpg" />
        </div>
      </div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />



<Swiper {...params}>
        {images.map((image, idx) => (
          <SlideItem key={`slide_${idx}`} style={{ width: "100px" }}>
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              data-src={image.src}
            />
          </SlideItem>
        ))}
      </Swiper>

      <Swiper {...thumbsParams}>
        {images.map((image, idx) => (
          <SlideItem key={`slide_${idx}`} className="swiper-slide-auto">
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              // @note Ignore that the images aren't matching
              src={image.src.replace("320/240", "100/100")}
            />
          </SlideItem>
        ))}
      </Swiper>

    </div>
  </section>
    </>
  )
}

export default AboutPageSlider