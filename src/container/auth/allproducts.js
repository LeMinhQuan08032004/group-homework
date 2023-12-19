
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


function AllProductsComponent(props){
   
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

      <div class="container-fluid d-flex justify-content-center shopping_cart">
  <div class="row mt-5">
    <div class="col-sm-3">
      <div class="card">
    <img src="https://imgur.com/edOjtEC.png" class="card-img-top" width="100%"></img>
    <div class="card-body pt-0 px-0">
      <div class="d-flex flex-row justify-content-between mb-0 px-3">
        <small class="text-muted mt-1">STARTING AT</small>
        <h6>&dollar;22,495&ast;</h6>
      </div>
      <hr class="mt-2 mx-3"></hr>
      <div class="d-flex flex-row justify-content-between px-3 pb-4">
        <div class="d-flex flex-column"><span class="text-muted">Fuel Efficiency</span><small class="text-muted">L/100KM&ast;</small></div>
        <div class="d-flex flex-column"><h5 class="mb-0">8.5/7.1</h5><small class="text-muted text-right">(city/Hwy)</small></div>
      </div>
      <div class="d-flex flex-row justify-content-between p-3 mid">
        <div class="d-flex flex-column"><small class="text-muted mb-1">ENGINE</small><div class="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img><div class="d-flex flex-column ml-1"><small class="ghj">1.4L MultiAir</small><small class="ghj">16V I-4 Turbo</small></div></div></div>
        <div class="d-flex flex-column"><small class="text-muted mb-2">HORSEPOWER</small><div class="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img><h6 class="ml-1">135 hp&ast;</h6></div></div>
      </div>
      <small class="text-muted key pl-3">Standard key Features</small>
      <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div>
      <small class="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
  </div>
    </div>
    <div class="col-sm-3">
      <div class="card">
    <img src="https://imgur.com/SKZolYE.png" class="card-img-top" width="100%"></img>
    <div class="card-body pt-0 px-0">
      <div class="d-flex flex-row justify-content-between mb-0 px-3">
        <small class="text-muted mt-1">STARTING AT</small>
        <h6>&dollar;22,495&ast;</h6>
      </div>
      <hr class="mt-2 mx-3"></hr>
      <div class="d-flex flex-row justify-content-between px-3 pb-4">
        <div class="d-flex flex-column"><span class="text-muted">Fuel Efficiency</span><small class="text-muted">L/100KM&ast;</small></div>
        <div class="d-flex flex-column"><h5 class="mb-0">8.5/7.1</h5><small class="text-muted text-right">(city/Hwy)</small></div>
      </div>
      <div class="d-flex flex-row justify-content-between p-3 mid">
        <div class="d-flex flex-column"><small class="text-muted mb-1">ENGINE</small><div class="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img><div class="d-flex flex-column ml-1"><small class="ghj">1.4L MultiAir</small><small class="ghj">16V I-4 Turbo</small></div></div></div>
        <div class="d-flex flex-column"><small class="text-muted mb-2">HORSEPOWER</small><div class="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img><h6 class="ml-1">135 hp&ast;</h6></div></div>
      </div>
      <small class="text-muted key pl-3">Standard key Features</small>
      <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div>
      <small class="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
  </div>
    </div>
  <div class="col-sm-3">
    <div class="card">
    <img src="https://imgur.com/gUQNKPd.png" class="card-img-top" width="100%"></img>
    <div class="card-body pt-0 px-0">
      <div class="d-flex flex-row justify-content-between mb-0 px-3">
        <small class="text-muted mt-1">STARTING AT</small>
        <h6>&dollar;22,495&ast;</h6>
      </div>
      <hr class="mt-2 mx-3"></hr>
      <div class="d-flex flex-row justify-content-between px-3 pb-4">
        <div class="d-flex flex-column"><span class="text-muted">Fuel Efficiency</span><small class="text-muted">L/100KM&ast;</small></div>
        <div class="d-flex flex-column"><h5 class="mb-0">8.5/7.1</h5><small class="text-muted text-right">(city/Hwy)</small></div>
      </div>
      <div class="d-flex flex-row justify-content-between p-3 mid">
        <div class="d-flex flex-column"><small class="text-muted mb-1">ENGINE</small><div class="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img><div class="d-flex flex-column ml-1"><small class="ghj">1.4L MultiAir</small><small class="ghj">16V I-4 Turbo</small></div></div></div>
        <div class="d-flex flex-column"><small class="text-muted mb-2">HORSEPOWER</small><div class="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img><h6 class="ml-1">135 hp&ast;</h6></div></div>
      </div>
      <small class="text-muted key pl-3">Standard key Features</small>
      <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div>
      <small class="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
  </div>
    </div>
    

    <div class="col-sm-3">
    <div class="card">
    <img src="https://imgur.com/gUQNKPd.png" class="card-img-top" width="100%"></img>
    <div class="card-body pt-0 px-0">
      <div class="d-flex flex-row justify-content-between mb-0 px-3">
        <small class="text-muted mt-1">STARTING AT</small>
        <h6>&dollar;22,495&ast;</h6>
      </div>
      <hr class="mt-2 mx-3"></hr>
      <div class="d-flex flex-row justify-content-between px-3 pb-4">
        <div class="d-flex flex-column"><span class="text-muted">Fuel Efficiency</span><small class="text-muted">L/100KM&ast;</small></div>
        <div class="d-flex flex-column"><h5 class="mb-0">8.5/7.1</h5><small class="text-muted text-right">(city/Hwy)</small></div>
      </div>
      <div class="d-flex flex-row justify-content-between p-3 mid">
        <div class="d-flex flex-column"><small class="text-muted mb-1">ENGINE</small><div class="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img><div class="d-flex flex-column ml-1"><small class="ghj">1.4L MultiAir</small><small class="ghj">16V I-4 Turbo</small></div></div></div>
        <div class="d-flex flex-column"><small class="text-muted mb-2">HORSEPOWER</small><div class="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img><h6 class="ml-1">135 hp&ast;</h6></div></div>
      </div>
      <small class="text-muted key pl-3">Standard key Features</small>
      <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div>
      <small class="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
    </div>
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
export default AllProductsComponent;