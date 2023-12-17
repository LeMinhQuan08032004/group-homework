
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


function NavComponent(props){
   
    return (
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
    )
}
export default NavComponent;