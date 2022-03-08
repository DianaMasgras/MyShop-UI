import './App.css';
import Product from './component/product/product';
import TopMenu from './component/top-menu/top-menu';
import Footer from './component/footer/footer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import HomePage from './component/home-page/home-page';


function App() {
  return (
    <Router>
      <TopMenu/>
      <Footer/>

      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
