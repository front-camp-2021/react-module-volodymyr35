import Header from './components/Header';
import FiltersContainer from './components/FiltersContainer';
import ProductsContainer from './components/ProductsContainer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FiltersContainer />
        <ProductsContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
