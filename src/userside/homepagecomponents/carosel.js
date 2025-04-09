import Carousel from 'react-bootstrap/Carousel';
import firstimg from './images/first.png';
import secondimg from './images/second.png';
import thirdimg from './images/third.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExampleCarouselImage({ text, altText }) {
  return <img src={text} alt={altText} className="d-block w-100" />;
}

function UncontrolledExample() {
  return (
    <Carousel controls={false} indicators={true}>
      {/* First Slide */}
      <Carousel.Item>
        <ExampleCarouselImage text={firstimg} altText="NTS500 PRO INSPECTION CAMERA - All-In-One 5-inch Tablet" />
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <ExampleCarouselImage text={secondimg} altText="Second slide showcasing product with descriptive text" />
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <ExampleCarouselImage text={thirdimg} altText="Third slide displaying product with more details" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
