import './App.css';
import CardList from './components/CardList';
import FiltersList from './components/FiltersList';
import { products } from './fixtures/products';

const list = [
  {
    value: 'cell_phones',
    title: 'Cell phones',
  },
  {
    value: 'computers',
    checked: true,
    title: 'Computers & Tables',
  },
];

function App() {
  return (
    <div className="App">
      <FiltersList title="Category" list={list} />
      <CardList data={products} />
    </div>
  );
}

export default App;
