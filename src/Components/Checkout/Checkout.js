import React from "react";
import "./Checkout.css";
import ad from "../Asset/Images/ad.png";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={ad}></img>

        <div>
          <h2 className="checkout-title">Shopping basket</h2>
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
