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
              <li>How to Submit a Warranty Claim</li>
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
              <h2>How to Submit a Warranty Claim</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="support_content">
              <h5>
                <span className="wysiwyg-font-size-large">
                  <strong>DEFECTIVE PRODUCT?</strong>
                </span>
              </h5>
              <p>
                Let’s solve it. Here’s a summary of how the process works:
                <br />
                1.&nbsp;
                <a href="/warranty/submit-a-claim/" target="_self">
                  Submit a Warranty Claim by clicking the link below and filling
                  out the form.
                </a>
                <br />
                2. Receive an email with shipping instructions.
                <br />
                3. Send in your Skullcandy product.
                <br />
                4. Receive a package with your replacement product.
              </p>
              <p>
                <a href="/warranty/submit-a-claim/" target="_self">
                  <strong>SUBMIT A WARRANTY CLAIM</strong>
                </a>
              </p>
              <h4>1-YEAR GLOBAL WARRANTY ON ALL HEADPHONES</h4>
              <p>
                All Skullcandy products (“Products”) are backed by a 1-year
                limited warranty. If it doesn’t work the way we promised, we’ll
                make it right.
              </p>
              <h4>ALREADY COMPLETED A CLAIM?</h4>
              <p>
                Once your warranty claim has been processed and verified, we
                will send you a replacement product and an email with tracking
                information.&nbsp;Please allow up to Seven&nbsp;business days
                from the time we receive your product for your warranty to be
                processed.
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