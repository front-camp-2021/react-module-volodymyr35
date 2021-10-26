import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="pagination">
        <a href="#">
          <i className="bi bi-chevron-left" />
        </a>
        <span className="pagination__options">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#" className="active">
            6
          </a>
          <a href="#">7</a>
          <a href="#">8</a>
          <a href="#">9</a>
          <a href="#">10</a>
        </span>
        <a href="#">
          <i className="bi bi-chevron-right" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
