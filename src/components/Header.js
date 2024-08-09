import logo from "../images/logo.png";
import arrow_down from "../images/arrow_down.png";
import { useState, useEffect, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Fade } from "react-awesome-reveal";

function Header() {
  const [openAndCloseMenu, setOpenAndCloseMenu] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    if (openAndCloseMenu) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [openAndCloseMenu]);

  const closeOrOpenNav = () => {
    setOpenAndCloseMenu(!openAndCloseMenu);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeOrOpenNav();
    }
  };

  return (
    <header className="header">
      <div className="header__content-pc">
        <Fade>
          <img className="header__logo" src={logo} alt="logo de la empresa" />
          <ul className="nav-bar-pc">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">EVENTS</a>
            </li>
            <li>
              <a href="#">COMPANY</a>
            </li>
          </ul>
          <div className="header__content-access">
            <a className="header__access-login" href="#">
              LOGIN
            </a>
            <a className="header__access-signup" href="#">
              Sign Up Now <img src={arrow_down} />
            </a>
          </div>
        </Fade>
      </div>

      <div className="header__content-movil">
        <button className="header__button-menu" onClick={closeOrOpenNav}>
          <SwitchTransition>
            <CSSTransition
              key={openAndCloseMenu}
              nodeRef={menuRef}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <i
                className={`bx ${openAndCloseMenu ? "bx-menu" : "bx-x"} `}
                ref={menuRef}
              ></i>
            </CSSTransition>
          </SwitchTransition>
        </button>
        <div
          className={`header__content-nav-bar-movil ${
            openAndCloseMenu
              ? ""
              : "header__content-nav-bar-movil_visibility-visible"
          }`}
          onClick={handleOutsideClick}
        >
          <ul
            className={`nav-bar-movil ${
              openAndCloseMenu ? "" : "nav-bar-movil_visibility-visible"
            }`}
          >
            <li>
              <img
                className="header__logo"
                src={logo}
                alt="logo de la empresa"
              />
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                PRICING
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                EVENTS
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  closeOrOpenNav();
                }}
              >
                COMPANY
              </a>
            </li>
            <li>
              <a className="header__access-login" href="#">
                LOGIN
              </a>
            </li>
            <li>
              <a className="header__access-signup" href="#">
                Sign Up Now <img src={arrow_down} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
