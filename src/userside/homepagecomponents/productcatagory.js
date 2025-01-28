import React from "react";
import professionalImg from "./images/proficient.webp";
import homeUseImg from "./images/home.webp";
import healthCareImg from "./images/industry.jpg";
import gunOutdoorImg from "./images/gun_and_outdoors.jpg";

const categories = [
  { id: 1, title: "PROFESSIONAL", image: professionalImg },
  { id: 2, title: "HOME USE", image: homeUseImg },
  { id: 3, title: "HEALTH CARE", image: healthCareImg },
  { id: 4, title: "GUN & OUTDOOR", image: gunOutdoorImg },
];

export default function ProductCategories() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">EXPLORE PRODUCTS IN DIFFERENT FIELDS</h2>
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-12 col-md-6 col-lg-3 mb-4">
            <div
              className="card border-0 text-center category-card"
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                borderRadius: "10px",
                position: "relative",
                transition: "transform 0.3s, opacity 0.3s",
              }}
            >
              <div
                className="card-body d-flex align-items-end justify-content-center overlay"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  height: "100%",
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  transition: "background 0.3s",
                }}
              >
                <h5 className="text-uppercase">{category.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
