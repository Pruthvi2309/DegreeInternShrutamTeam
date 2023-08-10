
import React, { Component } from 'react'
import Logo from './assets/Logo.png';
import './Index.css';
import Kids from './Kids';
import {Link} from 'react-router-dom'

export default function Index() {
    return (
        <div>


            <section id="hero">
                <div>
                    <h4>Trade-in-offer</h4>
                    <h2>Super value deals</h2>
                    <h1> On all products </h1>
                    <p>Save more with Coupons & up to 70% off!</p>
                    <button>Shop Now</button>
                </div>
            </section>

            <section id="feature" className="section.p1">
                <div className="fe-box">
                    <img src="Image/F4.png" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="Image/F2.png" />
                    <h6>Online Payment</h6>
                </div>
                <div className="fe-box">
                    <img src="Image/F3.png" />
                    <h6>Save money</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="/Image/ab.jpeg" />
                        <div className="des">
                            <span>zara</span>
                            <h5>Animated T-shirts</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>299</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/a4.jpeg" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Jeans</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>699</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/a3.jpeg" />
                        <div className="des">
                            <span>zara</span>
                            <h5>Kurti</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>499</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/a6.jpeg" />
                        <div className="des">
                            <span>XYZ Designer</span>
                            <h5>Crop Top</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>999</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/m1.jpeg" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>shirts</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>799</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/m2.jpeg" />
                        <div className="des">
                            <span>adidas</span>
                            <h5>Formal Pant</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>999</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/m3.jpeg" />
                        <div className="des">
                            <span>ABC Designer</span>
                            <h5>Traditional</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>1499</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/m4.jpeg" />
                        <div className="des">
                            <span>Raymond</span>
                            <h5>Blazzer</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>2999</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Services</h4>
                <h2>Up to <span>70% Off</span> for All t-Shirts & Other Garments</h2>
                <button className="normal">Explore More</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="/Image/n1.webp" />
                        <div className="des">
                            <span>zara</span>
                            <h5>One Piece</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>299</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/n2.jpg" />
                        <div className="des">
                            <span>H&M</span>
                            <h5>Midi Dress</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>699</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/n3.jpg" />
                        <div className="des">
                            <span>zara</span>
                            <h5>Shrug set</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>499</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/n4.webp" />
                        <div className="des">
                            <span>XYZ Designer</span>
                            <h5>Crop Top</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>999</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/n5.jpg" />
                        <div className="des">
                            <span>manyavar</span>
                            <h5>Formal</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>1499</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/n6.webp" />
                        <div className="des">
                            <span>Zudio</span>
                            <h5>Hoodie</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>999</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/n7.jpg" />
                        <div className="des">
                            <span>ABC Designer</span>
                            <h5>Blazzer</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>4499</h4>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/Image/n8.webp" />
                        <div className="des">
                            <span>Raymond</span>
                            <h5>Traditional</h5>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <h4>2999</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classNameic dress in on sale at Innobrain</span>
                    <button className="white">Learn More</button>
                </div>

                <div className="banner-box banner-box2">
                    <h4>spring/Summer</h4>
                    <h2>upcoming season</h2>
                    <span>The best classNameic dress in on sale at Innobrain</span>
                    <button className="white">Collection</button>
                </div>


            </section>

            <section id="banner3">
                <div className="banner-box">

                    <h2>SEASON SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>

                </div>

                <div className="banner-box banner-box2">

                    <h2>SEASON SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>

                </div>

                <div className="banner-box banner-box3">

                    <h2>SEASON SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>

                </div>
            </section>

            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h4>Sign up For Newsletters</h4>
                    <p> Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address"></input>
                    <button className="normal">Sign Up</button>
                </div>
            </section>

            {/* <footer className="section-p1">
                <div className="col">
                    <img className="logo" src={Logo}></img>
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> 562 Mai Mandir Road, Street 33, San Francisco</p>
                    <p><strong>Hours:</strong> 10:00 - 18:00 Mon - Sat</p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16">
                                <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>Secured Payment Gateways</p>
                    <img src="/Image/pay.png" />
                </div>

            </footer> */}
        </div>
    )
}
