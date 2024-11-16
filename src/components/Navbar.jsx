import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import logo from "../logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

const Navbar = () => {
    const  {isSidebarOpen,   openSidebar, closeSidebar }= useGlobalContext()
  return (
    <nav className="nav-header" >
      <Link to="/"> 
        <img src={logo} className="nav-logo " alt="logo" />
      </Link>     
      <ul className={`nav-links ${isSidebarOpen ? 'show-links' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <Link to="/login">
      <button className="nav-btn" onClick={closeSidebar}>Login</button>
  </Link>
    <button className="nav-toggle" onClick={openSidebar}>
    {isSidebarOpen ? <FaTimes /> : <FaBars />}</button>
 
    </nav> 
     
  );
};

export default Navbar;
