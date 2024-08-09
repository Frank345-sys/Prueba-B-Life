import Card from "./Card";
import arrow_left from "../images/arrow-left.png";
import arrow_right from "../images/arrow-right.png";
import { products } from "../utils/variables";

function ArrivalDevice() {
  return (
    <section className="arrival-device">
      <div className="arrival-device__header">
        <h3 className="arrival-device__title">
          New <span className="color_5E1EE5">arrival</span> for you
        </h3>
        <div className="arrival-device__content-buttons">
          <button className="arrival-device__button arrival-device__button-border-black background_white">
            <img src={arrow_left} />
          </button>
          <button className="arrival-device__button background_AFE638">
            <img src={arrow_right} />
          </button>
        </div>
      </div>
      <div className="arrival-device__body">
        <ul className="arrival-device__list-devices">
          <li>
            <a
              href=""
              className="arrival-device__device-link-access color_black"
            >
              Computer & laptop{" "}
              <span className={`background_black color_white`}>15</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="arrival-device__device-link-access color_black"
            >
              Mobile & Phone{" "}
              <span className={`background_AFE638 color_black`}>35</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="arrival-device__device-link-access color_black"
            >
              Camara Imaging{" "}
              <span className={`background_5E1EE5 color_white`}>10</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="arrival-device__device-link-access color_black"
            >
              TV & Smart Box{" "}
              <span className={`background_F1F1F2 color_black`}>8</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="arrival-device__device-link-access color_black"
            >
              Home Appliance
              <span className={`background_ffe921 color_black`}>2</span>
            </a>
          </li>
        </ul>
        <div className="arrival-device__content-cards">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              rating={product.rating}
              like={product.like}
            ></Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArrivalDevice;
