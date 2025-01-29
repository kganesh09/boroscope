import Carousel from 'react-bootstrap/Carousel';
import firstimg from './images/first.webp';
import secondimg from './images/second.webp';
import thirdimg from './images/third.webp';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is loaded

function ExampleCarouselImage({ text, altText }) {
  return <img src={text} alt={altText} className="d-block w-100" />;
}

function UncontrolledExample() {
  return (
    <Carousel controls={false} indicators={true}>
      {/* First Slide */}
      <Carousel.Item>
        <ExampleCarouselImage text={firstimg} altText="NTS500 PRO INSPECTION CAMERA - All-In-One 5-inch Tablet" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center h-100 px-5">
          <h3 className="fw-bold text-white">NTS500 PRO INSPECTION CAMERA</h3>
          <p className="text-white">
            All-In-One 5-inch Tablet w/ Rugged Build
          </p>
          <button className="btn btn-warning" onClick={() => alert("Redirecting to shop")}>
            Shop Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <ExampleCarouselImage text={secondimg} altText="Second slide showcasing product with descriptive text" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center h-100 px-5">
          <h3 className="fw-bold text-white">Second Slide Title</h3>
          <p className="text-white">
            Some descriptive text for the second slide.
          </p>
          <button className="btn btn-warning" onClick={() => alert("Learn more about the product")}>
            Learn More
          </button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <ExampleCarouselImage text={thirdimg} altText="Third slide displaying product with more details" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center h-100 px-5">
          <h3 className="fw-bold text-white">Third Slide Heading</h3>
          <p className="text-white">
            More details for the third slide.
          </p>
          <button className="btn btn-warning" onClick={() => alert("Explore the product")}>
            Explore Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
