
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


function PaymentComponent(props){
   
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
         <div className="header_logo ">
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

      <div class="container login">
        <div class="row">
            <div class="col-lg-4 mb-lg-0 mb-3">
                <div class="card p-3">
                    <div class="img-box">
                        <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt=""></img>
                    </div>
                    <div class="number">
                        <label class="fw-bold" for="">**** **** **** 1060</label>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                        <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-3">
                <div class="card p-3">
                    <div class="img-box">
                        <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                            alt=""></img>
                    </div>
                    <div class="number">
                        <label class="fw-bold">**** **** **** 1060</label>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                        <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-3">
                <div class="card p-3">
                    <div class="img-box">
                        <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                            alt=""></img>
                    </div>
                    <div class="number">
                        <label class="fw-bold">**** **** **** 1060</label>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                        <small><span class="fw-bold">Name:</span><span>Kumar</span></small>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="card p-3">
                    <p class="mb-0 fw-bold h4">Payment Methods</p>
                </div>
            </div>
            <div class="col-12">
                <div class="card p-3">
                    <div class="card-body border p-0">
                        <p>
                            <a class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span class="fw-bold">PayPal</span>
                                <span class="fab fa-cc-paypal">
                                </span>
                            </a>
                        </p>
                        <div class="collapse p-3 pt-0" id="collapseExample">
                            <div class="row">
                                <div class="col-8">
                                    <p class="h4 mb-0">Summary</p>
                                    <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green">: Name of
                                            product</span></p>
                                    <p class="mb-0"><span class="fw-bold">Price:</span><span
                                            class="c-green">:$452.90</span></p>
                                    <p class="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                                        nihil neque
                                        quisquam aut
                                        repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab
                                        quis,
                                        iste harum ipsum hic, nemo qui!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body border p-0">
                        <p>
                            <a class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span class="fw-bold">Credit Card</span>
                                <span class="">
                                    <span class="fab fa-cc-amex"></span>
                                    <span class="fab fa-cc-mastercard"></span>
                                    <span class="fab fa-cc-discover"></span>
                                </span>
                            </a>
                        </p>
                        <div class="collapse show p-3 pt-0" id="collapseExample">
                            <div class="row">
                                <div class="col-lg-5 mb-lg-0 mb-3">
                                    <p class="h4 mb-0">Summary</p>
                                    <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green">: Name of
                                            product</span>
                                    </p>
                                    <p class="mb-0">
                                        <span class="fw-bold">Price:</span>
                                        <span class="c-green">:$452.90</span>
                                    </p>
                                    <p class="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                                        nihil neque
                                        quisquam aut
                                        repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab
                                        quis,
                                        iste harum ipsum hic, nemo qui!</p>
                                </div>
                                <div class="col-lg-7">
                                    <form action="" class="form">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" "></input>
                                                    <label for="" class="form__label">Card Number</label>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" "></input>
                                                    <label for="" class="form__label">MM / yy</label>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form__div">
                                                    <input type="password" class="form-control" placeholder=" "></input>
                                                    <label for="" class="form__label">cvv code</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" "></input>
                                                    <label for="" class="form__label">name on the card</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="btn btn-primary w-100">Sumbit</div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="btn btn-primary payment">
                    Make Payment
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
export default PaymentComponent;