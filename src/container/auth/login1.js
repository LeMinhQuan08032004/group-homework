
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


function LoginComponent(props){
   
    return (
        <body>
        <header className="header">
        <div className="header_conten ">
            <div className="header_icon_rebonsive">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="responsive">
      
      
                    <div className="responsive_ctn_all">
                        <a className="header_all_conten_1" href="#">ALL PRODUCT</a>
                    </div>
                    <div className="ctn_ul">
                        <ul className="napbar_ul_1 ">
      
                            <a className="napbar_ul_li_conten_1" href="#"><li className="napbar_ul_li_1">Home</li></a>
                            <a className="napbar_ul_li_conten_1" href="#"><li className="napbar_ul_li_1">Home</li></a>
                            <a className="napbar_ul_li_conten_1" href="#"><li className="napbar_ul_li_1">Home</li></a>
                            <a className="napbar_ul_li_conten_1" href="#"><li className="napbar_ul_li_1">Home</li></a>
                        </ul>
                    </div>
      
      
            </div>
         <div className="header_logo">
             <div className="header_logo_ctn_border">
                 <div className="header_logo_ctn">
                     <span className="header_logo1">HAPPY</span>
                     <span className="header_logo2">SHOPPING</span>
                 </div>
             </div>
         </div>
            <div className="header_all">
                <a className="header_all_conten" href="#">ALL PRODUCT</a>
            </div>
            <div className="header_seacher">
                <div className="header_seacher_ctn_btn">
                    <input className="header_seacher_ctn" type="text" placeholder="Seacher"></input>
                </div>
                <div className="header_seacher_btn_icon">
                    <button className="header_seacher_btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className="header_cart_use">
                <i className="fa-regular fa-user cart_icon"></i>
                <i className="fa-solid fa-cart-shopping cart_icon"></i>
      
            </div>
        </div>
          <div className="napbar">
              <div className="header_seacher_1">
                  <div className="header_seacher_ctn_btn">
                      <input className="header_seacher_ctn" type="text" placeholder="Seacher"></input>
                  </div>
                  <div className="header_seacher_btn_icon">
                      <button className="header_seacher_btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                  </div>
              </div>
              <ul className="napbar_ul ">
      
                  <a className="napbar_ul_li_conten" href="#"><li className="napbar_ul_li">Home</li></a>
                  <a className="napbar_ul_li_conten" href="#"><li className="napbar_ul_li">Home</li></a>
                  <a className="napbar_ul_li_conten" href="#"><li className="napbar_ul_li">Home</li></a>
                  <a className="napbar_ul_li_conten" href="#"><li className="napbar_ul_li">Home</li></a>
              </ul>
          </div>
      </header>

      <div className="container login">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Login </h2>
        
        <div className=" my-5">

          <form className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"></img>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name"></input>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password"></input>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" className="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>


<footer >
<div className="footer">
    <div className="footer_25">
        <span className="footer_conten">Customer support</span>
        <ul className="footer_25_ul">
            <a className="footer_25_ul_li" href="#"><li>Payment methods</li></a>
           <a className="footer_25_ul_li" href="#"> <li>Delivery policy</li></a>
        </ul>
    </div>
    <div className="footer_25">
        <span className="footer_conten">Purchase Policy</span>
        <ul className="footer_25_ul">
            <a className="footer_25_ul_li" href="#"><li>Exchange policy</li></a>
            <a className="footer_25_ul_li" href="#"><li>Return Policy</li></a>
            <a className="footer_25_ul_li" href="#"><li>Payment policy</li></a>
        </ul>
    </div>
    <div className="footer_25">
        <span className="footer_conten">Store Address - Contact</span>
        <ul className="footer_25_ul">
            <a className="footer_25_ul_li" href="#"><li>Contact Info</li></a>
            <a className="footer_25_ul_li" href="#"><li>Shop system</li></a>
            <a className="footer_25_ul_li" href="#"><li>Introduce</li></a>
            <a className="footer_25_ul_li" href="#"><li>News</li></a>
        </ul>
    </div>
    <div className="footer_25">
        <span className="footer_conten">Community</span>
        <ul className="footer_25_ul">
          <div className="footer_conten_flex">
              <i className="fa-solid fa-location-dot footer_icon"></i>
              <a className="footer_25_ul_li" href="#"><li>Store Address</li></a>
          </div>
          <div  className="footer_conten_flex">
              <i className="fa-solid fa-phone-volume footer_icon"></i>
              <a className="footer_25_ul_li" href="#"><li>(028) 36.222.000</li></a>
          </div>
          <div  className="footer_conten_flex">
              <i className="fa-brands fa-facebook footer_icon"></i>
              <a className="footer_25_ul_li" href="#"><li>Old Sailor </li></a>
          </div>
          <div  className="footer_conten_flex">
              <i className="fa-brands fa-instagram footer_icon"></i>
              <a className="footer_25_ul_li" href="#"><li>oldsailor.1984</li></a>
          </div>
          <div  className="footer_conten_flex">
              <i className="fa-brands fa-tiktok footer_icon"></i>
              <a className="footer_25_ul_li" href="#"><li>Tiktok</li></a>
          </div>

        </ul>
    </div>
</div>
</footer>
</body>
      
    )
}
export default LoginComponent;