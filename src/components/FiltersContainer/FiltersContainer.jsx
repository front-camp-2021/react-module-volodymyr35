import FiltersList from '../FiltersList';
import FiltersDivider from '../FiltersDivider';
import './FiltersContainer.css';
import { categoryFilterConfig, brandFilterConfig } from './config';

function FiltersContainer() {
  return (
    <div className="filters">
      <FiltersList title="Category" list={categoryFilterConfig} />
      <FiltersDivider />
      <FiltersList title="Brand" list={brandFilterConfig} />
    </div>
  );
}

export default FiltersContainer;
