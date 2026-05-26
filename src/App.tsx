import "./App.css";
import Header from "./components/common/Header/Header";
import Hero from "./components/features/Hero/Hero";
import FeaturedProducts from "./components/features/FeaturedProducts/FeaturedProducts";

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
