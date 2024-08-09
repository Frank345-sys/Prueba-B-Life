import default_image from "../images/default_image.png";
import shopping_cart from "../images/shopping-cart.png";
import { useState } from "react";

function Card({ title, price, description, rating, like }) {
  const [isLiked, setIsLiked] = useState(like);

  const handleLikeClick = async () => {
    setIsLiked(!isLiked);
  };

  return (
    <article className="product-card">
      <div className="product-card__content-image">
        <img
          alt="descripción del producto"
          src={default_image}
          className="product-card__image shimmer"
        />
        <button
          className="product-card__like"
          type="button"
          onClick={handleLikeClick}
        >
          <span className={`${isLiked ? "product-card__like_liked" : ""}`}>
            ❤︎
          </span>
        </button>
      </div>
      <div className="product-card__content-title">
        <h2 className="product-card__title">{title}</h2>
        <p className="product-card__price">{price}</p>
      </div>
      <p className="product-card__description">{description}</p>
      <div className="product-card__rating">
        <span className="color_04A904">★★★★★</span>{" "}
        <span className="">({rating})</span>
      </div>
      <button className="product-card__add-to-cart">
        <img src={shopping_cart} alt="logo carrito de compras" />
        Add to Cart
      </button>
    </article>
  );
}

export default Card;
