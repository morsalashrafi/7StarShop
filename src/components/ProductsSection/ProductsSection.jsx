import React, { useContext } from "react";
import "./ProductsSection.css";
import products from "../../data/products";
import productsContext from "../../Contexts/ProductsContext";

function ProductsSection() {
  const contextData = useContext(productsContext);

  const addToCart = (product) => {
    contextData.setIsShowToast(true);
    setTimeout(() => {
      contextData.setIsShowToast(false);
    }, 2000);

    let isInUserCart = contextData.userCart.some(
      (bagPro) => bagPro.title === product.title
    );
    // console.log(isInUserCart)
    if (!isInUserCart) {
      let newUserCartProduct = {
        id: contextData.userCart.length + 1,
        title: product.title,
        price: product.price,
        img: product.img,
        count: 1,
      };

      contextData.setUserCart((prevProducts) => [
        ...prevProducts,
        newUserCartProduct,
      ]);
    } else {
      let userCart = [...contextData.userCart];
      //way1
      /*userCart.some((bagPro) => {
          if (bagPro.title === product.title) {
            bagPro.count += 1;
            return true;
          }
        });*/

      //way2
      let newUserCart = userCart.map((bagPro) => {
        if (bagPro.title === product.title) {
          bagPro.count += 1;
        }
        return bagPro;
      });
      contextData.setUserCart(newUserCart);
    }
  };

  return (
    <>
      {contextData.allProducts.map((ProductsSection, index) => (
        <div key={index} className="row justify-content-center mt-5">
          <h3 className="text-center">{ProductsSection.title}</h3>
          {ProductsSection.infos.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 clo-lg-4 col-ms-3 col-sm-6 mt-5"
            >
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="card-img-top w-75"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price} $</p>
                  <hr />
                  <a
                    href="#javascript"
                    className="btn btn-danger"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark m-3 m-lg-1 text-capitalize"
                  >
                    More Information
                  </a>
                  <p className="number">{product.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ProductsSection;
