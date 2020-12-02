import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function Subtotal({ cart }) {
  function totalPrice(basket){
    let current = 0;
    for(var i=0; i<basket.length; i++)
    {
      current += parseInt(basket[i].price);
    }
    return current;
  }
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
        <strong>{totalPrice(basket)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"></input> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
