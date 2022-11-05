import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      
      <a className="menu-item" href="/">
        Menu
      </a>
      <a className="menu-item" href="/">
        Explore
      </a>
      <a className="menu-item" href="/">
        Signup
      </a>
    </Menu>
  );
};

export default BurgerMenu;
