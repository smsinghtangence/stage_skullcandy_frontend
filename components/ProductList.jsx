"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef, useState, useEffect } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";
import { getDataWithQuery, geturl } from "@/utils/api";
const API_URL = process.env.API_URL || "";
function ProductList({ products }) {
  // console.log("test product " + JSON.stringify(products))
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* whats new list */}
      {products?.length != 0 || products != undefined || products != null ? (
        <>
          {products?.map((item, index) => {
            const product = item?.attributes;

            return (
              <>
                {product?.slug && (
                  <>
                    {/* ///////////////// */}
                    {products.length > 3 ? (
                      <>
                        {index == 3 ? (
                          <>
                            {/* product */}
                            <div className="pr-list" key={index + "stat"}>
                              <Link href="#">
                                <div className="collection-add-card-image">
                                  <img
                                    src="https://www.skullcandy.com/cdn/shop/files/Merch_Tile_TT_1x2_headphones.png?format=pjpg&v=1709654885&width=1500"
                                    alt=""
                                  />
                                  <div className="cadi-content">
                                    <h4>EXPLORE TRIPLE THREAT</h4>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            {/* product */}
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      ""
                    )}

                    {/* ///////////////// */}

                    <div className="pr-list" key={"prolist" + index}>
                      <Link href={"/shop/" + product.slug}>
                        <div className="whats-new-list">
                          <div className="whats-new-img">
                            {/* {item?.attributes?.Variation_Sliders[0]?.Sales_price 
                      &&
                        <span className="wnl-bladge text-uppercase sale-bladge">on sale </span>
                      } */}
                            {item?.attributes?.Product_Tag && (
                              <span
                                id="wnl-bladge"
                                className={`wnl-bladge text-uppercase ${item?.attributes?.Product_Tag}`}
                              >
                                {item?.attributes?.Product_Tag}
                              </span>
                            )}
                            <Link href={"/shop/" + product?.slug}>
                              {/* <Swiper
                            style={{
                              '--swiper-navigation-color': '#fff',
                              '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={false}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                            key={"prolistslider_main"+index}
                          > */}
                              {/* {item?.attributes?.Variation_Sliders?.map((variation, i) => ( */}
                              <>
                                {/* <SwiperSlide key={"prolistslider"+i}> */}
                                <img
                                  src={geturl(
                                    item?.attributes?.Variation_Sliders[0]
                                      ?.Variant_Image
                                  )}
                                  alt={item?.attributes?.title}
                                />
                                {/* </SwiperSlide> */}
                              </>
                              {/* ))} */}

                              {/* </Swiper> */}
                            </Link>
                          </div>
                          <div className="what-new-content">
                            <h4 className="wnc-heading">
                              <Link href="#">{product.title}</Link>
                            </h4>
                            <p>{product.Product_Tag_Line_Heading}</p>
                            <div className="wnc-price">
                              <h5>
                                <i className="fa fa-rupee"></i>

                                {item?.attributes?.Variation_Sliders[0]
                                  ?.Sales_price
                                  ? item?.attributes?.Variation_Sliders[0]
                                      ?.Sales_price
                                  : item?.attributes?.Variation_Sliders[0]
                                      ?.Variations_Price}

                                {item?.attributes?.Variation_Sliders[0]
                                  ?.Sales_price && (
                                  <s>
                                    <i className="fa fa-rupee"></i>{" "}
                                    {
                                      item?.attributes?.Variation_Sliders[0]
                                        ?.Variations_Price
                                    }
                                  </s>
                                )}
                              </h5>
                            </div>

                            <Swiper
                              onSwiper={setThumbsSwiper}
                              loop={true}
                              spaceBetween={5}
                              slidesPerView={7.5}
                              freeMode={true}
                              watchSlidesProgress={true}
                              modules={[FreeMode, Navigation, Thumbs]}
                              className="mySwiper"
                            >
                              {item?.attributes?.Variation_Sliders?.map(
                                (variation, i) => (
                                  <>
                                    <SwiperSlide key={"prolistslider2" + i}>
                                      <img
                                        src={geturl(variation?.Variant_Image)}
                                        alt={item?.attributes?.title}
                                      />
                                    </SwiperSlide>
                                  </>
                                )
                              )}
                            </Swiper>
                          </div>
                        </div>

                        <div className="pr-list-hover-info">
                          {product?.Product_Hover_Image?.data != null ? (
                            <img
                              src={geturl(product?.Product_Hover_Image)}
                              alt=""
                            />
                          ) : (
                            <img src="/images/product-guide.jpg" alt="" />
                          )}
                          <div className="pr-list-hover-content">
                            <h4>
                              {product?.title}{" "}
                              <i className="fa fa-chevron-right"></i>
                            </h4>
                            <div className="stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <span>4.9</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* whats new list */}
                  </>
                )}
              </>
            );
          })}
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}

export default ProductList;
