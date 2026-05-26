


import Contact from './pages/Contact/Contact'
import "./App.css";
import Header from "./components/common/Header/Header";
import FeaturedProducts from "./components/features/FeaturedProducts/FeaturedProducts";
import Hero from "./components/features/Hero/Hero";


function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Hero />


      <FeaturedProducts />

    </div>
  );
};

export default App;
