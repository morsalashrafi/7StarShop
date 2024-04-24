import React from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import products from "./data/products";
import { useState } from "react";
import Toast from "./components/Toast/Toast";
import Cart from "./components/Cart/Cart";
import productsContext from "./Contexts/ProductsContext";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <div>
      <productsContext.Provider
        value={{
          allProducts,
          userCart,
          setUserCart,
          isShowToast,
          setIsShowToast,
          isShowCart,
          setIsShowCart,
        }}
      >
        <Navbar />
        <Toast />
        <main className="pb-5">
          <div className="container container-fluid">
            <h1 className="text-center fs-1 main-title">All Products</h1>
            <ProductsSection />
          </div>
        </main>
        <Cart />
      </productsContext.Provider>
    </div>
  );
}

export default App;
