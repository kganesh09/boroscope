import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // 🔹 Get product from state

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <h1>{product.productname}</h1>
      <img src={process.env.REACT_APP_API_URL + "/uploads/" + product.image1} alt={product.productname} />
      <p>{product.productdescription}</p>
      <p><strong>Model Number:</strong> {product.modelnumber}</p>
      <div className="images">
        {product.image2 && <img src={process.env.REACT_APP_API_URL + "/uploads/" + product.image2} alt="2" />}
        {product.image3 && <img src={process.env.REACT_APP_API_URL + "/uploads/" + product.image3} alt="3" />}
        {product.image4 && <img src={process.env.REACT_APP_API_URL + "/uploads/" + product.image4} alt="4" />}
      </div>
    </div>
  );
};

export default ProductDetails;
