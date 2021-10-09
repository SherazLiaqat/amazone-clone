import React from "react";
import CurrencyFormat from "react-currency-format";
import './Checkout.css';
import { useStateValue } from "../Contextapi/StateProvider";
import { getBasketTotal } from "../Contextapi/Reducer";
function Subtotal() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="Subtotal-gift">
              <input type="checkbox"/>This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
