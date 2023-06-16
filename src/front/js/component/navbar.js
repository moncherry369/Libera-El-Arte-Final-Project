import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import reactDom from "react-dom";
import { Dropdown } from "bootstrap";
import "../../img/lea-navbar-logo.jpg";
import "./navbar.css"

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <img className="" href="#top" 
            src="https://i.ibb.co/v3992Zz/lea-logo.jpg" 
            id="navbarImgLogo"/>
          </div>
          <h2 className="brand-text">Libera El Arte</h2>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="browse-nav-link">
              <span className="navbar-item" href="#">
                Browse Collections</span>
            </div>
            <div className="mission-nav-link">
              <span className="navbar-item" href="#">
                Our Mission</span>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="user-navbar-info">
                <img className="rounded-circle" src="https://placekitten.com/122" id="nav-profpic"/>
              </div>
              <a className="navbar-dropdown-link">Your Atelier</a>
              <div className="navbar-dropdown">
                <a className="navbar-item dropdown-item" href="#">Your creations</a>
                <a className="navbar-item dropdown-item" href="#">Beloved Works</a>
                <a className="navbar-item dropdown-item" href="#">Settings</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
