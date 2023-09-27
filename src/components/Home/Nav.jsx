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
    <nav>
      <ul className="navbar">
        <li>Home</li>
        <li>About</li>
        <li>
          <div className="dropdown">
            <button onClick={toggleSubMenu}>Services</button>
            {isSubMenuVisible && (
              <ul className="submenu">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            )}
          </div>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
