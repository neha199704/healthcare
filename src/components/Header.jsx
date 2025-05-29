import React from "react";
import { FaBell } from "react-icons/fa";
import "../styles/Header.css";
import { IoSearch } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="highlight">Health</span>care.
      </h1>
      <div className="center-content">
        <div className="search-container">
          <IoSearch className="search" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <button className="bell-button">
          <FaBell className="bell" />
        </button>
      </div>
      <div className="right-content">
        <button className="user-avatar">👨🏻‍🦰</button>
        <MdAddBox className="add" size={34} />
      </div>
    </header>
  );
}

export default Header;
