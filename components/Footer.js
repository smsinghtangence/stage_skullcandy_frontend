'use client'
import Link from 'next/link'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Footer() {


  return (
    <>
 <ToastContainer />
      <footer className="footer ">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-block  ">
              <div className="footer-block__details-content">
                <div className="footer-block__image-wrapper" >
                  <img srcSet="//www.skullcandy.com/cdn/shop/files/Group_3992.svg?v=1709069048&width=160, //www.skullcandy.com/cdn/shop/files/Group_3992.svg?v=1709069048&width=320 2x" src="//www.skullcandy.com/cdn/shop/files/Group_3992.svg?v=1709069048&width=760" alt="//www.skullcandy.com/cdn/shop/files/Group_3992" loading="lazy" width={175} height={32} />
                </div>
                <ul className="list-unstyled list-social footer__list-social" role="list"><li className="list-social__item">
                  <a target="_blank" href="https://www.tiktok.com/@skullcandy" className="link list-social__link" aria-label="https://www.tiktok.com/@skullcandy"><svg className="icon icon-tiktok" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={256} height={256} viewBox="0 0 256 256" xmlSpace="preserve">
                    <defs>
                    </defs>
                    <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                      <path fill="currentColor" d="M 84.494 22.535 c -5.144 0 -9.891 -1.704 -13.702 -4.579 c -4.371 -3.296 -7.512 -8.13 -8.621 -13.702 C 61.895 2.877 61.748 1.456 61.733 0 H 47.038 v 40.154 l -0.018 21.994 c 0 5.88 -3.829 10.866 -9.137 12.619 c -1.54 0.509 -3.204 0.75 -4.937 0.655 c -2.211 -0.121 -4.283 -0.789 -6.084 -1.866 c -3.833 -2.292 -6.431 -6.451 -6.502 -11.208 c -0.111 -7.435 5.9 -13.496 13.329 -13.496 c 1.467 0 2.875 0.239 4.194 0.674 V 38.552 v -3.945 c -1.391 -0.206 -2.806 -0.313 -4.238 -0.313 c -8.132 0 -15.737 3.38 -21.174 9.47 c -4.109 4.602 -6.574 10.473 -6.954 16.63 c -0.498 8.088 2.461 15.776 8.201 21.449 c 0.843 0.833 1.729 1.606 2.655 2.319 C 21.294 87.947 27.31 90 33.646 90 c 1.431 0 2.847 -0.106 4.238 -0.312 c 5.919 -0.877 11.38 -3.586 15.69 -7.847 c 5.296 -5.234 8.222 -12.183 8.253 -19.579 l -0.076 -32.844 c 2.526 1.949 5.289 3.562 8.253 4.813 c 4.611 1.945 9.5 2.931 14.531 2.93 V 26.491 v -3.959 C 84.539 22.535 84.497 22.535 84.494 22.535 L 84.494 22.535 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    </g>
                  </svg>
                    <span className="visually-hidden">TikTok</span>
                  </a>
                </li><li className="list-social__item">
                    <a target="_blank" href="https://www.instagram.com/skullcandy" className="link list-social__link" aria-label="https://www.instagram.com/skullcandy"><svg aria-hidden="true" focusable="false" className="icon icon-instagram" viewBox="0 0 18 18">
                      <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z" />
                      <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
                      </path></svg>
                      <span className="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li className="list-social__item">
                    <a target="_blank" href="https://www.youtube.com/@Skullcandy" className="link list-social__link" aria-label="https://www.youtube.com/@Skullcandy"><svg aria-hidden="true" focusable="false" className="icon icon-youtube" viewBox="0 0 100 70">
                      <path d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z" fill="currentColor">
                      </path></svg>
                      <span className="visually-hidden">YouTube</span>
                    </a>
                  </li>
                  <li className="list-social__item">
                    <a target="_blank" href="https://www.facebook.com/skullcandy" className="link list-social__link" aria-label="https://www.facebook.com/skullcandy"><svg className="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={256} height={256} viewBox="0 0 256 256" xmlSpace="preserve">
                      <defs>
                      </defs>
                      <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path fill="currentColor" d="M 51.991 90 V 49.008 h 13.781 l 2.12 -16.049 H 51.991 V 22.739 c 0 -4.632 1.293 -7.791 7.94 -7.791 h 8.417 V 0.637 C 64.25 0.196 60.13 -0.017 56.009 0.001 c -12.212 0 -20.576 7.42 -20.576 21.148 v 11.809 H 21.652 v 16.049 h 13.781 V 90 H 51.991 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                      </g>
                    </svg>
                      <span className="visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li className="list-social__item">
                    <a target="_blank" href="https://twitter.com/skullcandy" className="link list-social__link" aria-label="https://twitter.com/skullcandy">
                      <svg className="icon icon-twitter" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xmlSpace="preserve">
                        <defs>
                        </defs>
                        <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                          <path fill="currentColor" d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        </g>
                      </svg>
                      <span className="visually-hidden">Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-block grid__item  footer-block--menu">
              <ul className="footer-block__details-content list-unstyled">
                <li>
                  <Link href="/support" className="link link--text list-menu__item list-menu__item--link" >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/support/product-help" className="link link--text list-menu__item list-menu__item--link" >
                    Product Support
                  </Link>
                </li>
                <li>
                  <Link href="/support/warranty" className="link link--text list-menu__item list-menu__item--link" >
                    Warranty
                  </Link>
                </li><li>
                  <a href="/orderlookup" className="link link--text list-menu__item list-menu__item--link">
                    Order Tracking
                  </a>
                </li></ul></div>
                <div className="footer-block grid__item  footer-block--menu"><ul className="footer-block__details-content list-unstyled"><li>
                  <a href="/pages/join-us" className="link link--text list-menu__item list-menu__item--link" aria-label="/pages/join-us">
                    About
                  </a>
                </li><li>
                    <a href="/pages/music-with-a-mission" className="link link--text list-menu__item list-menu__item--link" aria-label="/pages/music-with-a-mission">
                      Music with a Mission
                    </a>
                  </li><li>
                    <a href="/pages/join-us" className="link link--text list-menu__item list-menu__item--link" aria-label="/pages/join-us">
                      Join Us
                    </a>
                  </li><li>
                    <a href="/pages/press-releases" className="link link--text list-menu__item list-menu__item--link" aria-label="/press-releases">
                      Press Releases
                    </a>
                  </li><li>
                    <a href="/contact-us" className="link link--text list-menu__item list-menu__item--link" >
                      Contact Us
                    </a>
                  </li>
                  </ul>
                  </div>
                  <div className="footer-block grid__item footer-block--newsletter ">
              <div className="footer-block__newsletter">
                <p className="footer-block__heading inline-richtext">HEAR IT FIRST</p>
                <form method="post" action="/contact#ContactFooter" id="ContactFooter" acceptCharset="UTF-8" className="footer__newsletter newsletter-form">
                  <input type="hidden" name="form_type" defaultValue="customer" /><input type="hidden" name="utf8"  />
                  <input type="hidden" name="contact[tags]" defaultValue="newsletter" />
                <div className="newsletter-form__field-wrapper">
                  <div className="field">
                    <input id="NewsletterForm--footer" type="email" name="contact[email]" className="field__input"  aria-required="true" autoCorrect="off" autoCapitalize="none" autoComplete="email" required />
                    <label className="field__label" htmlFor="NewsletterForm--footer">
                      Email Address
                    </label>
                    <button type="submit" className="newsletter-form__button field__button" name="commit" id="Subscribe" aria-label="Subscribe">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient footer__content-bottom">
          <div className="page-width">
            <div className="footer_bottom_grid">
              <div className="footer__content-bottom-wrapper  footer__content-bottom-wrapper--center">
              </div>
              <div className="footer__content-bottom-wrapper footer__copyright-center">
                <div className="copyright__content-wrapper footer__copyright caption" >
                  <small className="copyright__content">© 2024, <a href="/" title aria-label="/">Skullcandy</a></small>
                  <div className="footer__copyright caption">
                    <ul className="policies list-unstyled"><li>
                      <small className="copyright__content"><Link href="/legal/privacy-policy" >Privacy Policy</Link></small>
                    </li><li>
                        <small className="copyright__content"><Link href="/legal/terms-of-use" >Terms of Use</Link></small>
                      </li></ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer