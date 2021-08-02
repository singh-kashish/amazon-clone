import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
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
            id={123456789}
            title={"Atomic Habits"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._AC_SX184_.jpg"
            }
            rating={5}
            price={19.89}
          />
          <Product
            id={123456788}
            title={
              "All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (Black)"
            }
            image={
              "https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY327_FMwebp_QL65_.jpg"
            }
            price={39.49}
            rating={4}
          />
          <Product
            id={123456787}
            title={"Apple Magic Mouse 2 (Wireless, Rechargable) - Silver"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/4185Yz21AHL._SL1000_.jpg"
            }
            price={120.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title={"Ikigai: The Japanese secret to a long and happy life"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
            }
            price={1.99}
            rating={4}
          />
          <Product
            title={"The Alchemist by Paulo Coelho"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
            }
            price={2.01}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | With Built-in Alexa (Dark Meteo Titanium) (2019 Model)"
            }
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81s0JxBkzRL._SL1500_.jpg"
            }
            price={10436.48}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
