/*
  ./components/Nav.js
  navigation component for pages
*/
import React from "react";
import Link from "next/link";

const Nav = () => (
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
    <style jsx>{`
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
  </nav>
);

export default Nav;
