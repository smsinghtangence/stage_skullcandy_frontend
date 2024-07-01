import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs, A11y } from 'swiper/modules';
import Link from 'next/link';

function SearchCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        className='what-slider-blk'
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 2.3,
          },
          320: {
            slidesPerView: 1.2,
          }
        }}
      >
        {/* ---------slide------- */}
        <SwiperSlide>
          <div className="pr-list">
            <div className="whats-new-list">
              <Link href="">
                <div className="whats-new-img">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Link>
              <div className="what-new-content">
                <h4 className="wnc-heading">
                  <Link href="#">Heading </Link>
                </h4>
                <p>subheading</p>
                <div className="wnc-price">
                  <h5><i className="fa fa-rupee"></i> 2000    <s><i className="fa fa-rupee"></i> 5000</s> </h5>
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div >
        </SwiperSlide>
        {/* --------slide-------- */}


                {/* ---------slide------- */}
                <SwiperSlide>
          <div className="pr-list">
            <div className="whats-new-list">
              <Link href="">
                <div className="whats-new-img">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Link>
              <div className="what-new-content">
                <h4 className="wnc-heading">
                  <Link href="#">Heading </Link>
                </h4>
                <p>subheading</p>
                <div className="wnc-price">
                  <h5><i className="fa fa-rupee"></i> 2000    <s><i className="fa fa-rupee"></i> 5000</s> </h5>
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div >
        </SwiperSlide>
        {/* --------slide-------- */}



                {/* ---------slide------- */}
                <SwiperSlide>
          <div className="pr-list">
            <div className="whats-new-list">
              <Link href="">
                <div className="whats-new-img">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Link>
              <div className="what-new-content">
                <h4 className="wnc-heading">
                  <Link href="#">Heading </Link>
                </h4>
                <p>subheading</p>
                <div className="wnc-price">
                  <h5><i className="fa fa-rupee"></i> 2000    <s><i className="fa fa-rupee"></i> 5000</s> </h5>
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div >
        </SwiperSlide>
        {/* --------slide-------- */}

                {/* ---------slide------- */}
                <SwiperSlide>
          <div className="pr-list">
            <div className="whats-new-list">
              <Link href="">
                <div className="whats-new-img">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Link>
              <div className="what-new-content">
                <h4 className="wnc-heading">
                  <Link href="#">Heading </Link>
                </h4>
                <p>subheading</p>
                <div className="wnc-price">
                  <h5><i className="fa fa-rupee"></i> 2000    <s><i className="fa fa-rupee"></i> 5000</s> </h5>
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div >
        </SwiperSlide>
        {/* --------slide-------- */}

                {/* ---------slide------- */}
                <SwiperSlide>
          <div className="pr-list">
            <div className="whats-new-list">
              <Link href="">
                <div className="whats-new-img">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Link>
              <div className="what-new-content">
                <h4 className="wnc-heading">
                  <Link href="#">Heading </Link>
                </h4>
                <p>subheading</p>
                <div className="wnc-price">
                  <h5><i className="fa fa-rupee"></i> 2000    <s><i className="fa fa-rupee"></i> 5000</s> </h5>
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="http://13.126.252.23:8080/uploads/Rail_ANC_True_Black_Buy_Box1_092d10259d.webp" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div >
        </SwiperSlide>
        {/* --------slide-------- */}
      </Swiper>

    </>
  )
}

export default SearchCard