import img_xiphone_14 from "../images/img_xiphone_14.png";
import illustration_xiphone from "../images/illustration_xiphone.png";
import { Fade } from "react-awesome-reveal";
function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <div className="main__info">
          <div className="main__content-info">
            <Fade cascade duration={1000}>
              <h1 className="main__title">
                Grab
                <span className="label label_rotated-r color_white background_5E1EE5 ">
                  50%
                </span>
                <br></br> Off Smartphone Collection
              </h1>
              <p className="main__description">
                Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi
                tellus vitae leo nunc.
              </p>
              <div className="main__content-notice">
                <img src={img_xiphone_14} alt="imagen de xhipone 14" />
                <h2>Xiphone 14 Edition</h2>
              </div>
            </Fade>
          </div>
        </div>
        <Fade delay={1400} duration={1200}>
          <div className="main__presentation">
            <div className="main__content-illustration">
              <img
                src={illustration_xiphone}
                alt="ilustración xhipone"
                className="main__illustration"
              />
              <div className="main__illustration-labels">
                <span className="label label_rotated-r background_white">
                  Highest
                </span>
                <span className="label label_rotated-l background_ffe921">
                  Quality
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </main>
  );
}

export default Main;
