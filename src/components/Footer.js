import Logo from "./Logo";
import { footer_info } from "../utils/variables";
import logo from "../images/logo.png";

/*<Logo></Logo>*/

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__content">
        <div className="footer__contnet-logo">
          <img src={logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </p>
        </div>
        <div className="footer__content-info">
          {footer_info.map((footer_i, index) => (
            <div key={index} className={`footer__info ${footer_i.modifier}`}>
              <h4>{footer_i.title}</h4>
              {footer_i.access.map((access, index) => (
                <div key={index} className="access">
                  {access.logo === "" ? (
                    <a href={access.enlace} className="access__link">
                      {access.title}
                    </a>
                  ) : (
                    <a href={access.enlace} className="access__link">
                      <img src={access.logo} className="access__icon" />{" "}
                      {access.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
