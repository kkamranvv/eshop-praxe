import "./App.css";
import Header from "./components/common/Header/Header";
import ProductCard from "./components/common/ProductCard/ProductCard";
import FeaturedProducts from "./components/features/FeaturedProducts/FeaturedProducts";
import Hero from "./components/features/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <FeaturedProducts />
    </div>
  );
}

export default App;
