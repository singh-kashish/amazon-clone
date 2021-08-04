import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Footer() {
  const [{ user }, dispatch] = useStateValue();
  const working =
    user?.uid === "hqg3zaQsePRl8T2FZ5fgs5ImZNw2" ? "active" : "disabled";
  const signInButtonColor = user ? "negative" : "positive";
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div id="feet" className="ui vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui stackable grid">
          <div className="four wide column chiz">
            <h4 className="ui">Contacts</h4>
            <div className="ui link list inverted">
              <a
                className="item"
                href="mailto: ks1147@srmist.edu.in"
                target="_blank"
                rel="noreferrer"
              >
                ks1147@srmist.edu.in
              </a>
            </div>
            <div className="ui link list inverted">
              <a
                className="item"
                href="mailto: singh.kashishw@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                singh.kashishw@gmail.com
              </a>
            </div>
          </div>

          <div className="four wide column chiz">
            <h4 className="ui">Network</h4>
            <div className="ui link list">
              <a
                href="https://www.linkedin.com/in/kashish-singh111/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="ui linkedin button">
                  <i className="linkedin icon"></i>
                  LinkedIn
                </button>
              </a>

              <a
                href="https://github.com/singh-kashish/amazon-clone"
                target="_blank"
                rel="noreferrer"
              >
                <button className="ui grey button">
                  <i className="github square icon"></i>
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <div className="six wide right floated column">
            <h4 className="ui">
              <a
                href="https://github.com/singh-kashish/amazon-clone"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                Rate the Project
              </a>
            </h4>
            <div className="ui" style={{ color: "gray" }}>
              Made using React / FireBase / Express{" "}
            </div>
            <div className="ui" style={{ color: "gray" }}>
              <Link
                to={
                  user?.uid === "hqg3zaQsePRl8T2FZ5fgs5ImZNw2" && "/product/new"
                }
              >
                <button className={`ui button ${working} button__up`}>
                  <i className="upload icon"></i>U
                </button>
              </Link>
              <Link to={!user && "/login"}>
                <button
                  onClick={handleAuthentication}
                  className={`ui button ${signInButtonColor}`}
                >
                  {user ? "Sign Out" : "Sign In"}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="section__fix ui section divider"></div>
        <Link to="/">
          <i
            className="footer__logo amazon icon large"
            style={{ color: "white" }}
          ></i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
