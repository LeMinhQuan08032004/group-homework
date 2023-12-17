
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


function FooterComponent(props){
   
    return (
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
    )
}
export default FooterComponent;