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
                <li>Music with a mission </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="music-with-mission">
        <img src="https://www.skullcandy.com/cdn/shop/files/desktop_hero.png" alt="" className='img-fluid' />
      </section>
      <section className="our-partner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-partner-heading">
                <h2>OUR PARTNERS</h2>
              </div>
            </div>
          </div>
        </div>
       <div className="our-partner-banner">
       <img src="https://www.skullcandy.com/cdn/shop/files/desktop_twloha.jpg?v=1709302524" alt=""  className='img-fluid'/>
       <div className="ipb-content">
        <img src="https://www.skullcandy.com/cdn/shop/files/TWLOHA-Logo-Knockout.png" alt="" />
        <p>To Write Love on Her Arms is a non-profit movement dedicated to presenting hope and finding help for people struggling with depression, addiction, self-injury and suicide.
</p>
       </div>
       </div>

      </section>

      <div className="col-50-block">
        <div className="col-50-img">
          <img src="https://www.skullcandy.com/cdn/shop/files/desktop_twloha2_3x_341a426b-9c97-485a-b104-be9a4836ddbd_750x.jpg" alt="" className='img-fluid'/>
        </div>
        <div className="col-50-content">
          <div className="col-50-content-inner">
          <p>TWLOHA founder Jamie Tworkowski didn't set out to start a non-profit organization in 2006. All he wanted to do was help his friend Renee who was suffering from depression, addiction and self-injury. Through writing about the experience and selling t-shirts to help fund her treatment, Jamie discovered a community of people struggling with their own mental health and seeking similar support. Since then, TWLOHA has reached millions of people online and in-person with the message that hope and help are real, and has worked to invest over $2.6 million into treatment and recovery for those who can't afford it.</p>
          </div>
        </div>
      </div>

      <div className="pow-blk">
      <picture>
        <source media="(max-width:540px)" srcset="https://www.skullcandy.com/cdn/shop/files/mobile_pow_update_2021.jpg" className="img-fluid" />
          <img src="https://www.skullcandy.com/cdn/shop/files/desktop_pow_update2021.jpg" alt="main image" width="100%" className="desktop-banner img-fluid" />

      </picture>
       
        <div className="pow-content">
          <img src="https://www.skullcandy.com/cdn/shop/files/POW_Logo_POW_Logo.svg" alt="" className='img-fluid'/>
          <p>Protect Our Winters is a non-profit group dedicated to turning passionate outdoor people into effective climate advocates.</p>
        </div>
      </div>
      <div className="col-50-block">
        <div className="col-50-img">
          <img src="https://www.skullcandy.com/cdn/shop/files/pow-update-2021_1500x.jpg" alt="" className='img-fluid'/>
        </div>
        <div className="col-50-content">
          <div className="col-50-content-inner">
          <p>As a company founded at the intersection of music and board sports, we believe strongly in protecting the earth and our access to outdoor recreation. Which is why we're proud to partner with Protect Our Winters.</p>
          <p>Founded by professional snowboarder, Jeremy Jones, POW is a non-profit group that turns passionate outdoor people into effective climate advocates. They have successfully led a community of outdoor enthusiasts, athletes, scientists, creatives and business leaders to affect systemic political solutions to climate change since 2007.</p>
          <p>
          A portion of proceeds from our Upcycling Program, which refurbishes returned or damaged products to reduce landfill waste, goes to Protect Our Winters.
          </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page