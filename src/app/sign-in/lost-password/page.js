import React from 'react'

function page() {
  return (
    <>
  <section className="title_section">
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>RESET PASSWORD</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="container max_container pb-3">
        <p />
        <div className="woocommerce">
          <div className="woocommerce-notices-wrapper" />
          <form
            method="post"
            className="woocommerce-ResetPassword lost_reset_password"
          >
            <p>
              Lost your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </p>
            <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
              <label htmlFor="user_login">Username or email</label>
              <input
                className="woocommerce-Input woocommerce-Input--text input-text"
                type="text"
                name="user_login"
                id="user_login"
                autoComplete="username"
              />
            </p>
            <div className="clear" />
            <p className="woocommerce-form-row form-row">
              <input
                type="hidden"
                name="wc_reset_password"
                defaultValue="true"
              />
              <button
                type="submit"
                className="woocommerce-Button button"
                value="Reset password"
              >
                Reset password
              </button>
            </p>
            <input
              type="hidden"
              id="woocommerce-lost-password-nonce"
              name="woocommerce-lost-password-nonce"
              defaultValue="0604a11074"
            />
            <input
              type="hidden"
              name="_wp_http_referer"
              defaultValue="/sign-in/lost-password/"
            />
          </form>
        </div>
        <br />
        {/* /wp:shortcode <br /> [erforms_account_verification]  */}
        <p />
       
      </div>
    </div>
  </section>
</>

  )
}

export default page