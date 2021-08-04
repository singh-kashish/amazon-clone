import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const emptyBasket = () => {
    return (
      <>
        <h3>Your Amazon Basket is Empty</h3>
        <Link to="/">
          <span style={{ color: "#007185", textDecoration: "none" }}>
            Continue Shopping
          </span>
        </Link>
      </>
    );
  };
  const buildBasket = () => {
    return basket.map((item) => (
      <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
      />
    ));
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div className="checkout__left__belowImage">
          <h2 className="checkout__title">Shopping Cart</h2>
          {basket.length == 0 ? emptyBasket() : buildBasket()}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
