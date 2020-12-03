import userEvent from "@testing-library/user-event";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Postlockdown/E-learning/SHF/COOP_banners/v2/_V205954306_IN_Laptops_Study-from-home_WF_Rush_1500x300_2.jpg"
          alt=""
        ></img>
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckoutProduct>
          ))}
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
