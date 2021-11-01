import { useDispatch } from "react-redux";
import { addItem, toggleItem } from "../../redux/wishlistReducer";
import "./Card.css";

function Card({ item = {} }) {
  const { price, rating, category, title, images = [] } = item;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__inner" data-element="body">
        <div className="card__img">
          <img src={images[0]} alt="product" />
        </div>
        <div className="card__details">
          <div className="card__rate-and-price">
            <button className="card__product--rate">
              {rating}&nbsp;
              <i className="bi bi-star"></i>
            </button>
            <span className="card__price">₴{price}</span>
          </div>
          <h4 className="card__title">{category}</h4>
          <p className="card__info">{title}</p>
        </div>
      </div>
      <div className="card__actions">
        <button
          className="card__btn"
          onClick={() => dispatch(toggleItem(item))}
        >
          <i className="bi bi-heart os-product-wish-icon"></i>&nbsp;Wishlist
        </button>
        <button className="card__btn card__btn--primary">
          <i className="bi bi-box-seam os-product-shopping-bag"></i>&nbsp;Add to
          cart
        </button>
      </div>
    </div>
  );
}

export default Card;
