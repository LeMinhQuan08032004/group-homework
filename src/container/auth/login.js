// File: Login.js

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import './prettyPhoto.css';





const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Đoạn mã xử lý đăng nhập ở đây
    console.log('Đăng nhập với:', username, password);
  };

  return (
    <body >
    <header id="header">
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li><a href=""><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                  <li><a href=""><i className="fa fa-envelope"></i> info@domain.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li><a href=""><i className="fa fa-facebook"></i></a></li>
                  <li><a href=""><i className="fa fa-twitter"></i></a></li>
                  <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                  <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                  <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
              </div>
              <div className="btn-group pull-right">
                <div className="btn-group">
                  <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                    USA
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="">Canada</a></li>
                    <li><a href="">UK</a></li>
                  </ul>
                </div>
                
                <div className="btn-group">
                  <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                    DOLLAR
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="">Canadian Dollar</a></li>
                    <li><a href="">Pound</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                  <li><a href=""><i className="fa fa-user"></i> Account</a></li>
                  <li><a href=""><i className="fa fa-star"></i> Wishlist</a></li>
                  <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li>
                  <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                  <li><a href="login.html" className="active"><i className="fa fa-lock"></i> Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li><a href="index.html">Home</a></li>
                  <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                                      <ul role="menu" className="sub-menu">
                                          <li><a href="shop.html">Products</a></li>
                      <li><a href="product-details.html">Product Details</a></li> 
                      <li><a href="checkout.html">Checkout</a></li> 
                      <li><a href="cart.html">Cart</a></li> 
                      <li><a href="login.html" className="active">Login</a></li> 
                                      </ul>
                                  </li> 
                  <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                                      <ul role="menu" className="sub-menu">
                                          <li><a href="blog.html">Blog List</a></li>
                      <li><a href="blog-single.html">Blog Single</a></li>
                                      </ul>
                                  </li> 
                  <li><a href="404.html">404</a></li>
                  <li><a href="contact-us.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <section id="form">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-1">
            <div className="login-form">
              <h2>Login to your account</h2>
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <span>
                  <input type="checkbox" className="checkbox"></input>
                  Keep me signed in
                </span>
                <button type="submit" className="btn btn-default">Login</button>
              </form>
            </div>
          </div>
          <div className="col-sm-1">
            <h2 className="or">OR</h2>
          </div>
          <div className="col-sm-4">
            <div className="signup-form">
              <h2>New User Signup!</h2>
              <form action="#">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button type="submit" className="btn btn-default">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companyinfo">
                <h2><span>e</span>-shopper</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img src="images/home/iframe1.png" alt="" />
                    </div>
                    <div className="overlay-icon">
                      <i class="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              
              <div class="col-sm-3">
                <div class="video-gallery text-center">
                  <a href="#">
                    <div class="iframe-img">
                      <img src="images/home/iframe2.png" alt="" />
                    </div>
                    <div class="overlay-icon">
                      <i class="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              
              <div class="col-sm-3">
                <div class="video-gallery text-center">
                  <a href="#">
                    <div class="iframe-img">
                      <img src="images/home/iframe3.png" alt="" />
                    </div>
                    <div class="overlay-icon">
                      <i class="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
              
              <div class="col-sm-3">
                <div class="video-gallery text-center">
                  <a href="#">
                    <div class="iframe-img">
                      <img src="images/home/iframe4.png" alt="" />
                    </div>
                    <div class="overlay-icon">
                      <i class="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="address">
                <img src="images/home/map.png" alt="" />
                <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-widget">
        <div class="container">
          <div class="row">
            <div class="col-sm-2">
              <div class="single-widget">
                <h2>Service</h2>
                <ul class="nav nav-pills nav-stacked">
                  <li><a href="">Online Help</a></li>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">Order Status</a></li>
                  <li><a href="">Change Location</a></li>
                  <li><a href="">FAQ’s</a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="single-widget">
                <h2>Quock Shop</h2>
                <ul class="nav nav-pills nav-stacked">
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Mens</a></li>
                  <li><a href="">Womens</a></li>
                  <li><a href="">Gift Cards</a></li>
                  <li><a href="">Shoes</a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="single-widget">
                <h2>Policies</h2>
                <ul class="nav nav-pills nav-stacked">
                  <li><a href="">Terms of Use</a></li>
                  <li><a href="">Privecy Policy</a></li>
                  <li><a href="">Refund Policy</a></li>
                  <li><a href="">Billing System</a></li>
                  <li><a href="">Ticket System</a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="single-widget">
                <h2>About Shopper</h2>
                <ul class="nav nav-pills nav-stacked">
                  <li><a href="">Company Information</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Store Location</a></li>
                  <li><a href="">Affillate Program</a></li>
                  <li><a href="">Copyright</a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-3 col-sm-offset-1">
              <div class="single-widget">
                <h2>About Shopper</h2>
                <form action="#" class="searchform">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
                  <p>Get the most recent updates from <br />our site and be updated your self...</p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
            <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
          </div>
        </div>
      </div>
      
    </footer>
    
  
    
      <script src="js/jquery.js"></script>
    <script src="js/price-range.js"></script>
      <script src="js/jquery.scrollUp.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.prettyPhoto.js"></script>
      <script src="js/main.js"></script>
  </body>
  );
};

export default Login;
