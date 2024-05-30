import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div className="breacrumb-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ol className="breadcrumbs">
                <li>
                  <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.867 10">
                    <path id="Path_325" data-name="Path 325" d="M6.243,3.05C5.931,2.2,8,0,4.2,0,.946,0,.641,3.215.5,3.463a2.828,2.828,0,0,0-.467.94c-.089.413,0,.872.267.872.4,0-.089-.8.4-.8.623,0,1.358,1.009,1.558,1.582-.334.6-.8.986-1.135.827a1.016,1.016,0,0,1-.69-.918c0-.369-.344-.357-.311.114a1.753,1.753,0,0,0,.8,1.354A4.342,4.342,0,0,1,2.148,8.967c.152.377.356.551.913.551s.133.482.512.482.156-.529.378-.529,0,.505.423.505c.645,0,.356-.8.557-.941S7.912,7.43,7.867,5.619C7.823,3.831,6.554,3.9,6.243,3.05ZM3.527,8.165A1.3,1.3,0,0,0,2.5,8.05c-.245.091-.489-.046-.289-.666a3.442,3.442,0,0,1,.4-.894A14.466,14.466,0,0,1,3.95,8.1C3.972,8.279,3.683,8.348,3.527,8.165ZM5.419,7.133A1.491,1.491,0,1,1,6.866,5.641,1.469,1.469,0,0,1,5.419,7.133Z" transform="translate(0)"></path>
                  </svg></Link>
                </li>
                <li>
                Join us
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div> 

      <section className="join-us-banner">
      <picture>
        <source media="(max-width:540px)" srcset="https://www.skullcandy.com/cdn/shop/files/eae87a89-52d7-47bf-a04e-1415ab5412f2_1_slider_mobile_office.webp" className="img-fluid" />
          <img src="https://www.skullcandy.com/cdn/shop/files/e49dedc6-214d-4e97-9e35-33d383e0b1bf_1c_slider_desktop_office.png" alt="main image" width="100%" className="desktop-banner img-fluid" />

      </picture>
      
        <div className="jub-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="jub-content-inner">
                            <h1>Working at 6,434 feet.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="our-culture">
        <div className="container">
            <div className="row">
                <div className="col-lg-12"><h1>OUR CULTURE</h1></div>
            </div>
        </div>
      </section>
      <section className="our-culture-banner">
      <picture>
        <source media="(max-width:540px)" srcset="https://www.skullcandy.com/cdn/shop/files/18f426dd-938e-4495-95c7-c5d04d82a740__AE1A28D1-2D4F-4F9F-A588-1A5F2C485E9B.webp" className="img-fluid" />
          <img src="https://www.skullcandy.com/cdn/shop/files/d2249cad-3ce3-45d9-9e6b-01e53394570f_desktop_whenhomelooks.webp" alt="main image" width="100%" className="desktop-banner img-fluid" />

      </picture>
       
      </section>
      <section className="two-col-grid-blk">
        <div className="container-fluid">
            <div className="row">
                <div className="two-col-grid">
                  <div className="two-col-img">
                    <img src="https://www.skullcandy.com/cdn/shop/files/Screenshot_2024-02-27_at_10.19.47_AM_1500x.png" alt="" className='img-fluid'/>
                  </div>
                  <div className="two-col-content">
                  <div className="tcc-inner">
                    <p>Our office in Park City, Utah, proudly sits in the heart of the Wasatch Mountains at exactly 6,434 feet. Since we're the kind of people who tend to be inspired by skyscrapers of the natural variety, we can think of no better place to work.</p>
                 </div>
                  </div>
                </div>   
            </div>
        </div>
      </section>
      <section className="two-col-grid-blk column-reverse">
        <div className="container-fluid">
            <div className="row">
                <div className="two-col-grid">
               
                  <div className="two-col-content">
                    <div className="tcc-inner">
                    <p>We're a diverse bunch at Skullcandy. Walk down any row of desks and you'll run into the widest range of people you can imagine. From former professional athletes to aspiring filmmakers and band members. But no matter who we are individually, we're all united by something bigger:</p>
                    <p>Our passion for our brand and for each other.</p>
                    <p>Here's to the Skull.</p>
                    </div>
                  </div>
                  <div className="two-col-img">
                    <img src="https://www.skullcandy.com/cdn/shop/files/Screenshot_2024-02-27_at_10.20.13_AM_1500x.png" alt="" className='img-fluid'/>
                  </div>
                </div>   
            </div>
        </div>
      </section>
      <section className="we-are-united">
        <img src="https://www.skullcandy.com/cdn/shop/files/0e5bde06-c04f-440d-b214-62047122d554__E6FC9C45-D9A3-4A51-94F7-A1180060B1B0.webp" alt="" className='img-fluid' />
        <Link href="#" >BROWSE CAREERS</Link>
      </section>
    </>
  )
}

export default page