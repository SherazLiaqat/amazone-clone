import React from 'react'
import { useStateValue } from '../Contextapi/StateProvider';
import './Checkout.css';

function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const RemoveFrombasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className="Checkout-product">
            <img className="Checkout-productimg" src={image}></img>
      <div  className="Checkout-productinfo">
<p className="Checkout-producttitle">{title}</p>
<p className="Checkout-productprice">
    <small>$</small>
    <strong>{price}</strong>
</p>
<div className="Checkout-productrating">
    {Array(rating)
    .fill().map(()=>(
        <p>🌟</p>
    ))}
</div>
<button onClick={RemoveFrombasket}>Remove from Basket</button>
      </div>
        </div>
    )
}

export default CheckoutProduct
