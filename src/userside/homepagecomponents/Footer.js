import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Optional for extra styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-white">OPTIGASE</h4>
            <p className="text-muted">
              Your trusted source for reliable and affordable borescope inspection tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li><Link to="/service" className="text-muted text-decoration-none">Services</Link></li>
              <li><Link to="/product" className="text-muted text-decoration-none">Product</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold text-white">Contact Us</h5>
            <p className="text-muted mb-1"><i className="bi bi-geo-alt-fill me-2"></i>Chennai, India</p>
            <p className="text-muted mb-1"><i className="bi bi-envelope-fill me-2"></i>support@borescopebazaar.com</p>
            <p className="text-muted"><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://www.facebook.com" className="text-light"><i className="bi bi-facebook fs-5"></i></a>
              <a href="https://www.instagram.com" className="text-light"><i className="bi bi-instagram fs-5"></i></a>
              <a href="https://www.linkedin.com/" className="text-light"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="https://x.com/" className="text-light"><i className="bi bi-twitter fs-5"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center text-muted mb-0">© {new Date().getFullYear()} OPTIGASE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
