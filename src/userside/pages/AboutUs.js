import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="bg-white py-5">
      <div className="container text-center mb-5">
        <h1 className="fw-bold text-primary mb-3">About Us</h1>
        <p className="text-muted lead">
          Empowering professionals with high-performance borescope inspection tools.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="row g-4">
          {/* Who We Are */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-person-circle display-4 text-primary mb-3"></i>
                <h5 className="card-title fw-semibold">Who We Are</h5>
                <p className="card-text text-muted">
                  A passionate team focused on delivering reliable, affordable, and high-quality borescopes tailored
                  for industry professionals.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-tools display-4 text-success mb-3"></i>
                <h5 className="card-title fw-semibold">What We Do</h5>
                <p className="card-text text-muted">
                  We build and deliver advanced inspection solutions with features like HD visuals, flexible scopes,
                  and seamless software integration.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="col-md-4">
            <div className="card h-100 shadow hover-effect border-0">
              <div className="card-body text-center">
                <i className="bi bi-star-fill display-4 text-warning mb-3"></i>
                <h5 className="card-title fw-semibold">Why Choose Us</h5>
                <p className="card-text text-muted">
                  Trusted by technicians across sectors, we provide excellent support, fast delivery, secure portals,
                  and user-friendly tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
