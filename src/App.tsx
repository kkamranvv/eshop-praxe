import "./App.css";
import Header from "./components/common/Header/Header";
import Hero from "./components/features/Hero/Hero";
import FeaturedProducts from "./components/features/FeaturedProducts/FeaturedProducts";
import Footer from "./components/common/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
