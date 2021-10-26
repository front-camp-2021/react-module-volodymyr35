import FiltersList from '../FiltersList';
import FiltersDivider from '../FiltersDivider';
import { categoryFilterConfig, brandFilterConfig } from './config';
import './FiltersContainer.css';

function FiltersContainer() {
  return (
    <div className="aside">
      <div className="subtitle-with-button">
        <h3>Filters</h3>
        <button className="collapse-btn">
          <i className="bi bi-chevron-double-left" />
        </button>
      </div>
      <div className="filters">
        {/* <DoubleSlider/> */}
        <FiltersList title="Category" list={categoryFilterConfig} />
        <FiltersDivider />
        <FiltersList title="Brand" list={brandFilterConfig} />
      </div>
      <button className="filters__clear-all">Clear all filters</button>
    </div>
  );
}

export default FiltersContainer;
