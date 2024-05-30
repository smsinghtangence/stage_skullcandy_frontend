'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


function CrusherProduct() {
    return (
        <>
            <section className="crusher-product py-60">
                <h2 className='text-center'>Shop Crusher Products</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                className='what-slider-blk'
                                modules={[Navigation, Pagination, A11y]}
                                spaceBetween={10}
                                navigation
                                // pagination={{ clickable: true }}

                                breakpoints={{
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    767: {
                                        slidesPerView: 2.3,
                                    },
                                    320: {
                                        slidesPerView: 1.2,
                                    }
                                }}

                            >
                                <SwiperSlide>
                                    <div className="whats-new-list">
                                        <div className="whats-new-img">
                                                                 {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}

                                            <Link href="#">
                                                <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoPink_1_400x.png" />
                                            </Link>
                                        </div>
                                        <div className="what-new-content">
                                            <h4 className="wnc-heading"><Link href="#">Kilo<sup>TM</sup></Link></h4>
                                            <p>Wireless Bluetooth® Portable Speaker</p>
                                            <div className="wnc-price">
                                                <h5>$169.99 <s>$199.99</s></h5>
                                            </div>


                                        </div>

                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="whats-new-list">
                                        <div className="whats-new-img">
                                                                 {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}

                                            <Link href="#">
                                                <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoPink_1_400x.png" />
                                            </Link>
                                        </div>
                                        <div className="what-new-content">
                                            <h4 className="wnc-heading"><Link href="#">Kilo<sup>TM</sup></Link></h4>
                                            <p>Wireless Bluetooth® Portable Speaker</p>
                                            <div className="wnc-price">
                                                <h5>$169.99 <s>$199.99</s></h5>
                                            </div>


                                        </div>

                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="whats-new-list">
                                        <div className="whats-new-img">
                                                                 {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}

                                            <Link href="#">
                                                <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoPink_1_400x.png" />
                                            </Link>
                                        </div>
                                        <div className="what-new-content">
                                            <h4 className="wnc-heading"><Link href="#">Kilo<sup>TM</sup></Link></h4>
                                            <p>Wireless Bluetooth® Portable Speaker</p>
                                            <div className="wnc-price">
                                                <h5>$169.99 <s>$199.99</s></h5>
                                            </div>


                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="whats-new-list">
                                        <div className="whats-new-img">
                                                                 {/* <span className="wnl-bladge text-uppercase sale-bladge">on sale </span> */}

                                            <Link href="#">
                                                <img src="https://www.skullcandy.com/cdn/shop/files/kilo_buy_box_AcidCamoPink_1_400x.png" />
                                            </Link>
                                        </div>
                                        <div className="what-new-content">
                                            <h4 className="wnc-heading"><Link href="#">Kilo<sup>TM</sup></Link></h4>
                                            <p>Wireless Bluetooth® Portable Speaker</p>
                                            <div className="wnc-price">
                                                <h5>$169.99 <s>$199.99</s></h5>
                                            </div>


                                        </div>

                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>





























        </>
    )
}

export default CrusherProduct