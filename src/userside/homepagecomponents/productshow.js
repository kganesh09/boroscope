import React, { useState } from "react";
import product1 from './images/productshow1.webp';
import product2 from './images/productshow2.webp';
import product3 from './images/productshow3.webp';
import product4 from './images/productshow4.webp';

const categories = [
  { id: 1, title: "Measuring Instruments", image: product1 },
  { id: 2, title: "Control Systems", image: product2 },
  { id: 3, title: "Weighing Equipment", image: product3 },
  { id: 4, title: "Laboratory Technology", image: product4 },
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
        <div className="col-md-8">
          <img
            src={activeImage}
            alt="Category Display"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
