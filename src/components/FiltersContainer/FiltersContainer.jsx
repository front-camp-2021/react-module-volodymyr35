import FiltersList from "../FiltersList";
import FiltersDivider from "../FiltersDivider";
import Button from "../Button";

import { categoryFilterConfig, brandFilterConfig } from "./config";
import "./FiltersContainer.css";

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
      <Button variant="fullWidth">Clear all filters</Button>
    </div>
  );
}

export default FiltersContainer;
