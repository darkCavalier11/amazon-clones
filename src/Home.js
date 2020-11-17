import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Nokia/5.3/FB-BOB/14th-nov/V240911677_IN_WLME_Nokia_5.3_LP_Tall_hero_1500x600-2._CB417073423_.jpg"
          alt=""
        ></img>
        <div className="home__row">
          <Product
            title="The Lean Startup"
            price={523}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            }
            rating={5}
          ></Product>
          <Product></Product>
        </div>
        <div className="home__row">
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
        <div className="home__row">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
