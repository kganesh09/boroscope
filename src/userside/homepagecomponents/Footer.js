import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Optional for extra styling

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
              <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold text-white">Contact Us</h5>
            <p className="text-muted mb-1"><i className="bi bi-geo-alt-fill me-2"></i>Chennai, India</p>
            <p className="text-muted mb-1"><i className="bi bi-envelope-fill me-2"></i>support@borescopebazaar.com</p>
            <p className="text-muted"><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-light"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter fs-5"></i></a>
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
