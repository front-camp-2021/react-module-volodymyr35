import './App.css';
import CardList from './components/CardList';
import FiltersContainer from './components/FiltersContainer';
import { products } from './fixtures/products';

function App() {
  return (
    <div className="App">
      <FiltersContainer />
      <CardList data={products} />
    </div>
  );
}

export default App;
