import ProductList from '@/components/ProductList'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <div className="breacrumb-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ol className="breadcrumbs">
                <li>
                  <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.867 10">
                    <path id="Path_325" data-name="Path 325" d="M6.243,3.05C5.931,2.2,8,0,4.2,0,.946,0,.641,3.215.5,3.463a2.828,2.828,0,0,0-.467.94c-.089.413,0,.872.267.872.4,0-.089-.8.4-.8.623,0,1.358,1.009,1.558,1.582-.334.6-.8.986-1.135.827a1.016,1.016,0,0,1-.69-.918c0-.369-.344-.357-.311.114a1.753,1.753,0,0,0,.8,1.354A4.342,4.342,0,0,1,2.148,8.967c.152.377.356.551.913.551s.133.482.512.482.156-.529.378-.529,0,.505.423.505c.645,0,.356-.8.557-.941S7.912,7.43,7.867,5.619C7.823,3.831,6.554,3.9,6.243,3.05ZM3.527,8.165A1.3,1.3,0,0,0,2.5,8.05c-.245.091-.489-.046-.289-.666a3.442,3.442,0,0,1,.4-.894A14.466,14.466,0,0,1,3.95,8.1C3.972,8.279,3.683,8.348,3.527,8.165ZM5.419,7.133A1.491,1.491,0,1,1,6.866,5.641,1.469,1.469,0,0,1,5.419,7.133Z" transform="translate(0)"></path>
                  </svg></Link>
                </li>
                <li>Music with a mission </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="triple-threat-video">
       

        <video autoPlay loop muted playsInline preload="none" poster="//www.skullcandy.com/cdn/shop/files/preview_images/cc155adece594a3cb737fc730cad4d41.thumbnail.0000000000_1500x.jpg?v=1709836706" className="video-banner-desktop">
            <source id="mp4" src="https://cdn.shopify.com/videos/c/vp/9a976b010e9542e8885edec22c3ba3dc/9a976b010e9542e8885edec22c3ba3dc.HD-1080p-7.2Mbps-25887550.mp4" data-src="VideoDrop" type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>

        <div className="ttv-video-content">
          <p>LIMITED EDITION COLORWAYS</p>
          <h1>TRIPLE THREAT</h1>
          <h2>Get in da clerb now.</h2>
          <div className="ttv-btn-blk">
            <a href="#" className='blue-btn'>Watch The video</a>
            <a href="#" className='white-btn'>SHOP THE COLLECTION</a>
          </div>
        </div>
      </section>


      <section className="triple-threat-banner">
        <img src="https://www.skullcandy.com/cdn/shop/files/2_collection_TT_story.png" alt="" className='img-fluid' />
        <div className="ttb-content">
        <div className="container">
              <div className="ttb-banner-content-right">
                <h2>THE TRIPLE THREAT COLLECTION</h2>
                <p>Our latest limited-edition collection inspired by fun outside and those who ride.</p>
              </div>            
          </div>
        </div>
      </section>

      <section className="triple-threat-banner ">
        <img src="https://www.skullcandy.com/cdn/shop/files/3_collection_TT_story.png" alt="" className='img-fluid' />
        <div className="container">          
              <div className="ttb-banner-content-left">
                <h2>BORN OF ACTION</h2>
                <p>Skullcandy exploded onto the scene over two decades ago, and we've been bringing the party ever since. To celebrate, we've unleashed this limited-edition collection. You won't find Triple Threat just anywhere, though – you can only get it here or at a select boardsports lifestyle store near you.</p>
              </div>           
        </div>
      </section>

      <section className="triple-threat-col-6-blk py-60" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ttc-content-blk">
                <small>TRIPLE THREAT</small>
                <h2>HESH<sup >®</sup> EVO</h2>
                <p>Hesh Evo features clear, rich sound that rivals the most expensive headphones out there without blowing up your budget.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ttc-img-blk">
                <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_lifestyle_1500x.png" alt="" className='img-fluid' />

                <div className="ttc-img-hover">
                  <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_hover_3528a9d1-b6e4-41bf-8762-8d1ff37ba9f9_1500x.png" alt="" />
                  <Link href="#" className='ttc-add-to-cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <rect
                        id="Rectangle_2502"
                        data-name="Rectangle 2502"
                        width={24}
                        height={24}
                        fill="none"
                      />
                      <g
                        id="Icon_material-add-shopping-cart"
                        data-name="Icon material-add-shopping-cart"
                        transform="translate(4 3.333)"
                      >
                        <path
                          id="Icon_material-add-shopping-cart-2"
                          data-name="Icon material-add-shopping-cart"
                          d="M9.437,7.849h1.587V5.468H13.4V3.881H11.024V1.5H9.437V3.881H7.056V5.468H9.437ZM6.262,14.992a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,6.262,14.992Zm7.937,0a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,14.2,14.992ZM6.4,12.413l.024-.1.714-1.294h5.913a1.58,1.58,0,0,0,1.389-.817L17.5,4.643l-1.381-.762h-.008l-.873,1.587-2.19,3.968H7.476l-.1-.214L5.6,5.468,4.841,3.881,4.1,2.294H1.5V3.881H3.087L5.944,9.9,4.873,11.849a1.534,1.534,0,0,0-.2.762A1.592,1.592,0,0,0,6.262,14.2h9.524V12.611H6.6A.2.2,0,0,1,6.4,12.413Z"
                          transform="translate(-1.5 -1.5)"
                        />
                      </g>
                    </svg>
                    Add to cart
                  </Link>
                </div>

             
              </div>
              <Link href="#" className='ttc-link'>Shop Limited Edition Hesh® Evo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="triple-threat-col-6-blk py-60" >
        <div className="container">
          <div className="row">        

            <div className="col-lg-6">
              <div className="ttc-img-blk">
                <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_lifestyle_1500x.png" alt="" className='img-fluid' />

                <div className="ttc-img-hover">
                  <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_hover_3528a9d1-b6e4-41bf-8762-8d1ff37ba9f9_1500x.png" alt="" />
                  <Link href="#" className='ttc-add-to-cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <rect
                        id="Rectangle_2502"
                        data-name="Rectangle 2502"
                        width={24}
                        height={24}
                        fill="none"
                      />
                      <g
                        id="Icon_material-add-shopping-cart"
                        data-name="Icon material-add-shopping-cart"
                        transform="translate(4 3.333)"
                      >
                        <path
                          id="Icon_material-add-shopping-cart-2"
                          data-name="Icon material-add-shopping-cart"
                          d="M9.437,7.849h1.587V5.468H13.4V3.881H11.024V1.5H9.437V3.881H7.056V5.468H9.437ZM6.262,14.992a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,6.262,14.992Zm7.937,0a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,14.2,14.992ZM6.4,12.413l.024-.1.714-1.294h5.913a1.58,1.58,0,0,0,1.389-.817L17.5,4.643l-1.381-.762h-.008l-.873,1.587-2.19,3.968H7.476l-.1-.214L5.6,5.468,4.841,3.881,4.1,2.294H1.5V3.881H3.087L5.944,9.9,4.873,11.849a1.534,1.534,0,0,0-.2.762A1.592,1.592,0,0,0,6.262,14.2h9.524V12.611H6.6A.2.2,0,0,1,6.4,12.413Z"
                          transform="translate(-1.5 -1.5)"
                        />
                      </g>
                    </svg>
                    Add to cart
                  </Link>
                </div>

             
              </div>
              <Link href="#" className='ttc-link'>Shop Limited Edition Hesh® Evo</Link>
            </div>

            <div className="col-lg-6">
              <div className="ttc-content-blk">
                <small>TRIPLE THREAT</small>
                <h2>HESH<sup >®</sup> EVO</h2>
                <p>Hesh Evo features clear, rich sound that rivals the most expensive headphones out there without blowing up your budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="triple-threat-col-6-blk py-60" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ttc-content-blk">
                <small>TRIPLE THREAT</small>
                <h2>HESH<sup >®</sup> EVO</h2>
                <p>Hesh Evo features clear, rich sound that rivals the most expensive headphones out there without blowing up your budget.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ttc-img-blk">
                <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_lifestyle_1500x.png" alt="" className='img-fluid' />

                <div className="ttc-img-hover">
                  <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_hover_3528a9d1-b6e4-41bf-8762-8d1ff37ba9f9_1500x.png" alt="" />
                  <Link href="#" className='ttc-add-to-cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <rect
                        id="Rectangle_2502"
                        data-name="Rectangle 2502"
                        width={24}
                        height={24}
                        fill="none"
                      />
                      <g
                        id="Icon_material-add-shopping-cart"
                        data-name="Icon material-add-shopping-cart"
                        transform="translate(4 3.333)"
                      >
                        <path
                          id="Icon_material-add-shopping-cart-2"
                          data-name="Icon material-add-shopping-cart"
                          d="M9.437,7.849h1.587V5.468H13.4V3.881H11.024V1.5H9.437V3.881H7.056V5.468H9.437ZM6.262,14.992a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,6.262,14.992Zm7.937,0a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,14.2,14.992ZM6.4,12.413l.024-.1.714-1.294h5.913a1.58,1.58,0,0,0,1.389-.817L17.5,4.643l-1.381-.762h-.008l-.873,1.587-2.19,3.968H7.476l-.1-.214L5.6,5.468,4.841,3.881,4.1,2.294H1.5V3.881H3.087L5.944,9.9,4.873,11.849a1.534,1.534,0,0,0-.2.762A1.592,1.592,0,0,0,6.262,14.2h9.524V12.611H6.6A.2.2,0,0,1,6.4,12.413Z"
                          transform="translate(-1.5 -1.5)"
                        />
                      </g>
                    </svg>
                    Add to cart
                  </Link>
                </div>

             
              </div>
              <Link href="#" className='ttc-link'>Shop Limited Edition Hesh® Evo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="triple-threat-col-6-blk py-60" >
        <div className="container">
          <div className="row">        

            <div className="col-lg-6">
              <div className="ttc-img-blk">
                <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_lifestyle_1500x.png" alt="" className='img-fluid' />

                <div className="ttc-img-hover">
                  <img src="https://www.skullcandy.com/cdn/shop/files/4_collection_TT_hesh_hover_3528a9d1-b6e4-41bf-8762-8d1ff37ba9f9_1500x.png" alt="" />
                  <Link href="#" className='ttc-add-to-cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <rect
                        id="Rectangle_2502"
                        data-name="Rectangle 2502"
                        width={24}
                        height={24}
                        fill="none"
                      />
                      <g
                        id="Icon_material-add-shopping-cart"
                        data-name="Icon material-add-shopping-cart"
                        transform="translate(4 3.333)"
                      >
                        <path
                          id="Icon_material-add-shopping-cart-2"
                          data-name="Icon material-add-shopping-cart"
                          d="M9.437,7.849h1.587V5.468H13.4V3.881H11.024V1.5H9.437V3.881H7.056V5.468H9.437ZM6.262,14.992a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,6.262,14.992Zm7.937,0a1.587,1.587,0,1,0,1.587,1.587A1.585,1.585,0,0,0,14.2,14.992ZM6.4,12.413l.024-.1.714-1.294h5.913a1.58,1.58,0,0,0,1.389-.817L17.5,4.643l-1.381-.762h-.008l-.873,1.587-2.19,3.968H7.476l-.1-.214L5.6,5.468,4.841,3.881,4.1,2.294H1.5V3.881H3.087L5.944,9.9,4.873,11.849a1.534,1.534,0,0,0-.2.762A1.592,1.592,0,0,0,6.262,14.2h9.524V12.611H6.6A.2.2,0,0,1,6.4,12.413Z"
                          transform="translate(-1.5 -1.5)"
                        />
                      </g>
                    </svg>
                    Add to cart
                  </Link>
                </div>

             
              </div>
              <Link href="#" className='ttc-link'>Shop Limited Edition Hesh® Evo</Link>
            </div>

            <div className="col-lg-6">
              <div className="ttc-content-blk">
                <small>TRIPLE THREAT</small>
                <h2>HESH<sup >®</sup> EVO</h2>
                <p>Hesh Evo features clear, rich sound that rivals the most expensive headphones out there without blowing up your budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    


      <section className="shop-triple-threat py-60">
        <div className="container">
          <h2>SHOP TRIPLE THREAT</h2>
          <div className="row">
            <div className="col-lg-3">
              <ProductList/>
            </div>
            <div className="col-lg-3">
              <ProductList/>
            </div>
            <div className="col-lg-3">
              <ProductList/>
            </div>
            <div className="col-lg-3">
              <ProductList/>
            </div>
            <div className="col-lg-3">
              <ProductList/>
            </div>
            <div className="col-lg-3">
              <ProductList/>
            </div> <div className="col-lg-3">
              <ProductList/>
            </div>
            <div className="col-lg-3">
              <ProductList/>
            </div>
            <div className="col-lg-3">
              <ProductList/>
            </div>
           
          
          </div>
        </div>
      </section>

    </>
  )
}

export default page