import React, { useState } from "react";
import './Nav.css';

const Nav = () => {
  // Define state to track submenu visibility
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  // Function to toggle submenu visibility
  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <nav className="menubar-bg-color py-12">
      <ul className="md:flex md:items-center md:justify-center">
        <li className="ms-6 text-lg cursor-pointer menubar-menu-text-color">Home</li>
        <li className="ms-6 text-lg cursor-pointer menubar-menu-text-color">About</li>
        <li>
          <div className="dropdown">
            <button onClick={toggleSubMenu} className="ms-6 text-lg menubar-menu-text-color">Services</button>
            {isSubMenuVisible && (
              <ul className="submenu">
                <li className="ms-6 cursor-pointer text-sm menubar-sub-menu-text-color">JavaScript</li>
                <li className="ms-6 cursor-pointer text-sm menubar-sub-menu-text-color">Python</li>
                <li className="ms-6 cursor-pointer text-sm menubar-sub-menu-text-color">MERN Stack</li>
              </ul>
            )}
          </div>
        </li>
        <li className="ms-6 text-lg cursor-pointer menubar-menu-text-color">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
