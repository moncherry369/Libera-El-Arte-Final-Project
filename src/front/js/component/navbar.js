import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import reactDom from "react-dom";
import { Dropdown } from "bootstrap";
import "../../img/lea-navbar-logo.jpg";
import "./navbar.css";
import Loginsignform from "./loginsignform";
import Userprofile from "./userprofile";
import Loginsignpop from "./loginsignpop";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [Loggedin, setLoggedin] = useState(true);
  // const frontendUrl = process.env.FRONTEND_URL

  const handleLoginChange = (event) => {
    setLoggedin(event.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        {/* this should take you to homepage */}
        <div className="navbar-brand">
          <div className="navbar-logo">
            <img
              className=""
              href="#top"
              src="https://i.ibb.co/v3992Zz/lea-logo.jpg"
              id="navbarImgLogo"
            />
          </div>
          <h2 className="brand-text">Libera El Arte</h2>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="browse-nav-link">
              <a className="navbar-item" href="/browse-collection">
                Browse Collection
              </a>
            </div>
            <div className="mission-nav-link">
              <a className="navbar-item" href="/">
                Our Mission
              </a>
            </div>
          </div>

          <div className="navbar-end">
            {store.token ? <Userprofile /> : <Loginsignpop />}
          </div>
        </div>
      </nav>
    </div>
  );
};
