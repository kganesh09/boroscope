import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; 

  const [selectedImage, setSelectedImage] = useState(product?.image1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-details-container">
      <div className="product-image-gallery">
        <img
          src={process.env.REACT_APP_API_URL + "/uploads/" + selectedImage}
          alt={product.productname}
          className="main-image"
        />
        <div className="image-thumbnails">
        {product.image1 && (
            <img
              src={process.env.REACT_APP_API_URL + "/uploads/" + product.image1}
              alt="thumbnail 2"
              className="thumbnail"
              onClick={() => handleThumbnailClick(product.image2)}
            />
          )}
          {product.image2 && (
            <img
              src={process.env.REACT_APP_API_URL + "/uploads/" + product.image2}
              alt="thumbnail 2"
              className="thumbnail"
              onClick={() => handleThumbnailClick(product.image2)}
            />
          )}
          {product.image3 && (
            <img
              src={process.env.REACT_APP_API_URL + "/uploads/" + product.image3}
              alt="thumbnail 3"
              className="thumbnail"
              onClick={() => handleThumbnailClick(product.image3)}
            />
          )}
          {product.image4 && (
            <img
              src={process.env.REACT_APP_API_URL + "/uploads/" + product.image4}
              alt="thumbnail 4"
              className="thumbnail"
              onClick={() => handleThumbnailClick(product.image4)}
            />
          )}
        </div>
      </div>

      <div className="product-details">
        <h1>{product.productname}</h1>
        <p>{product.productdescription}</p>
        <p><strong>Model Number:</strong> {product.modelnumber}</p>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
