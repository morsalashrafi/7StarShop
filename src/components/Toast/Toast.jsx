import React, { useContext } from "react";
import productsContext from "./../../Contexts/ProductsContext";

function Toast() {
  const contextData = useContext(productsContext);
  return (
    <div
      className={`${
        contextData.isShowToast ? "show" : ""
      } toast align-items-center text-bg-primary border-0 m-4`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">
          The product has been successfully added to the shopping cart
        </div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          onClick={() => {
            contextData.setIsShowToast(false);
          }}
        ></button>
      </div>
    </div>
  );
}

export default Toast;
