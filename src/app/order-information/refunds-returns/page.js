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
              <li>Product Help.</li>
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
              <h2>Refunds &amp; Returns</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="support_content">
              <p>
                <b>
                  Dear Customer, Please report an issue related to
                  Wrong/Damaged/Missing Product or Empty Packing received within
                  24 hrs from Delivery Time. Complaints reported post 24 hrs
                  will not be accepted for dispute for above issues.
                </b>
                <br />
                The cancellation of your order is only possible pre-dispatch, by
                mailing us or calling the toll no. 011-42700400 and confirming
                the acceptance of the cancellation request. (During working hour
                , i.e. Mon-Friday, 10:00am – 4:00pm, and except the Govt.
                holidays) You can also email at customercare@brandeyes.in
                <br />
                All Refunds/Cancellations are subject to deduction of payment
                gateway charges.
                <br />
                Order Cancellation is allowed only before Dispatch of the
                product or within 2 hours of purchase whichever is earlier, if
                you have already cancelled the order. Please allow us 30
                business days to Credit the amount in your account.
                <br />
                In case of non acceptance of Product by customer or product
                return due to wrong address or non-availability of customer at
                the said address, the value of freight will be adjusted from
                initial advance.
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