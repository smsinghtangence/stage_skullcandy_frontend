'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import $ from 'jquery'
function page() {
    useEffect(() => {
      $(".get-started").click(function(){
       
        $("#intro").css("display", "none");
        $("#step-1").css("display", "block");
        $(".stepbar1").addClass("active")
      });
     
       $("#step-1 .product-guide-content").click(function(){
        $("#step-1").css("display", "none");
        $("#step-2").css("display", "block");
        $(".stepbar2").addClass("active")
       });

       $("#step-2 .product-guide-content").click(function(){
        $("#step-2").css("display", "none");
        $("#result").css("display", "block");
        $(".result").addClass("active")
       });

    }, []);
    
    
  return (
    <>
      <section className="product-guide py-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="step-count-bar">
                        <li className='active'>
                            <div className="circle"></div>
                            <p>Intro</p>
                        </li>
                        <li className='stepbar1'>
                            <div className="circle"></div>
                            <p>Step 1</p>
                        </li>
                        <li  className='stepbar2'>
                            <div className="circle"></div>
                            <p>Step 2</p>
                        </li>
                        <li className='result'>
                            <div className="circle"></div>
                            <p>Result</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="intro">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Product Guide</h2>
                        <p>So many choices! Don’t worry — we got you. Just answer a couple not-very-personal questions, and we’ll help you pick the perfect earbud, headphone or speaker for you.</p>
                        <Link href="#" className="blue-btn get-started">Get Started</Link>
                    </div>
                    <div className="col-lg-6">
                        <img src="/images/product-guide.webp" alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>

            <div id="step-1">
                <div className="row">
                    <div className="col-lg-6">
                        <p>STEP 1:</p>
                        <h2>HOW DO YOU LISTEN?</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-guide-card-wrapper">

                            <div className="product-guide-content">
                                <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                <div className="product-guide-title">Feel the Bass</div>
                            </div>

                            <div className="product-guide-content">
                                <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                <div className="product-guide-title">Feel the Bass</div>
                            </div>

                            <div className="product-guide-content">
                                <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                <div className="product-guide-title">Feel the Bass</div>
                            </div>

                            <div className="product-guide-content">
                                <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                <div className="product-guide-title">Feel the Bass</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="step-2">
                <div className="row">
                    <div className="col-lg-6">
                        <p>STEP 2:</p>
                        <h2>WHAT IS MOST IMPORTANT TO YOU?</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-guide-card-wrapper column-2">

                            <div className="product-guide-content">
                                <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                <div className="product-guide-title">Feel the Bass</div>
                            </div>

                            <div className="product-guide-content">
                                <img src="https://www.skullcandy.com/cdn/shop/files/Feel_The_Bass.png" alt="" />
                                <div className="product-guide-title">Feel the Bass</div>
                            </div>

                         

                        </div>
                    </div>
                </div>
            </div>

            <div id="result">
                <div className="text-center">
                    <p>RESULTS (2):</p>
                    <h2>CHECK OUT OUR SUGGESTIONS:</h2>
                </div>
                <div className="row">
                    
                </div>
            </div>


        </div>
      </section>
    </>
  )
}

export default page