import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <>
  <section className="full_center_section title_top_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="skull_title big text-center">
            <h2>CONTACT US</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section light_grey_bg skull_space">
    <div className="container max_container">
      <div className="row">
        <div className="col-md-4">
          <div className="cnt_page_list">
            <ul>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <a href="/contact-us">CONTACT US</a>
              </li>
              <li>
                <a href="/warranty/warranty-policy/">WARRANTY</a>
              </li>
              <li>
                <a href="/legal/privacy-policy/">PRIVACY POLICY</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="contact_box">
            <h5>CONTACT US</h5>
            <ul>
              <li>
                {" "}
                <a href="mailto:customercare@brandeyes.in">
                  <b>customercare@brandeyes.in</b>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <b>
                    01142700400
                    <br />
                    Monday – Friday
                    <br />
                    10:00am to 4:00pm
                  </b>
                </a>
              </li>
              <li>
                {" "}
                <a href=".#">
                  <b>FAQ</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default page