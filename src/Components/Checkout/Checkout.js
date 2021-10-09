import React from "react";
import "./Checkout.css";
import ad from "../Asset/Images/ad.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "../Contextapi/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>

        <div>
          <h2 className="checkout-title">Shopping basket</h2>
        {basket.map(item=>(
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
