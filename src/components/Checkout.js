import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
        </div>
        </div>
      <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  );
}

export default Checkout;
