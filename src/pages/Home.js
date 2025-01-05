import React from "react";
import './Home.css';
import ProductSection from "../components/ProductSection";


function Home() {
    return(
        <>
         {/*Main Banner Area Start*/}
    <div class="main-banner" id="top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <div class="thumb">
                            <div class="inner-content">
                                <h4>Welcome everyone</h4>
                                <span>Feel free to shop what you want</span>
                                <div class="main-border-button">
                                    <a href="/products">Shop Now!</a>
                                </div>
                            </div>
                            <img src="img/women1.png" alt="" class="big"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Women</h4>
                                                <p>Products of women.</p>
                                                <div class="main-border-button">
                                                    <a href="#women">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="img/women2.png" class="small"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Men</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Men</h4>
                                                <p>Products of men</p>
                                                <div class="main-border-button">
                                                    <a href="#men">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="img/men1.png" class="small"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Electronic</h4>
                                            <span>Best Products</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Electronic</h4>
                                                <p>Electronic products</p>
                                                <div class="main-border-button">
                                                    <a href="#electronic">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="img/monitor.png" class="small"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Jewelery</h4>
                                            <span>Best Jewelery</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Jewelery</h4>
                                                <p>Find Jewelery</p>
                                                <div class="main-border-button">
                                                    <a href="#jewelery">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="img/jewelery.png" class="small"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Main Banner Area End*/}

    <div>
      <section id="women">
      <ProductSection title="Women's Latest" category="women's clothing" />

      </section>
      <section id="men">
      <ProductSection title="Men's Latest" category="men's clothing" />
      </section>
      <section id="electronic">
      <ProductSection title="Electronic" category="electronics" />
      </section>
      <section id="jewelery">
      <ProductSection title="Jewelery's Latest" category="jewelery" />
      </section>

    </div>

    {/*Explore Area Starts*/}
    <section class="section" id="explore">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <h2>Explore Our Products</h2>
                        <span>We have many products for you to choose. Feel free to choose the products that you want.</span>
                        <div class="quote">
                            <i class="fa fa-quote-left"></i><p>Find the product that match to your satification.</p>
                        </div>
                        
                        <div class="main-border-button">
                            <a href="/products">Discover More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="leather">
                                    <img src="img/women2.png" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="first-image">
                                    <img src="img/jewelery.png" alt=""/>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Explore Area Ends*/}

    {/*Social Area Starts*/}
    <section class="section" id="social">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading">
                        <h2>Social Media</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row images">
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Fashion</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-01.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>New</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-02.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Brand</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-03.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Makeup</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-04.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Leather</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-05.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>Bag</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="assets/images/instagram-06.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Social Area Ends*/}

    {/*Subscribe Area Starts*/}
    <div class="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div class="row">
                          <div class="col-lg-5">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-5">
                            <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-2">
                            <fieldset>
                              <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li>Store Location:<br/><span>Cambodia</span></li>
                                <li>Phone:<br/><span>010-020-0340</span></li>
                                <li>Office Location:<br/><span>Phnom Penh</span></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>Work Hours:<br/><span>07:30 AM - 9:30 PM Daily</span></li>
                                <li>Email:<br/><span>info@company.com</span></li>
                                <li>Social Media:<br/><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Subscribe Area Ends*/}
        </>
    );
}

export default Home;