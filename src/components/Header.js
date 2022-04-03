import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiScissors2Fill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Header.css";
import Button from "./Button";
import CartButton from "./CartButton";

function Header() {
  const [click, setClick] = useState(false);
  const handleClickFn = () => {
    setClick(!click);
  };

  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    setButton(!(window.innerWidth <= 960));
  };

  useEffect(() => {
    showButton();
  }, [button]);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <NavLink className="navbar-logo" to="/">
              Shopping Cart
            </NavLink>
            <div className="menu-icon" onClick={handleClickFn}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to="/" className='nav-links'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/" className='nav-links'>
                            Login
                        </NavLink>
                    </li>
                    <CartButton/>
                    {/* <li className='nav-item'>
                       
                    </li> */}
                </ul>
                

          </div>
          {/* <div >
            <NavLink
              to="/home"
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              <RiScissors2Fill className="navbar-icon"></RiScissors2Fill>
              Bhavya Make Over Studio
            </NavLink>
            <div className="menu-icon" onClick={handleClickFn}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-links">
                  Services
                </NavLink>
              </li>
              <li className="nav-btn">
                {button ? (
                  <NavLink to="/sign-up" className="btn-NavLink">
                    <button>Contact Us</button>
                  </NavLink>
                ) : (
                  <NavLink to="/sign-up" className="btn-NavLink">
                    <button>
                      Contact Us
                    </button>
                  </NavLink>
                )}
              </li>
            </ul>
          </div> */}
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
