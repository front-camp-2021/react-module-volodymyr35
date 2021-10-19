import { ReactComponent as Logo } from '../../icons/logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__content">
          <Logo />
          <h1>Online Store</h1>
        </div>
        <nav className="bread-crumbs">
          <a href="#">
            <i className="bi bi-house-door" />
          </a>
          <i className="bi bi-chevron-double-right" />
          <a href="#">eCommerce</a>
          <i className="bi bi-chevron-double-right" />
          <a className="active" href="#">
            Electronics
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
