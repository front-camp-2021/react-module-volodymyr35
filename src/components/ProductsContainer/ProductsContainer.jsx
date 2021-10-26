import MainResults from '../MainResults';
import SearchBar from '../SearchBar';
import CardList from '../CardList';
import { products } from '../../fixtures/products';
import './ProductsContainer.css';

function ProductsContainer() {
  return (
    <div className="products">
      <MainResults />
      <SearchBar />
      <CardList data={products} />
    </div>
  );
}

export default ProductsContainer;
