import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
function Home() {
  // Scroll Functionality
  const [intervalId, setIntervalId] = useState(0);
  const scrollStep = (e) => {
    console.log(e);
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - e.escrollStepInPx);
  };

  const scrollToTop = (e) => {
    let intervalId = setInterval(scrollStep(e), e.delayInMs);
    setIntervalId({ intervalId: intervalId });
  };

  // If it blows up , starts from here =>  Didn't
  const [{ products }, dispatch] = useStateValue();
  const addToProducts = (doc) => {
    dispatch({
      type: "ADD_TO_PRODUCTS",
      item: {
        id: doc.id,
        title: doc.data().title,
        price: doc.data().price,
        rating: doc.data().rating,
        url: doc.data().url,
      },
    });
  };

  const fetchProducts = async () => {
    const citiesRef = db.collection("products");
    const snapshot = await citiesRef.get();
    snapshot.forEach((doc) => {
      addToProducts(doc);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // till here

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={products[0]?.id}
            title={products[0]?.title}
            image={products[0]?.url}
            rating={products[0]?.rating}
            price={products[0]?.price}
          />
          <Product
            id={products[1]?.id}
            title={products[1]?.title}
            image={products[1]?.url}
            rating={products[1]?.rating}
            price={products[1]?.price}
          />
          <Product
            id={products[2]?.id}
            title={products[2]?.title}
            image={products[2]?.url}
            rating={products[2]?.rating}
            price={products[2]?.price}
          />
        </div>
        <div className="home__row">
          <Product
            id={products[3]?.id}
            title={products[3]?.title}
            image={products[3]?.url}
            rating={products[3]?.rating}
            price={products[3]?.price}
          />
          <Product
            id={products[4]?.id}
            title={products[4]?.title}
            image={products[4]?.url}
            rating={products[4]?.rating}
            price={products[4]?.price}
          />
        </div>
        <div className="home__row">
          <Product
            id={products[5]?.id}
            title={products[5]?.title}
            image={products[5]?.url}
            rating={products[5]?.rating}
            price={products[5]?.price}
          />
        </div>
        <div className="home__row">
          <Product
            id={products[6]?.id}
            title={products[6]?.title}
            image={products[6]?.url}
            rating={products[6]?.rating}
            price={products[6]?.price}
          />
          <Product
            id={products[7]?.id}
            title={products[7]?.title}
            image={products[7]?.url}
            rating={products[7]?.rating}
            price={products[7]?.price}
          />
        </div>
        <div className="home__row">
          <Product
            id={products[8]?.id}
            title={products[8]?.title}
            image={products[8]?.url}
            rating={products[8]?.rating}
            price={products[8]?.price}
          />
          <Product
            id={products[9]?.id}
            title={products[9]?.title}
            image={products[9]?.url}
            rating={products[9]?.rating}
            price={products[9]?.price}
          />
          <Product
            id={products[10]?.id}
            title={products[10]?.title}
            image={products[10]?.url}
            rating={products[10]?.rating}
            price={products[10]?.price}
          />
        </div>
        <div className="home__row">
          <Product
            id={products[11]?.id}
            title={products[11]?.title}
            image={products[11]?.url}
            rating={products[11]?.rating}
            price={products[11]?.price}
          />
        </div>

        <button
          title="Back to top"
          className="scroll"
          onClick={(e) => {
            scrollToTop(e);
          }}
          style={{ zIndex: "1", marginTop: "10px" }}
          className="fluid ui teal button"
        >
          Back to Top <i className="chevron up icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Home;
