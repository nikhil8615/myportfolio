import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Nikhil.jpg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (section) => {
    setMenu(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`container ${sticky ? "dark_nav" : ""}`}>
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <button className="nav_mob_open" onClick={toggleMenu}>
        <img src={menu_open} alt="Open Menu" />
      </button>
      <ul className={`nav_menu ${menuOpen ? "open" : ""}`}>
        <button className="nav_mob_close" onClick={toggleMenu}>
          <img src={menu_close} alt="Close Menu" />
        </button>
        <li>
          <AnchorLink className="anchor_link" href="#home">
            <p onClick={() => handleMenuItemClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor_link" offset={80} href="#about">
            <p onClick={() => handleMenuItemClick("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor_link" offset={80} href="#services">
            <p onClick={() => handleMenuItemClick("service")}>Service</p>
          </AnchorLink>
          {menu === "service" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor_link" offset={80} href="#work">
            <p onClick={() => handleMenuItemClick("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src={underline} alt="Underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor_link" offset={80} href="#contact">
            <button onClick={() => handleMenuItemClick("btn")} className="btn">
              Contact Me
            </button>
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
