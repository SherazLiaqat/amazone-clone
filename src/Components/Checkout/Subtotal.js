import React from "react";
import CurrencyFormat from "react-currency-format";
import './Checkout.css';
function Subtotal() {
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 items):<strong>0</strong>
            </p>
            <small className="Subtotal-gift">
              <input type="checkbox"/>This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
