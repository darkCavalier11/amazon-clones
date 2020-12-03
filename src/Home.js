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
            id="1"
            title="The Lean Startup"
            price={523}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            }
            rating={5}
          ></Product>
          <Product
            id="12"
            title="Samsung Galaxy M21"
            price={13999}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71dujTTJDZL._SY606_.jpg"
            }
            rating={4}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="Samsung Refrigrator"
            price={15749}
            image={
              "https://m.media-amazon.com/images/I/71vYqKHpkoL._AC_UY218_.jpg"
            }
            rating={4}
          ></Product>
          <Product
            id="1234"
            title="
            KILLER
            Mini Backpack 12L Daypack "
            price={355}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41OU3aHyF2L._SY300_.jpg"
            }
            rating={4}
          ></Product>
          <Product
            id="12345"
            title="Bourge Men's Loire-63 Running Shoes "
            price={479}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71vH7fMBGTL._UY500_.jpg"
            }
            rating={2}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id="123456"
            title="OnePlus Y Series 80 cm "
            price={31999}
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
