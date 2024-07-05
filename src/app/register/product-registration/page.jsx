import React from 'react'
import InnerPageSearch from '@/components/InnerPageSearch'
function Page() {
    return (
        <div>
          

                <InnerPageSearch />
                <section className="full_center_section skull_space_xtra pt-5">
  <div className="container-fluid">
    <div className="container max_container">
      <div className="row m-0">
        <div className="col-md-12">
          <div className="skull_title big big_text mb-5 pb-3">
            <h2>Product Registration</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div className="support_content">
            <div className="article-body">
              <p>
                If&nbsp;you see your product below, please use the Skullcandy
                app to register your product. If your product is not listed
                below, it’s not compatible with our app and there’s no need to
                register.
              </p>
              <ul>
                <li>
                  <strong>Crusher Evo</strong>
                </li>
                <li>
                  <strong>Crusher ANC</strong>
                </li>
                <li>
                  <strong>Push Ultra True Wireless Earbuds</strong>
                </li>
                <li>
                  <strong>Indy Evo True Wireless Earbuds</strong>
                </li>
                <li>
                  <strong>Indy Fuel True Wireless Earbuds</strong>
                </li>
                <li>
                  <strong>Indy ANC True Wireless Earbuds</strong>
                </li>
              </ul>
              <p>&nbsp;</p>
              <h4>
                <strong>To download our Skullcandy App:</strong>
              </h4>
              <p>
                <a
                  href="https://apps.apple.com/us/app/skullcandy/id1466689851"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    src="https://info.skullcandy.com/hc/article_attachments/360093860374/app_store_button_en.png"
                    alt="app_store_button_en.png"
                    width={184}
                    height={56}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=app.skullcandy"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    src="https://info.skullcandy.com/hc/article_attachments/360096118173/android-download.png"
                    alt="android-download.png"
                    width={179}
                    height={53}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Page