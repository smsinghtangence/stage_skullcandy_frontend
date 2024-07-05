import React from 'react'

function Page() {
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
                  <a href="/support/ordering-information/">
                    Ordering Information.
                  </a>
                </li>
                <li>Ordering Information</li>
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
                <h2>Ordering Information</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="support_content">
                <div className="article-body">
                  <p>&nbsp;</p>
                  <h5>Placing an Order</h5>
                  <p>
                    Click “Add to Cart” on the items that you would like to
                    purchase. Once you have added all desired items to your
                    shopping cart, click on the shopping bag icon at the top right
                    and “Proceed To Checkout.” Then input your shipping and
                    billing details and submit the order.
                  </p>
                  <p>
                    <strong>
                      Customer must ensure his/her or its correct GST information
                      at the time of placing the order at the website. Brand Eyes
                      Distributors Private Limited will not be held responsible
                      for not availing GST input by the customer in the case of:
                      Mismatch of GST NO, Mismatch of Name, Mismatch of Billing
                      address, Mismatch of shipping address.
                    </strong>
                  </p>
                  <h5>Order Confirmation</h5>
                  <p>
                    After placing an order you will receive an email confirmation.
                    If you did not receive a confirmation, please make sure you
                    spelled and entered your email address correctly and check
                    your junk folder.
                  </p>
                  <ul>
                    <li>
                      If you created an account at checkout, please log in to view
                      your order history.
                    </li>
                  </ul>
                  <p>
                    Sometimes the payment gets stuck with the payment gateway and
                    is not credited to us due to which order is not confirmed. In
                    this case customer will not receive any E-mail or text message
                    confirmation from us. Please wait for 72 hours, either payment
                    will be refunded by payment gateway to customer or it will be
                    credited to us. When payment is credited to us we will confirm
                    the order via E-mail and text. You can raise your query to
                    customer care and wait for 72 hours for their revert.
                  </p>
                  <h5 />
                  <h5>Order Cancellations</h5>
                  <p>
                    The cancellation of your order is only possible pre-dispatch,
                    by mailing us or calling the toll no. 011-42700400 and
                    confirming the acceptance of the cancelation request. (During
                    working hour , i.e. Mon-Friday, 10:00am – 4:00pm, and except
                    the Govt. holidays)
                    <br />
                    Order Cancellation is allowed only before Dispatch of the
                    product or within 2 hours of purchase whichever is earlier, if
                    you have already cancelled the order. Please allow us 30
                    business days to Credit the amount in your account.
                  </p>
                  <p>&nbsp;</p>
                  <h5>Changing Address After Placing an Order</h5>
                  <p>
                    Unfortunately, orders placed on Skullcandy websites are
                    packaged and ship immediately. Address changes are not
                    available after clicking submit on the order screen.
                  </p>
                  <p>
                    In certain cases, by mailing us or calling the toll no.
                    011-42700400 and confirming the acceptance of the Address
                    change request. (During working hour , i.e. Mon-Friday,
                    10:00am – 4:00pm, and except the Govt. holidays)
                  </p>
                  <p>&nbsp;</p>
                  <h5>Out of Stock Orders</h5>
                  <p>
                    Products with no “ADD TO CART” button are out of stock. Our
                    website catalogs many of our products, current and
                    discontinued. Not everything you see on our site will be
                    available to order.
                  </p>
                  <p>&nbsp;</p>
                  <h5>Received Incorrect Order</h5>
                  <p>
                    No one’s perfect… but we’ll make right! Contact us{" "}
                    <a href="/contact-us/" target="_self">
                      here
                    </a>{" "}
                    and we can help.
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

export default Page