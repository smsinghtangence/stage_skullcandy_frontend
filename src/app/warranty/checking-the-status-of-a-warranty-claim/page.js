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
                <a href="/support/warranty/">
                  Warranty.
                </a>
              </li>
              <li>Checking the Status of a Warranty Claim</li>
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
              <h2>Checking the Status of a Warranty Claim</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="support_content">
              <p>
                WARRANTY CLAIM STATUS
                <br />
                Please check to see if the product you are returning has been
                received by us by looking up the tracking number on the mail
                carrier’s website.
              </p>
              <p>&nbsp;</p>
              <p>
                If your returned product has been delivered, and more than 10
                business days have passed, check your email to see if you have
                received a claim status update. If more than 10 business days
                have passed and you have not received an update via email please
                contact us and we can assist. Please include your warranty claim
                number and tracking number in any correspondence.
              </p>
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