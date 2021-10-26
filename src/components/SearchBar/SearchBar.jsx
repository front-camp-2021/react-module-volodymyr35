import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" arial-label="search" />
      <button className="search-bar__btn">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
