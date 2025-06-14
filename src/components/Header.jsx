import React from "react";
import { FaBell } from "react-icons/fa";
import "../styles/Header.css";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <button onClick={toggleSidebar} className="menu-button">
        <IoMenu size={28} />
      </button>
      <div className="logo">
        <span className="highlight">Health</span>care.
      </div>
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
        <div className="right-side-avtar">
          <button className="user-avatar">👨🏻‍🦰</button>
          <MdAddBox className="add" size={34} />
        </div>
      </div>
    </header>
  );
}

export default Header;
