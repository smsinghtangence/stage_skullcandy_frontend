import React from 'react'

function Page() {
  return (
    <>
    <section className="full_center_section">
      <div className="full_bg">
        <picture>
          <source media="(max-width:540px)" srcSet="/images/when_home.jpg" />
          <img src="/images/when_home.jpg" alt="main image" width="100%" />
        </picture>
      </div>
    </section>
    <section className="full_center_section black_bg">
      <div className="row m-0">
        <div className="col-md-7 p-0 pr-4">
          <div className="full_bg">
            <picture>
              <source media="(max-width:540px)" srcSet="/images/park_city.jpg" />
              <img src="/images/park_city.jpg" alt="main image" width="100%" />
            </picture>
          </div>
        </div>
        <div className="col-md-5 p-0">
          <div className="content_box v3 winc content_center_align">
            <p>
              Our office in Park City, Utah, proudly sits in the heart of the
              Wasatch Mountains at exactly 6,434 feet. Since we’re the kind of
              people who tend to be inspired by skyscrapers of the natural
              variety, we can think of no better place to work.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="full_center_section">
      <div className="full_bg">
        <picture>
          <source media="(max-width:540px)" srcSet="/images/outsude_mob.jpg" />
          <img src="/images/outsude.jpg" alt="main image" width="100%" />
        </picture>
      </div>
    </section>
    <section className="full_center_section black_bg">
      <div className="row m-0">
        <div className="col-md-5 pr-0 pl-5">
          <div className="content_box v3 winc content_center_align shift_left">
            <p>
              We’re a diverse bunch at Skullcandy. Walk down any row of desks and
              you’ll run into the widest range of people you can imagine. From
              former professional athletes to aspiring filmmakers and band
              members. But no matter who we are individually, we’re all united by
              something bigger:
            </p>
            <p>Our passion for our brand and for each other.</p>
            <p>Here’s to the Skull.</p>
          </div>
        </div>
        <div className="col-md-7 p-0">
          <div className="full_bg">
            <picture>
              <source media="(max-width:540px)" srcSet="/images/park_city2.jpg" />
              <img src="/images/park_city2.jpg" alt="main image" width="100%" />
            </picture>
          </div>
        </div>
      </div>
    </section>
    <section className="full_center_section skull_space black_bg">
      <a href="#">
        <div className="full_bg">
          <picture>
            <source media="(max-width:540px)" srcSet="/images/we_united.jpg" />
            <img src="/images/we_united.jpg" alt="main image" width="100%" />
          </picture>
        </div>
        <div className="skull_space text-center top_bottom_adj">
          <button type="button" className="theme_btn">
            BROWSE CAREERS
          </button>
        </div>
      </a>
    </section>
    <section className="grey_bg2 skull_space">
  <div className="icon_box_section">
    <div className="single_icon_box">
      <a href="#">
        <img
          src="/wp-content/themes/skullcandy/images/mission_icon.png"
          alt="icon"
        />
        <h5>Mission, Vision and Values</h5>
        <p>The principles that guide the way we work and play.</p>
        <p>Learn More &gt;</p>
      </a>
    </div>
    <div className="single_icon_box">
      <a href="#">
        <img
          src="/wp-content/themes/skullcandy/images/partnership_icon.png"
          alt="icon"
        />
        <h5>Partnerships</h5>
        <p>Learn how Skullcandy is doing well by doing good.</p>
        <p>Learn More &gt;</p>
      </a>
    </div>
    <div className="single_icon_box">
      <a href="#">
        <img
          src="/wp-content/themes/skullcandy/images/team_icon.png"
          alt="icon"
        />
        <h5>Team</h5>
        <p>Meet the athletes that inspire us every day.</p>
        <p>Learn More &gt;</p>
      </a>
    </div>
  </div>
</section>

  </>
  
  )
}

export default Page