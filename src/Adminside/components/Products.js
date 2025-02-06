import React, { useState, useEffect, useCallback } from "react";
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import axios from "axios";
import {
  Table,
  Pagination,
  Form,
  Container,
  Image,
  Button,
  Modal,
} from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);

  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [imageFiles, setImageFiles] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem('adminToken');

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/ViewProducts`, {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '', 
          'Content-Type': 'application/json'
        },
        params: { page: currentPage, limit, search },
      });
      setProducts(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [currentPage, limit, search,API_BASE_URL,token]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);



  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:4000/api/products/${id}`);
        alert("Product deleted successfully.");
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setImageFiles({
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("productname", editProduct.productname);
    formData.append("productdescription", editProduct.productdescription);
    formData.append("modelnumber", editProduct.modelnumber);
    ["image1", "image2", "image3", "image4"].forEach((imageKey) => {
      if (imageFiles[imageKey]) {
        formData.append(imageKey, imageFiles[imageKey]);
      }
    });

    try {
      await axios.put(`http://localhost:4000/api/products/${editProduct.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product updated successfully.");
      setShowModal(false);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setImageFiles((prev) => ({ ...prev, [name]: files[0] }));
  };

  return (
    <Container>
      <h2 className="mt-4">Product Listing</h2>

      {/* Search Box */}
      <Form.Control
        type="text"
        placeholder="Search products by name, description, or model number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />

      {/* Product Table */}
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Images</th>
      <th>Product Name</th>
      <th>Description</th>
      <th>Model Number</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {products.length > 0 ? (
      products.map((product) => (
        <tr key={product.id}>
          <td>
            <Image
              src={API_BASE_URL + "/uploads/" + product.image1}
              alt={product.productname}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
          </td>
          <td>{product.productname}</td>
          <td>{product.productdescription}</td>
          <td>{product.modelnumber}</td>
          <td className="d-flex">
            <Button
              variant="primary"
              className="me-2"
              onClick={() => handleEdit(product)}
            >
              <PencilSquare />Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(product.id)}
            >
              <Trash />Delete
            </Button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="5" className="text-center">
          No products found
        </td>
      </tr>
    )}
  </tbody>
</Table>


      {/* Pagination */}
      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </Pagination>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editProduct && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="productname"
                  value={editProduct.productname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="productdescription"
                  value={editProduct.productdescription}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Model Number</Form.Label>
                <Form.Control
                  type="text"
                  name="modelnumber"
                  value={editProduct.modelnumber}
                  onChange={handleChange}
                />
              </Form.Group>
              {["image1", "image2", "image3", "image4"].map((imageKey, index) => (
                <Form.Group className="mb-3" key={imageKey}>
                  <Form.Label>Image {index + 1}</Form.Label>
                  <Image
                    src={API_BASE_URL + "/uploads/" + editProduct[imageKey]}
                    alt={`Preview ${imageKey}`}
                    style={{ width: "100px", height: "100px", objectFit: "cover", marginBottom: "10px" }}
                    thumbnail
                  />
                  <Form.Control
                    type="file"
                    name={imageKey}
                    onChange={handleFileChange}
                  />
                </Form.Group>
              ))}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductList;
