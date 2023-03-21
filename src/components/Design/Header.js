import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import DropdownLinks from "./DropdownLinks";
const Header = () => {
  const [isOpen, setIsOpen]= useState(false);
  const handleHamburger = () => {
    setIsOpen(true);
  };
  const handleCloseMenu=()=>{
    setIsOpen(false);
  }

  return (
    <nav>
      <div className="mobile-header">
        {isOpen && <DropdownLinks onConfirm={handleCloseMenu}/>}
        <GiHamburgerMenu className="hamburger" onClick={handleHamburger} />
        <h1>room</h1>
      </div>

      <div className="desktop-header">
        <h1>room</h1>
        <ul className="desktop-list">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
