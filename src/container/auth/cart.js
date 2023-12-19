
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


function CartComponent(props){
   
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

     
  <div class="container shopping_cart">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                  class="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>

        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  class="img-fluid rounded-3" alt="Cotton T-shirt"></img>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">Basic T-shirt</p>
                <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  class="form-control form-control-sm" />

                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">$499.00</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  class="img-fluid rounded-3" alt="Cotton T-shirt"></img>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">Basic T-shirt</p>
                <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  class="form-control form-control-sm" />

                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">$499.00</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  class="img-fluid rounded-3" alt="Cotton T-shirt"></img>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">Basic T-shirt</p>
                <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  class="form-control form-control-sm" />

                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">$499.00</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  class="img-fluid rounded-3" alt="Cotton T-shirt"></img>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">Basic T-shirt</p>
                <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  class="form-control form-control-sm" />

                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">$499.00</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="card mb-4">
          <div class="card-body p-4 d-flex flex-row">
            <div class="form-outline flex-fill">
              <input type="text" id="form1" class="form-control form-control-lg" />
              <label class="form-label" for="form1">Discound code</label>
            </div>
            <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div> */}

        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
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
export default CartComponent;