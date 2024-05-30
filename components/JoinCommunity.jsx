
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState } from 'react';
import Link from 'next/link';

function JoinCommunity() {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
       };

       const CloseClass = () => {
        setActive(!isActive); 
       };

  return (
    <>
    

<section className="join-comunity">

<div className="container">
<div className="heading text-center">
  <h4>JOIN THE COMMUNITY</h4>
  <p>Follow us on social media and show us how you <strong>#skullcandy</strong></p>
  </div>
  <div className="row">
    <div className="col-lg-12">
    
<Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
  
    navigation={true}
     scrollbar={{ draggable: true }}
     breakpoints={{
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
    }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
      <div className="collection-list" >
        <img src="/images/communit-1.jpg" alt=""  onClick={ToggleClass} />
      </div>
    
    </SwiperSlide>
    <SwiperSlide>
    <div className="collection-list">
        <img src="/images/communit-2.jpg" alt="" onClick={ToggleClass} />
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="collection-list">
        <img src="/images/communit-3.jpg" alt="" onClick={ToggleClass} />
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="collection-list">
        <img src="/images/communit-4.jpg" alt="" onClick={ToggleClass} />
      </div>
    </SwiperSlide>

  </Swiper>
    </div>
  </div>
</div>
</section>  


<div className={isActive ? "" : "active"}>      
<div className="modal" id="myModal">
  <div className="modal-dialog modal-lg  ">
    <div className="modal-content">
    
      <div className="modal-body">
        <span  className="close" onClick={CloseClass}> <img src="/images/close.png" alt="" /> </span>

<Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={1}
    navigation={true}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
      <div className="community-modal-list" >
        <div className="cml-img">
           <img src="/images/communit-1.jpg" alt=""  />
        </div>
        <div className="cml-content">
            <div className="cml-title">
                <p>New bright color. Classic Crusher bass. <br /> This is Meta Mauve. ⚛️ 
                <br />Also available on Kilo and Dime 3. </p>
            </div>
            <div className="cl-post">
              <p>skullcandy // INSTAGRAM // 15 <br />NOVEMBER 2023</p>
            </div>
            <div className="cml-social-media">
              <Link href="#"><i className='fa fa-facebook'></i></Link>
              <Link href="#"><i className='fa fa-envelope'></i></Link>
              <Link href="#"><i className='fa fa-twitter'></i></Link>
              <Link href="#"><i className='fa fa-pinterest'></i></Link>
              <Link href="#"><i className='fa fa-facebook'></i></Link>
            </div>
        </div>
      
      </div>
    
    </SwiperSlide>
    <SwiperSlide>
      <div className="community-modal-list" >
        <div className="cml-img">
           <img src="/images/communit-2.jpg" alt=""  />
        </div>
        <div className="cml-content">
            <div className="cml-title">
                <p>New bright color. Classic Crusher bass. <br /> This is Meta Mauve. ⚛️ 
                <br />Also available on Kilo and Dime 3. </p>
            </div>
            <div className="cl-post">
              <p>skullcandy // INSTAGRAM // 15 <br />NOVEMBER 2023</p>
            </div>
            <div className="cml-social-media">
              <Link href="#"><i className='fa fa-facebook'></i></Link>
              <Link href="#"><i className='fa fa-envelope'></i></Link>
              <Link href="#"><i className='fa fa-twitter'></i></Link>
              <Link href="#"><i className='fa fa-pinterest'></i></Link>
              <Link href="#"><i className='fa fa-facebook'></i></Link>
            </div>
        </div>
      
      </div>
    
    </SwiperSlide>
    <SwiperSlide>
      <div className="community-modal-list" >
        <div className="cml-img">
           <img src="/images/communit-3.jpg" alt=""  />
        </div>
        <div className="cml-content">
            <div className="cml-title">
                <p>New bright color. Classic Crusher bass. <br /> This is Meta Mauve. ⚛️ 
                <br />Also available on Kilo and Dime 3. </p>
            </div>
            <div className="cl-post">
              <p>skullcandy // INSTAGRAM // 15 <br />NOVEMBER 2023</p>
            </div>
            <div className="cml-social-media">
              <Link href="#"><i className='fa fa-facebook'></i></Link>
              <Link href="#"><i className='fa fa-envelope'></i></Link>
              <Link href="#"><i className='fa fa-twitter'></i></Link>
              <Link href="#"><i className='fa fa-pinterest'></i></Link>
              <Link href="#"><i className='fa fa-facebook'></i></Link>
            </div>
        </div>
      
      </div>
    
    </SwiperSlide>
    <SwiperSlide>
      <div className="community-modal-list" >
        <div className="cml-img">
           <img src="/images/communit-4.jpg" alt=""  />
        </div>
        <div className="cml-content">
            <div className="cml-title">
                <p>New bright color. Classic Crusher bass. <br /> This is Meta Mauve. ⚛️ 
                <br />Also available on Kilo and Dime 3. </p>
            </div>
            <div className="cl-post">
              <p>skullcandy // INSTAGRAM // 15 <br />NOVEMBER 2023</p>
            </div>
            <div className="cml-social-media">
              <Link href="#"><i className='fa fa-facebook'></i></Link>
              <Link href="#"><i className='fa fa-envelope'></i></Link>
              <Link href="#"><i className='fa fa-twitter'></i></Link>
              <Link href="#"><i className='fa fa-pinterest'></i></Link>
              <Link href="#"><i className='fa fa-facebook'></i></Link>
            </div>
        </div>
      
      </div>
    
    </SwiperSlide>

  </Swiper>
      </div>
    </div>
  </div>
</div>
</div>


    </>
  )
}

export default JoinCommunity









