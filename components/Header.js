'use client'
import React from 'react'
import $ from 'jquery'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Drawer from "@/components/Drawer";
import { getDataWithQuery, geturl } from "@/utils/api"
import MobileMenu from '@/components/MobileMenu'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { addToCartforGuestafterLogin, getCartData, getWishlist, toggleDrawer } from '@/features/Cart/cartnWishSlice'
import { useRouter } from 'next/navigation'
import useCart from '@/components/hooks/useCart'


function header() {
  const { openCart, isCartOpen, closeCart } = useCart();
  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
    useSelector((state) => state.auth);
  const { cart, wishlist } = useSelector((state) => state.cartWish);
  //   useEffect(() => {

  //     $(".cart_btn").click(function(){
  //       $(".drawer").addClass("active")
  //     })
  //  $(".drawer-close").click(function(){
  //   $(".drawer").removeClass("active")
  //  });

  //  $(".CartDrawer-Checkout").click(function(){

  //   $(".drawer").removeClass("active")
  //  });
  //  $("#cart-btn").click(function(){
  //   $(".drawer").addClass("active")
  // })

  //   }, [])

  /////////////////////////


  const [isVisible, setIsVisible] = useState(false);

  // Function to show the div
  const showDiv = () => {
    setIsVisible(true);
  };

  // Function to hide the div
  const hideDiv = () => {
    setIsVisible(false);
  };


  const [menu, setMenu] = useState();
  const getdata = async () => {
    const response = await getDataWithQuery(`/api/menus?populate[0]=Sub_Menu,Right_Menu_Section&populate[1]=Right_Menu_Section.Image`,
      {
      });
    setMenu(response?.data)
    return response;
  }
  useEffect(() => {
    getdata();
  }, []);






  const [isMenuVisible, setMenuIsVisible] = useState(false);

  const handleShow = () => {
    setMenuIsVisible(!isMenuVisible);
  };
  const handleHide = () => {
    setMenuIsVisible(false);
  };
  //////////////////////////////////





  ///////////////
  const dispatch = useDispatch()
  useEffect(() => {

    if (users?.id) {



      dispatch(getCartData())
      // dispatch(getWishlist())
      const Cart = JSON.parse(localStorage?.getItem('cart'))
      const lineItems = Cart?.map((item) => {
        return {
          "product_id": item?.id ? item?.id : item?.product_id,
          "quantity": item?.quantity,
          "SKU": item?.SKU,
          "name": item?.name,
          "Variations_Color_Name": item?.Variations_Color_Name,
          "Variations_Price": item?.Variations_Price,
          "Variant_Image_url": item?.Variant_Image_url,
          "Sales_price": item?.Sales_price
        }
      })
      // console.log("lineItems "+JSON.stringify(lineItems))

      if (Cart?.length != 0) {
        dispatch(addToCartforGuestafterLogin(lineItems))
      }


    }



  }, [users, isError, isSuccess])
  ///////////////
  const [data, setData] = useState();
  const getdata1 = async () => {
    const response = await getDataWithQuery("/api/home",
      {
        // pagesize: 1000, typeId: blogId
      });
    setData(response?.data)
    //console.log( JSON.stringify(response));
    return response;
  }
  useEffect(() => {
    getdata1();
  }, []);

  const _url = data?.attributes?.Annoucement_Url ? data?.attributes?.Annoucement_Url : "";
  ///////
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsOpen(!isOpen);
  };

  const handlePanelClick = (panel) => {
    setActivePanel(panel);
    
  };

  const handleBodyClick = (e) => {
    if (!e.target.closest('#menu-toggle') && menuOpen) {
      setMenuOpen(false);
      setActivePanel(null);

    }
  };
  ///////




  let k = 0;

  //////
  const router = useRouter();
  const [query, setQuery] = useState('search');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
    // Perform search operation
    // try {
    //   const response = await fetch(`/api/search?q=${query}`);
    //   const data = await response.json();
    //   setSearchResults(data.results);
    // } catch (error) {
    //   console.error('Error fetching search results:', error);
    // }
  };
  ///////


  return (

    <>

      <div className="skull_popup_bg" />
      <div className='annoucement'>
        <Link href={_url} > {data?.attributes?.Annoucement_Heading}
          <i className='fa fa-angle-down pl-2'></i>
        </Link>
      </div>
      <header>
        {isMenuVisible && (
          <div className="mobile-search-blk"  >
            <form onSubmit={handleSearch}>
              {/* <input type="text" className='mobile-input' placeholder='Search' /> */}

              <input
                type="text"
                value={query == "search" ? "" : query}
                onChange={(e) => setQuery(e.target.value)}
                className='mobile-input' placeholder='Search'
              />


              <img src="/images/close.png" alt="" className='mobile-close' onClick={handleSearch} />
              {/* <button type="submit" >Submit</button> */}
            </form>
          </div>
        )}
        <div className="container-fluid top_header">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="header-blk">

                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/images/skullcandy_logo.svg"
                        alt="logo"
                        title="Skullcandy"
                      />
                    </Link>
                  </div>

                  <div className="header-nav">
                    <div className="navigation main_menu">
                      <div className="skull_menu">
                        <ul id="menu-main-menu" className="menu" key={"topmain" + k}>

                          {menu?.map((m, mi) => {
                            k = mi + 1;

                            return (
                              <>



                                {/*  */}
                                <li className="megamenu menu-item-has-children" key={"menu" + mi}>
                                  <Link href={m?.attributes?.Url ? m?.attributes?.Url : "#"} >{m?.attributes?.Title}</Link>

                                  <ul className="sub-menu" key={"submenuui" + mi}>
                                    <li className="menu-item-has-children menu-left-blk" key={"submenuuichild" + mi}>
                                      <Link href={m?.attributes?.Url}>
                                        <h5>{m?.attributes?.Title}</h5>
                                      </Link>
                                      <ul key={"mainmenusubsub" + mi}>

                                        {m?.attributes?.Sub_Menu.map((c, i) => (


                                          <li key={"sub" + mi + i}>
                                            <Link href={c?.Submenu_Url ? c?.Submenu_Url : "#"}>{c?.Submenu_Title} </Link>
                                          </li>

                                        ))}
                                      </ul>
                                    </li>

                                    <li className='menu-right-blk'>
                                      <ul className="menu-img-list">
                                        {m?.attributes?.Right_Menu_Section.map((r, ri) => (


                                          <li key={"r" + mi + ri}>
                                            <Link href={r?.Url ? r?.Url : "#"}>
                                              <img src={geturl(r?.Image)} alt="" />
                                              <h5>{r?.Title}</h5>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                {/*  */}
                              </>)
                          }
                          )}

                          {/* menu li */}



                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className="header-right-blk">
                    <div className="tab_hide">
                      <div className="header-right-menu">
                        <div className="skull_menu">
                          <ul id="menu-right-menu" className="menu">
                            {/* <li className='nav-search'>
                              <input type="search" className='search' />
                              <img src="/images/search.png" alt="" className='search-icon' />
                            </li> */}

                            {/*  */}
                            <li className='nav-search'>
                              <form onSubmit={handleSearch}>
                                <input
                                  type="text"
                                  value={query == "search" ? "" : query}
                                  onChange={(e) => setQuery(e.target.value)}
                                  placeholder=""
                                  className='search'
                                />
                                <img src="/images/search.png" alt="search" className='search-icon' onClick={handleSearch} />
                                {/* <button type="submit" >Search</button> */}
                              </form>
                            </li>
                            {/*  */}

                            <li className="megamenu menu-item-has-children locations_menu mobile_text_menu " key={"mobilemenu"} >
                              <Link href="#">

                                <img src="/images/IN_EN_FLAG.png" /> <span>LOCATION</span>
                              </Link>
                              <ul className="sub-menu">
                                <li className="menu-item-has-children ">
                                  <Link href="#">North America</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Canada</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Mexico</Link>
                                    </li>
                                    <li>
                                      <Link href="#">United States</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item-has-children">
                                  <Link href="#">Europe / Middle East</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">United Kingdom</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Europe (EN)</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children ">
                                  <Link href="#">Asia</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Japan | 日本</Link>
                                    </li>
                                    <li>
                                      <Link href="#">China | 中国</Link>
                                    </li>
                                    <li>
                                      <Link href="#">South Korea | 대한민국</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Taiwan | 臺灣</Link>
                                    </li>
                                    <li>
                                      <Link href="#" aria-current="page">
                                        India
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children">
                                  <Link href="#">South America</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Chile</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Peru</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Other Middle Eastern Countries</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children ">
                                  <Link href="#">Africa</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">South Africa</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item-has-children">
                                  <Link href="#">Pacific</Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="#">Australia</Link>
                                    </li>
                                    <li>
                                      <Link href="#">New Zealand</Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="no_hover mobile_text_menu ">
                              <Link href="/my-account/">
                                {/* <img src="/images/user.png" alt="" /> */}
                                <svg
                                  version="1.1"
                                  id="Layer_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 24 24"
                                  style={{ enableBackground: "new 0 0 24 24" }}
                                  xmlSpace="preserve"
                                >
                                  <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#FFFFFF;}\n" }}
                                  />
                                  <path
                                    className="st0"
                                    d="M12,12c3.3,0,6-2.7,6-6s-2.7-6-6-6S6,2.7,6,6S8.7,12,12,12z M12,15c-4,0-12,2-12,6v3h24v-3C24,17,16,15,12,15z"
                                  />
                                </svg>

                                <span>Account</span>
                              </Link>
                            </li>

                            <li className="no_hover cart_btn header-cart" onClick={() => dispatch(toggleDrawer(true))}>
                              <Link href="#">
                                {/* <img src="/images/store.png" alt="" /> */}
                                <svg
                                  className="icon icon-cart"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    data-name="Icon material-shopping-cart"
                                    d="M6.3,15.8a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,6.3,15.8ZM1.5,3V4.6H3.1l2.88,6.072L4.9,12.632a1.547,1.547,0,0,0-.2.768A1.6,1.6,0,0,0,6.3,15h9.6V13.4H6.636a.2.2,0,0,1-.2-.2l.024-.1.72-1.3h5.96a1.592,1.592,0,0,0,1.4-.824L17.4,5.784a.782.782,0,0,0,.1-.384.8.8,0,0,0-.8-.8H4.868L4.116,3ZM14.3,15.8a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,14.3,15.8Z"
                                    transform="translate(-1.5 -3)"
                                    fill="currentColor"
                                  />
                                </svg>

                                <span className='badges'>{cart?.length ? cart?.length : "0"}</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>





              <div className="col-md-12 tab_header">
                {/* <div className="mobile-search-blk">
                <input type="search" />
                <i className='fa fa-close'></i>
               </div> */}
                <div className="row">
                  <div className="col-md-3 col-3">
                    <div className={`skull_nav_button ${isOpen ? 'open' : ''}`} id="menu-toggle" onClick={toggleMenu}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="col-md-6 col-6 text-center">
                    <div className="logo_box">
                      <Link href="/">
                        <img
                          src="/images/skullcandy_logo.svg"
                          alt="logo"
                          title="Skullcandy"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3 col-3 text-right">
                    <div className="mobile-right-blk">
                      <div className="mobile-search">
                        <img src="/images/search.png" alt="" onClick={handleShow} />
                      </div>
                      <div className='mobile-user'>

                      </div>
                      <div className="tab_cart_btn cart_btn ">
                        <img src="/images/store.png" alt="" className='mobile-store' />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skull_mobile_menu" />
          <div className="menu_bg">
            <svg
              id="skull-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 38"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g transform="translate(-348.000000, -8.000000)" fill="#FEFEFE">
                  <g transform="translate(348.000000, 8.000000)">
                    <g>
                      <path d="M20.6616311,27.1038396 C17.6180284,27.1038396 15.1460028,24.5702667 15.1460028,21.4383393 C15.1460028,18.3100057 17.6180284,15.7746359 20.6616311,15.7746359 C23.7088399,15.7746359 26.1826686,18.3100057 26.1826686,21.4383393 C26.1826686,24.5702667 23.7088399,27.1038396 20.6616311,27.1038396 M13.4493025,31.0281823 C12.8560885,30.3310006 10.4796263,30.2411576 9.54562973,30.5915453 C8.61163318,30.9365425 7.67943972,30.4172499 8.44394654,28.0615661 C9.2048472,25.7112729 9.97115711,24.6637034 9.97115711,24.6637034 C9.97115711,24.6637034 14.9783162,30.068659 15.0630611,30.7676376 C15.1460028,31.4630225 14.0425166,31.7235672 13.4493025,31.0281823 M23.8044032,11.5897484 C22.6161721,8.3661812 30.5064595,0 15.9970576,0 C3.60627718,0 2.44328921,12.2168527 1.9095769,13.1584074 C1.31636287,14.2041801 0.49235434,15.0307358 0.126328667,16.7341593 C-0.210847691,18.3046151 0.126328667,20.0439758 1.14507007,20.0439758 C2.67408372,20.0439758 0.804287549,16.994704 2.67047756,16.994704 C5.04693981,16.994704 7.85073252,20.8310006 8.61163318,23.0087952 C7.3386572,25.2746359 5.55901513,26.7570456 4.28423606,26.1497068 C3.01126008,25.5351806 1.65353923,24.5774541 1.65353923,22.6584074 C1.65353923,21.2550596 0.339092359,21.3017779 0.46711119,23.0932476 C0.638403993,25.5351806 1.82483204,26.9295442 3.52153232,28.2376584 C5.19479254,29.527804 7.3386572,31.9877057 8.18790888,34.0756573 C8.76850133,35.5077549 9.54562973,36.1707963 11.6696605,36.1707963 C13.788282,36.1707963 12.1763266,38 13.6205953,38 C15.0630611,38 14.2156124,35.9911103 15.0630611,35.9911103 C15.9123127,35.9911103 15.061258,37.9119538 16.6768196,37.9119538 C19.1344205,37.9119538 18.0327373,34.8608852 18.7990472,34.336202 C19.561751,33.8151125 30.1674801,28.2340647 29.9979904,21.35209 C29.8285006,14.5581615 24.9926344,14.8151125 23.8044032,11.5897484" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="search_box header_action">
          <div className="form_box">
            <form
              role="search"
              method="get"
              id="searchform"
              className="searchform"
              action="/"
            >
              <input
                type="search"
                placeholder="Search"
                name="s"
                id="s"
                autoComplete="off"
                defaultValue=""
              />
              <input
                type="hidden"
                placeholder="Search"
                name="page"
                id="page"
                defaultValue="head"
              />
            </form>
            <span className="close_btn" />
          </div>
        </div>
        <div className="cart_box header_action ">
          <div className="form_box">
            <form>
              <h4>SHOPPING BAG</h4>
              <p className="cart_empty_msg">Your bag is empty</p>
              <div className="header_cart_box">
                <div id="cart_item_area" className="cart_item_area"></div>
              </div>
              <div className="cart_action">
                <Link href="#" className="theme_btn dark">
                  CHECKOUT
                </Link>
                <Link href="#" className="theme_btn no_effect sml">
                  View Full Bag
                </Link>
              </div>
            </form>
            <span className="close_btn" />
          </div>
        </div>


        {/*  */}
        <div onClick={handleBodyClick} className='mobile-menu'>
          <div className={menuOpen ? 'active' : ''}>
            <nav className="navbar">

              <nav className={`slide-out-menu ${menuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="menu-panels">
                  <div className="primary-menu-panel">
                    <ul>
                      {/*  ////main menu start///// */}
                      {menu?.map((m, mi) => {
                        k = mi + 1;
                        let menu_id = m?.attributes?.Title.replace(/ /g, '_');
                        return (
                          <li>
                            <button type="button" id={menu_id} className="menu-link" onClick={() => handlePanelClick(menu_id)}>
                              {m?.attributes?.Title}
                              <svg className="arrow-right d-sm-ib" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
                                <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
                              </svg>
                            </button>
                          </li>

                        )
                      }
                      )}

                    </ul>
                    {/*  ////main menu end///// */}
                  </div>


                  {/* ///////Submenu///////////// */}
                  {menu?.map((m, mi) => {
                    k = mi + 1;

                    let menu_id = m?.attributes?.Title.replace(/ /g, '_');
                    return (
                      <>
                        {/* //main menu loop */}

                        <div className={`menu-panel ${activePanel == menu_id ? 'is-active' : ''}`} data-menu={menu_id}>
                          <button type="button" className="menu-link menu-header" onClick={() => setActivePanel(null)}>
                            <svg className="arrow-left" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
                              <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
                            </svg>
                            {m?.attributes?.Title}
                          </button>
                          <ul key={"mainmenusubsub" + mi}>
                            {m?.attributes?.Sub_Menu.map((c, i) => {
                              // let menu_id =  title.replace(/ /g, '_');
                              return (
                                //submenu loop 
                                <li key={"sub" + mi + i}><Link href={c?.Submenu_Url ? c?.Submenu_Url : "#"}>{c?.Submenu_Title}</Link></li>

                              )
                            })}
                          </ul>

                          {/* right sub menu start*/}
                          <ul className="menu-img-list">
                            {m?.attributes?.Right_Menu_Section.map((r, ri) => (


                              <li key={"r" + mi + ri}>
                                <Link href={r?.Url ? r?.Url : "#"}>
                                <div className="dpl-img">
                                  <img src={geturl(r?.Image)} alt="" />
                                  </div>
                                  <h5>{r?.Title}</h5>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          {/* right sub menu end*/}
                        </div>
                      </>
                    )
                  }
                  )}
                </div>


                {/* // //////////////////////////////////// */}

              </nav>
            </nav>
          </div>
        </div>
        {/*  */}
      </header>

      <Drawer />

      {/* {isVisible && (
        <div className='mmenu' >
         
          <div className='menu-close' onClick={hideDiv}><i className='fa fa-close' ></i></div>
         <div className="accordion" id="menu-blk">

         {menu?.map((m,mi)=>(<>
  <div className="card" key={mi}>
    <div
      className="card-header collapsed"
      data-toggle="collapse"
      data-target={`#collapse${mi}`}
      aria-expanded="true"
    >
      <span className="title">{m?.attributes?.Title} </span>
 
    </div>
    <div
      id={`collapse${mi}`}
      className="collapse "
      data-parent="#menu-blk"
    >
      <div className="card-body">
         <ul className='menu-blk-list'  >
          
         {  m?.attributes?.Sub_Menu.map((c,i)=>(


<li key={"sub"+mi+i}>
<Link href={c?.Submenu_Url?c?.Submenu_Url:"#"}>{c?.Submenu_Title} </Link>
</li>

))}
         </ul>
      </div>
    </div>
  </div>
  </>))}


</div>



        </div>
      )} */}





    </>


  )
}

export default header