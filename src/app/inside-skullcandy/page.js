
import React from 'react'
import Link from 'next/link'
import AboutPageSlider from '@/components/AboutPageSlider'
function Page() {

    
  return (

    <>
     {/* <AboutPageSlider /> */}
  <section className="full_center_section zoom_img">
    <Link href="/inside-skullcandy/values/">
      <div className="full_bg">
        <picture>
          <source
            media="(max-width:800px)"
            srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/fe32348b-2704-4a75-8f26-999af5139bea_3_mobile.jpg"
          />
          <img
            src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/29c34664-3f8d-4859-b3a4-95858966b2dc_3_desktop.jpg"
            alt="main image"
            width="100%"
          />
        </picture>
      </div>
      <div className="container-fluid middle_fix_content">
        <div className="row">
          <div className="col-md-12 p-0 right_content_align v2">
            <div className="content_box v2 winc inside_content">
              <h4>
                OUR MISSION, <br />
                VISION <br />
                AND VALUES.
              </h4>
              <p>See the principles that guide the way we work and play.</p>
              <button type="button" className="theme_btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </section>
  <section className="full_center_section zoom_img">
    <Link href="/inside-skullcandy/culture/">
      <div className="full_bg">
        <picture>
          <source
            media="(max-width:800px)"
            srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/culture_tab.jpg"
          />
          <img
            src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/culture_main.jpg"
            alt="main image"
            width="100%"
          />
        </picture>
      </div>
      <div className="container-fluid middle_fix_content">
        <div className="row">
          <div className="col-md-12 p-0 left_content_align v2">
            <div className="content_box v2 winc inside_content">
              <h4>OUR CULTURE</h4>
              <p>Get a look at our unique office life in Park City, Utah.</p>
              <button type="button" className="theme_btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </section>
  <section className="full_center_section zoom_img">
    <Link href="#">
      <div className="full_bg">
        <picture>
          <source
            media="(max-width:800px)"
            srcSet="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/soundtab.jpg"
          />
          <img
            src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/sount_main.jpg"
            alt="main image"
            width="100%"
          />
        </picture>
      </div>
      <div className="container-fluid middle_fix_content">
        <div className="row">
          <div className="col-md-12 p-0 left_content_align v2">
            <div className="content_box v2 winc inside_content">
              <h4>
                SOUND WITHOUT
                <br />
                BOUNDARIES.
              </h4>
              <p>Meet the ambassadors that inspire us every day.</p>
              <button type="button" className="theme_btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </section>
  <section className="grey_bg2 skull_space">
    <div className="icon_box_section">
      <div className="single_icon_box">
        <Link href="/inside-skullcandy/values/">
          <img
            src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/mission_icon.png"
            alt="icon"
          />
          <h5>Mission, Vision and Values</h5>
          <p>The principles that guide the way we work and play.</p>
          <p>Learn More &gt;</p>
        </Link>
      </div>
      <div className="single_icon_box">
        <Link href="/inside-skullcandy/values/">
          <img
            src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/culture_icon.png"
            alt="icon"
          />
          <h5>Culture</h5>
          <p>Get a look at our unique office life in Park City, Utah.</p>
          <p>Learn More &gt;</p>
        </Link>
      </div>
      <div className="single_icon_box">
        <Link href="/inside-skullcandy/athletes/ ">
          <img
            src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/team_icon.png"
            alt="icon"
          />
          <h5>Team</h5>
          <p>Meet the athletes that inspire us every day.</p>
          <p>Learn More &gt;</p>
        </Link>
      </div>
    </div>
  </section>
</>

    
  )
}

export default Page