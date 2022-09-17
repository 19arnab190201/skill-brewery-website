import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='navBar'>
      <p className='logo'>Brand</p>
      <ul className='nav'>
        <li className='nav_item'>Home</li>
        <li className='nav_item'>About</li>
        <li className='nav_item'>Courses</li>
        <li className='nav_item'>Service</li>
        <li className='nav_item'>Help</li>
      </ul>
    </div>
  );
};

export default NavBar;
