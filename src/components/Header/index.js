import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a href="/" className="Nav-brand-logo">
              Instagram
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
