import { Link } from "react-router-dom";

function MainResults() {
  return (
    <div className="main-results">
      <div className="subtitle-with-button">
        <h3>7,618 results found</h3>

        <Link className="wishlist-btn" to="/wishlist">
          <i className="bi bi-heart" style={{ color: "#fff" }} />
        </Link>
      </div>
    </div>
  );
}

export default MainResults;
