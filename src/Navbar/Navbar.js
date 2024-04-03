import React from "react";
import "./Navbar.css";
import logo from "./Xiaomi_logo.svg.png";
import searcch from "./bx-search.svg";
import user from "./bx-user.svg";
function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="navbar">
            <div className="a">
              <img className="a2" src={logo} alt="" />
              <a href="#">Phone</a>
              <a href="#">Smart Home</a>
              <a href="#">Life Style</a>
            </div>
            <div className="a">
              <a href="#">Discover</a>
              <a href="#">Support</a>
              <img src={searcch} alt="" />
              <img src={user} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
