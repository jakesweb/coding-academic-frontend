/*
  ./components/Header.js
  header component for pages
*/
import React from "react";
import Link from "next/link";
import Logo from "../svgs/logo.svg";

const linkStyle = {
  textDecoration: "none"
};

const Header = () => (
  <header>
    <div className="fluid-container">
      <div className="logo-container">
        <img
          className="logo-image"
          src="/static/images/logo.png"
          alt="Coding Academic Logo"
        />
      </div>
    </div>
    <style jsx>{`
      .fluid-container {
        display: flex;
        align-items: center;
        height: 100px;
        width: 100%;
      }
      .logo-container {
        width: 30%;
      }
      .logo-image {
        width: 100px;
        height: 100px;
      }
    `}</style>
  </header>
);

export default Header;
