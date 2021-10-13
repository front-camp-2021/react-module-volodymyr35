import { useState } from 'react';
import FilterItem from '../FilterItem';
import './FiltersList.css';

function FiltersList({ title = '', list = [] }) {
  const [checkboxesState, setCheckboxesState] = useState(() => {
    return list.reduce((acc, curr) => {
      acc[curr.value] = curr.checked ?? false;
      return acc;
    }, {});
  });

  const checkboxHandler = (id) => {
    setCheckboxesState((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  return (
    <div className="filters__section">
      <h4 className="filters__title">{title}</h4>
      <ul className="filters__list">
        {list.map((item) => (
          <FilterItem
            {...item}
            key={item.value}
            checked={checkboxesState[item.value]}
            onChange={() => checkboxHandler(item.value)}
          />
        ))}
      </ul>
    </div>
  );
}

export default FiltersList;
