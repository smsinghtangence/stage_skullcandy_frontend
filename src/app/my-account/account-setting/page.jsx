import React from 'react'
import Accountnav from '@/components/Accountnav'
function page() {
  return (
    <>
    <Accountnav/>
    <form
  className="woocommerce-EditAccountForm edit-account"
  action=""
  method="post"
>
  <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
    <label htmlFor="account_first_name">
      First name&nbsp;<span className="required">*</span>
    </label>
    <input
      type="text"
      className="woocommerce-Input woocommerce-Input--text input-text"
      name="account_first_name"
      id="account_first_name"
      autoComplete="given-name"
      defaultValue=""
    />
  </p>
  <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
    <label htmlFor="account_last_name">
      Last name&nbsp;<span className="required">*</span>
    </label>
    <input
      type="text"
      className="woocommerce-Input woocommerce-Input--text input-text"
      name="account_last_name"
      id="account_last_name"
      autoComplete="family-name"
      defaultValue=""
    />
  </p>
  <div className="clear" />
  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
    <label htmlFor="account_display_name">
      Display name&nbsp;<span className="required">*</span>
    </label>
    <input
      type="text"
      className="woocommerce-Input woocommerce-Input--text input-text"
      name="account_display_name"
      id="account_display_name"
      defaultValue="test"
    />{" "}
    <span>
      <em>
        This will be how your name will be displayed in the account section and
        in reviews
      </em>
    </span>
  </p>
  <div className="clear" />
  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
    <label htmlFor="account_email">
      Email address&nbsp;<span className="required">*</span>
    </label>
    <input
      type="email"
      className="woocommerce-Input woocommerce-Input--email input-text"
      name="account_email"
      id="account_email"
      autoComplete="email"
      defaultValue="test@gmail.com"
    />
  </p>
  <fieldset>
    <legend>Password change</legend>
    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
      <label htmlFor="password_current">
        Current password (leave blank to leave unchanged)
      </label>
      <span className="password-input">
        <input
          type="password"
          className="woocommerce-Input woocommerce-Input--password input-text"
          name="password_current"
          id="password_current"
          autoComplete="off"
        />
        <span className="show-password-input" />
      </span>
    </p>
    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
      <label htmlFor="password_1">
        New password (leave blank to leave unchanged)
      </label>
      <span className="password-input">
        <input
          type="password"
          className="woocommerce-Input woocommerce-Input--password input-text"
          name="password_1"
          id="password_1"
          autoComplete="off"
        />
        <span className="show-password-input" />
      </span>
    </p>
    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
      <label htmlFor="password_2">Confirm new password</label>
      <span className="password-input">
        <input
          type="password"
          className="woocommerce-Input woocommerce-Input--password input-text"
          name="password_2"
          id="password_2"
          autoComplete="off"
        />
        <span className="show-password-input" />
      </span>
    </p>
  </fieldset>
  <div className="clear" />
  <p>
    <input
      type="hidden"
      id="save-account-details-nonce"
      name="save-account-details-nonce"
      defaultValue="f931737a43"
    />
    <input
      type="hidden"
      name="_wp_http_referer"
      defaultValue="/be/sign-in/edit-account/"
    />{" "}
    <button
      type="submit"
      className="woocommerce-Button button"
      name="save_account_details"
      value="Save changes"
    >
      Save changes
    </button>
    <input type="hidden" name="action" defaultValue="save_account_details" />
  </p>
</form>

    </>
  )
}

export default page