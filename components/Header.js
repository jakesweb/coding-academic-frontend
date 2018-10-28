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
      <nav>
        <ul className="nav-menu">
          <li>
            <Link href="/index">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a>Courses</a>
            </Link>
          </li>
        </ul>
      </nav>
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
      .nav-menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .nav-menu li {
        list-style: none;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 2em;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      a:hover {
        text-decoration: none;
        color: inherit;
      }
    `}</style>
  </header>
);

export default Header;
