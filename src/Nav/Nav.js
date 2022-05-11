import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logoRed.png";
import "./Nav.css";

const pages = ["Home", "TV Show", "Movies", "New & Popular", "My List"];
const icons = [faMagnifyingGlass, faBell];

function Nav() {
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="" />
        </Link>
        <div className="nav__box">
          <ul className="nav__link">
            {pages.map((page, index) => (
              <li key={index}>
                <Link to={`/${page}`} className="nav__link--item">
                  {page}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="nav__link">
            {icons.map((icon, index) => (
              <li key={index}>
                <a href={`/${icon}`} className="nav__link--item">
                  {<FontAwesomeIcon icon={icon} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
