import './FilterItem.css';

function FilterItem({ title, name, value, checked, onChange }) {
  return (
    <li>
      <input
        className="custom-checkbox"
        type="checkbox"
        name={name}
        id={value}
        value={checked}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}>{title}</label>
    </li>
  );
}

export default FilterItem;
