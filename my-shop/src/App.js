import './App.css';
import Product from './component/product/product';
import TopMenu from './component/top-menu/top-menu';
import Footer from './component/footer/footer';
import HomePage from './component/home-page/home-page';
import ProductPage from './component/product-page/product-page';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <Router>
      <TopMenu />
      <body>
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </body>
      <Footer />
    </Router>
  );
}

export default App;
