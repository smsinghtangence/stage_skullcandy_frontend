import React from 'react'

function page() {
  return (
    <>
  <div className="container-fluid">
    <div className="container max_container">
      <div className="row">
        <div className="col-md-12">
          <div className="skull_breadcrumbs">
            <ul>
              <li>
                <a href="/support/">
                  Skullcandy Support
                </a>
              </li>
              <li>
                <a href="/support/legal/">LEGAL.</a>
              </li>
              <li>Safety</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="full_center_section skull_space_xtra pb-5">
    <div className="container-fluid">
      <div className="container max_container">
        <div className="row">
          <div className="col-md-12">
            <div className="title_search_bar">
              <form
                role="search"
                method="get"
                action="/"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="input_box_v2 search">
                      <input
                        type="search"
                        name="s"
                        id="s"
                        defaultValue=""
                        placeholder="Search the Skullcandy Help Center"
                      />
                      <svg
                        viewBox="0 0 22.922 22.158"
                        id="search"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <g
                          id="Group_762"
                          data-name="Group 762"
                          transform="translate(-1079.439 -1360.5)"
                        >
                          {" "}
                          <circle
                            id="Ellipse_174"
                            data-name="Ellipse 174"
                            className="cls-1"
                            cx="8.084"
                            cy="8.084"
                            r="8.084"
                            transform="translate(1079.939 1361)"
                          />{" "}
                          <line
                            id="Line_224"
                            data-name="Line 224"
                            className="cls-1"
                            x2="7.571"
                            y2="7.443"
                            transform="translate(1094.44 1374.859)"
                          />{" "}
                        </g>{" "}
                      </svg>
                      <input
                        type="hidden"
                        placeholder="Search"
                        name="page"
                        id="page"
                        defaultValue="page"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section skull_space_xtra pt-5">
    <div className="container-fluid">
      <div className="container max_container">
        <div className="row m-0">
          <div className="col-md-12">
            <div className="skull_title big big_text mb-5 pb-3">
              <h2>Safety</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="support_content">
              <div className="article-body">
                <p>
                  Listening to audio at excessive volumes can cause permanent
                  hearing damage.
                </p>
                <h4>USE AS LOW VOLUME AS POSSIBLE</h4>
                <p>
                  Over exposure to excessive sound levels can damage your ears
                  resulting in permanent noise-induced hearing loss (NIHL).
                  Please use the following guidelines established by the
                  Occupational Safety Health Administration (OSHA) on maximum
                  time exposure to sound pressure levels before hearing damage
                  occurs.
                </p>
                <h6>90 dB SPL</h6>
                <p>at 8 hours</p>
                <h6>95 dB SPL</h6>
                <p>at 4 hours</p>
                <h6>100 dB SPL</h6>
                <p>at 2 hours</p>
                <h6>105 dB SPL</h6>
                <p>at 1 hour</p>
                <h6>110 dB SPL</h6>
                <p>at ½ hour</p>
                <h6>115 dB SPL</h6>
                <p>at 12 minutes</p>
                <h6>120 dB SPL</h6>
                <p>Avoid, or damage may occur</p>
                <p>&nbsp;</p>
                <h4>SAFE USE &amp; HAZARD WARNINGS</h4>
                <p>
                  Keep this product and its accessories out of reach of
                  children. Handling or use by children may pose a risk of death
                  or serious injury. Contains small parts and cords that may
                  pose a risk of choking or strangulation. Failure to use,
                  clean, or maintain earphone sleeves and nozzles according to
                  manufacturers instructions may increase the risk of sleeves
                  detaching from the nozzle and becoming lodged in your ear. If
                  a sleeve becomes lodged in your ear,<strong>&nbsp;</strong>
                  SEEK SKILLED MEDICAL ASSISTANCE TO REMOVE THE SLEEVE. Damage
                  to the ear may be caused by non-professionals attempting to
                  remove the sleeve. Do not use when a failure to hear your
                  surroundings could be dangerous, such as when driving, biking,
                  walking, or jogging where traffic is present. Use a slow
                  twisting motion to remove the earphones. Never pull on the
                  earphone cord. Prior to inserting the earphone, always recheck
                  the sleeve to make sure it is firmly attached to the nozzle.
                  Turn up the volume control only far enough to hear properly.
                  Ringing in the ears may indicate that the volume level is too
                  high. Try lowering the volume. If you connect these earphones
                  to an airplane’s sound system, listen at low levels so that
                  loud messages from the pilot do not cause discomfort. Have
                  your hearing checked by an audiologist on a regular basis. If
                  you experience wax buildup, discontinue use until a medical
                  professional has examined your ears. Stop using the earphones
                  if they are causing great discomfort or irritation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default page