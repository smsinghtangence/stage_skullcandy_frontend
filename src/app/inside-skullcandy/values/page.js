import React from 'react'
import Link from 'next/link'
import AboutPageSlider from '@/components/AboutPageSlider'
function page() {
  return (
    <>

    <AboutPageSlider/>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/values_mobile_banner.jpg"
        />
        <img src="/images/we_are_music.jpg" alt="main image" width="100%" />
      </picture>
    </div>
  </section>
  <section className="full_center_section dark_bg skull_space">
    <div className="container max_container ">
      <div className="full_bg">
        <picture>
          <source
            media="(max-width:800px)"
            srcSet="/images/value_text.png"
          />
          <img
            src="/images/value_text.png"
            alt="main image"
            width="100%"
          />
        </picture>
      </div>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/unleash_tab.jpg"
        />
        <img src="/images/unleash_banner.jpg" alt="main image" width="100%" />
      </picture>
    </div>
    <div className="container-fluid middle_fix_content">
      <div className="row">
        <div className="col-md-12 p-0 left_content_align v2">
          <div className="content_box v2 winc inside_content">
            <h5>OUR MISSION:</h5>
            <h4>
              Unleash the
              <br />
              visceral power of <br />
              music for all.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/vision_tab.jpg"
        />
        <img src="/images/vision_banner.jpg" alt="main image" width="100%" />
      </picture>
    </div>
    <div className="container-fluid middle_fix_content">
      <div className="row">
        <div className="col-md-12 p-0 right_content_align v2">
          <div className="content_box v2 winc inside_content">
            <h5>OUR VISION:</h5>
            <h4>
              Be the #1 brand for the youthful and adventurous audio consumer.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/2003tab.jpg"
        />
        <img src="/images/chairlift_banner.jpg" alt="main image" width="100%" />
      </picture>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/fresh_track_tab_bg.jpg"
        />
        <img src="/images/fresh_track.jpg" alt="main image" width="100%" />
      </picture>
    </div>
    <div className="container-fluid middle_fix_content">
      <div className="row">
        <div className="col-md-12 p-0 left_content_align v2">
          <div className="content_box v3 winc dark inside_content">
            <h4>Fresh tracks.</h4>
            <p>
              Skullcandy wasn’t founded in some corporate office. We were born
              on a chairlift in Park City, Utah. Even our name defies
              convention. To stay true to our core, we can’t settle for easy or
              obvious.
            </p>
            <p>
              <b>Everything we do should challenge the status quo.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/relentness_tab.jpg"
        />
        <img src="/images/rentless.jpg" alt="main image" width="100%" />
      </picture>
    </div>
    <div className="container-fluid middle_fix_content">
      <div className="row">
        <div className="col-md-12 p-0 right_content_align v2">
          <div className="content_box v3 winc inside_content">
            <h4>Relentless underdogs.</h4>
            <p>
              Being a challenger brand runs deep in our DNA. That’s the match
              that lights the fire and stokes everything we create.
            </p>
            <p>
              <b>We dare you to underestimate us.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/blended_tab.jpg"
        />
        <img src="/images/blended.jpg" alt="main image" width="100%" />
      </picture>
    </div>
    <div className="container-fluid middle_fix_content">
      <div className="row">
        <div className="col-md-12 p-0 left_content_align v2">
          <div className="content_box v3 winc dark inside_content">
            <h4>Banded together.</h4>
            <p>
              Every single one of us makes Skullcandy an incredible place to
              work. We always put our minds together and go after solutions as a
              collective.
            </p>
            <p>
              <b>Together, we’re a force to be reckoned with.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/first_chair_tab.jpg"
        />
        <img src="/images/first_chair.jpg" alt="main image" width="100%" />
      </picture>
    </div>
    <div className="container-fluid middle_fix_content">
      <div className="row">
        <div className="col-md-12 p-0 right_content_align v2">
          <div className="content_box v3 winc inside_content">
            <h4>First chair, last call.</h4>
            <p>
              Working here should be as much of a lifestyle as a job. We don’t
              believe in “office hours” or some imaginary line between work and
              fun. So take a powder morning, or a halfpipe break. Leave early to
              go for a run. Whatever.
            </p>
            <p>
              <b>
                We expect you to do your job exceptionally; when and how you do
                it is up to you.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section">
    <div className="full_bg">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet="/images/owing_it_tab.jpg"
        />
        <img src="/images/owing_banner.jpg" alt="main image" width="100%" />
      </picture>
    </div>
    <div className="container-fluid middle_fix_content">
      <div className="row">
        <div className="col-md-12 p-0 left_content_align v2">
          <div className="content_box v3 winc inside_content">
            <h4>Owning it.</h4>
            <p>
              We’re only as strong as our weakest link. Which is why we need to
              be accountable to and for each other. If it’s your responsibility,
              take it. If you need help, ask for it. There’s a solution out
              there.
            </p>
            <p>
              <b>We trust you to solve it like a pro.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="grey_bg2 skull_space">
    <div className="icon_box_section">
      <div className="single_icon_box">
        <Link href="/inside-skullcandy/values/">
          <img
            src="/images/culture_icon.png"
            alt="icon"
          />
          <h5>Culture</h5>
          <p>Get a look at our unique office life in Park City, Utah.</p>
          <p>Learn More &gt;</p>
        </Link>
      </div>
      <div className="single_icon_box">
        <Link href="#">
          <img
            src="/images/partnership_icon.png"
            alt="icon"
          />
          <h5>Partnerships</h5>
          <p>Learn how Skullcandy is doing well by doing good.</p>
          <p>Learn More &gt;</p>
        </Link>
      </div>
      <div className="single_icon_box">
        <Link href="#">
          <img
            src="/images/team_icon.png"
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

export default page