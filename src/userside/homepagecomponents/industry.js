import React from "react";
import sony from "./images/brands/sony.svg"
import wonder from "./images/brands/wonderchef.svg"
import whirpool from "./images/brands/whirlpool.svg"
import greenchef from "./images/brands/greenchef.svg"
import samsung from "./images/brands/samsung.svg"
import indus from "./images/brands/indusvalley.svg"
import butterfly from "./images/brands/butterfly.svg"
import bosch from "./images/brands/bosch.svg"
import "bootstrap/dist/css/bootstrap.min.css";

const brands = [
  { name: "Sony", src: sony },
  { name: "Wonderchef", src: wonder },
  { name: "Whirlpool", src: whirpool },
  { name: "Greenchef", src: greenchef},
  { name: "Samsung", src: samsung },
  { name: "Indus Valley", src: indus },
  { name: "Butterfly", src: butterfly },
  { name: "Bosch", src: bosch },
];

const FeaturedBrands = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Top Featured Brand at Lotus</h2>
      <p className="text-center text-muted">
        Most Demanding &amp; Best Selling Electronic Brands
      </p>
      <div className="row text-center">
        {brands.map((brand, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <img
              src={brand.src}
              alt={brand.name}
              className="img-fluid brand-logo"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;
