import React, { useContext } from "react";
import { FaBagShopping } from "react-icons/fa6";
import "./Navbar.css";
import productsContext from "../../Contexts/ProductsContext";

function Navbar() {
  const contextData = useContext(productsContext);
    const totalProductsInCart = contextData.userCart.length;

  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
      <div className="container ">
        <a href="#" className="navbar-brand">
          7Star
        </a>
        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        <div className="bag-box">
          <a href="#" className="bag">
            <FaBagShopping
              className="text-white"
              onClick={() => {
                contextData.setIsShowCart(true);
              }}
            />
            <span className="bag-product-counter">{totalProductsInCart}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
