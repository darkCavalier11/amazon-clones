import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Postlockdown/E-learning/SHF/COOP_banners/v2/_V205954306_IN_Laptops_Study-from-home_WF_Rush_1500x300_2.jpg"
          alt=""
        ></img>
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
          {/*Subtotal*/}
          <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
