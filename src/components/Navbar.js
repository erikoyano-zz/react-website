import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom';
import { Link } from "react-scroll";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoX, GoThreeBars } from "react-icons/go";
import { Button } from "./Button";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-logo"
          >
            Inspire Mom <HiOutlineLightBulb />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <GoX /> : <GoThreeBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ホーム
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                インスパイア・ママとは？
              </Link>
            </li>
            <li className="nav-item" >
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ブログ
              </Link>
            </li>
            
          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
