import "./App.css";
import Portfolio from "./Components/Portfolio";
import ProductCard from "./Components/ProductsCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
      <Portfolio />
      <ProductCard />
      <Footer />
</div>
    
    </div>
  );
}

export default App;
