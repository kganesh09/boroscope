import React from "react";
import "./AboutUs.css"; // Custom CSS (below)

const AboutUs = () => {
  return (
    <div className="container py-5 about-us-page">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-muted">
          Welcome to <strong>ShopMate</strong> – Your one-stop destination for quality shopping.
        </p>
      </div>

      <div className="row gy-5">
        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="card-title text-primary">Who We Are</h3>
              <p className="card-text">
                Founded in 2020, ShopMate is built on the belief that online shopping should be easy,
                trustworthy, and enjoyable. Our dedicated team works day and night to make that happen.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="card-title text-primary">Why Choose Us</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✔ Wide variety of products</li>
                <li className="list-group-item">✔ Secure payment gateway</li>
                <li className="list-group-item">✔ Superfast delivery</li>
                <li className="list-group-item">✔ 24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-secondary">Our Vision</h3>
        <p className="fs-5 text-muted">
          To provide a seamless and trustworthy shopping experience for every customer, every time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
