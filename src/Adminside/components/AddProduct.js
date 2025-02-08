import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    productname: "",
    productdescription: "",
    modelnumber: "",
  });

  const [images, setImages] = useState([null, null, null, null]); // 4 separate image states
  const [preview, setPreview] = useState([null, null, null, null]); // 4 separate preview images
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  // Refs for file inputs
  const fileInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection for each input field
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);

      const newPreview = [...preview];
      newPreview[index] = URL.createObjectURL(file);
      setPreview(newPreview);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    const data = new FormData();
    data.append("productname", formData.productname);
    data.append("productdescription", formData.productdescription);
    data.append("modelnumber", formData.modelnumber);

    // Append images (if selected)
    images.forEach((image, i) => {
      if (image) data.append("images", image);
    });

    try {
      const res = await axios.post(
        `${API_BASE_URL}/admin/ProductUpload`,
        data,
        { headers: {
          'Authorization': token ? `Bearer ${token}` : '', 
          'Content-Type': 'multipart/form-data'
        } }
      );
      setMessage(res.data.message);
      setMessageType("success"); // Success message
      setTimeout(() => {
        // Clear form and reset message after 2 seconds
        setFormData({
          productname: "",
          productdescription: "",
          modelnumber: "",
        });
        setImages([null, null, null, null]);
        setPreview([null, null, null, null]);
        setMessage("");
        setMessageType(""); // Reset message type

        // Reset file input fields manually
        fileInputRefs.forEach(ref => {
          if (ref.current) ref.current.value = "";
        });
      }, 2000);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/admin/login'); 
      }else{
        setMessage(error.response?.data?.error || "Upload failed");
        setMessageType("error"); // Error message
        setTimeout(() => {
          setMessage(""); // Clear message after 2 seconds
        }, 2000);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center">Upload Product</h2>

        {message && (
          <div
            className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}
            role="alert"
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="productname"
              className="form-control"
              placeholder="Enter product name"
              value={formData.productname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Product Description */}
          <div className="mb-3">
            <label className="form-label">Product Description</label>
            <textarea
              name="productdescription"
              className="form-control"
              rows="3"
              placeholder="Enter product description"
              value={formData.productdescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Model Number */}
          <div className="mb-3">
            <label className="form-label">Model Number</label>
            <input
              type="text"
              name="modelnumber"
              className="form-control"
              placeholder="Enter model number"
              value={formData.modelnumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image Upload - 4 Separate Inputs */}
          <div className="row">
            {[0, 1, 2, 3].map((index) => (
              <div className="col-md-3 col-sm-6 text-center" key={index}>
                <label className="form-label">Image {index + 1}</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                  ref={fileInputRefs[index]} // Add ref to reset the file input
                />
                {preview[index] && (
                  <img
                    src={preview[index]}
                    alt={`preview-${index}`}
                    className="img-thumbnail mt-2"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUpload;
