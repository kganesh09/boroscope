import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import payment from "./images/payment.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">E-cart</h5>
            <p>Your trusted destination for quality electronics and home appliances.</p>
            <div className="d-flex gap-3 mt-3 ms-4">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p>Subscribe to get updates and offers.</p>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  aria-label="Email"
                />
                <button className="btn btn-outline-light" type="submit">Subscribe</button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@e-cart.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123 Market Street, chennai, India</p>
          </div>
        </div>

        {/* Payment Logos */}
        <div className="text-center mt-4">
          <p className="mb-2 fw-bold">We Accept</p>
          <img
            src={payment}
            alt="Payment methods"
            className="img-fluid"
            style={{ maxHeight: "40px" }}
          />
        </div>

        <hr className="border-top border-light mt-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} E-cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
