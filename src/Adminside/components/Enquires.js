import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  // Fetch enquiries data
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/admin/enquires`, {
          headers: {
            'Authorization': token ? `Bearer ${token}` : '', 
            'Content-Type': 'application/json'
          },
          params: { page, search, limit: 10 }
        });
        setEnquiries(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/admin/login'); 
        }
        console.error('Error fetching data: ', error);
      }finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [page, search, token, API_BASE_URL,navigate]);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1); 
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1); 
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Enquiries</h1>

      {/* Search Input */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name or email"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      {/* Table to Display Enquiries */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center">Loading...</td>
              </tr>
            ) : enquiries.length > 0 ? (
              enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.phonenumber}</td>
                  <td>{enquiry.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No enquiries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination justify-content-center'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Enquiries;
