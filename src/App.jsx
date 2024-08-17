import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import UpperNavbar from './components/UpperNavbar';
import LowerNavbar from './components/LowerNavbar';
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { useState } from "react";
import HomeTab from "./components/HomeTab";
import ProductListProvider from "./store/main-store";
import CategoryListProvider from "./store/category-store";
import CartListProvider from "./store/cart-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <>
      <ProductListProvider>
        <CategoryListProvider>
          <CartListProvider>
            <UpperNavbar setSelectedTab={setSelectedTab}></UpperNavbar>
            <LowerNavbar setSelectedTab={setSelectedTab}></LowerNavbar>
            {selectedTab === "Home" && <HomeTab setSelectedTab={setSelectedTab} />}
            {selectedTab === "Specific Category" && <ProductList setSelectedTab={setSelectedTab}></ProductList>}
            {selectedTab === "Product Detail" && <ProductDetail setSelectedTab={setSelectedTab} />}
            {selectedTab === "Cart" && <Cart setSelectedTab={setSelectedTab} />}

            <Footer></Footer>
          </CartListProvider>
        </CategoryListProvider>
      </ProductListProvider>
    </>
  );
}

export default App;
