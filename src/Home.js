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
          <Product
            title="Samsung Galaxy M21"
            price={"13,999"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71dujTTJDZL._SY606_.jpg"
            }
            rating={4}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="Samsung Galaxy M21"
            price={"13,999"}
            image={
              "https://m.media-amazon.com/images/I/71vYqKHpkoL._AC_UY218_.jpg"
            }
            rating={4}
          ></Product>
          <Product
            title="
            KILLER
            Mini Backpack 12L Daypack "
            price={"355"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41OU3aHyF2L._SY300_.jpg"
            }
            rating={4}
          ></Product>
          <Product
            title="Bourge Men's Loire-63 Running Shoes "
            price={"479"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71vH7fMBGTL._UY500_.jpg"
            }
            rating={2}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            title="OnePlus Y Series 80 cm "
            price={"31,999"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SL1500_.jpg"
            }
            rating={5}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
