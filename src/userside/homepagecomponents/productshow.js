import React, { useState } from "react";
import product1 from './images/industrial-boroscop.jpg';
import product2 from './images/artifical-boroscope.jpg';
import product3 from './images/rigid-boroscopo.jpg';
import product4 from './images/industral-microscope.jpg';

const categories = [
  { id: 1, title: "Industrial Borescope ", image: product1 },
  { id: 2, title: "Articulating Borescope", image: product2 },
  { id: 3, title: "Rigid Borescope ", image: product3 },
  { id: 4, title: "Industrial Microscope", image: product4 },
];

export default function Productshow() {
  const [activeImage, setActiveImage] = useState(categories[0].image);

  return (
    <div className="industry-solutions-container1">
      <div className="row">
        {/* Left Menu */}
        <div className="col-md-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => setActiveImage(category.image)}
              className={`p-3 border rounded mb-2 ${
                activeImage === category.image ? "bg-primary text-white" : "bg-light"
              }`}
              style={{ cursor: "pointer", transition: "background-color 0.3s" }}
            >
              {category.title}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <img
            src={activeImage}
            alt="Category Display"
            className="category-image"
          />
        </div>
      </div>
    </div>
  );
}
