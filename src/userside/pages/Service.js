import React from "react";
import "./AboutUs.css"; 

const services = [
  {
    title: "Product Categories",
    description: "Shop electronics, fashion, home decor, and more – all in one place.",
    icon: "bi bi-bag-check",
  },
  {
    title: "Fast Delivery",
    description: "Receive your orders quickly with our premium delivery partners.",
    icon: "bi bi-truck",
  },
  {
    title: "Secure Payment",
    description: "All transactions are encrypted and 100% safe.",
    icon: "bi bi-shield-lock",
  },
  {
    title: "24/7 Support",
    description: "We’re always here to help you anytime, anywhere.",
    icon: "bi bi-headset",
  },
];

const Services = () => {
  return (
    <div className="container py-5 services-page">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Services</h1>
        <p className="lead text-muted">We are committed to providing the best experience to our customers.</p>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm service-card text-center">
              <div className="card-body">
                <i className={`service-icon ${service.icon}`}></i>
                <h5 className="card-title mt-3">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
