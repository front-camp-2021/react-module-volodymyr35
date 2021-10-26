import { ReactComponent as Logo } from "../../icons/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__content">
          <Logo />
          <h1>Online Store</h1>
        </div>
        <nav className="bread-crumbs">
          <Link to="/">
            <i className="bi bi-house-door" />
          </Link>
          <i className="bi bi-chevron-double-right" />
          <Link to="/wishlist">WishList</Link>
          <i className="bi bi-chevron-double-right" />
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
