import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // Optional for hover effects

const Services = () => {
  return (
    <div className="bg-white py-5">
      <div className="container text-center mb-5">
        <h1 className="fw-bold text-primary mb-3">Our Services</h1>
        <p className="text-muted lead">
          We offer a range of professional services to support your inspection and product needs.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-truck display-4 text-success mb-3"></i>
                <h5 className="card-title fw-semibold">Fast Delivery</h5>
                <p className="card-text text-muted">
                  We ensure quick and safe delivery of all borescope products to your location across India.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-tools display-4 text-primary mb-3"></i>
                <h5 className="card-title fw-semibold">Product Customization</h5>
                <p className="card-text text-muted">
                  Get tailor-made borescopes suited for automotive, industrial, or aviation inspection needs.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-headset display-4 text-warning mb-3"></i>
                <h5 className="card-title fw-semibold">Customer Support</h5>
                <p className="card-text text-muted">
                  Our team is ready to assist with installation, troubleshooting, and guidance for product usage.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-pc-display display-4 text-info mb-3"></i>
                <h5 className="card-title fw-semibold">Online Demo</h5>
                <p className="card-text text-muted">
                  Request a virtual product demonstration to see our borescopes in action before purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-gear display-4 text-danger mb-3"></i>
                <h5 className="card-title fw-semibold">Repair & Maintenance</h5>
                <p className="card-text text-muted">
                  We provide repair services and regular maintenance checks for selected products.
                </p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-wallet2 display-4 text-dark mb-3"></i>
                <h5 className="card-title fw-semibold">Secure Payments</h5>
                <p className="card-text text-muted">
                  Easy and secure payment methods including UPI, cards, and net banking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
