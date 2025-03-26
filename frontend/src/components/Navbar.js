import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { SiJordan } from "react-icons/si"; // Jordan icon
import { GiConverseShoe } from "react-icons/gi"; // Converse shoe icon
import '../styles/Navbar.css';
import nikeLogo from "../assets/nike-logo.png";

function Navbar() {
    return (
        <>
            {/* Top utility navigation */}
            <div className="utility-nav">
                <div className="nav-left-icons">
                    <Link to="/jordan" className="icon-link">
                        <SiJordan className="navbar-icon" />
                    </Link>
                    <Link to="/converse" className="icon-link">
                        <GiConverseShoe className="navbar-icon" />
                    </Link>
                </div>
                <div className="utility-links">
                    <Link to="/store-finder">Find a Store</Link>
                    <span className="divider">|</span>
                    <Link to="/help">Help</Link>
                    <span className="divider">|</span>
                    <Link to="/join-us">Join Us</Link>
                    <span className="divider">|</span>
                    <Link to="/login">Sign In</Link>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="main-nav">
                {/* Left - Logo */}
                <div className="nav-left">
                    <Link to="/">
                        <img src={nikeLogo} alt="Nike" className="nike-logo"/>
                    </Link>
                </div>

                {/* Center - Category Links */}
                <div className="nav-center">
                    <Link to="/new" className="nav-link">New</Link>
                    <Link to="/men" className="nav-link">Men</Link>
                    <Link to="/women" className="nav-link">Women</Link>
                    <Link to="/kids" className="nav-link">Kids</Link>
                    <Link to="/jordan" className="nav-link">Jordan</Link>
                    <Link to="/sport" className="nav-link">Sport</Link>
                </div>

                {/* Right - Search and Icons */}
                <div className="nav-right">
                    <div className="search-container">
                        <input type="text" placeholder="Search" className="search-input" />
                        <button className="search-btn">
                            <FaSearch />
                        </button>
                    </div>
                    <Link to="/favorites" className="icon-link">
                        <FaHeart />
                    </Link>
                    <Link to="/cart" className="icon-link">
                        <FaShoppingCart />
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
