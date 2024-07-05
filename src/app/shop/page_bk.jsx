'use client'
import React from 'react'
import Link from 'next/link'
import ProductList from '@/components/ProductList'
import Filter from '@/components/Filter'
import { useState } from 'react'
 
// import MobileFilter from '@/components/MobileFilter'
 
 
function Page() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
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
                <li>
                  Headphones
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="category-list-blk">
        <div className="container ">
          <h2 className='cat-heading'>Headphones</h2>
         
        </div>
      </section>

      <section className="filter-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-row">

                <div className="filter btn" onClick={handleToggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" className="filter-icon">
                    <path id="Icon_awesome-filter" data-name="Icon awesome-filter" d="M12.39,0H.61A.61.61,0,0,0,.179,1.04l4.7,4.7v5.232a.609.609,0,0,0,.26.5l2.031,1.421a.61.61,0,0,0,.959-.5V5.737l4.7-4.7A.61.61,0,0,0,12.39,0Z" transform="translate(0)"></path>
                  </svg>
                  Filters
                </div>

                <div className="quick-filter-wrapper">
                  <ul className='quick-filter-link'>
                    <li><a href="#">On Ear</a></li>
                    <li><a href="#">Over Ear</a></li>
                    <li><a href="#">Kids</a></li>
                  </ul>
                </div>

                <div className="feature-select">
                  <div className="feature-blk">
                    <span>Sort by: </span>
                    <select name="" id="" className="fs-select-contaier">
                      <option value="Featured">Featured</option>
                      <option value="Best selling">Best selling</option>
                      <option value="Price, low to high">Price, low to high</option>
                      <option value="Price, high to low">Price, high to low</option>
                    </select>
                  </div>
                </div>

              </div>


              <div className="mobile-filter-sort">
                <span className="mfs-btn">Filter and sort</span>
              </div>

              <div className="mobile-filter-blk">
                {/* <MobileFilter /> */}
              </div>


              <div className={isActive ? "filter-product-blk " : "filter-product-blk active"}>
                <div className="filter-left">
                  <Filter />
                </div>
                <div className="product-right">
                
                <ProductList />
                 

                 

                  {/* product */}
                  <div className="pr-list">
                    <Link href="#">

                      <div className="collection-add-card-image">
                        <img src="https://www.skullcandy.com/cdn/shop/files/Merch_Tile_TT_1x2_headphones.png?format=pjpg&v=1709654885&width=1500" alt="" />
                        <div className="cadi-content">
                          <h4>EXPLORE TRIPLE THREAT</h4>
                        </div>

                      </div>
                    </Link>
                  </div>
                  {/* product */}

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