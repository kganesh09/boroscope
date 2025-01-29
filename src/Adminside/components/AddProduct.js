import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <div>
          <label>Product Name:</label>
          <input type="text" placeholder="Enter product name" />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" placeholder="Enter price" />
        </div>
        <div>
          <label>Description:</label>
          <textarea placeholder="Enter product description"></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
