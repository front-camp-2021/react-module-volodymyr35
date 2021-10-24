import FiltersContainer from "../components/FiltersContainer";
import ProductsContainer from "../components/ProductsContainer";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <div className="container">
      <FiltersContainer />
      <ProductsContainer />
    </div>
    <Footer />
  </>
);

export default Home;
